#include <stdio.h>
#include <stdlib.h>
#include <jpeglib.h>
#include <jerror.h>

#include <GL/glut.h>

struct image_t
{
    unsigned char * data;
    unsigned long width;
    unsigned long height;
    int channels;
    unsigned long size;
};

struct image_t load_jpeg(const char * path)
{
    struct jpeg_decompress_struct info;
    struct jpeg_error_mgr err;
    struct image_t image;

    FILE * fp = fopen(path, "rb");
    if (fp == NULL)
    {
	perror("fopen() failed");
	exit(1);
    }

    info.err = jpeg_std_error(&err);
    jpeg_create_decompress(&info);
    jpeg_stdio_src(&info, fp);
    jpeg_read_header(&info, TRUE);
    jpeg_start_decompress(&info);

    image.width = info.output_width;
    image.height = info.output_height;
    image.channels = info.num_components;
    image.size = image.width * image.height * image.channels;

    image.data = (unsigned char*)malloc(image.size);
    while (info.output_scanline < info.output_height) {
	unsigned char * ptr = image.data + (image.channels * image.width * info.output_scanline);
	jpeg_read_scanlines(&info, &ptr, 1);
    }
    jpeg_finish_decompress(&info);
    jpeg_destroy_decompress(&info);
    fclose(fp);

    return image;
}

unsigned int texture_id;

void display()
{
    glClear(GL_COLOR_BUFFER_BIT);
    glBindTexture(GL_TEXTURE_2D, texture_id);
    glEnable(GL_TEXTURE_2D);
    glBegin(GL_QUADS);
    glTexCoord2i(0, 1); glVertex2i(0, 0);
    glTexCoord2i(0, 0); glVertex2i(0, 480);
    glTexCoord2i(1, 0); glVertex2i(640, 480);
    glTexCoord2i(1, 1); glVertex2i(640, 0);
    glEnd();
    glDisable(GL_TEXTURE_2D);
    glBindTexture(GL_TEXTURE_2D, 0);
    glFlush();
}

void handle_key(unsigned char key, int x, int y)
{
    if (key == 'q')
    {
	exit(0);
    }
}

int main(int argc, char *argv[])
{
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE);
    glutInitWindowSize(640, 480);
    glutInitWindowPosition(100, 100);
    glutCreateWindow("Preview");
    glutKeyboardFunc(handle_key);
    glutDisplayFunc(display);

    glMatrixMode(GL_PROJECTION);
    glOrtho(0, 640, 0, 480, -1, 1);
    glMatrixMode(GL_MODELVIEW);

    /* load jpeg */
    struct image_t image = load_jpeg("lena.jpg");
    glGenTextures(1, &texture_id);
    glBindTexture(GL_TEXTURE_2D, texture_id);
    gluBuild2DMipmaps(GL_TEXTURE_2D, 3, image.width, image.height,
		      GL_RGB, GL_UNSIGNED_BYTE, image.data);
    free(image.data);
    
    glutMainLoop();

    
    return 0;
}
