#include "pch.h"
#include "helloMain.h"
#include "Common\DirectXHelper.h"

using namespace hello;
using namespace Windows::Foundation;
using namespace Windows::System::Threading;
using namespace Concurrency;

// DirectX 12 응용 프로그램 템플릿에 대한 설명은 https://go.microsoft.com/fwlink/?LinkID=613670&clcid=0x412에 나와 있습니다.

// 응용 프로그램이 로드되면 응용 프로그램 자산을 로드하고 초기화합니다.
helloMain::helloMain()
{
	// TODO: 기본 가변 timestep 모드 외에 다른 설정을 하려면 타이머 설정을 변경합니다.
	// 예: 60FPS 고정 timestep 업데이트 논리일 경우 다음을 호출합니다.
	/*
	m_timer.SetFixedTimeStep(true);
	m_timer.SetTargetElapsedSeconds(1.0 / 60);
	*/
}

// 렌더러를 만들고 초기화합니다.
void helloMain::CreateRenderers(const std::shared_ptr<DX::DeviceResources>& deviceResources)
{
	// TODO: 이 항목을 앱 콘텐츠 초기화로 대체합니다.
	m_sceneRenderer = std::unique_ptr<Sample3DSceneRenderer>(new Sample3DSceneRenderer(deviceResources));

	OnWindowSizeChanged();
}

// 프레임당 한 번 응용 프로그램 상태를 업데이트합니다.
void helloMain::Update()
{
	// 장면 개체를 업데이트합니다.
	m_timer.Tick([&]()
	{
		// TODO: 이 항목을 앱 콘텐츠 업데이트 함수로 대체합니다.
		m_sceneRenderer->Update(m_timer);
	});
}

// 현재 응용 프로그램 상태에 따라 현재 프레임을 렌더링합니다.
// 프레임이 렌더링되어 표시할 준비가 되면 true를 반환합니다.
bool helloMain::Render()
{
	// 처음 업데이트하기 전에 아무것도 렌더링하지 마세요.
	if (m_timer.GetFrameCount() == 0)
	{
		return false;
	}

	// 장면 개체를 렌더링합니다.
	// TODO: 이 항목을 앱 콘텐츠 렌더링 함수로 대체합니다.
	return m_sceneRenderer->Render();
}

// 창의 크기가 변하면(예: 장치 방향 변경) 응용 프로그램 상태를 업데이트합니다.
void helloMain::OnWindowSizeChanged()
{
	// TODO: 이 항목을 앱 콘텐츠의 크기 종속 초기화로 대체합니다.
	m_sceneRenderer->CreateWindowSizeDependentResources();
}

// 일시 중단 상태가 아닌 앱을 알려 줍니다.
void helloMain::OnSuspending()
{
	// TODO: 이것을 앱의 일시 중단 논리로 바꾸세요.

	// 언제든지 프로세스 수명 관리가 일시 중지된 앱을 종료할 수도 있습니다. 따라서
	// 앱이 중단된 위치에서 앱이 다시 시작될 수 있도록 해줄 모든 상태를 저장하는 것이 좋습니다. 

	m_sceneRenderer->SaveState();

	// 응용 프로그램에서 다시 만들기가 쉬운 비디오 메모리 할당을 사용하는 경우,
	// 해당 메모리를 릴리스하여 다른 응용 프로그램이 사용할 수 있도록 해보세요.
}

// 더 이상 일시 중단 상태가 아닌 앱을 알려 줍니다.
void helloMain::OnResuming()
{
	// TODO: 이것을 앱의 다시 시작 논리로 바꾸세요.
}

// 릴리스가 필요한 장치 리소스를 렌더러에 알립니다.
void helloMain::OnDeviceRemoved()
{
	// TODO: 필요한 응용 프로그램 또는 렌더러 상태를 저장하고 렌더러를 릴리스하세요.
	// 및 더 이상 유효하지 않은 리소스입니다.
	m_sceneRenderer->SaveState();
	m_sceneRenderer = nullptr;
}
