#include "SDL.h"

int main(int argc, char *argv[])
{
  SDL_Window *window;
  SDL_Renderer *renderer;
  SDL_Surface *surface;
  SDL_Event event;

  if (SDL_Init(SDL_INIT_VIDEO) < 0) {
	SDL_LogError(SDL_LOG_CATEGORY_APPLICATION, "Couldn't initialize SDL: %s", SDL_GetError());
	return 3;
  }

  if (SDL_CreateWindowAndRenderer(320, 240, SDL_WINDOW_RESIZABLE, &window, &renderer)) {
	SDL_LogError(SDL_LOG_CATEGORY_APPLICATION, "Couldn't create window and renderer: %s", SDL_GetError());
	return 3;
  }

  while (1) {
	SDL_PollEvent(&event);
	if (event.type == SDL_QUIT) {
	  break;
	}
	SDL_SetRenderDrawColor(renderer, 0x00, 0x00, 0x00, 0x00);
	SDL_RenderClear(renderer);
	SDL_RenderPresent(renderer);
  }

  SDL_DestroyRenderer(renderer);
  SDL_DestroyWindow(window);

  SDL_Quit();

  return 0;
}


/* BASIC */

/* #include <stdio.h> */

/* int main(int argc, char **argv) { */
/*   printf("App is running.\n"); */
/*   return 0; */
/* } */
