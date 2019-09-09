
# Issue - `Package gtk-sharp-2.0 was not found in the pkg-config search path.` #

```
mcs hello.cs -pkg:gtk-sharp-2.0
Package gtk-sharp-2.0 was not found in the pkg-config search path.
Perhaps you should add the directory containing `gtk-sharp-2.0.pc'
to the PKG_CONFIG_PATH environment variable
No package 'gtk-sharp-2.0' found
error CS8027: Error running pkg-config. Check the above output.
```

https://stackoverflow.com/a/24844949

```
sudo apt update
sudo apt install gtk-sharp2
```
