# GtkSharpBeginnersGuide #

<https://www.mono-project.com/docs/gui/gtksharp/beginners-guide/>


## Windows 에서 빌드 시 pkg-config 로 gtk-sharp 찾지 못함 ##

<https://stackoverflow.com/a/33592570>

```
mcs hello.cs -r:"C:\Program Files (x86)\Mono\lib\gtk-sharp-2.0
\gtk-sharp.dll" -r:"C:\Program Files (x86)\Mono\lib\gtk-sharp-2.0\atk-sharp.dll"
 -r:"C:\Program Files (x86)\Mono\lib\gtk-sharp-2.0\glib-sharp.dll"
```


## Issue - `Package gtk-sharp-2.0 was not found in the pkg-config search path.` ##

```
mcs hello.cs -pkg:gtk-sharp-2.0
Package gtk-sharp-2.0 was not found in the pkg-config search path.
Perhaps you should add the directory containing `gtk-sharp-2.0.pc'
to the PKG_CONFIG_PATH environment variable
No package 'gtk-sharp-2.0' found
error CS8027: Error running pkg-config. Check the above output.
```

<https://stackoverflow.com/a/24844949>

```
sudo apt update
sudo apt install gtk-sharp2
```
