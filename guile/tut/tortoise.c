#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <math.h>
#include <libguile.h>

static const int WIDTH = 10;
static const int HEIGHT = 10;

static FILE *
start_gnuplot()
{
    FILE * output;
    int pipes[2];
    pid_t pid;

    pipe(pipes);
    pid = fork();

    if (!pid) {
	dup2(pipes[0], STDIN_FILENO);
	execlp("gnuplot", "gnuplot", NULL);
	return NULL;		/* not reached */
    }

    output = fdopen(pipes[1], "w");
    fprintf(output, "set multiplot\n");
    fprintf(output, "set parametric\n");
    fprintf(output, "set xrange [-%d:%d]\n", WIDTH, HEIGHT);
    fprintf(output, "set yrange [-%d:%d]\n", HEIGHT, HEIGHT);
    fprintf(output, "set size ratio -1\n");
    fprintf(output, "unset xtics\n");
    fprintf(output, "unset ytics\n");
    fflush(output);

    return output;
}

static void
draw_line(FILE * output, double x1, double y1, double x2, double y2)
{
    fprintf(output, "plot [0:1] %f + %f * t, %f + %f * t notitle\n",
	    x1, x2 - x1, y1, y2 - y1);
    fflush(output);
}



static FILE * global_output;


static double x, y;
static double direction;
static int pendown;

static SCM
tortoise_reset()
{
    x = y = 0.0;
    direction = 0.0;
    pendown = 1;

    fprintf(global_output, "clear\n");
    fflush(global_output);

    return SCM_UNSPECIFIED;
}

static SCM
tortoise_pendown()
{
    SCM result = scm_from_bool(pendown);
    pendown = 1;
    return result;
}

static SCM
tortoise_penup()
{
    SCM result = scm_from_bool(pendown);
    pendown = 0;
    return result;
}

static SCM
tortoise_turn(SCM degrees)
{
    const double value = scm_to_double(degrees);
    direction += M_PI / 180.0 * value;
    return scm_from_double(direction * 180.0 / M_PI);
}

static SCM
tortoise_move(SCM length)
{
    const double value = scm_to_double(length);
    double newX, newY;

    newX = x + value * cos(direction);
    newY = y + value * sin(direction);

    if (pendown) {
	draw_line(global_output, x, y, newX, newY);
    }

    x = newX;
    y = newY;

    return scm_list_2(scm_from_double(x), scm_from_double(y));
}

static void *
register_functions(void * data)
{
    scm_c_define_gsubr("tortoise-reset", 0, 0, 0, &tortoise_reset);
    scm_c_define_gsubr("tortoise-penup", 0, 0, 0, &tortoise_penup);
    scm_c_define_gsubr("tortoise-pendown", 0, 0, 0, &tortoise_pendown);
    scm_c_define_gsubr("tortoise-turn", 1, 0, 0, &tortoise_turn);
    scm_c_define_gsubr("tortoise-move", 1, 0, 0, &tortoise_move);
    return NULL;
}

int main(int argc, char *argv[])
{

    global_output = start_gnuplot();
    tortoise_reset();

    scm_with_guile(&register_functions, NULL);
    scm_shell(argc, argv);


    /* { */
    /* 	int i; */
    /* 	tortoise_pendown(); */
    /* 	for (i = 1; i <= 4; ++i) { */
    /* 	    tortoise_pendown(3.0); */
    /* 	    tortoise_turn(90.0); */
    /* 	} */

    /* } */
    
    return EXIT_SUCCESS;
}
