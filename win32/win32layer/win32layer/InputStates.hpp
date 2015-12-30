#ifndef __INPUT_STATES_HPP__
#define __INPUT_STATES_HPP__

#include "Common.hpp"
#include <map>

namespace WIN32LAYER {

	class KeyState {
	private:
		int keycode;
		bool down;
		bool up;
		bool pressed;
	public:
		KeyState();
		KeyState(int keycode);
		virtual ~KeyState();
		void setKeyDown();
		void setKeyUp();
		bool isKeyDown();
		bool isKeyUp();
		bool isKeyPressed();
		void pop();
	};

	class InputStates {
	private:
		std::map<int, KeyState> keycodes;
	public:
		InputStates();
		virtual ~InputStates();
		void setKeyDown(int keycode);
		void setKeyUp(int keycode);
		bool isKeyDown(int keycode);
		bool isKeyUp(int keycode);
		bool isKeyPressed(int keycode);
		void pop();
	};
}

#endif
