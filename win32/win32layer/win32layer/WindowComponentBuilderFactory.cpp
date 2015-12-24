#include "WindowComponentBuilderFactory.hpp"

namespace WIN32LAYER {

	WindowComponentBuilderFactory::WindowComponentBuilderFactory() {
	}

	WindowComponentBuilderFactory::~WindowComponentBuilderFactory() {
	}

	WindowComponentBuilder WindowComponentBuilderFactory::createButton(HINSTANCE hInst, TCHAR * name) {
		// https://msdn.microsoft.com/en-us/library/windows/desktop/hh298354%28v=vs.85%29.aspx
		WindowComponentBuilder builder(hInst);
		builder.setClassName(TEXT("BUTTON"));
		builder.setWindowName(name);
		builder.setStyle(WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON);
		builder.setPosition(0, 0);
		builder.setSize(10, 10);
		return builder;
	}
}