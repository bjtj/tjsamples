#include <ncurses.h>
#include <string.h>

int main(int argc, char *argv[])
{
    const char * msg = "Just a string";
    int row, col;

    initscr();
    getmaxyx(stdscr, row, col);
    mvprintw(row / 2, (col - strlen(msg)) / 2, "%s", msg);
    mvprintw(row - 2, 0, "This screen has %d rows and %d columns\n", row, col);
    printw("Try resizing your window(if possible) and then run this program again");
    refresh();
    getch();
    endwin();
    return 0;
}
