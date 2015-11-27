#include "Common.hpp"
#include "WindowClassBuilder.hpp"
#include "WindowBuilder.hpp"
#include "WindowProcedureHandler.hpp"
#include "MessageLoop.hpp"

using namespace WIN32LAYER;

class MyProcHandler : public WindowProcedureHandler {
private:
public:
	MyProcHandler() {
	}
	virtual ~MyProcHandler() {
	}

	virtual ProcResult onProc(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {

		switch (uMsg) {
		case WM_CREATE:

			return setResult(0);
		case WM_CLOSE:
			PostQuitMessage(0);
			return setResult(0);
		case WM_DESTROY:
			break;
		}

		return needDefaultProc();
	}
};

COMMON_WINMAIN(hInstance, hPrevInstance, cmdParam, cmdShow) {

	MyProcHandler procHandler;

	WindowClassBuilder classBuilder(hInstance, TEXT("sample window"));
	classBuilder.setStyle(CS_HREDRAW | CS_VREDRAW);
	classBuilder.setIcon(LoadIcon(NULL, IDI_APPLICATION));
	classBuilder.setCursor(LoadCursor(NULL, IDC_ARROW));
	classBuilder.setWndProc(WindowProcedureHandler::MainWndProc);
	classBuilder.registerClass();

	WindowBuilder windowBuilder(hInstance);
	windowBuilder.setClassName(TEXT("sample window"));
	windowBuilder.setWindowName(TEXT("This is sample window"));
	windowBuilder.setStyle(WS_OVERLAPPEDWINDOW);
	windowBuilder.setPosition(CW_USEDEFAULT, CW_USEDEFAULT);
	windowBuilder.setProcecureHandler(&procHandler);
	windowBuilder.setSize(640, 480);

	Window window = windowBuilder.create();

	window.show(cmdShow);

	DedicatedMessageLoop loop;
	loop.loop();

	return loop.getResult();
}