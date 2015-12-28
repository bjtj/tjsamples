#ifndef __WNIDOW_BUILDER_HPP__
#define __WNIDOW_BUILDER_HPP__

#include "Common.hpp"
#include "WindowProcedureHandler.hpp"

namespace WIN32LAYER {

	class WindowBuilder {
	private:
		HINSTANCE hInstance;
		TCHAR className[1024];
		TCHAR windowName[1024];
		DWORD style;
		int x;
		int y;
		int width;
		int height;
		HWND parentHwnd;
		HMENU menu;
		WindowProcedureHandler * procHandler;

	public:
		WindowBuilder(HINSTANCE hInstance);
		virtual ~WindowBuilder();

		void setClassName(TCHAR * className);
		void setWindowName(TCHAR * windowName);
		void setStyle(DWORD style);
		void setPosition(int x, int y);
		void setSize(int width, int height);
		void setParent(HWND parent);
		void setMenu(HMENU menu);
		void setUserData(LPVOID userData);
		void setProcecureHandler(WindowProcedureHandler * procHandler);

		Window create();
	};
}

#endif