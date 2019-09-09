# Install Mono on Linux #

https://www.mono-project.com/docs/getting-started/install/linux/

Ubuntu 18.04

```
sudo apt install gnupg ca-certificates
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 3FA7E0328081BFF6A14DA29AA6A19B38D3D831EF
echo "deb https://download.mono-project.com/repo/ubuntu stable-bionic main" | sudo tee /etc/apt/sources.list.d/mono-official-stable.list
sudo apt update
```

```
sudo apt install mono-devel
```

# Mono Basics #

https://www.mono-project.com/docs/getting-started/mono-basics/


```csharp
using System;
 
public class HelloWorld
{
    
    public static void Main(string[] args)
    {
        Console.WriteLine ("Hello Mono World");
    }
}
```

```
csc hello.cs
```

```
mono hello.exe
```
