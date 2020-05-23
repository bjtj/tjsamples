@echo off

mcs glade.cs -r:"C:\Program Files (x86)\Mono\lib\gtk-sharp-2.0\gtk-sharp.dll" -r:"C:\Program Files (x86)\Mono\lib\gtk-sharp-2.0\atk-sharp.dll" -r:"C:\Program Files (x86)\Mono\lib\gtk-sharp-2.0\glib-sharp.dll" -r:"C:\Program Files (x86)\Mono\lib\glade\glade-sharp.dll" -resource:gui.glade

rem mcs glade.cs -r:"C:\Program Files (x86)\Mono\lib\glade\glade-sharp.dll" -resource:gui.glade
