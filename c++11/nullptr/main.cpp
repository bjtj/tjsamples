#include <iostream>

using namespace std;

void func(int a) {
	cout << "int" << endl;
}

void func(double *p) {
	cout << "double" << endl;
}

int main(int argc, char *argv[])
{
	func(static_cast<double*>(0));
	func(0);
	// func(NULL);					// ambiguous
	func(nullptr);
    return 0;
}
