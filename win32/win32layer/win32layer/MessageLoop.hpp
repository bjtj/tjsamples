#ifndef __MESSAGE_LOOP_HPP__
#define __MESSAGE_LOOP_HPP__

#include "Common.hpp"

namespace WIN32LAYER {

	/**
	 *
	 */
	class MessageLoop {
	private:
	public:
		MessageLoop() {}
		virtual ~MessageLoop() {}
		virtual void loop() = 0;
		virtual int getResult() = 0;
	};

	class Looper {
	private:
	public:
		Looper() {}
		virtual ~Looper() {}
		virtual void onLoop() = 0;
	};

	/**
	 *
	 */
	class DedicatedMessageLoop : public MessageLoop {
	private:
		MSG msg;
	public:
		DedicatedMessageLoop();
		virtual ~DedicatedMessageLoop();
		virtual void loop();
		virtual int getResult();
	};

	/**
	 *
	 */
	class GameMessageLoop : public MessageLoop {
	private:
		MSG msg;
		Looper *looper;
	public:
		GameMessageLoop(Looper * looper);
		virtual ~GameMessageLoop();
		virtual void loop();
		virtual int getResult();
	};

}

#endif