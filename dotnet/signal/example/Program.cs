﻿using System;

class Program
{
  static void Main(string[] args)
    {
      ConsoleKeyInfo cki;

      Console.Clear();

      // Establish an event handler to process key press events.
      Console.CancelKeyPress += new ConsoleCancelEventHandler(myHandler);
      while (true)
      {
        Console.Write("Press any key, or 'X' to quit, or ");
        Console.WriteLine("CTRL+C to interrupt the read operation:");

        // Start a console read operation. Do not display the input.
        cki = Console.ReadKey(true);

        // Announce the name of the key that was pressed .
        Console.WriteLine($"  Key pressed: {cki.Key}\n");

        // Exit if the user pressed the 'X' key.
        if (cki.Key == ConsoleKey.X) break;
      }
    }

  protected static void myHandler(object sender, ConsoleCancelEventArgs args)
    {
      Console.WriteLine("\nThe read operation has been interrupted.");
      Console.WriteLine($"  Key pressed: {args.SpecialKey}");
      Console.WriteLine($"  Cancel property: {args.Cancel}");

      // Set the Cancel property to true to prevent the process from terminating.
      Console.WriteLine("Setting the Cancel property to true...");
      args.Cancel = true;

      // Announce the new value of the Cancel property.
      Console.WriteLine($"  Cancel property: {args.Cancel}");
      Console.WriteLine("The read operation will resume...\n");
    }
}
