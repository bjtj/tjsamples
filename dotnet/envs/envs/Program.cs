using System;
using System.IO;
using System.Collections;


class Program {
  static void Main(string[] args)
    {

      for (var i = 0; i < args.Length; ++i) {
        Console.WriteLine("[" + i + "] " + args[i]);
      }

      string[] xargs = Environment.GetCommandLineArgs();
      Console.WriteLine("Args: {0}", string.Join(", ", xargs));

      
      foreach(DictionaryEntry e in System.Environment.GetEnvironmentVariables())
      {
        Console.WriteLine(e.Key  + ":" + e.Value);
      }
    }
}
