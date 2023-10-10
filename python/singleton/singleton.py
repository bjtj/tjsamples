class SingletonClass(object):
    def __init__(self):
        print('__INIT__')
        self.mylist = []
        print(' *** mylist: ', self.mylist)

    def __new__(cls):
        print('__NEW__')
        if not hasattr(cls, 'instance'):
            print('NOT EXISTS') # ONCE
            cls.instance = super(SingletonClass, cls).__new__(cls)
        return cls.instance
