#include <iostream>
#include <thread>
#include <queue>
#include <mutex>
#include <chrono>

using namespace std;

int main(int argc, char *argv[])
{
	mutex lock;
	int max = 10000;
    thread t1 = thread([&lock, &max] {
			cout << "thread 1" << endl;
			for (int i = 1; i <= max; ++i) {
				lock.lock();
				cout << "t1 / " << i << endl;
				lock.unlock();
				this_thread::sleep_for(chrono::milliseconds(10));
			}
		});
	thread t2 = thread([&lock, &max] {
			cout << "thread 2" << endl;
			for (int i = 1; i <= max; ++i) {
				lock.lock();
				cout << "t2 / " << i << endl;
				lock.unlock();
				this_thread::sleep_for(chrono::milliseconds(10));
			}
		});

	t1.join();
	t2.join();
    return 0;
}
