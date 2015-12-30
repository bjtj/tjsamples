#include "InputStates.hpp"

namespace WIN32LAYER {

	KeyState::KeyState() : keycode(0), down(false), up(false), pressed(false) {
	}
	KeyState::KeyState(int keycode) : keycode(keycode), down(false), up(false), pressed(false) {
	}
	KeyState::~KeyState() {
	}
	void KeyState::setKeyDown() {
		pop();
		down = true;
		pressed = true;
	}
	void KeyState::setKeyUp() {
		pop();
		up = true;
		pressed = false;
	}
	bool KeyState::isKeyDown() {
		return down;
	}
	bool KeyState::isKeyUp() {
		return up;
	}
	bool KeyState::isKeyPressed() {
		return pressed;
	}
	void KeyState::pop() {
		down = false;
		up = false;
	}


	InputStates::InputStates() {
	}
	InputStates::~InputStates() {
	}
	void InputStates::setKeyDown(int keycode) {
		keycodes[keycode].setKeyDown();
	}
	void InputStates::setKeyUp(int keycode) {
		keycodes[keycode].setKeyUp();
	}
	bool InputStates::isKeyDown(int keycode) {
		if (keycodes.find(keycode) != keycodes.end()) {
			return keycodes[keycode].isKeyDown();
		}
		return false;
	}
	bool InputStates::isKeyUp(int keycode) {
		if (keycodes.find(keycode) != keycodes.end()) {
			return keycodes[keycode].isKeyUp();
		}
		return false;
	}
	bool InputStates::isKeyPressed(int keycode) {
		if (keycodes.find(keycode) != keycodes.end()) {
			return keycodes[keycode].isKeyPressed();
		}
		return false;
	}
	void InputStates::pop() {
		for (std::map<int, KeyState>::iterator iter = keycodes.begin(); iter != keycodes.end();) {
			iter->second.pop();
			if (!iter->second.isKeyPressed()) {
				iter = keycodes.erase(iter);
			} else {
				iter++;
			}
		}
	}
}