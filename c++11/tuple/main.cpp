#include <iostream>
#include <tuple>

using namespace std;

int main(int argc, char *argv[])
{
    auto items = tuple<string, string, string>("hello", "world", "bye");
	cout << get<0>(items) << endl;
	cout << get<1>(items) << endl;
	cout << get<2>(items) << endl;

	items = make_tuple(1, "two", 3);
	auto count = tuple_size<decltype(items)>::value;
	cout << "Count: " << count << endl;

    return 0;
}
