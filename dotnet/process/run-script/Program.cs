using System;
using System.Diagnostics;


var ps1File = @"hello.ps1";

var startInfo = new ProcessStartInfo()
{
  FileName = "powershell.exe",
  Arguments = $"-NoProfile -ExecutionPolicy ByPass -File \"{ps1File}\"",
  UseShellExecute = false
};

var proc = Process.Start(startInfo);

if (proc != null) {
  proc.WaitForExit();
  Console.WriteLine($"Result: {proc.ExitCode}");
}

