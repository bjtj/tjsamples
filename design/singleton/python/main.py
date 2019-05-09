class Common:

    class __Inner:
        def __init__(self):
            pass


    instance = None
    def __init__(self):
        raise Exception('not allowed')


    @classmethod
    def get_instance(cls):
        if Common.instance is None:
            Common.instance = Common.__Inner()
        return Common.instance



def main():
    common = Common.get_instance()
    common.x = 10
    print(common.x)

    common2 = Common.get_instance()
    print(common2.x)


    common.x = 20

    print(common.x)
    print(common2.x)
    
if __name__ == '__main__':
    main()
