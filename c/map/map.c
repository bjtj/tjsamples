#include <unistd.h>
#include <stdlib.h>
#include <string.h>
#include "map.h"


struct map_node_t {
	void * key;
	void * value;
	cb_equals cb_key_equals;
	cb_free cb_key_free;
	cb_free cb_value_free;
	struct map_node_t * next;
};

struct map_t {
	struct map_node_t * head_node;
	cb_equals cb_key_equals;
	cb_free cb_key_free;
	cb_free cb_value_free;
};

struct map_node_t * map_node_new(cb_equals cb_key_equals, cb_free cb_key_free, cb_free cb_value_free)
{
    struct map_node_t * node = (struct map_node_t*)malloc(sizeof(struct map_node_t));
    memset(node, 0, sizeof(struct map_node_t));
    node->cb_key_equals = cb_key_equals;
    node->cb_key_free = cb_key_free;
    node->cb_value_free = cb_value_free;
    return node;
}

void map_node_free(struct map_node_t * node)
{
    if (node->cb_key_free)
    {
		node->cb_key_free(node->key);
    }
    
    if (node->cb_value_free)
    {
		node->cb_value_free(node->value);
    }
    
    free(node);
}

struct map_t * map_new(cb_equals cb_key_equals, cb_free cb_key_free, cb_free cb_value_free)
{
    struct map_t * map = (struct map_t*)malloc(sizeof(struct map_t));
    memset(map, 0, sizeof(struct map_t));
    map->cb_key_equals = cb_key_equals;
    map->cb_key_free = cb_key_free;
    map->cb_value_free = cb_value_free;
    return map;
}

void map_clear(struct map_t * map)
{
    struct map_node_t * node = map->head_node;
    while (node)
    {
		struct map_node_t * next = node->next;
		map_node_free(node);
		node = next;
    }
    map->head_node = NULL;
}

void map_free(struct map_t * map)
{
    map_clear(map);
    free(map);
}

size_t map_size(struct map_t * map)
{
    size_t cnt = 0;
    struct map_node_t * node = map->head_node;
    while (node)
    {
		cnt++;
		node = node->next;
    }
    return cnt;
}

int map_node_key_equals(struct map_node_t * node, void * key)
{
    if (node->cb_key_equals) {
		return node->cb_key_equals(node->key, key);
    }
    return node->key == key;
}

void * map_get_value(struct map_t * map, void * key)
{
    struct map_node_t * node = map->head_node;
    while (node)
    {
		if (map_node_key_equals(node, key))
		{
			return node->value;
		}
		node = node->next;
    }
    return NULL;
}

void map_set_value(struct map_t * map, void * key, void * value)
{
    struct map_node_t * prev_node = map->head_node;
    if (prev_node == NULL)
    {
		struct map_node_t * node = map_node_new(map->cb_key_equals, map->cb_key_free, map->cb_value_free);
		node->key = key;
		node->value = value;
		map->head_node = node;
		return;
    }
    if (prev_node->key == key)
    {
		prev_node->value = value;
		return;
    }
    while (prev_node->next)
    {
		struct map_node_t * node = prev_node->next;
		if (map_node_key_equals(node, key))
		{
			node->value = value;
			return;
		}
		prev_node = prev_node->next;
    }
    {
		struct map_node_t * node = map_node_new(map->cb_key_equals, map->cb_key_free, map->cb_value_free);
		node->key = key;
		node->value = value;
		prev_node->next = node;
    }
}

void map_remove_item(struct map_t * map, void * key)
{
    struct map_node_t * prev_node = map->head_node;
    if (prev_node == NULL)
    {
		return;
    }
    if (map_node_key_equals(prev_node, key))
    {
		map_node_free(prev_node);
		map->head_node = map->head_node->next;
    }
    while (prev_node->next)
    {
		struct map_node_t * node = prev_node->next;
		if (map_node_key_equals(node, key))
		{
			prev_node->next = node->next;
			map_node_free(node);
			return;
		}
		prev_node = prev_node->next;
    }
}
