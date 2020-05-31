import sys
if sys.version_info[0] < 3 or sys.version_info[1] < 8:
    raise Exception('Required python 3.8 or latest, but {}'.format(sys.version))



def make_lemonade(count):
    print('make lemonade / count: {}'.format(count))
    return count

def out_of_stock():
    print('out of stock')

def make_cider(count):
    print('make cider / count: {}'.format(count))
    return count

def slice_bananas(count):
    print('slice bananas / count: {}'.format(count))
    return count / 2;

class OutOfBananas(Exception):
    pass

def make_smoothies(count):
    print('make smoothies / count: {}'.format(count))
    return count


fruits = [
    {
        'apple': 10,
        'banana': 8,
        'lemon': 5,
    },
    {
        'apple': 2,
        'banana': 1,
        'lemon': 0,
    }
]

def pick_fruit():
    if not fruits:
        return None
    return fruits.pop()
    

def make_juice(fruit, count):
    print('make juice / fruit: {}, count: {}'.format(fruit, count))
    return (fruit, count)


def main():

    fresh_fruit = {
        'apple': 10,
        'banana': 8,
        'lemon': 5,
    }

    if count := fresh_fruit.get('lemon', 0):
        make_lemonade(count)
    else:
        out_of_stock()

    # 

    if (count := fresh_fruit.get('apple', 0)) >= 4:
        make_cider(count)
    else:
        out_of_stock()

    # 

    pieces = 0
    if (count := fresh_fruit.get('banana', 0)) >= 2:
        pieces = slice_bananas(count)

    try:
        smoothies = make_smoothies(pieces)
    except OutOfBananas:
        out_of_stock()

    # 

    if (count := fresh_fruit.get('banana', 0)) >=2:
        pieces = slice_bananas(count)
        to_enjoy = make_smoothies(pieces)
    elif (count := fresh_fruit.get('apple', 0)) >= 4:
        to_enjoy = make_cider(count)
    elif count := fresh_fruit.get('lemon', 0):
        to_enjoy = make_lemonade(count)
    else:
        to_enjoy = 'Nothing'

    # loop-and-a-half

    # bottles = []
    # fresh_fruit = pick_fruit()
    # while fresh_fruit:
    #     for fruit, count in fresh_fruit.items():
    #         batch = make_juice(fruit, count)
    #         bottles.extend(batch)
    #     fresh_fruit = pick_fruit()

    

    # bottles = []
    # while True:
    #     fresh_fruit = pick_fruit()
    #     if not fresh_fruit:
    #         break

    #     for fruit, count in fresh_fruit.items():
    #         batch = make_juice(fruit, count)
    #         bottles.extend(batch)

    
    bottles = []
    while fresh_fruit := pick_fruit():
        for fruit, count in fresh_fruit.items():
            batch = make_juice(fruit, count)
            bottles.extend(batch)

    

if __name__ == '__main__':
    main()
