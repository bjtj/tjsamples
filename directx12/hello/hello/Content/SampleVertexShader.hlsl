// 기하 도형 작성을 위해 세 개의 기본 열 중심 행렬을 저장하는 상수 버퍼입니다.
cbuffer ModelViewProjectionConstantBuffer : register(b0)
{
	matrix model;
	matrix view;
	matrix projection;
};

// 꼭짓점 셰이더에 대한 입력으로 사용되는 꼭짓점별 데이터입니다.
struct VertexShaderInput
{
	float3 pos : POSITION;
	float3 color : COLOR0;
};

// 픽셀 셰이더를 통과한 픽셀당 색 데이터입니다.
struct PixelShaderInput
{
	float4 pos : SV_POSITION;
	float3 color : COLOR0;
};

// GPU에서 꼭짓점 처리를 하기 위한 간단한 셰이더입니다.
PixelShaderInput main(VertexShaderInput input)
{
	PixelShaderInput output;
	float4 pos = float4(input.pos, 1.0f);

	// 꼭짓점 위치를 프로젝션된 공간으로 변환합니다.
	pos = mul(pos, model);
	pos = mul(pos, view);
	pos = mul(pos, projection);
	output.pos = pos;

	// 수정 없이 색을 통과합니다.
	output.color = input.color;

	return output;
}
