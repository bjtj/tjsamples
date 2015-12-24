#include "WindowComponentBuilder.hpp"

namespace WIN32LAYER {

	WindowComponentBuilder::WindowComponentBuilder(HINSTANCE hInstance) : WindowBuilder(hInstance) {
	}

	WindowComponentBuilder::~WindowComponentBuilder() {
	}

	void WindowComponentBuilder::setCommandId(WORD cmdId) {
		setMenu((HMENU)cmdId);
	}
}