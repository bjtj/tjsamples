#ifndef __WINDOW_COMPONENT_BUILDER_HPP__
#define __WINDOW_COMPONENT_BUILDER_HPP__

#include "Common.hpp"
#include "WindowBuilder.hpp"

namespace WIN32LAYER {

	class WindowComponentBuilder : public WindowBuilder {
	public:
		WindowComponentBuilder(HINSTANCE hInstance);
		virtual ~WindowComponentBuilder();

		void setCommandId(WORD cmdId);
	};
}

#endif