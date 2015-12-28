#include "Window.hpp"

namespace WIN32LAYER {

	Window::Window() : hwnd(NULL) {
	}

	Window::Window(HWND hwnd) : hwnd(hwnd) {
	}
	Window::~Window() {
	}

	HWND Window::getHwnd() {
		return hwnd;
	}

	void Window::show(int mode) {
		ShowWindow(hwnd, mode);
	}
}
