#include <ctime>
#include <string>
#include <iostream>

using namespace std;

string get_greet(const string & who) {
    return "Hello " + who;
}

void print_localtime() {
    time_t result = time(nullptr);
    cout << asctime(localtime(&result));
}

int main(int argc, char *argv[])
{
    string who = "world";
    if (argc > 1) {
	who = argv[1];
    }
    cout << get_greet(who) << endl;
    print_localtime();
    return 0;
}
