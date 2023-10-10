from singleton import SingletonClass
from module1 import update_singleton

def main():
    singleton = SingletonClass()
    new_singleton = SingletonClass()
    
    print(singleton is new_singleton) # True

    singleton.singl_variable = "Singleton Variable"
    print(new_singleton.singl_variable) # Singleton Variable

    print('mylist:', singleton.mylist) # mylist: []

    update_singleton()

    print(new_singleton.singl_variable) # updated Singleton Variable
    print('mylist:', singleton.mylist) # mylist: ['a']

if __name__ == '__main__':
    main()
