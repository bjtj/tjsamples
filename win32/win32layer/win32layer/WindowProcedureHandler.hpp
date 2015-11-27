#ifndef __WINDOW_PROCEDURE_HANDLE_HPP__
#define __WINDOW_PROCEDURE_HANDLE_HPP__

#include "Common.hpp"

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
	public:
		WindowProcedureHandler() {}
		virtual ~WindowProcedureHandler() {}

		ProcResult setResult(int result);
		ProcResult needDefaultProc();
		ProcResult setResultAndNeedDefaultProc(int result);

		virtual ProcResult onProc(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) = 0;

		static LRESULT CALLBACK MainWndProc(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam);
	};
}

#endif