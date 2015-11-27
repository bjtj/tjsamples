#ifndef __COMMON_HPP__
#define __COMMON_HPP__

#pragma warning( disable : 4996 )
#define WIN32_LEAN_AND_MEAN

#include <Windows.h>
#include <tchar.h>

#define COMMON_WINMAIN(INST,PREVINST,CMDPARAM,CMDSHOW) int APIENTRY WinMain(HINSTANCE INST, HINSTANCE PREVINST, LPSTR CMDPARAM, int CMDSHOW)

namespace WIN32LAYER {

}

#endif