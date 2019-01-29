#pragma once

#include <ppltasks.h>	// create_task의 경우

namespace DX
{
	inline void ThrowIfFailed(HRESULT hr)
	{
		if (FAILED(hr))
		{
			// 이 줄에 Win32 API 오류를 Catch하기 위한 중단점을 설정합니다.
			throw Platform::Exception::CreateException(hr);
		}
	}

	// 이진 파일에서 비동기적으로 읽는 함수입니다.
	inline Concurrency::task<std::vector<byte>> ReadDataAsync(const std::wstring& filename)
	{
		using namespace Windows::Storage;
		using namespace Concurrency;

		auto folder = Windows::ApplicationModel::Package::Current->InstalledLocation;

		return create_task(folder->GetFileAsync(Platform::StringReference(filename.c_str()))).then([](StorageFile^ file)
		{
			return FileIO::ReadBufferAsync(file);
		}).then([](Streams::IBuffer^ fileBuffer) -> std::vector<byte>
		{
			std::vector<byte> returnBuffer;
			returnBuffer.resize(fileBuffer->Length);
			Streams::DataReader::FromBuffer(fileBuffer)->ReadBytes(Platform::ArrayReference<byte>(returnBuffer.data(), fileBuffer->Length));
			return returnBuffer;
		});
	}

	// DIP(장치 독립적 픽셀) 길이를 물리적 픽셀 길이로 변환합니다.
	inline float ConvertDipsToPixels(float dips, float dpi)
	{
		static const float dipsPerInch = 96.0f;
		return floorf(dips * dpi / dipsPerInch + 0.5f); // 가장 근접한 정수로 반올림합니다.
	}

	// 디버깅을 지원하려면 개체에 이름을 할당하세요.
#if defined(_DEBUG)
	inline void SetName(ID3D12Object* pObject, LPCWSTR name)
	{
		pObject->SetName(name);
	}
#else
	inline void SetName(ID3D12Object*, LPCWSTR)
	{
	}
#endif
}

// ComPtr<T>에 대한 명명 도우미 함수입니다.
// 변수 이름을 개체 이름으로 할당합니다.
#define NAME_D3D12_OBJECT(x) DX::SetName(x.Get(), L#x)
