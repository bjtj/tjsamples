#include <iostream>
#include <chrono>
#include <thread>

using namespace std;

int main(int argc, char *argv[])
{

	auto start = chrono::system_clock::now();

	this_thread::sleep_for(chrono::milliseconds(500));

	chrono::duration<double> sec = chrono::system_clock::now() - start;
	auto dur = chrono::system_clock::now() - start;

	cout << sec.count() << " seconds" << endl;
	cout << dur.count() << " ?" << endl;
	

    return 0;
}
