#include "CppUTest/TestHarness.h"

extern "C"
{
  #include "hello.h"
}

TEST_GROUP(Hello)
{

};

TEST(Hello, Greeting)
{
    hello();
}
