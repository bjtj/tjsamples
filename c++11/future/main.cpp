#include <iostream>
#include <future>
#include <chrono>
#include <vector>

using namespace std;

int func(int x) {
	cout << "func()" << endl;
	return x * x;
}

void func_delay(int idx, unsigned long delay) {
	this_thread::sleep_for(chrono::milliseconds(delay));
	cout << "idx: " << idx << endl;
}

void async_many() {
	for (int i = 0; i < 100; ++i) {
		async(launch::async, func_delay, i, 10);
		cout << "..." << endl;
	}
	cout << "loop end" << endl;
}

void async_many_proper() {
	vector< future<void> > futures;
	for (int i = 0; i < 100; ++i) {
		futures.push_back(async(launch::async, func_delay, i, 10));
		cout << "..." << endl;
	}
	cout << "loop end" << endl;
}

int main(int argc, char *argv[])
{
    future<int> _async = async(launch::async, func, 9);
	this_thread::sleep_for(chrono::milliseconds(10));
	cout << "get()" << endl;
	cout << _async.get() << endl;

	future<int> _deferred = async(launch::deferred, func, 9);
	cout << "get()" << endl;
	cout << _deferred.get() << endl;

	async_many();

	async_many_proper();

	cout << "done" << endl;
	
    return 0;
}
