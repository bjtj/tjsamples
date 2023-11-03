using System.Collections;


class Program {
  static void Main(string[] args)
    {
      foreach(DictionaryEntry e in System.Environment.GetEnvironmentVariables())
      {
        Console.WriteLine(e.Key  + ":" + e.Value);
      }

      for (var i = 0; i < args.Length; ++i) {
        Console.WriteLine("[" + i + "] " + args[i]);
      }
    }

}


