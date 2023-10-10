from singleton import SingletonClass

def update_singleton():
    sc = SingletonClass()
    sc.singl_variable = 'updated {}'.format(sc.singl_variable)
    sc.mylist.append('a')
