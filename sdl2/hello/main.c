#include <SDL.h>
#include <stdio.h>


int main(int argc, char *argv[])
{

    SDL_Window * window = NULL;
    SDL_Surface * screen = NULL;
    int done = 0;

    if (SDL_Init(SDL_INIT_VIDEO) < 0)
    {
	fprintf(stderr, "SDL_Init() failed\n");
	exit(1);
    }

    window = SDL_CreateWindow("SDL Tutorial",
			      SDL_WINDOWPOS_UNDEFINED,
			      SDL_WINDOWPOS_UNDEFINED,
			      640, 480,
			      SDL_WINDOW_SHOWN);

    if (window == NULL)
    {
	fprintf(stderr, "SDL_CreateWindow() failed\n");
	exit(1);
    }

    screen = SDL_GetWindowSurface(window);
    
    SDL_Event e;
    while (!done)
    {
	while (SDL_PollEvent(&e) != 0)
	{
	    if (e.type == SDL_QUIT) {
		done = 1;
		break;
	    }
	}
	SDL_FillRect(screen, NULL, SDL_MapRGB(screen->format, 0x0, 0x0, 0xff));
	SDL_UpdateWindowSurface(window);
    }
    
    SDL_DestroyWindow(window);
    SDL_Quit();
    
    return 0;
}
