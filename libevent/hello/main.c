/* https://github.com/libevent/libevent/blob/master/sample/hello-world.c */

#include <unistd.h>
#include <string.h>
#include <stdio.h>
#include <stdlib.h>
#include <signal.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <sys/socket.h>

#include <event2/bufferevent.h>
#include <event2/buffer.h>
#include <event2/listener.h>
#include <event2/util.h>
#include <event2/event.h>

static const char MSG[] = "hello, world\n";
static const int PORT = 5000;
static void listener_cb(struct evconnlistener *, evutil_socket_t,
						struct sockaddr *, int socklen, void *);
static void conn_writecb(struct bufferevent *, void *);
static void conn_eventcb(struct bufferevent *, short, void *);
static void signal_cb(evutil_socket_t, short, void *);

int main(int argc, char *argv[])
{

	struct event_base * base;
	struct evconnlistener * listener;
	struct event * signal_event;
	struct sockaddr_in sin;

	base = event_base_new();	/* <== follow the base */
	if (!base) {
		fprintf(stderr, "Could not initialize libevent\n");
		return 1;
	}

	memset(&sin, 0, sizeof(sin));
	sin.sin_family = AF_INET;
	sin.sin_port = htons(PORT);

	listener = evconnlistener_new_bind(base, listener_cb, (void*)base,
									   LEV_OPT_REUSEABLE|LEV_OPT_CLOSE_ON_FREE,
									   -1, (struct sockaddr*)&sin, sizeof(sin));
	if (!listener) {
		fprintf(stderr, "Could not create a listener\n");
		return 1;
	}

	signal_event = evsignal_new(base, SIGINT, signal_cb, (void*)base); 
	if (!signal_event || event_add(signal_event, NULL) < 0) {
		fprintf(stderr, "Could not create/add a signal event\n");
		return 1;
	}

	event_base_dispatch(base);
	evconnlistener_free(listener);
	event_free(signal_event);
	printf("Done\n");
    
    return 0;
}

static void listener_cb(struct evconnlistener * listener, evutil_socket_t fd,
						struct sockaddr * sa, int socklen, void * user_data)
{
	struct event_base * base = user_data;
	struct bufferevent * bev;
	bev = bufferevent_socket_new(base, fd, BEV_OPT_CLOSE_ON_FREE);
	if (!bev) {
		fprintf(stderr, "Error constructing bufferevent\n");
		event_base_loopbreak(base);
		return;
	}
	bufferevent_setcb(bev, NULL, conn_writecb, conn_eventcb, NULL);
	bufferevent_enable(bev, EV_WRITE);
	bufferevent_disable(bev, EV_READ);
	bufferevent_write(bev, MSG, strlen(MSG));
}

static void conn_writecb(struct bufferevent * bev, void * user_data)
{
	struct evbuffer * output = bufferevent_get_output(bev);
	if (evbuffer_get_length(output) == 0) {
		printf("Flushed answer!\n");
		bufferevent_free(bev);
	}
}

static void conn_eventcb(struct bufferevent * bev, short events, void * user_data)
{
	printf("conn_eventcb()\n");
	if (events & BEV_EVENT_EOF) {
		printf("Connection closed\n");
	} else if (events & BEV_EVENT_ERROR) {
		printf("Got an error on the connection: %s\n", strerror(errno));
	}

	bufferevent_free(bev);
}

static void signal_cb(evutil_socket_t sig, short events, void * user_data)
{
	struct event_base * base = user_data;
	struct timeval delay = {1, 0};

	printf("Caught an interrupt signal; exiting cleanly in one seconds.\n");
	event_base_loopexit(base, &delay);
}
