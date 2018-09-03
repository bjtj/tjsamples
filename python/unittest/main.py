import unittest


class TestStringMethods(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        print('setup class')

    @classmethod
    def tearDownClass(cls):
        print('teardown class')

    def setUp(self):
        print('setup')

    def tearDown(self):
        print('teardown')
    
    def test_upper(self):
        self.assertEqual('foo'.upper(), 'FOO')

    def test_isupper(self):
        self.assertTrue('FOO'.isupper())
        self.assertFalse('Foo'.isupper())

    def test_split(self):
        s = 'hello world'
        self.assertEqual(s.split(), ['hello', 'world'])
        with self.assertRaises(TypeError):
            s.split(2)


def main():
    unittest.main()

if __name__ == '__main__':
    main()
