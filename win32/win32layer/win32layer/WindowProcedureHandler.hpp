#ifndef __WINDOW_PROCEDURE_HANDLE_HPP__
#define __WINDOW_PROCEDURE_HANDLE_HPP__

#include "Common.hpp"

#include <vector>
#include "Window.hpp"

namespace WIN32LAYER {

	/**
	 * @brief ProcResult
	 */
	class ProcResult {
	private:
		bool _needDefaultProc;
		int resultCode;
	public:
		ProcResult();
		virtual ~ProcResult();

		void setResult(int code);
		void setNeedDefaultProc(bool needDefaultProc);
		int getResult();
		bool needDefaultProc();
	};

	/**
	 * @brief WindowProcedureHandler
	 */
	class WindowProcedureHandler {
	private:
		bool enableDoubleBuffering;
	public:
		WindowProcedureHandler();
		virtual ~WindowProcedureHandler();

		void setEnableDoubleBuffering(bool enable);
		bool isEnabledDoubleBuffering();

		ProcResult setResult(int result);
		ProcResult needDefaultProc();
		ProcResult setResultAndNeedDefaultProc(int result);
		WORD getCommand(WPARAM wParam);

		virtual ProcResult onProc(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) = 0;
		virtual void onDraw(HWND hwnd, HDC hdc);

		static LRESULT CALLBACK MainWndProc(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam);
	};
}

#endif