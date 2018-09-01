#include <iostream>
#include <vector>

using namespace std;

int main(int argc, char *argv[])
{

	{
		vector<int> lst;
		lst.push_back(1);
		lst.push_back(2);
		lst.push_back(3);
		for (auto i : lst) {
			cout << i << endl;
		}
	}
    
    return 0;
}
