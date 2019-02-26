#include <iostream>
#include <string>
#include <algorithm>
#include <sstream>
#include <iterator>
#include <vector>
#include <fstream>

using namespace std;

int main(int argc, char *argv[])
{

    // contains
    cout << string("hello world bye").find("world") << endl;
    cout << string("hello world bye").find_first_of("w ") << endl;
    cout << string(" \t  hello world bye").find_first_not_of(" \t") << endl;

    // upper
    {
	string str = "Hello World";
	transform(str.begin(), str.end(), str.begin(), ::toupper);
	cout << str << endl;
    }

    // lower
    {
	string str = "Hello World";
	transform(str.begin(), str.end(), str.begin(), ::tolower);
	cout << str << endl;
    }

    // captical
    {
	string str = " hello woRld ";
	string to;
	bool flip = false;
	for (string::iterator iter = str.begin(); iter != str.end(); ++iter) {
	    if (string(" \t").find(*iter) == string::npos) {
		if (flip == false) {
		    to.append(1, ::toupper(*iter));
		} else {
		    to.append(1, ::tolower(*iter));
		}
		flip = true;
	    } else {
		to.append(1, *iter);
		flip = false;
	    }
	}
	cout << "capitalize: '" << to << "'" << endl;
    }

    // trim
    {
	string str = "   x y z   ";
	cout << "str: '" << str << "'" << endl;
	size_t f = str.find_first_not_of(" \t");
	if (f != string::npos) {
	    str = str.substr(f);
	}
	cout << "ltrim: '" << str << "'" << endl;
	f = str.find_last_not_of(" \t");
	if (f != string::npos) {
	    str = str.substr(0, f+1);
	} else {
	    str = "";
	}
	cout << "rtrim: '" << str << "'" << endl;
    }

    // split
    {
	// https://stackoverflow.com/a/237280
	string str = "a b  c";
	istringstream iss(str);
	copy(istream_iterator<string>(iss),
	     istream_iterator<string>(),
	     ostream_iterator<string>(cout, "\n"));

	vector<string> tokens;
	// reuse istringstream
	// https://stackoverflow.com/a/12112355
	iss.clear();
	iss.str(str);
	copy(istream_iterator<string>(iss),
	     istream_iterator<string>(),
	     back_inserter(tokens));
	for (vector<string>::iterator iter = tokens.begin(); iter != tokens.end(); ++iter) {
	    cout << *iter << endl;
	}
    }

    // splitlines
    {
	string text = "hello\nworld\nbye\nend\n";
	stringstream ss(text);
	string to;
	while (getline(ss, to, '\n')) {
	    cout << to << endl;
	}
    }
    {
	// multiple delimeter
	// https://stackoverflow.com/a/37957126
	string text = "GET / HTTP/1.1\r\nContent-Length: 0\r\n\r\n";
	stringstream ss(text);
	string line;
	while (getline(ss, line, '\n')) {
	    stringstream is(line);
	    while (getline(is, line, '\r')) {
		cout << "'" << line << "'" << endl;
	    }
	}
    }

    // is empty
    cout << (string("").empty() ? "(empty)" : "not empty") << endl;
    cout << (string("x").empty() ? "(empty)" : "(not empty)") << endl;

    // substring
    cout << string("hello world").substr(6, 5) << endl;

    // reverse
    {
	string str = "abcdefg";
	reverse(str.begin(), str.end());
	cout << str << endl;
    }

    // length
    cout << string("hello world").length() << endl;


    // string stream

    ostringstream oss;
    oss << "[ostringstream] ";
    oss << "hello";
    oss << " ";
    oss << "world";
    oss << endl;
    cout << oss.str();
    cout << oss.str().c_str();

    return 0;
}
