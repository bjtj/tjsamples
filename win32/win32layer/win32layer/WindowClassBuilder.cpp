#include "WindowClassBuilder.hpp"

namespace WIN32LAYER {

	WindowClassBuilder::WindowClassBuilder(HINSTANCE hInstance, TCHAR * className) {
		memset(&wc, 0, sizeof(wc));
		wc.hInstance = hInstance;
		setClassName(className);
	}
	WindowClassBuilder::~WindowClassBuilder() {
	}

	WindowClassBuilder & WindowClassBuilder::setWndProc(WNDPROC wndProc) {
		wc.lpfnWndProc = wndProc;
		return *this;
	}

	WindowClassBuilder & WindowClassBuilder::setStyle(UINT style) {
		wc.style = style;
		return *this;
	}
	WindowClassBuilder & WindowClassBuilder::setIcon(HICON icon) {
		wc.hIcon = icon;
		return *this;
	}
	WindowClassBuilder & WindowClassBuilder::setCursor(HCURSOR cursor) {
		wc.hCursor = cursor;
		return *this;
	}
	WindowClassBuilder & WindowClassBuilder::setBackground(HBRUSH brush) {
		wc.hbrBackground = brush;
		return *this;
	}
	WindowClassBuilder & WindowClassBuilder::setClassName(TCHAR * className) {
		wc.lpszClassName = className;
		_tcscpy(this->className, className);
		return *this;
	}

	void WindowClassBuilder::registerClass() {
		RegisterClass(&wc);
	}
}