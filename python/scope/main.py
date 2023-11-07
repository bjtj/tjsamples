# ========== CASE 1 ==========

def case1():
    total = 0

    def _notworking():
        total = 1

    _notworking()

    print(total)                # 0

    def _working():
        nonlocal total
        total = 1

    _working()                  # 1

    print(total)
        

# ========== CASE 2 ==========

def case2():
    class MyCls:
        def hello(self):
            print('Hello!')

        def doit(self):
            def _foo():
                self.hello()
            _foo()

    cls = MyCls()
    cls.doit()                  # Hello!    <--- ???

    def _foo():
        cls.doit()
    _foo()                      # Hello!    <--- ???

    def _foo2():
        nonlocal cls
        cls.doit()
    _foo2()                     # Hello!

    print(locals())
    print(globals())


# ========== CASE 3 ==========
    
g_var = 0

def foo1():
    g_var = 1

def foo2():
    global g_var
    g_var = 2

def foo3():
    global g_var
    g_var = 3
    def _inner():
        global g_var
        g_var = 4
    _inner()

def foo4():
    g_var = 5
    def _inner():
        nonlocal g_var
        g_var = 6
    _inner()

# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
# !!!        COMPILE ERROR       !!!
# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
# def foo5():
#     global g_var
#     g_var = 7
#     def _inner():
#         nonlocal g_var          # SyntaxError: no binding for nonlocal 'g_var' found
#         g_var = 8
#     _inner()
# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
# !!!        COMPILE ERROR       !!!
# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


def case3():
    print(g_var)                # 0
    foo1()
    print(g_var)                # 0
    foo2()
    print(g_var)                # 2
    foo3()
    print(g_var)                # 4
    foo4()
    print(g_var)                # 4



def main():
    print('========== CASE 1 ==========')
    case1()
    print('========== CASE 2 ==========')
    case2()
    print('========== CASE 3 ==========')
    case3()


    print(locals())
    print(globals())
    


if __name__ == '__main__':
    main()
