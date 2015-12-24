#ifndef __WINDOW_COMPONENT_BUILDER_FACTORY_HPP__
#define __WINDOW_COMPONENT_BUILDER_FACTORY_HPP__

#include "Common.hpp"
#include "WindowComponentBuilder.hpp"

namespace WIN32LAYER {

	class WindowComponentBuilderFactory {
	public:
		WindowComponentBuilderFactory();
		virtual ~WindowComponentBuilderFactory();

		WindowComponentBuilder createButton(HINSTANCE hInst, TCHAR * name);
	};
}

#endif