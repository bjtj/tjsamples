#include <iostream>
#include <vector>

using namespace std;


int main(int argc, char *argv[])
{
    auto msg = "hello";
	cout << msg << endl;

	vector<string> lst;
	lst.push_back("hello");
	lst.push_back("world");

	for (auto iter = lst.begin(); iter != lst.end(); iter++) {
		cout << *iter << endl;
	}
	
    return 0;
}
