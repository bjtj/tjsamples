#ifndef __MAP_H__
#define __MAP_H__

#ifdef __cplusplus
extern "C" {
#endif

    typedef int (*cb_equals)(void *, void *);
    typedef void (*cb_free)(void *);

    typedef struct _map_node_t {
    	void * key;
    	void * value;
    	cb_equals cb_key_equals;
    	cb_free cb_key_free;
    	cb_free cb_value_free;
    	struct _map_node_t * next;
    } map_node_t;

    typedef struct _map_t {
    	map_node_t * head_node;
    	cb_equals cb_key_equals;
    	cb_free cb_key_free;
    	cb_free cb_value_free;
    } map_t;


    map_node_t * map_node_new(cb_equals cb_key_equals, cb_free cb_key_free, cb_free cb_value_free);
    void map_node_free(map_node_t * node);
    map_t * map_new(cb_equals cb_key_equals, cb_free cb_key_free, cb_free cb_value_free);
    void map_clear(map_t * map);
    void map_free(map_t * map);
    size_t map_size(map_t * map);
    int map_node_key_equals(map_node_t * node, void * key);
    void * map_get_value(map_t * map, void * key);
    void map_set_value(map_t * map, void * key, void * value);
    void map_remove_item(map_t * map, void * key);


#ifdef __cplusplus
}
#endif

#endif
