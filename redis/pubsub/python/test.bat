@echo off

START /B python sub.py

FOR /L %%i in (1, 1, 10) DO (python pub.py "SEQ: %%i" & timeout /t 1 /nobreak>nul)

PAUSE
