#include <iostream>
#include <thread>
#include <queue>
#include <chrono>

using namespace std;

int main(int argc, char *argv[])
{
	queue<int> qu;
	int max = 1000;
    thread t1 = thread([&qu, &max] {
			cout << "thread 1" << endl;
			for (int i = 1; i <= max; ++i) {
				qu.push(i);
				this_thread::sleep_for(chrono::milliseconds(10));
			}
		});
	thread t2 = thread([&qu, &max] {
			cout << "thread 2" << endl;
			while (true) {
				if (qu.empty() == false) {
					int n = qu.front();
					qu.pop();
					cout << n << endl;
					if (n == max) {
						break;
					}
				}
			}
		});

	t1.join();
	t2.join();
    return 0;
}
