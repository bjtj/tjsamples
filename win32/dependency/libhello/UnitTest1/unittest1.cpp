#include "stdafx.h"
#include "CppUnitTest.h"
#include <assert.h>
#include "hello.h"

using namespace Microsoft::VisualStudio::CppUnitTestFramework;

namespace UnitTest1
{		
	TEST_CLASS(UnitTest1)
	{
	public:
		
		TEST_METHOD(TestMethod1)
		{
			// TODO: 테스트 코드를 여기에 입력합니다.

			assert(1 == 1);
			hello();
		}

	};
}