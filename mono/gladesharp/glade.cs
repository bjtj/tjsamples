using System;
using Gtk;
using Glade;
public class GladeApp
{
    public static void Main (string[] args)
        {
	    new GladeApp (args);
        }

    public GladeApp (string[] args)
        {
	    Application.Init();

	    Glade.XML gxml = new Glade.XML (null, "gui.glade", "window1", null);
	    gxml.Autoconnect (this);

	    // https://stackoverrun.com/ko/q/3544170#13211127
	    window1.Destroyed += OnDestroy;
	    button1.Clicked += OnPressButtonEvent;
	    
	    Application.Run();
        }

    [Widget]
    Window window1;

    [Widget]
    Button button1;

    [Widget]
    Label label1;

    // https://stackoverrun.com/ko/q/3544170#13211127
    public void OnDestroy(object o, EventArgs e)
	{
	    Application.Quit();
	}

    public void OnPressButtonEvent(object o, EventArgs e)
	{
	    Console.WriteLine("Button press");
	    label1.Text = "Mono";
	}
}
