using System;

public class Program
{

  static void Main(string[] args)
    {
      ConsoleKeyInfo cki;

      Console.CancelKeyPress += new ConsoleCancelEventHandler(handler);

      Console.WriteLine("PROGRAM::START");
      Thread.Sleep(10000);
      Console.WriteLine("PROGRAM::DONE");
    }

  public static void handler(object sender, ConsoleCancelEventArgs args)
    {
      Console.WriteLine($"KEY: {args.SpecialKey}");
      Console.WriteLine($" - Cancel?: {args.Cancel}");

      // prevent the process from termiating
      args.Cancel = true;
    }
}
