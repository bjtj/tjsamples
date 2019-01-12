#include <unistd.h>
#include <SDL.h>

int main(int argc, char *argv[])
{
    SDL_Window * window = NULL;
    SDL_Renderer * renderer = NULL;
    int done = 0;

    if (SDL_Init(SDL_INIT_VIDEO) < 0)
    {
	fprintf(stderr, "SDL_Init() failed\n");
	exit(1);
    }

    window = SDL_CreateWindow("SDL Renderer",
			      SDL_WINDOWPOS_UNDEFINED,
			      SDL_WINDOWPOS_UNDEFINED,
			      640, 480,
			      SDL_WINDOW_SHOWN);
    if (window == NULL)
    {
	fprintf(stderr, "SDL_CreateWindow() failed\n");
	exit(1);
    }

    printf("SDL_RENDERER_SOFTWARE: %d\n", SDL_RENDERER_SOFTWARE);
    printf("SDL_RENDERER_ACCELERATED: %d\n", SDL_RENDERER_ACCELERATED);
    printf("SDL_RENDERER_PRESENTVSYNC: %d\n", SDL_RENDERER_PRESENTVSYNC);
    printf("SDL_RENDERER_TARGETTEXTURE: %d\n", SDL_RENDERER_TARGETTEXTURE);
    

    /* https://wiki.libsdl.org/SDL_CreateRenderer */
    renderer = SDL_CreateRenderer(window, -1, 0);
    if (renderer == NULL)
    {
	fprintf(stderr, "SDL_CreateRenderer() failed\n");
	exit(1);
    }
    
    SDL_Event e;
    while (!done)
    {
	while (SDL_PollEvent(&e) != 0)
	{
	    switch (e.type) {
	    case SDL_QUIT:
		done = 1;
		break;
	    case SDL_KEYDOWN:
		switch (e.key.keysym.sym) {
		case SDLK_ESCAPE:
		    done = 1;
		    break;
		default:
		    break;
		}
	    default:
		break;
	    }
	}

	/* https://wiki.libsdl.org/SDL_RenderClear */
	{
	    int r = 0;
	    int g = 0;
	    int b = 255;
	    SDL_SetRenderDrawColor(renderer, r, g, b, 255);
	}
	SDL_RenderClear(renderer);
	SDL_RenderPresent(renderer);
    }

    SDL_DestroyRenderer(renderer);
    SDL_DestroyWindow(window);
    SDL_Quit();
    return 0;
}
