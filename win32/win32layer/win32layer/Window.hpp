#ifndef __WINDOW_HPP__
#define __WINDOW_HPP__

#include "Common.hpp"

namespace WIN32LAYER {

	class Window {
	private:
		HWND hwnd;
	public:
		Window();
		Window(HWND hwnd);
		virtual ~Window();

		HWND getHwnd();
		void show(int mode);
	};
}

#endif