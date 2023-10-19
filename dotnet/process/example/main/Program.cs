using System;
using System.Diagnostics;
using System.ComponentModel;

namespace MyProcessSample
{
  class MyProcess
  {
    public static void Main()
      {
        try
        {
          using (Process myProcess = new Process())
          {
            myProcess.StartInfo.UseShellExecute = false;
            // You can start any process, HelloWorld is a do-nothing example.
            myProcess.StartInfo.FileName = "build/hello.exe";
            myProcess.StartInfo.CreateNoWindow = true;
            myProcess.StartInfo.RedirectStandardOutput = true;
                    
            var started = myProcess.Start();
            Console.WriteLine($"Started? {started}");

            var outputs = new List<string>();

            myProcess.OutputDataReceived += OnOutputDataReceived;
            myProcess.BeginOutputReadLine();

            // This code assumes the process you are starting will terminate itself.
            // Given that it is started without a window so you cannot terminate it
            // on the desktop, it must terminate itself or you can do it programmatically
            // from this application using the Kill method.

            Console.WriteLine($"PID: {myProcess.Id}, ProcessName: {myProcess.ProcessName}");
          }
        }
        catch (Exception e)
        {
          Console.WriteLine(e.Message);
        }
      }

    public static void OnOutputDataReceived(object sender, DataReceivedEventArgs e)
      {
        Console.WriteLine(e.Data);
      }
  }
}
