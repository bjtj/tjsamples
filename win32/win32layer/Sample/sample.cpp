#include <Win32Layer.hpp>

using namespace WIN32LAYER;

class MoveGame {
private:
	int x;
	int y;
public:
	MoveGame() : x(0), y(0) {}
	virtual ~MoveGame() {}

	void setX(int x) {
		this->x = x;
	}
	void setY(int y) {
		this->y = y;
	}
	void offsetX(int x) {
		this->x += x;
	}
	void offsetY(int y) {
		this->y += y;
	}
	int getX() {
		return x;
	}
	int getY() {
		return y;
	}
};

class MyProcHandler : public WindowProcedureHandler {
private:
	WindowComponentBuilderFactory factory;
	InputStates & keys;
	MoveGame & move;
public:
	MyProcHandler(InputStates & keys, MoveGame & move) : keys(keys), move(move) {
	}
	virtual ~MyProcHandler() {
	}

	virtual void onDraw(HWND hwnd, HDC hdc) {

		RECT rect;
		GetClientRect(hwnd, &rect);
		HBRUSH brush = CreateSolidBrush(RGB(255, 255, 255));
		FillRect(hdc, &rect, brush);
		TextOut(hdc, move.getX(), move.getY(), TEXT("Hello"), 5);
		DeleteObject(brush);
	}

	virtual ProcResult onProc(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {

		switch (uMsg) {
		case WM_CREATE:
		{
			this->setEnableDoubleBuffering(true);
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
			return setResult(0);
		case WM_KEYUP:
			keys.setKeyUp(wParam);
			break;
		case WM_KEYDOWN:
			keys.setKeyDown(wParam);
			switch (wParam) {
			case VK_ESCAPE:
				PostQuitMessage(0);
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

	InputStates keys;
	MoveGame move;
	MyProcHandler procHandler(keys, move);

	Window window = createSimpleWindow(hInstance, TEXT("my class"), TEXT("Simple Window"), &procHandler);
	window.show(cmdShow);

	class GameLooper : public Looper {
	private:
		HWND hwnd;
		InputStates & keys;
		MoveGame & move;
	public:
		GameLooper(HWND hwnd, InputStates & keys, MoveGame & move) : hwnd(hwnd), keys(keys), move(move) {}
		virtual ~GameLooper() {}
		void handleInput() {
			if (keys.isKeyPressed(VK_DOWN)) {
				move.offsetY(1);
			}
			if (keys.isKeyPressed(VK_UP)) {
				move.offsetY(-1);
			}
			if (keys.isKeyPressed(VK_LEFT)) {
				move.offsetX(-1);
			}
			if (keys.isKeyPressed(VK_RIGHT)) {
				move.offsetX(1);
			}
		}
		virtual void onLoop() {
			handleInput();
			InvalidateRect(hwnd, NULL, FALSE);
			keys.pop();
		}
	};
	GameLooper looper(window.getHwnd(), keys, move);
	GameMessageLoop loop(&looper);
	loop.loop();

	return loop.getResult();
}
