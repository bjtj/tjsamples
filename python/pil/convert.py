import os
from PIL import Image

def main():
    files = ['lena_color.gif', 'lena_gray.gif']

    for file in files:
        if not os.path.exists(file):
            raise Exception('File not found -- {}'.format(file))

    for file in files:
        img = Image.open(file)
        img = img.convert('RGB')
        target_name = os.path.splitext(file)[0] + '.jpg'
        img.save(target_name)
        Image.open(target_name).show()

    try:
        raw_input()
    except:
        input()
    

if __name__ == '__main__':
    main()
