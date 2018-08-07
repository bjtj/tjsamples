#include <windows.h>
#include <set>

#define WIN32_LEAN_AND_MEAN

const unsigned radius = 3;
int xPos = 0;
int yPos = 0;
typedef std::pair<int, int> coordinate;
typedef std::set<coordinate>::const_iterator coord_iter;

LRESULT CALLBACK WndProc(HWND hwnd,
			 UINT message,
			 WPARAM wParam,
			 LPARAM lParam)
{
    PAINTSTRUCT paintStruct;
    HDC hDC;
    HBRUSH hOldBrush, hNewBrush;
    static std::set<coordinate> coords;

    switch (message) {
    case WM_CREATE: {
	return 0;
    }
    case WM_CLOSE: {
	PostQuitMessage(0);
	return 0;
    }
    case WM_PAINT: {
	hDC = BeginPaint(hwnd, &paintStruct);
	hNewBrush = CreateSolidBrush(RGB(255,255,0));
	hOldBrush = (HBRUSH)SelectObject(hDC, hNewBrush);

	for (coord_iter it = coords.begin(); it != coords.end(); ++it) {
	    const int x = (*it).first;
	    const int y = (*it).second;
	    Ellipse(hDC, x - radius, y + radius, x + radius, y - radius);
	}

	SelectObject(hDC, hOldBrush);
	DeleteObject(hNewBrush);
	EndPaint(hwnd, &paintStruct);
	return 0;
    }
    case WM_MOUSEMOVE: {
	xPos = LOWORD(lParam);
	yPos = HIWORD(lParam);
	break;
    }
    case WM_LBUTTONDOWN: {
	coords.insert(std::make_pair(xPos, yPos));
	InvalidateRect(hwnd, NULL, TRUE);
	break;
    }
    default:
	break;
    }
    return DefWindowProc(hwnd, message, wParam, lParam);
}

int APIENTRY WinMain(HINSTANCE hInstance,
		     HINSTANCE hPrevInstance,
		     LPSTR lpCmdLine,
		     int nCmdShow)
{
    WNDCLASSEX windowClass;
    HWND hwnd;
    MSG msg;

    windowClass.cbSize = sizeof(WNDCLASSEX);
    windowClass.style = CS_HREDRAW | CS_VREDRAW;
    windowClass.lpfnWndProc = WndProc;
    windowClass.cbClsExtra = 0;
    windowClass.cbWndExtra = 0;
    windowClass.hInstance = hInstance;
    windowClass.hIcon = LoadIcon(NULL, IDI_APPLICATION);
    windowClass.hCursor = LoadCursor(NULL, IDC_ARROW);
    windowClass.hbrBackground = (HBRUSH)GetStockObject(WHITE_BRUSH);
    windowClass.lpszMenuName = NULL;
    windowClass.lpszClassName = "MyClass";
    windowClass.hIconSm = LoadIcon(NULL, IDI_WINLOGO);

    if (!RegisterClassEx(&windowClass)) {
	return 1;
    }

    if (!CreateWindowEx(0, "MyClass", "My First Window",
			WS_OVERLAPPEDWINDOW | WS_VISIBLE | WS_SYSMENU,
			50, 50, 250, 250, NULL, NULL, hInstance, NULL)) {
	return 1;
    }

    while (GetMessage(&msg, NULL, 0, 0) > 0) {
	TranslateMessage(&msg);
	DispatchMessage(&msg);
    }
}
