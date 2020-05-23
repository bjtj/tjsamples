@echo off

mcs hello.cs -r:"C:\Program Files (x86)\Mono\lib\gtk-sharp-2.0\gtk-sharp.dll" -r:"C:\Program Files (x86)\Mono\lib\gtk-sharp-2.0\atk-sharp.dll" -r:"C:\Program Files (x86)\Mono\lib\gtk-sharp-2.0\glib-sharp.dll"
