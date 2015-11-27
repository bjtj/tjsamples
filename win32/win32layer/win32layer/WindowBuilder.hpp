#ifndef __WNIDOW_BUILDER_HPP__
#define __WNIDOW_BUILDER_HPP__

#include "Common.hpp"

namespace WIN32LAYER {

	class Window {
	private:
		HWND hwnd;
	public:
		Window(HWND hwnd);
		virtual ~Window();

		void show(int mode);
	};

	class WindowBuilder {
	private:
		HINSTANCE hInstance;
		TCHAR className[1024];
		TCHAR windowName[1024];
		HWND hwnd;
		DWORD style;
		int x;
		int y;
		int width;
		int height;
		HWND parentHwnd;
		LPVOID userData;

	public:
		WindowBuilder(HINSTANCE hInstance);
		virtual ~WindowBuilder();

		void setClassName(TCHAR * className);
		void setWindowName(TCHAR * windowName);
		void setStyle(DWORD style);
		void setPosition(int x, int y);
		void setSize(int width, int height);
		void setParent(HWND parent);
		void setUserData(LPVOID userData);

		Window create();
	};
}

#endif