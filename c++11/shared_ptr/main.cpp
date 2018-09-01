#include <iostream>
#include <memory>

using namespace std;

class Obj
{
private:
	string _name;
public:
	Obj(string name) : _name(name) {
		cout << _name << " / obj construct()" << endl;
	}
	virtual ~Obj() {
		cout << _name << " / obj destruct()" << endl;
	}
	string name() const {
		return _name;
	}
};

int main(int argc, char *argv[])
{
    shared_ptr<Obj> obj(new Obj("obj1"));

	obj.reset(new Obj("obj2"));

	auto obj3 = new Obj("obj3");
	obj.reset(obj3);
	cout << "use count: " << obj.use_count() << endl;

	obj.reset();

	obj.reset(new Obj("obj4"));

	shared_ptr<Obj> obj5(new Obj("obj5"));
	obj.swap(obj5);
	cout << "obj->name() : " << obj->name() << endl;
	cout << "obj5->name() : " << obj5->name() << endl;
    return 0;
}
