#include <iostream>
#include <vector>
#include <string>
#include <map>

using namespace std;

class State
{
private:
    map<string, State*> _transits;
public:
    State();
    virtual ~State();
    void setTransit(const string & name, State * to);
    State * nextState(const string & name);
    virtual void onEnter() = 0;
    virtual void onExit() = 0;
};

State::State() {
}
State::~State() {
}
void State::setTransit(const string & name, State * to) {
    _transits[name] = to;
}
State * State::nextState(const string & name) {
    return _transits[name];
}

class StateMachine
{
private:
    map<string, State*> _states;
    State * _startState;
    State * _endState;
    State * _currentState;
public:
    StateMachine();
    virtual ~StateMachine();
    void setStartState(const string & name);
    void start();
    void setEndState(const string & name);
    void end();
    void addState(const string & name, State * state);
    void setTransit(const string & name, const string & from, const string & to);
    void setState(const string & name);
    void transit(const string & name);
    State * currentState();
};

StateMachine::StateMachine() : _startState(NULL), _endState(NULL), _currentState(NULL) {
}
StateMachine::~StateMachine() {
}
void StateMachine::setStartState(const string & name) {
    _startState = _states[name];
}
void StateMachine::start() {
    cout << "--> start" << endl;
    _currentState = _startState;
    _currentState->onEnter();
}
void StateMachine::setEndState(const string & name) {
    _endState = _states[name];
}
void StateMachine::end() {
    cout << "--> end" << endl;
    _currentState->onExit();
    _currentState = _endState;
    _currentState->onEnter();
}
void StateMachine::addState(const string & name, State * state) {
    _states[name] = state;
}
void StateMachine::setTransit(const string & name, const string & from, const string & to) {
    _states[from]->setTransit(name, _states[to]);
}
void StateMachine::setState(const string & name) {
    _currentState = _states[name];
}
void StateMachine::transit(const string & name) {
    cout << "--> transit : " << name << endl;
    _currentState->onExit();
    _currentState = _currentState->nextState(name);
    _currentState->onEnter();
}
State * StateMachine::currentState() {
    return _currentState;
}


class IdleState : public State
{
public:
    IdleState();
    virtual ~IdleState();
    virtual void onEnter();
    virtual void onExit();
};

IdleState::IdleState() {
}
IdleState::~IdleState() {
}
void IdleState::onEnter() {
    cout << "on idle" << endl;
}
void IdleState::onExit() {
}

class OpenedState : public State
{
public:
    OpenedState();
    virtual ~OpenedState();
    virtual void onEnter();
    virtual void onExit();
};

OpenedState::OpenedState() {
}
OpenedState::~OpenedState() {
}
void OpenedState::onEnter() {
    cout << "do open!" << endl;
}
void OpenedState::onExit() {
    cout << "exit opened!" << endl;
}

class ClosedState : public State
{
public:
    ClosedState();
    virtual ~ClosedState();
    virtual void onEnter();
    virtual void onExit();
};

ClosedState::ClosedState() {
}
ClosedState::~ClosedState() {
}
void ClosedState::onEnter() {
    cout << "do close!" << endl;
}
void ClosedState::onExit() {
    cout << "exit closed!" << endl;
}



int main(int argc, char *argv[])
{
    StateMachine machine;
    IdleState idle;
    OpenedState opened;
    ClosedState closed;
    machine.addState("idle", &idle);
    machine.addState("opened", &opened);
    machine.addState("closed", &closed);
    machine.setTransit("activate", "idle", "opened");
    machine.setTransit("deactivate", "opened", "idle");
    machine.setTransit("deactivate", "closed", "idle");
    machine.setTransit("close", "opened", "closed");
    machine.setTransit("open", "closed", "opened");

    machine.setStartState("idle");
    machine.setEndState("idle");
    machine.start();

    machine.transit("activate");
    machine.transit("close");
    machine.transit("open");

    machine.end();
    
    return 0;
}
