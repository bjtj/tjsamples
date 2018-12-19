#include <GL/glut.h>

void displayMe(void)
{
    glClear(GL_COLOR_BUFFER_BIT);
    glBegin(GL_TRIANGLES);
    glVertex3f(0.0, 0.0, 0.0);
    glVertex3f(0.5, 0.0, 0.0);
    glVertex3f(0.5, 0.5, 0.0);
    glEnd();


    glBegin(GL_TRIANGLE_FAN);
    glVertex3f(0.0 - 0.7, 0.0, 0.0);
    glVertex3f(0.5 - 0.7, 0.0, 0.0);
    glVertex3f(0.5 - 0.7, 0.5, 0.0);
    glEnd();
    
    glFlush();
}

/* https://www.opengl.org/discussion_boards/showthread.php/123211-Keyboard-Input-in-GLUT */
void handle_key(unsigned char key, int x, int y)
{
    switch (key) {
    case 'q':
	exit(0);
	break;
    default:
	break;
    }
}

int main(int argc, char *argv[])
{

    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE);
    glutInitWindowSize(300, 300);
    glutInitWindowPosition(100, 100);
    glutCreateWindow("Triangle");
    glutKeyboardFunc(handle_key);
    glutDisplayFunc(displayMe);
    glutMainLoop();

    return 0;
}
