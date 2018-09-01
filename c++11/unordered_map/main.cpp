#include <iostream>
#include <unordered_map>
#include <map>

using namespace std;

int main(int argc, char *argv[])
{
	{
		unordered_map<string, string> table;
		table["a"] = "A";
		table["c"] = "C";
		table["b"] = "B";
		table["e"] = "E";
		table["f"] = "F";
		table["d"] = "D";

		cout << "[unordered_map]" << endl;

		for (auto it = table.begin(); it != table.end(); ++it) {
			cout << it->first << ":" << it->second << endl;
		}

		cout << "[unordered_map]" << endl;

		for (auto iter : table) {
			cout << iter.first << ":" << iter.second << endl;
		}
	}

	{
		map<string, string> table;
		table["a"] = "A";
		table["c"] = "C";
		table["b"] = "B";
		table["e"] = "E";
		table["f"] = "F";
		table["d"] = "D";

		cout << "[map]" << endl;

		for (auto it = table.begin(); it != table.end(); ++it) {
			cout << it->first << ":" << it->second << endl;
		}

		cout << "[map]" << endl;

		for (auto iter : table) {
			cout << iter.first << ":" << iter.second << endl;
		}
	}
    
    return 0;
}
