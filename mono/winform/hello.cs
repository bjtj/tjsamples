using System;
using System.Windows.Forms;

public class HelloWorld: Form
{
    static void Main(string[] args)
	{
	    Application.Run(new HelloWorld());
	}

    public HelloWorld()
	{
	    Text = "Hello Mono World";
	}

}
