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
	

	GameMessageLoop::GameMessageLoop(Looper * looper) : looper(looper) {
		memset(&msg, 0, sizeof(msg));
	}
	GameMessageLoop::~GameMessageLoop() {
	}
	void GameMessageLoop::loop() {
		while (TRUE) {
			while (PeekMessage(&msg, NULL, 0, 0, PM_REMOVE)) {
				TranslateMessage(&msg);
				DispatchMessage(&msg);
			}

			if (msg.message == WM_QUIT) {
				break;
			}

			if (looper) {
				looper->onLoop();
			}
		}
	}
	int GameMessageLoop::getResult() {
		return (int)msg.wParam;
	}
}