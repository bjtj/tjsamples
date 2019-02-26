#include <vector>
#include <string>
#include <iostream>

using namespace std;

template<typename T>
void print_vec(vector<T> vec) {
    typename vector<T>::iterator iter;
    iter = vec.begin();
    for (; iter != vec.end(); iter++) {
	cout << *iter << endl;
    }
}

void test_copy() {
    cout << " -- test_copy() --" << endl;
    
    vector<char> vec;
    char arr[10] = {0,};

    for (char i = 0; i < 10; ++i) {
	vec.push_back(i);
    }
    copy(vec.begin(), vec.end(), arr);
    for (int i = 0; i < sizeof(arr); ++i) {
	cout << i << " - " << (int)arr[i] << endl;
    }
}

void test_arr2vec() {
    cout << " -- test_arr2vec() --" << endl;
    float arr[] = {0.1, 0.3, 0.2};
    vector<float> vec(arr, arr + 3);
    print_vec(vec);
}

void test_iterator() {
    vector<int> vec;
    vec.push_back(1);
    vec.push_back(2);
    vec.push_back(3);
    vector<int>::iterator iter = vec.begin();
    iter++;
    *iter = 4;

    iter = vec.begin();
    for (; iter != vec.end(); ++iter) {
	cout << *iter << endl;
    }

}

int main(int argc, char *argv[])
{
    vector<string> vec;

    vec.push_back("a");
    vec.push_back("b");
    vec.push_back("c");
    vec.push_back("d");

    cout << "====" << endl;

    vector<string>::iterator iter = vec.begin();
    for (; iter != vec.end(); ++iter) {
	cout << "item -- " << *iter << endl;
    }


    iter = vec.begin();
    while (iter != vec.end()) {
	if (*iter == "b" || *iter == "d") {
	    iter = vec.erase(iter);
	} else {
	    iter++;
	}
    }

    cout << "====" << endl;
    iter = vec.begin();
    for (; iter != vec.end(); ++iter) {
	cout << "item -- " << *iter << endl;
    }

    test_copy();
    test_arr2vec();

    test_iterator();
    
    return 0;
}
