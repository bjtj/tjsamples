// 픽셀 셰이더를 통과한 픽셀당 색 데이터입니다.
struct PixelShaderInput
{
	float4 pos : SV_POSITION;
	float3 color : COLOR0;
};

// (보간된) 색 데이터에 대한 통과 함수입니다.
float4 main(PixelShaderInput input) : SV_TARGET
{
	return float4(input.color, 1.0f);
}
