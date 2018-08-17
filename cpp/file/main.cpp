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

	{
	    ifstream ix("none");
	    cout << "is open? " << ix.is_open() << endl;
	}
	{
	    ifstream ix;
	    ix.exceptions(ifstream::failbit | ifstream::badbit);
	    try {
		ix.open("none");
		cout << "not expect" << endl;
	    } catch (const ifstream::failure & e) {
		cerr << e.what() << endl;
	    }
	}
	
	
    return 0;
}
