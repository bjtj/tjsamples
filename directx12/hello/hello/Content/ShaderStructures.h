#pragma once

namespace hello
{
	// MVP 매트릭스를 꼭짓점 셰이더로 보내는 데 사용되는 상수 버퍼입니다.
	struct ModelViewProjectionConstantBuffer
	{
		DirectX::XMFLOAT4X4 model;
		DirectX::XMFLOAT4X4 view;
		DirectX::XMFLOAT4X4 projection;
	};

	// 꼭짓점별 데이터를 꼭짓점 셰이더로 보내는 데 사용됩니다.
	struct VertexPositionColor
	{
		DirectX::XMFLOAT3 pos;
		DirectX::XMFLOAT3 color;
	};
}