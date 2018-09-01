#include <iostream>
#include <array>
#include <algorithm>

using namespace std;

int main(int argc, char *argv[])
{
    array<int,5> arr = {1,2,3,4,5};
	for (auto it = arr.begin(); it != arr.end(); ++it) {
		cout << *it << endl;
	}

	array<int,5> zeros = {0,};
	for_each(zeros.begin(), zeros.end(),
			 [](int n) {
				 cout << n << endl;
			 });

    return 0;
}
