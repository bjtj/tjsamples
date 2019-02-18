#include <iostream>

using namespace std;

namespace scope {

    enum types{
	IDLE, WALKING
    };

    class Type
    {
    public:
	enum _internal {
	    none, trivial
	};
    public:
	Type();
	virtual ~Type();
    };

}

int main(int argc, char *argv[])
{
    cout << scope::IDLE << endl;
    cout << scope::WALKING << endl;
    cout << scope::Type::none << endl;
    cout << scope::Type::trivial << endl;
    // cout << scope::none << endl; -- error
    return 0;
}
