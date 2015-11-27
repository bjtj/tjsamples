#ifndef __WINDOW_CLASS_HPP__
#define __WINDOW_CLASS_HPP__

#include "Common.hpp"
#include "WindowProcedureHandler.hpp"

namespace WIN32LAYER {

	class WindowClassBuilder {
	private:
		HINSTANCE hInstance;
		WNDCLASS wc;
		TCHAR className[1024];
		WindowProcedureHandler * procHandler;

	public:
		WindowClassBuilder(HINSTANCE hInstance, TCHAR * className);
		virtual ~WindowClassBuilder();

		WindowClassBuilder & setWndProc(WNDPROC wndProc);
		WindowClassBuilder & setStyle(UINT style);
		WindowClassBuilder & setIcon(HICON icon);
		WindowClassBuilder & setCursor(HCURSOR cursor);
		WindowClassBuilder & setBackground(HBRUSH brush);
		WindowClassBuilder & setClassName(TCHAR * className);

		void registerClass();
	};
}

#endif