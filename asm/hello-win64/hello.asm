default rel         ; Use RIP-relative addressing like [rel msg] by default
global WinMain
extern ExitProcess  ; external functions in system libraries 
extern MessageBoxA

section .data 
title:  db 'Win64', 0
msg:    db 'Hello world!', 0

section .text
WinMain:
    sub rsp, 28h      ; reserve shadow space and make RSP%16 == 0
    mov rcx, 0       ; hWnd = HWND_DESKTOP
    lea rdx,[msg]    ; LPCSTR lpText
    lea r8,[title]   ; LPCSTR lpCaption
    mov r9d, 0       ; uType = MB_OK
    call MessageBoxA

    mov  ecx,eax        ; exit status = return value of MessageBoxA
    call ExitProcess

    add rsp, 28h       ; if you were going to ret, restore RSP

    hlt     ; privileged instruction that crashes if ever reached.
