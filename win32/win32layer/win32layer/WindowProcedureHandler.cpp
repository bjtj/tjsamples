#include "WindowProcedureHandler.hpp"

#include <map>
#include <algorithm>

namespace WIN32LAYER {

	using namespace std;

	static map<HWND, WindowProcedureHandler*> handlers;

	/**
	 * @brief ProcResult
	 */

	ProcResult::ProcResult() : _needDefaultProc(false), resultCode(0) {
	}
	ProcResult::~ProcResult() {
	}

	void ProcResult::setResult(int code) {
		this->resultCode = code;
	}
	void ProcResult::setNeedDefaultProc(bool needDefaultProc) {
		this->_needDefaultProc = needDefaultProc;
	}
	int ProcResult::getResult() {
		return resultCode;
	}
	bool ProcResult::needDefaultProc() {
		return _needDefaultProc;
	}

	/**
	 * @brief WindowProcedureHandler
	 */

	WindowProcedureHandler::WindowProcedureHandler() : enableDoubleBuffering(false) {
	}

	WindowProcedureHandler::~WindowProcedureHandler() {
	}

	void WindowProcedureHandler::setEnableDoubleBuffering(bool enable) {
		this->enableDoubleBuffering = enable;
	}

	bool WindowProcedureHandler::isEnabledDoubleBuffering() {
		return enableDoubleBuffering;
	}

	ProcResult WindowProcedureHandler::setResult(int result) {
		ProcResult ret;
		ret.setResult(result);
		return ret;
	}
	ProcResult WindowProcedureHandler::needDefaultProc() {
		ProcResult ret;
		ret.setNeedDefaultProc(true);
		return ret;
	}
	ProcResult WindowProcedureHandler::setResultAndNeedDefaultProc(int result) {
		ProcResult ret;
		ret.setResult(result);
		ret.setNeedDefaultProc(true);
		return ret;
	}

	WORD WindowProcedureHandler::getCommand(WPARAM wParam) {
		return LOWORD(wParam);
	}

	void WindowProcedureHandler::onDraw(HWND hwnd, HDC hdc) {
		
	}

	LRESULT CALLBACK WindowProcedureHandler::MainWndProc(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {

		switch (uMsg) {
		case WM_CREATE:
			{
				LPCREATESTRUCT cs = (LPCREATESTRUCT)lParam;
				WindowProcedureHandler * handler = (WindowProcedureHandler*)cs->lpCreateParams;
				if (handler) {
					handlers[hWnd] = handler;
					ProcResult ret = handler->onProc(hWnd, uMsg, wParam, lParam);
					if (!ret.needDefaultProc()) {
						return ret.getResult();
					}
				}
			}
			break;

		case WM_DESTROY:
			if (handlers.find(hWnd) != handlers.end()) {
					WindowProcedureHandler * handler = handlers[hWnd];
					ProcResult ret = handler->onProc(hWnd, uMsg, wParam, lParam);

					handlers.erase(hWnd);

					if (!ret.needDefaultProc()) {
						return ret.getResult();
					}
				}
			break;

		default:
			{
				if (handlers.find(hWnd) != handlers.end()) {
					WindowProcedureHandler * handler = handlers[hWnd];

					switch (uMsg) {
					case WM_PAINT:
						if (handler->isEnabledDoubleBuffering()) {
							HDC hdc;
							PAINTSTRUCT ps;
							RECT rect;
							HDC hDCMem;
							HBITMAP BitMem, OldBitMap;

							hdc = BeginPaint(hWnd, &ps);

							hDCMem = CreateCompatibleDC(hdc);
							GetClientRect(hWnd, &rect);
							BitMem = CreateCompatibleBitmap(hdc, rect.right-rect.left, rect.bottom - rect.top);
							OldBitMap = (HBITMAP)SelectObject(hDCMem, BitMem);

							handler->onDraw(hWnd, hDCMem);

							BitBlt(hdc, rect.left,rect.top,rect.right - rect.left,rect.bottom - rect.top,hDCMem,0,0,SRCCOPY);
							BitMem = (HBITMAP)SelectObject(hDCMem, OldBitMap);
							DeleteDC(hDCMem);
							ReleaseDC(hWnd, hdc);
							DeleteObject(BitMem);

							EndPaint(hWnd, &ps);
						} else {
							PAINTSTRUCT paint;
							HDC hdc = BeginPaint(hWnd, &paint);
							handler->onDraw(hWnd, hdc);
							EndPaint(hWnd, &paint);
						}
						break;
					case WM_ERASEBKGND:
						if (handler->isEnabledDoubleBuffering()) {
							return 0;
						}
						break;
					default:
						break;
					}

					ProcResult ret = handler->onProc(hWnd, uMsg, wParam, lParam);
					if (!ret.needDefaultProc()) {
						return ret.getResult();
					}
				}
			}
			break;
		}

		return DefWindowProc(hWnd, uMsg, wParam, lParam);
	}
}