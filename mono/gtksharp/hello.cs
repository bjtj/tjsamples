using Gtk;
using System;


public class HelloWorld
{
    static void Main(string[] args)
	{
	    Application.Init();
	    Window window = new Window("Hello Mono World");
	    window.Destroyed += OnDestroy;
	    window.Show();

	    Application.Run();
	}

    // https://stackoverrun.com/ko/q/3544170#13211127
    public static void OnDestroy(object o, EventArgs e)
	{
	    Application.Quit();
	}
}
