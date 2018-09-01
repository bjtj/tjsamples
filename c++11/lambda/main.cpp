#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main(int argc, char *argv[])
{
	{
		auto func = [] {cout << "hello in lambda" << endl;};
		func();
	}

	{
		auto func = [](int n) -> int { return n * n; };
		auto ret = func(10);
		cout << ret << endl;
	}

	{
		vector<string> lst;
		lst.push_back("hello");
		lst.push_back(" ");
		lst.push_back("world");
		string msg;
		for_each(lst.begin(), lst.end(),
				 [&msg](string str) {
					 msg += str;
				 });
		cout << "msg: " << msg << endl;
	}
	
    return 0;
}
