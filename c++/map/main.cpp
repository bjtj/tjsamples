#include <map>
#include <string>
#include <iostream>

using namespace std;

void print_map(map<string, string> & m) {
    map<string, string>::iterator iter = m.begin();
    for (; iter != m.end(); ++iter) {
	cout << iter->first << " = " << iter->second << endl;
    }
}

void test1()
{
    cout << "[test1]" << endl;
    
    map<string, string> m;

    m["a"] = "A";
    m["b"] = "B";
    m["c"] = "C";
    m["d"] = "D";

    cout << " == map ==" << endl;
    print_map(m);

    map<string, string>::iterator iter = m.begin();
    while (iter != m.end()) {
	if (iter->first == "a" || iter->first == "d") {
	    m.erase(iter++);
	} else {
	    iter++;
	}
    }

    cout << " == map ==" << endl;
    print_map(m);
}

void test2()
{
    cout << endl << "[test2]" << endl;
    
    map<string, int> m;
    m["a"] = 1;
    m["b"] = 2;
    m["c"] = 3;

    int num = 8;
    for (map<string, int>::iterator iter = m.begin(); iter != m.end(); ++iter) {
	iter->second = num++;
    }

    for (map<string, int>::iterator iter = m.begin(); iter != m.end(); ++iter) {
	cout << iter->first << " : " << iter->second << endl;
    }
}

int main(int argc, char *argv[])
{
    test1();
    test2();

    return 0;
}
