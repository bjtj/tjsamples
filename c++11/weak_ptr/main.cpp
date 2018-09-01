#include <iostream>
#include <memory>

using namespace std;

class Obj
{
private:
	string _name;
	weak_ptr<Obj> _ptr;
public:
    Obj(string name) : _name(name) {
		cout << "construct() - " << _name << " / my ptr: " << this << endl;
	}
    virtual ~Obj() {
		cout << "destruct() - " << _name << " / other ptr: " << _ptr.lock() << endl;
	}
	string name() const {
		return _name;
	}
	weak_ptr<Obj> & ptr() {
		return _ptr;
	}
};


int main(int argc, char *argv[])
{
    shared_ptr<Obj> obj1(new Obj("obj1"));
	shared_ptr<Obj> obj2(new Obj("obj2"));

	obj1->ptr() = obj2;
	obj2->ptr() = obj1;
    return 0;
}
