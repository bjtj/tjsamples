import os
from PIL import Image


# Modes
# ----
# 
# * https://pillow.readthedocs.io/en/3.3.x/handbook/concepts.html
# 
#     * `1` (1-bit pixels, black and white, stored with one pixel per byte)
#     * `L` (8-bit pixels, black and white)
#     * `P` (8-bit pixels, mapped to any other mode using a color palette)
#     * `RGB` (3x8-bit pixels, true color)
#     * `RGBA` (4x8-bit pixels, true color with transparency mask)
#     * `CMYK` (4x8-bit pixels, color separation)
#     * `YCbCr` (3x8-bit pixels, color video format)
#         * Note that this refers to the JPEG, and not the ITU-R BT.2020, standard
#     * `LAB` (3x8-bit pixels, the L*a*b color space)
#     * `HSV` (3x8-bit pixels, Hue, Saturation, Value color space)
#     * `I` (32-bit signed integer pixels)
#     * `F` (32-bit floating point pixels)


# https://stackoverflow.com/a/1996609
def get_depth(img):
    mode_to_bpp = {'1':1, 'L':8, 'P':8, 'RGB':24, 'RGBA':32, 'CMYK':32, 'YCbCr':24, 'I':32, 'F':32}
    return mode_to_bpp[img.mode]


def print_info(name, img):
    print('[{}]'.format(name))
    print("mode: {}({}) / size: {}".format(img.mode, get_depth(img), img.size))


def main():

    files = ['lena_color.gif', 'lena_gray.gif']

    for file in files:
        if not os.path.exists(file):
            raise Exception('File not found -- {}'.format(file))

    for file in files:
        img = Image.open(file)
        print_info(file, img)
        img.show()

    try:
        raw_input()
    except:
        input()

if __name__ == '__main__':
    main()
