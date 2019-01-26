#include "pch.h"
#include "DeviceResources.h"
#include "DirectXHelper.h"

using namespace DirectX;
using namespace Microsoft::WRL;
using namespace Windows::Foundation;
using namespace Windows::Graphics::Display;
using namespace Windows::UI::Core;
using namespace Windows::UI::Xaml::Controls;
using namespace Platform;

namespace DisplayMetrics
{
	// 고해상도 디스플레이는 렌더링하는 데 많은 GPU 및 배터리 전원이 필요할 수 있습니다.
	// 예를 들어 고해상도 휴대폰의 게임에서 고화질로 초당 60프레임을 렌더링하려는
	// 경우 짧은 배터리 수명으로 인해 문제가 발생할 수 있습니다.
	// 모든 플랫폼 및 폼 팩터에서 고화질로 렌더링하는 결정은
	// 신중하게 내려야 합니다.
	static const bool SupportHighResolutions = false;

	// “고해상도” 디스플레이를 정의하는 기본 임계값입니다. 임계값을 초과하거나
	// SupportHighResolutions가 false인 경우 크기가 50%로
	//줄어듭니다.
	static const float DpiThreshold = 192.0f;		// 표준 데스크톱 디스플레이의 200%입니다.
	static const float WidthThreshold = 1920.0f;	// 너비가 1080p입니다.
	static const float HeightThreshold = 1080.0f;	// 높이가 1080p입니다.
};

// 화면 회전 계산에 사용되는 상수입니다.
namespace ScreenRotation
{
	// 0도 Z 회전
	static const XMFLOAT4X4 Rotation0(
		1.0f, 0.0f, 0.0f, 0.0f,
		0.0f, 1.0f, 0.0f, 0.0f,
		0.0f, 0.0f, 1.0f, 0.0f,
		0.0f, 0.0f, 0.0f, 1.0f
		);

	// 90도 Z 회전
	static const XMFLOAT4X4 Rotation90(
		0.0f, 1.0f, 0.0f, 0.0f,
		-1.0f, 0.0f, 0.0f, 0.0f,
		0.0f, 0.0f, 1.0f, 0.0f,
		0.0f, 0.0f, 0.0f, 1.0f
		);

	// 180도 Z 회전
	static const XMFLOAT4X4 Rotation180(
		-1.0f, 0.0f, 0.0f, 0.0f,
		0.0f, -1.0f, 0.0f, 0.0f,
		0.0f, 0.0f, 1.0f, 0.0f,
		0.0f, 0.0f, 0.0f, 1.0f
		);

	// 270도 Z 회전
	static const XMFLOAT4X4 Rotation270(
		0.0f, -1.0f, 0.0f, 0.0f,
		1.0f, 0.0f, 0.0f, 0.0f,
		0.0f, 0.0f, 1.0f, 0.0f,
		0.0f, 0.0f, 0.0f, 1.0f
		);
};

// DeviceResources의 생성자입니다.
DX::DeviceResources::DeviceResources(DXGI_FORMAT backBufferFormat, DXGI_FORMAT depthBufferFormat) :
	m_currentFrame(0),
	m_screenViewport(),
	m_rtvDescriptorSize(0),
	m_fenceEvent(0),
	m_backBufferFormat(backBufferFormat),
	m_depthBufferFormat(depthBufferFormat),
	m_fenceValues{},
	m_d3dRenderTargetSize(),
	m_outputSize(),
	m_logicalSize(),
	m_nativeOrientation(DisplayOrientations::None),
	m_currentOrientation(DisplayOrientations::None),
	m_dpi(-1.0f),
	m_effectiveDpi(-1.0f),
	m_deviceRemoved(false)
{
	CreateDeviceIndependentResources();
	CreateDeviceResources();
}

// Direct3D 장치에 종속되지 않은 리소스를 구성합니다.
void DX::DeviceResources::CreateDeviceIndependentResources()
{
}

// Direct3D 장치를 구성하고 해당 장치에 대한 핸들 및 장치 컨텍스트를 저장합니다.
void DX::DeviceResources::CreateDeviceResources()
{
#if defined(_DEBUG)
	// 프로젝트가 디버그 빌드 중인 경우 SDK 레이어를 통한 디버깅이 가능하도록 설정하세요.
	{
		ComPtr<ID3D12Debug> debugController;
		if (SUCCEEDED(D3D12GetDebugInterface(IID_PPV_ARGS(&debugController))))
		{
			debugController->EnableDebugLayer();
		}
	}
#endif

	DX::ThrowIfFailed(CreateDXGIFactory1(IID_PPV_ARGS(&m_dxgiFactory)));

	ComPtr<IDXGIAdapter1> adapter;
	GetHardwareAdapter(&adapter);

	// Direct3D 12 API 장치 개체를 만듭니다.
	HRESULT hr = D3D12CreateDevice(
		adapter.Get(),					// 하드웨어 어댑터입니다.
		D3D_FEATURE_LEVEL_11_0,			// 이 앱이 지원할 수 있는 최대 기능 수준입니다.
		IID_PPV_ARGS(&m_d3dDevice)		// 만들어진 Direct3D 장치를 반환합니다.
		);

#if defined(_DEBUG)
	if (FAILED(hr))
	{
		// 초기화에 실패하면 WARP 장치로 대체됩니다.
		// WARP에 대한 자세한 내용은 다음을 참조하세요. 
		// https://go.microsoft.com/fwlink/?LinkId=286690

		ComPtr<IDXGIAdapter> warpAdapter;
		DX::ThrowIfFailed(m_dxgiFactory->EnumWarpAdapter(IID_PPV_ARGS(&warpAdapter)));

		hr = D3D12CreateDevice(warpAdapter.Get(), D3D_FEATURE_LEVEL_11_0, IID_PPV_ARGS(&m_d3dDevice));
	}
#endif

	DX::ThrowIfFailed(hr);

	// 명령 큐를 만듭니다.
	D3D12_COMMAND_QUEUE_DESC queueDesc = {};
	queueDesc.Flags = D3D12_COMMAND_QUEUE_FLAG_NONE;
	queueDesc.Type = D3D12_COMMAND_LIST_TYPE_DIRECT;

	DX::ThrowIfFailed(m_d3dDevice->CreateCommandQueue(&queueDesc, IID_PPV_ARGS(&m_commandQueue)));
	NAME_D3D12_OBJECT(m_commandQueue);

	// 렌더링 대상 뷰와 깊이 스텐실 뷰에 대한 설명자 힙을 만듭니다.
	D3D12_DESCRIPTOR_HEAP_DESC rtvHeapDesc = {};
	rtvHeapDesc.NumDescriptors = c_frameCount;
	rtvHeapDesc.Type = D3D12_DESCRIPTOR_HEAP_TYPE_RTV;
	rtvHeapDesc.Flags = D3D12_DESCRIPTOR_HEAP_FLAG_NONE;
	DX::ThrowIfFailed(m_d3dDevice->CreateDescriptorHeap(&rtvHeapDesc, IID_PPV_ARGS(&m_rtvHeap)));
	NAME_D3D12_OBJECT(m_rtvHeap);

	m_rtvDescriptorSize = m_d3dDevice->GetDescriptorHandleIncrementSize(D3D12_DESCRIPTOR_HEAP_TYPE_RTV);

	D3D12_DESCRIPTOR_HEAP_DESC dsvHeapDesc = {};
	dsvHeapDesc.NumDescriptors = 1;
	dsvHeapDesc.Type = D3D12_DESCRIPTOR_HEAP_TYPE_DSV;
	dsvHeapDesc.Flags = D3D12_DESCRIPTOR_HEAP_FLAG_NONE;
	ThrowIfFailed(m_d3dDevice->CreateDescriptorHeap(&dsvHeapDesc, IID_PPV_ARGS(&m_dsvHeap)));
	NAME_D3D12_OBJECT(m_dsvHeap);

	for (UINT n = 0; n < c_frameCount; n++)
	{
		DX::ThrowIfFailed(
			m_d3dDevice->CreateCommandAllocator(D3D12_COMMAND_LIST_TYPE_DIRECT, IID_PPV_ARGS(&m_commandAllocators[n]))
			);
	}

	// 동기화 개체를 만듭니다.
	DX::ThrowIfFailed(m_d3dDevice->CreateFence(m_fenceValues[m_currentFrame], D3D12_FENCE_FLAG_NONE, IID_PPV_ARGS(&m_fence)));
	m_fenceValues[m_currentFrame]++;

	m_fenceEvent = CreateEvent(nullptr, FALSE, FALSE, nullptr);
	if (m_fenceEvent == nullptr)
	{
		DX::ThrowIfFailed(HRESULT_FROM_WIN32(GetLastError()));
	}
}

// 창 크기가 변경될 때마다 이러한 리소스를 다시 만들어야 합니다.
void DX::DeviceResources::CreateWindowSizeDependentResources()
{
	// 모든 이전 GPU 작업이 완료될 때까지 기다립니다.
	WaitForGpu();

	// 이전 창 크기 관련 콘텐츠를 지우고 추적된 fence 값을 업데이트합니다.
	for (UINT n = 0; n < c_frameCount; n++)
	{
		m_renderTargets[n] = nullptr;
		m_fenceValues[n] = m_fenceValues[m_currentFrame];
	}

	UpdateRenderTargetSize();

	// 스왑 체인의 너비와 높이는 창의 가로 방향 너비 및 높이를
	// 기준으로 해야 합니다. 창이 기준 방향이 아닌 경우에는
	// 치수를 반대로 해야 합니다.
	DXGI_MODE_ROTATION displayRotation = ComputeDisplayRotation();

	bool swapDimensions = displayRotation == DXGI_MODE_ROTATION_ROTATE90 || displayRotation == DXGI_MODE_ROTATION_ROTATE270;
	m_d3dRenderTargetSize.Width = swapDimensions ? m_outputSize.Height : m_outputSize.Width;
	m_d3dRenderTargetSize.Height = swapDimensions ? m_outputSize.Width : m_outputSize.Height;

	UINT backBufferWidth = lround(m_d3dRenderTargetSize.Width);
	UINT backBufferHeight = lround(m_d3dRenderTargetSize.Height);

	if (m_swapChain != nullptr)
	{
		// 스왑 체인이 이미 존재할 경우 크기를 조정합니다.
		HRESULT hr = m_swapChain->ResizeBuffers(c_frameCount, backBufferWidth, backBufferHeight, m_backBufferFormat, 0);

		if (hr == DXGI_ERROR_DEVICE_REMOVED || hr == DXGI_ERROR_DEVICE_RESET)
		{
			// 어떤 이유로든 장치가 제거된 경우 새 장치와 스왑 체인을 만들어야 합니다.
			m_deviceRemoved = true;

			// 이 메서드를 계속 실행하지 마세요. DeviceResources가 제거되고 다시 만들어집니다.
			return;
		}
		else
		{
			DX::ThrowIfFailed(hr);
		}
	}
	else
	{
		// 그렇지 않으면 기존 Direct3D 장치와 동일한 어댑터를 사용하여 새 항목을 만듭니다.
		DXGI_SCALING scaling = DisplayMetrics::SupportHighResolutions ? DXGI_SCALING_NONE : DXGI_SCALING_STRETCH;
		DXGI_SWAP_CHAIN_DESC1 swapChainDesc = {};

		swapChainDesc.Width = backBufferWidth;						// 창의 크기를 맞춥니다.
		swapChainDesc.Height = backBufferHeight;
		swapChainDesc.Format = m_backBufferFormat;
		swapChainDesc.Stereo = false;
		swapChainDesc.SampleDesc.Count = 1;							// 다중 샘플링을 사용하지 않습니다.
		swapChainDesc.SampleDesc.Quality = 0;
		swapChainDesc.BufferUsage = DXGI_USAGE_RENDER_TARGET_OUTPUT;
		swapChainDesc.BufferCount = c_frameCount;					// 3중 버퍼링을 사용하여 대기 시간을 최소화합니다.
		swapChainDesc.SwapEffect = DXGI_SWAP_EFFECT_FLIP_DISCARD;	// 모든 Windows 유니버설 앱은 _FLIP_ SwapEffects를 사용해야 합니다.
		swapChainDesc.Flags = 0;
		swapChainDesc.Scaling = scaling;
		swapChainDesc.AlphaMode = DXGI_ALPHA_MODE_IGNORE;

		ComPtr<IDXGISwapChain1> swapChain;
		DX::ThrowIfFailed(
			m_dxgiFactory->CreateSwapChainForCoreWindow(
				m_commandQueue.Get(),								// 스왑 체인에는 DirectX 12의 명령 큐에 대한 참조가 필요합니다.
				reinterpret_cast<IUnknown*>(m_window.Get()),
				&swapChainDesc,
				nullptr,
				&swapChain
				)
			);

		DX::ThrowIfFailed(swapChain.As(&m_swapChain));
	}

	// 스왑 체인의 적절한 방향을 설정하고, 생성합니다.
	// 2D 및 3D 매트릭스 변환을 생성합니다.
	// 3D 매트릭스는 반올림 오류를 방지하기 위해 명시적으로 지정됩니다.

	switch (displayRotation)
	{
	case DXGI_MODE_ROTATION_IDENTITY:
		m_orientationTransform3D = ScreenRotation::Rotation0;
		break;

	case DXGI_MODE_ROTATION_ROTATE90:
		m_orientationTransform3D = ScreenRotation::Rotation270;
		break;

	case DXGI_MODE_ROTATION_ROTATE180:
		m_orientationTransform3D = ScreenRotation::Rotation180;
		break;

	case DXGI_MODE_ROTATION_ROTATE270:
		m_orientationTransform3D = ScreenRotation::Rotation90;
		break;

	default:
		throw ref new FailureException();
	}

	DX::ThrowIfFailed(
		m_swapChain->SetRotation(displayRotation)
		);

	// 스왑 체인 백 버퍼의 렌더링 대상 뷰를 만듭니다.
	{
		m_currentFrame = m_swapChain->GetCurrentBackBufferIndex();
		CD3DX12_CPU_DESCRIPTOR_HANDLE rtvDescriptor(m_rtvHeap->GetCPUDescriptorHandleForHeapStart());
		for (UINT n = 0; n < c_frameCount; n++)
		{
			DX::ThrowIfFailed(m_swapChain->GetBuffer(n, IID_PPV_ARGS(&m_renderTargets[n])));
			m_d3dDevice->CreateRenderTargetView(m_renderTargets[n].Get(), nullptr, rtvDescriptor);
			rtvDescriptor.Offset(m_rtvDescriptorSize);

			WCHAR name[25];
			if (swprintf_s(name, L"m_renderTargets[%u]", n) > 0)
			{
				DX::SetName(m_renderTargets[n].Get(), name);
			}
		}
	}

	// 깊이 스텐실 및 뷰를 만듭니다.
	{
		D3D12_HEAP_PROPERTIES depthHeapProperties = CD3DX12_HEAP_PROPERTIES(D3D12_HEAP_TYPE_DEFAULT);

		D3D12_RESOURCE_DESC depthResourceDesc = CD3DX12_RESOURCE_DESC::Tex2D(m_depthBufferFormat, backBufferWidth, backBufferHeight, 1, 1);
		depthResourceDesc.Flags |= D3D12_RESOURCE_FLAG_ALLOW_DEPTH_STENCIL;

		CD3DX12_CLEAR_VALUE depthOptimizedClearValue(m_depthBufferFormat, 1.0f, 0);

		ThrowIfFailed(m_d3dDevice->CreateCommittedResource(
			&depthHeapProperties,
			D3D12_HEAP_FLAG_NONE,
			&depthResourceDesc,
			D3D12_RESOURCE_STATE_DEPTH_WRITE,
			&depthOptimizedClearValue,
			IID_PPV_ARGS(&m_depthStencil)
			));

		NAME_D3D12_OBJECT(m_depthStencil);

		D3D12_DEPTH_STENCIL_VIEW_DESC dsvDesc = {};
		dsvDesc.Format = m_depthBufferFormat;
		dsvDesc.ViewDimension = D3D12_DSV_DIMENSION_TEXTURE2D;
		dsvDesc.Flags = D3D12_DSV_FLAG_NONE;

		m_d3dDevice->CreateDepthStencilView(m_depthStencil.Get(), &dsvDesc, m_dsvHeap->GetCPUDescriptorHandleForHeapStart());
	}

	// 전체 창을 대상으로 하기 위한 3D 렌더링 뷰포트를 설정합니다.
	m_screenViewport = { 0.0f, 0.0f, m_d3dRenderTargetSize.Width, m_d3dRenderTargetSize.Height, 0.0f, 1.0f };
}

// 렌더링 대상의 크기와 렌더링 대상이 축소될지 여부를 결정합니다.
void DX::DeviceResources::UpdateRenderTargetSize()
{
	m_effectiveDpi = m_dpi;

	// 고해상도 장치에서 배터리 수명을 개선하려면 더 작은 렌더링 대상으로 렌더링하고
	// 출력이 표현될 때 GPU에서 출력의 크기를 조정할 수 있도록 허용합니다.
	if (!DisplayMetrics::SupportHighResolutions && m_dpi > DisplayMetrics::DpiThreshold)
	{
		float width = DX::ConvertDipsToPixels(m_logicalSize.Width, m_dpi);
		float height = DX::ConvertDipsToPixels(m_logicalSize.Height, m_dpi);

		// 장치가 세로 방향이면 높이가 너비보다 큽니다. 큰 치수는
		// 너비 임계값과 비교하고 작은 치수는
		// 높이 임계값과 비교합니다.
		if (max(width, height) > DisplayMetrics::WidthThreshold && min(width, height) > DisplayMetrics::HeightThreshold)
		{
			// 앱의 크기를 조정하기 위해 유효 DPI를 변경합니다. 논리 크기는 변경되지 않습니다.
			m_effectiveDpi /= 2.0f;
		}
	}

	// 필요한 렌더링 대상 크기를 픽셀 단위로 계산합니다.
	m_outputSize.Width = DX::ConvertDipsToPixels(m_logicalSize.Width, m_effectiveDpi);
	m_outputSize.Height = DX::ConvertDipsToPixels(m_logicalSize.Height, m_effectiveDpi);

	// DirectX 콘텐츠 크기를 0으로 만들지 않습니다.
	m_outputSize.Width = max(m_outputSize.Width, 1);
	m_outputSize.Height = max(m_outputSize.Height, 1);
}

// 이 메서드는 CoreWindow를 만들거나 다시 만들 때 호출됩니다.
void DX::DeviceResources::SetWindow(CoreWindow^ window)
{
	DisplayInformation^ currentDisplayInformation = DisplayInformation::GetForCurrentView();

	m_window = window;
	m_logicalSize = Windows::Foundation::Size(window->Bounds.Width, window->Bounds.Height);
	m_nativeOrientation = currentDisplayInformation->NativeOrientation;
	m_currentOrientation = currentDisplayInformation->CurrentOrientation;
	m_dpi = currentDisplayInformation->LogicalDpi;

	CreateWindowSizeDependentResources();
}

// 이 메서드는 SizeChanged 이벤트의 이벤트 처리기에서 호출됩니다.
void DX::DeviceResources::SetLogicalSize(Windows::Foundation::Size logicalSize)
{
	if (m_logicalSize != logicalSize)
	{
		m_logicalSize = logicalSize;
		CreateWindowSizeDependentResources();
	}
}

// 이 메서드는 DpiChanged 이벤트의 이벤트 처리기에서 호출됩니다.
void DX::DeviceResources::SetDpi(float dpi)
{
	if (dpi != m_dpi)
	{
		m_dpi = dpi;

		// 디스플레이 DPI가 변경된 경우 창의 논리적 크기(DIP 단위로 측정)도 변경되며 업데이트해야 합니다.
		m_logicalSize = Windows::Foundation::Size(m_window->Bounds.Width, m_window->Bounds.Height);

		CreateWindowSizeDependentResources();
	}
}

// 이 메서드는 OrientationChanged 이벤트의 이벤트 처리기에서 호출됩니다.
void DX::DeviceResources::SetCurrentOrientation(DisplayOrientations currentOrientation)
{
	if (m_currentOrientation != currentOrientation)
	{
		m_currentOrientation = currentOrientation;
		CreateWindowSizeDependentResources();
	}
}

// 이 메서드는 DisplayContentsInvalidated 이벤트의 이벤트 처리기에서 호출됩니다.
void DX::DeviceResources::ValidateDevice()
{
	// 기본 어댑터가 장치가 만들어진 이후에 변경되거나 장치가 제거된 경우
	// D3D 장치는 더 이상 유효하지 않습니다.

	// 먼저 장치를 만들었을 때의 기본 어댑터에 대한 LUID를 가져옵니다.

	DXGI_ADAPTER_DESC previousDesc;
	{
		ComPtr<IDXGIAdapter1> previousDefaultAdapter;
		DX::ThrowIfFailed(m_dxgiFactory->EnumAdapters1(0, &previousDefaultAdapter));

		DX::ThrowIfFailed(previousDefaultAdapter->GetDesc(&previousDesc));
	}

	// 다음으로, 현재 기본 어댑터에 대한 정보를 가져옵니다.

	DXGI_ADAPTER_DESC currentDesc;
	{
		ComPtr<IDXGIFactory4> currentDxgiFactory;
		DX::ThrowIfFailed(CreateDXGIFactory1(IID_PPV_ARGS(&currentDxgiFactory)));

		ComPtr<IDXGIAdapter1> currentDefaultAdapter;
		DX::ThrowIfFailed(currentDxgiFactory->EnumAdapters1(0, &currentDefaultAdapter));

		DX::ThrowIfFailed(currentDefaultAdapter->GetDesc(&currentDesc));
	}

	// 어댑터 LUID가 일치하지 않거나 장치가 제거되었다고 보고하는 경우
	// 새 D3D 장치를 만들어야 합니다.

	if (previousDesc.AdapterLuid.LowPart != currentDesc.AdapterLuid.LowPart ||
		previousDesc.AdapterLuid.HighPart != currentDesc.AdapterLuid.HighPart ||
		FAILED(m_d3dDevice->GetDeviceRemovedReason()))
	{
		m_deviceRemoved = true;
	}
}

// 스왑 체인의 콘텐츠를 화면에 표시합니다.
void DX::DeviceResources::Present()
{
	// 첫 번째 인수는 DXGI에 VSync까지 차단하도록 지시하여 응용 프로그램이
	// 다음 VSync까지 대기하도록 합니다. 이를 통해 화면에 표시되지 않는 프레임을
	// 렌더링하는 주기를 낭비하지 않을 수 있습니다.
	HRESULT hr = m_swapChain->Present(1, 0);

	// 연결이 끊기거나 드라이버 업그레이드로 인해 장치가 제거되면 
	// 모든 장치 리소스를 다시 만들어야 합니다.
	if (hr == DXGI_ERROR_DEVICE_REMOVED || hr == DXGI_ERROR_DEVICE_RESET)
	{
		m_deviceRemoved = true;
	}
	else
	{
		DX::ThrowIfFailed(hr);

		MoveToNextFrame();
	}
}

// 일시 중단 중인 GPU 작업이 완료될 때까지 기다립니다.
void DX::DeviceResources::WaitForGpu()
{
	// 큐에서 신호 명령을 예약합니다.
	DX::ThrowIfFailed(m_commandQueue->Signal(m_fence.Get(), m_fenceValues[m_currentFrame]));

	// fence를 넘을 때까지 기다립니다.
	DX::ThrowIfFailed(m_fence->SetEventOnCompletion(m_fenceValues[m_currentFrame], m_fenceEvent));
	WaitForSingleObjectEx(m_fenceEvent, INFINITE, FALSE);

	// 현재 프레임에 대한 fence 값을 구현합니다.
	m_fenceValues[m_currentFrame]++;
}

// 다음 프레임을 렌더링하도록 준비합니다.
void DX::DeviceResources::MoveToNextFrame()
{
	// 큐에서 신호 명령을 예약합니다.
	const UINT64 currentFenceValue = m_fenceValues[m_currentFrame];
	DX::ThrowIfFailed(m_commandQueue->Signal(m_fence.Get(), currentFenceValue));

	//프레임 인덱스로 이동합니다.
	m_currentFrame = m_swapChain->GetCurrentBackBufferIndex();

	// 다음 프레임을 시작할 준비가 되었는지 확인하세요.
	if (m_fence->GetCompletedValue() < m_fenceValues[m_currentFrame])
	{
		DX::ThrowIfFailed(m_fence->SetEventOnCompletion(m_fenceValues[m_currentFrame], m_fenceEvent));
		WaitForSingleObjectEx(m_fenceEvent, INFINITE, FALSE);
	}

	// 다음 프레임에 대한 fence 값을 설정합니다.
	m_fenceValues[m_currentFrame] = currentFenceValue + 1;
}

// 이 메서드는 디스플레이 장치의 기본 방향과 현재 디스플레이 방향 간의 회전을
// 확인합니다.
DXGI_MODE_ROTATION DX::DeviceResources::ComputeDisplayRotation()
{
	DXGI_MODE_ROTATION rotation = DXGI_MODE_ROTATION_UNSPECIFIED;

	// 참고: NativeOrientation은 DisplayOrientations 열거형이 다른 값을 포함하더라도
	// Landscape 또는 Portrait만 될 수 있습니다.
	switch (m_nativeOrientation)
	{
	case DisplayOrientations::Landscape:
		switch (m_currentOrientation)
		{
		case DisplayOrientations::Landscape:
			rotation = DXGI_MODE_ROTATION_IDENTITY;
			break;

		case DisplayOrientations::Portrait:
			rotation = DXGI_MODE_ROTATION_ROTATE270;
			break;

		case DisplayOrientations::LandscapeFlipped:
			rotation = DXGI_MODE_ROTATION_ROTATE180;
			break;

		case DisplayOrientations::PortraitFlipped:
			rotation = DXGI_MODE_ROTATION_ROTATE90;
			break;
		}
		break;

	case DisplayOrientations::Portrait:
		switch (m_currentOrientation)
		{
		case DisplayOrientations::Landscape:
			rotation = DXGI_MODE_ROTATION_ROTATE90;
			break;

		case DisplayOrientations::Portrait:
			rotation = DXGI_MODE_ROTATION_IDENTITY;
			break;

		case DisplayOrientations::LandscapeFlipped:
			rotation = DXGI_MODE_ROTATION_ROTATE270;
			break;

		case DisplayOrientations::PortraitFlipped:
			rotation = DXGI_MODE_ROTATION_ROTATE180;
			break;
		}
		break;
	}
	return rotation;
}

// 이 메서드는 Direct3D 12를 지원하는 사용 가능한 첫 번째 하드웨어 어댑터를 가져옵니다.
// 그러한 어댑터를 찾을 수 없는 경우 *ppAdapter는 nullptr로 설정됩니다.
void DX::DeviceResources::GetHardwareAdapter(IDXGIAdapter1** ppAdapter)
{
	ComPtr<IDXGIAdapter1> adapter;
	*ppAdapter = nullptr;

	for (UINT adapterIndex = 0; DXGI_ERROR_NOT_FOUND != m_dxgiFactory->EnumAdapters1(adapterIndex, &adapter); adapterIndex++)
	{
		DXGI_ADAPTER_DESC1 desc;
		adapter->GetDesc1(&desc);

		if (desc.Flags & DXGI_ADAPTER_FLAG_SOFTWARE)
		{
			// 기본 렌더링 드라이버 어댑터를 선택하지 마세요.
			continue;
		}

		// 어댑터에서 Direct3D 12를 지원하지만 실제 장치를 아직 만들지 않았는지
		// 확인합니다.
		if (SUCCEEDED(D3D12CreateDevice(adapter.Get(), D3D_FEATURE_LEVEL_11_0, _uuidof(ID3D12Device), nullptr)))
		{
			break;
		}
	}

	*ppAdapter = adapter.Detach();
}
