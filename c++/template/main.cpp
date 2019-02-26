#include <iostream>

using namespace std;

class Base
{
public:
    Base() {
    }
    virtual ~Base() {
    }
    virtual void print() = 0;
};


class A : public Base
{
public:
    A() {}
    virtual ~A() {}
    void hello() {
	cout << "hello" << endl;
    }
    virtual void print() {
	cout << "A" << endl;
    }
};


class B : public Base
{
public:
    B() {}
    virtual ~B() {}
    void bye() {
	cout << "bye" << endl;
    }
    virtual void print() {
	cout << "B" << endl;
    }
};

template <typename T>
T * unwrap(Base * b) {
    return (T*)b;
}

int main(int argc, char *argv[])
{
    Base * a = new A;
    Base * b = new B;

    unwrap<A>(a)->hello();
    unwrap<B>(b)->bye();
    
    return 0;
}
