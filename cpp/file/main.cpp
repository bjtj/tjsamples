#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main(int argc, char *argv[])
{

	ofstream out("out.txt");
	out << "hello world" << endl;
	out.close();

	ifstream in("out.txt");
	while (!in.eof()) {
		string line;
		getline(in, line);
		cout << "LINE: " << line << endl;
	}
	in.close();
	
    return 0;
}
