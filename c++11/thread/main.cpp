#include <iostream>
#include <thread>

using namespace std;

int main(int argc, char *argv[])
{
    thread t1 = thread([] {cout << "thread1" << endl;});
    thread t2 = thread([] {cout << "thread2" << endl;});

    t1.join();
    t2.join();
    return 0;
}
