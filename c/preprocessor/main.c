#if defined(_WIN32) || defined(_WIN64)
/*  */
#else
#	include <unistd.h>
#endif

#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <assert.h>


/*  */

#define DECL_TYPE_NEW(T,N) T * N##_new(void);

#define DEF_TYPE_NEW(T,N) T * N##_new(void) {	\
	T* _x = (T*)malloc(sizeof(T));		\
	if (_x == NULL) {			\
	    return NULL;			\
	}					\
	memset(_x, 0, sizeof(T));		\
	return _x;				\
    }

#define DEF_TYPE_INIT_BEGIN(T,N,...) T * N##_init(T * __obj, __VA_ARGS__) {
#define DEF_TYPE_INIT_END() return __obj; }

#define DEF_TYPE_FREE_BEGIN(T,N) void N##_free(T * __obj) {
#define DEF_TYPE_FREE_END() free(__obj); }


/*  */

typedef struct _box_t {
    int w;
    int h;
} box_t;

DECL_TYPE_NEW(box_t, box);


typedef struct _buf_t {
    int num;
} buf_t;

DECL_TYPE_NEW(buf_t, buf);


/* box */
DEF_TYPE_NEW(box_t, box);


DEF_TYPE_INIT_BEGIN(box_t, box, int w, int h)
    __obj->w = w;
    __obj->h = h;
DEF_TYPE_INIT_END();


DEF_TYPE_FREE_BEGIN(box_t, box)

DEF_TYPE_FREE_END();


/* buf */
DEF_TYPE_NEW(buf_t, buf);


DEF_TYPE_INIT_BEGIN(buf_t, buf, int num)
    __obj->num = num;
DEF_TYPE_INIT_END();


DEF_TYPE_FREE_BEGIN(buf_t, buf)
    
DEF_TYPE_FREE_END();


int main()
{
    box_t * box = box_new();
    buf_t * buf = buf_new();

    assert(box->w == 0);
    assert(box->h == 0);
    assert(buf->num == 0);

    box_init(box, 1, 2);
    buf_init(buf, 3);

    assert(box->w == 1);
    assert(box->h == 2);
    assert(buf->num == 3);

    box_free(box);
    buf_free(buf);
    
    return 0;
}
