#pragma warning( disable : 4996 )
#define WIN32_LEAN_AND_MEAN

#include <Windows.h>
#include <tchar.h>

int APIENTRY WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR IpszCmdParam, int nCmdShow) {

	MessageBox(NULL, TEXT("Hello World"), TEXT("Hello"), MB_OK);

	return 0;
}