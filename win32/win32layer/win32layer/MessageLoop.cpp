#include "MessageLoop.hpp"

namespace WIN32LAYER {

	DedicatedMessageLoop::DedicatedMessageLoop() {
		memset(&msg, 0, sizeof(msg));
	}
	DedicatedMessageLoop::~DedicatedMessageLoop() {
	}
	void DedicatedMessageLoop::loop() {
		while(GetMessage(&msg, NULL, 0,0)) {
			TranslateMessage(&msg);
			DispatchMessage(&msg);
		}
	}
	int DedicatedMessageLoop::getResult() {
		return (int)msg.wParam;
	}
}