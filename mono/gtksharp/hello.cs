using Gtk;
using System;


public class HelloWorld
{
    static void Main(string[] args)
	{
	    Application.Init();
	    Window window = new Window("Hello Mono World");
	    window.Show();

	    Application.Run();
	}
}
