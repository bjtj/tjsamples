#include <osl.h>

int main(int argc, char *argv[])
{
	(void)argc;
	(void)argv;
	unsigned long duration;
	unsigned long tick = osl_tick_milli();
	
	osl_init_once();
	printf("Hello\n");
	osl_idle(1000);
	duration = osl_tick_milli() - tick;
	printf("Elapsed: %lu ms.\n", duration);
	return 0;
}
