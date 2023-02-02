# std::weak_ptr #

<https://en.cppreference.com/w/cpp/memory/weak_ptr>

e.g.) output

```
-- start --
construct() - obj1 / my ptr: 0x7fffc38f2ec0
construct() - obj2 / my ptr: 0x7fffc38f2f20
-- do it --
-- done --
destruct() - obj2 / other ptr: 0x7fffc38f2ec0
destruct() - obj1 / other ptr: 0
```
