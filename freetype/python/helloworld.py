import cv2
import numpy as np
import freetype
import os


def main():
    face = freetype.Face('SEASRN__.ttf')
    text = 'hello world'
    # text = '안녕 이 세계야!'
    face.set_char_size(48 * 64)

    slot = face.glyph

    width, height, baseline = 0, 0, 0
    previous = 0

    for i, c in enumerate(text):
        face.load_char(c)
        bitmap = slot.bitmap
        height = max(height, bitmap.rows + max(0, -(slot.bitmap_top - bitmap.rows)))
        baseline = max(baseline, max(0, -(slot.bitmap_top - bitmap.rows)))
        kerning = face.get_kerning(previous, c)
        width += (slot.advance.x >> 6) + (kerning.x >> 6)
        previous = c

    Z = np.zeros((height, width), dtype=np.ubyte)

    x, y = 0, 0
    previous = 0
    for c in text:
        face.load_char(c)
        bitmap = slot.bitmap
        top = slot.bitmap_top
        left = slot.bitmap_left
        w, h = bitmap.width, bitmap.rows
        y = height - baseline - top
        kerning = face.get_kerning(previous, c)
        x += (kerning.x >> 6)
        Z[y:y + h, x:x + w] += np.array(bitmap.buffer, dtype='ubyte').reshape(h, w)
        x += (slot.advance.x >> 6)
        previous = c

    cv2.imshow('preview', Z)
    cv2.waitKey(0)
    

if __name__ == '__main__':
    main()
