#include <ncurses.h>

int main(int argc, char *argv[])
{
    initscr();
    printw("hello world");
    refresh();
    getch();
    endwin();
    return 0;
}
