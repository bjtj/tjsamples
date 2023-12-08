using System;
using System.Threading;

string lockFileName = ".lock";

if (File.Exists(lockFileName)) {
    File.Delete(lockFileName);
}

FileStream stream = File.Create(lockFileName);

Thread.Sleep(10000);

stream.Close();
