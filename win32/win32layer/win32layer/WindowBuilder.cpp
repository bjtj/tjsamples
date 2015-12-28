#include "WindowBuilder.hpp"

namespace WIN32LAYER {

	

	WindowBuilder::WindowBuilder(HINSTANCE hInstance) : hInstance(hInstance), style(0), x(0), y(0), width(0), height(0), parentHwnd(0), menu(NULL), procHandler(NULL) {
	}

	WindowBuilder::~WindowBuilder() {
	}

	void WindowBuilder::setClassName(TCHAR * className) {
		_tcscpy(this->className, className);
	}
	void WindowBuilder::setWindowName(TCHAR * windowName) {
		_tcscpy(this->windowName, windowName);
	}
	void WindowBuilder::setStyle(DWORD style) {
		this->style = style;
	}
	void WindowBuilder::setPosition(int x, int y) {
		this->x = x;
		this->y = y;
	}
	void WindowBuilder::setSize(int width, int height) {
		this->width = width;
		this->height = height;
	}
	void WindowBuilder::setParent(HWND parent) {
		this->parentHwnd = parent;
	}
	void WindowBuilder::setMenu(HMENU menu) {
		this->menu = menu;
	}
	void WindowBuilder::setProcecureHandler(WindowProcedureHandler * procHandler) {
		this->procHandler = procHandler;
	}

	Window WindowBuilder::create() {
		return Window(CreateWindow(className, windowName, style, x, y, width, height, parentHwnd, menu, hInstance, procHandler));
	}
}