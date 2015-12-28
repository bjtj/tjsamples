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
	int x;
	int y;
public:
	MyProcHandler() : x(30), y(50) {
	}
	virtual ~MyProcHandler() {
	}

	virtual void onDraw(HWND hwnd, HDC hdc) {

		RECT rect;
		GetClientRect(hwnd, &rect);
		HBRUSH brush = CreateSolidBrush(RGB(255, 255, 255));
		FillRect(hdc, &rect, brush);
		TextOut(hdc, x, y, TEXT("Hello"), 5);
		DeleteObject(brush);
	}

	virtual ProcResult onProc(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {

		switch (uMsg) {
		case WM_CREATE:
			{
				WindowComponentBuilder builder = factory.createButton((HINSTANCE)GetWindowLong(hWnd, GWL_HINSTANCE), TEXT("Press me"));
				builder.setParent(hWnd);
				builder.setSize(200, 50);
				builder.setCommandId(101);
				builder.create();
				SetTimer(hWnd, 100, 16, NULL);
				return setResult(0);
			}
		case WM_COMMAND:
			switch (getCommand(wParam)) {
			case 101:
				{
					// http://stackoverflow.com/a/3665545/5676460
					// https://msdn.microsoft.com/en-us/library/aa373208%28VS.85%29.aspx
					// SetThreadExecutionState(ES_DISPLAY_REQUIRED);
				}
				break;
			}
			return setResult(0);
		case WM_TIMER:
			InvalidateRect(hWnd, NULL, TRUE);
			return setResult(0);
		case WM_KEYDOWN:
			switch (wParam) {
			case VK_ESCAPE:
				PostQuitMessage(0);
				break;
			case VK_LEFT:
				x -= 5;
				break;
			case VK_RIGHT:
				x += 5;
				break;
			case VK_DOWN:
				y += 5;
				break;
			case VK_UP:
				y -= 5;
				break;
			default:
				break;
			}
			return setResult(0);
		case WM_CLOSE:
			PostQuitMessage(0);
			return setResult(0);
		case WM_DESTROY:
			break;
		default:
			break;
		}

		return needDefaultProc();
	}
};

Window createSimpleWindow(HINSTANCE hInst, TCHAR * className, TCHAR * windowName, MyProcHandler * procHandler) {
	WindowClassBuilder classBuilder(hInst, TEXT("sample window"));
	classBuilder.setStyle(CS_HREDRAW | CS_VREDRAW);
	classBuilder.setIcon(LoadIcon(NULL, IDI_APPLICATION));
	classBuilder.setCursor(LoadCursor(NULL, IDC_ARROW));
	classBuilder.setWndProc(WindowProcedureHandler::MainWndProc);
	classBuilder.registerClass();

	WindowBuilder windowBuilder(hInst);
	windowBuilder.setClassName(TEXT("sample window"));
	windowBuilder.setWindowName(TEXT("This is sample window"));
	windowBuilder.setStyle(WS_OVERLAPPEDWINDOW);
	windowBuilder.setPosition(CW_USEDEFAULT, CW_USEDEFAULT);
	windowBuilder.setProcecureHandler(procHandler);
	windowBuilder.setSize(640, 480);

	return windowBuilder.create();
}

COMMON_WINMAIN(hInstance, hPrevInstance, cmdParam, cmdShow) {

	MyProcHandler procHandler;
	
	Window window = createSimpleWindow(hInstance, TEXT("my class"), TEXT("Simple Window"), &procHandler);
	window.show(cmdShow);

	DedicatedMessageLoop loop;
	loop.loop();

	return loop.getResult();
}