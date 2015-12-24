#include "Common.hpp"
#include "WindowClassBuilder.hpp"
#include "WindowBuilder.hpp"
#include "WindowProcedureHandler.hpp"
#include "MessageLoop.hpp"
#include "WindowComponentBuilderFactory.hpp"

using namespace WIN32LAYER;

class MyProcHandler : public WindowProcedureHandler {
private:
	WindowComponentBuilderFactory factory;
public:
	MyProcHandler() {
	}
	virtual ~MyProcHandler() {
	}

	virtual ProcResult onProc(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {

		switch (uMsg) {
		case WM_CREATE:
			{
				WindowComponentBuilder builder = factory.createButton((HINSTANCE)GetWindowLong(hWnd, GWL_HINSTANCE), TEXT("Keep screen on"));
				builder.setParent(hWnd);
				builder.setSize(200, 50);
				builder.setCommandId(101);
				builder.create();
				return setResult(0);
			}
		case WM_COMMAND:
			switch (getCommand(wParam)) {
			case 101:
				{
					// http://stackoverflow.com/a/3665545/5676460
					// https://msdn.microsoft.com/en-us/library/aa373208%28VS.85%29.aspx
					SetThreadExecutionState(ES_DISPLAY_REQUIRED);
				}
				break;
			}
			return setResult(0);
		case WM_TIMER:
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