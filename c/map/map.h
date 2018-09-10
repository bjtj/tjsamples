#ifndef __MAP_H__
#define __MAP_H__

#ifdef __cplusplus
extern "C" {
#endif

    typedef int (*cb_equals)(void *, void *);
    typedef void (*cb_free)(void *);

	struct map_node_t;
	struct map_t;

    struct map_node_t * map_node_new(cb_equals cb_key_equals, cb_free cb_key_free, cb_free cb_value_free);
    void map_node_free(struct map_node_t * node);
    struct map_t * map_new(cb_equals cb_key_equals, cb_free cb_key_free, cb_free cb_value_free);
    void map_clear(struct map_t * map);
    void map_free(struct map_t * map);
    size_t map_size(struct map_t * map);
    int map_node_key_equals(struct map_node_t * node, void * key);
    void * map_get_value(struct map_t * map, void * key);
    void map_set_value(struct map_t * map, void * key, void * value);
    void map_remove_item(struct map_t * map, void * key);


#ifdef __cplusplus
}
#endif

#endif
