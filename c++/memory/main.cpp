#include <memory>
#include <iostream>
#include <string>

using namespace std;

void test() {

    cout << " -- test --" << endl;
    
    allocator<int> al;

    int * i = al.allocate(1);

    al.construct(i, 7);

    cout << i[0] << endl;

    al.destroy(i);
    al.deallocate(i, 1);
}

static int _cnt = 0;

class Person
{
private:
    int _idx;
    string _name;
    int _age;
public:
    Person(const string & name, int age) : _name(name), _age(age) {
	_idx = _cnt++;
	cout << "construct -- Person / " << _idx << endl;
	print();
    }
    Person(const Person & other) {
	_idx = _cnt++;
	cout << "copy -- Person / " << _idx << endl;
	_name = other._name;
	_age = other._age;
	print();
    }
    virtual ~Person() {
	cout << "destruct -- Person / " << _idx << endl;
	print();
    }
    string & name() {
	return _name;
    }
    int & age() {
	return _age;
    }

    void print() {
	cout << " -- Person / name: " << _name << ", age: " << _age << endl;
    }
};


void test2() {

    cout << " -- test2 --" << endl;
    
    Person person("steve", 15);
    Person * p = NULL;
    allocator<Person> al;
    {
	// allocator<Person> al;
	p = al.allocate(1);
	al.construct(p, person);
	p->print();
    }
    {
	// allocator<Person> al;
	al.destroy(p);
	al.deallocate(p, 1);
    }
    person.print();
}

class Optional
{
private:
    Person * _p;
public:
    Optional() : _p(NULL) {
	cout << "optional construct null" << endl;
    }
    Optional(const Optional & other) : _p(NULL) {
	cout << "optional copy" << endl;
	if (other._p) {
	    allocator<Person> al;
	    _p = al.allocate(1);
	    al.construct(_p, *(other._p));
	}
    }
    Optional(const Person & p) {
	cout << "optional construct with person" << endl;
	allocator<Person> al;
	_p = al.allocate(1);
	al.construct(_p, p);
    }
    virtual ~Optional() {
	cout << "optional destroy" << endl;
	if (_p)
	{
	    allocator<Person> al;
	    al.destroy(_p);
	    al.deallocate(_p, 1);
	}
    }
    bool nil() {
	return _p == NULL;
    }
    void print() {
	if (nil()) {
	    cout << "nil" << endl;
	} else {
	    _p->print();
	}
    }

    Optional & operator= (const Optional & other) {
	cout << "optional assign" << endl;

	if (_p) {
	    allocator<Person> al;
	    al.destroy(_p);
	    al.deallocate(_p, 1);
	}
	
	if (other._p) {
	    allocator<Person> al;
	    _p = al.allocate(1);
	    al.construct(_p, *(other._p));
	} else {
	    _p = NULL;
	}
	return *this;
    }
};

Optional getOptional(Person * p) {
    if (p) {
	return Optional(*p);
    }
    return Optional();
}

void printOptional(Optional op) {
    op.print();
}

void test3() {

    cout << " -- test3 --" << endl;
    
    Optional op;
    op.print();

    op = Optional(Person("Steve", 24));
    op.print();

    Person p("Alice", 13);
    op = getOptional(&p);
    printOptional(op);
}

int main(int argc, char *argv[])
{
    test();
    test2();
    test3();
    
    return 0;
}
