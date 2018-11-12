#include <vector>
#include <string>
#include <iostream>

using namespace std;

int main(int argc, char *argv[])
{
    vector<string> vec;

    vec.push_back("a");
    vec.push_back("b");
    vec.push_back("c");
    vec.push_back("d");

    cout << "====" << endl;

    vector<string>::iterator iter = vec.begin();
    for (; iter != vec.end(); ++iter) {
	cout << "item -- " << *iter << endl;
    }


    iter = vec.begin();
    while (iter != vec.end()) {
	if (*iter == "b" || *iter == "d") {
	    iter = vec.erase(iter);
	} else {
	    iter++;
	}
    }

    cout << "====" << endl;
    iter = vec.begin();
    for (; iter != vec.end(); ++iter) {
	cout << "item -- " << *iter << endl;
    }
    
    return 0;
}
