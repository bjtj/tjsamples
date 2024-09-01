@echo off
set ARGS=%*
set SCRIPT=%~dp0medley.bb
bb %SCRIPT% %ARGS%
