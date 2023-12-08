using System.Threading;


Semaphore sem = new Semaphore(initialCount: 1, maximumCount: 1, name: "Global\\MySemaphore");

bool ret = sem.WaitOne(0);
System.Console.WriteLine($"WaitOne(0) - {ret}");
if (!ret)
{
    System.Console.WriteLine("Another instance of this application is already running.");
    return;
}

string? input = System.Console.ReadLine();

System.Console.WriteLine($"User Input - {input}");

sem.Release();
