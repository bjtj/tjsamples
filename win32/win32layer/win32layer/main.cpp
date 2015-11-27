#include "Common.hpp"
#include "WindowClassBuilder.hpp"
#include "WindowBuilder.hpp"
#include "MessageLoop.hpp"

using namespace WIN32LAYER;

COMMON_WINMAIN(hInstance, hPrevInstance, cmdParam, cmdShow) {

	WindowClassBuilder classBuilder(hInstance, TEXT("sample window"));
	classBuilder.setStyle(CS_HREDRAW | CS_VREDRAW);
	classBuilder.setIcon(LoadIcon(NULL, IDI_APPLICATION));
	classBuilder.setCursor(LoadCursor(NULL, IDC_ARROW));
	classBuilder.registerClass();

	WindowBuilder windowBuilder(hInstance);
	windowBuilder.setClassName(TEXT("sample window"));
	windowBuilder.setWindowName(TEXT("Sample Window"));
	windowBuilder.setStyle(WS_OVERLAPPEDWINDOW);
	windowBuilder.setPosition(CW_USEDEFAULT, CW_USEDEFAULT);
	windowBuilder.setSize(640, 480);
	Window window = windowBuilder.create();

	window.show(cmdShow);

	DedicatedMessageLoop loop;
	loop.loop();

	return loop.getResult();
}