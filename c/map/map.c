#include <unistd.h>
#include <stdlib.h>
#include <string.h>
#include "map.h"


map_node_t * map_node_new(cb_equals cb_key_equals, cb_free cb_key_free, cb_free cb_value_free)
{
    map_node_t * node = (map_node_t*)malloc(sizeof(map_node_t));
    memset(node, 0, sizeof(map_node_t));
    node->cb_key_equals = cb_key_equals;
    node->cb_key_free = cb_key_free;
    node->cb_value_free = cb_value_free;
    return node;
}

void map_node_free(map_node_t * node)
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

map_t * map_new(cb_equals cb_key_equals, cb_free cb_key_free, cb_free cb_value_free)
{
    map_t * map = (map_t*)malloc(sizeof(map_t));
    memset(map, 0, sizeof(map_t));
    map->cb_key_equals = cb_key_equals;
    map->cb_key_free = cb_key_free;
    map->cb_value_free = cb_value_free;
    return map;
}

void map_clear(map_t * map)
{
    map_node_t * node = map->head_node;
    while (node)
    {
	map_node_t * next = node->next;
	map_node_free(node);
	node = next;
    }
    map->head_node = NULL;
}

void map_free(map_t * map)
{
    map_clear(map);
    free(map);
}

size_t map_size(map_t * map)
{
    size_t cnt = 0;
    map_node_t * node = map->head_node;
    while (node)
    {
	cnt++;
	node = node->next;
    }
    return cnt;
}

int map_node_key_equals(map_node_t * node, void * key)
{
    if (node->cb_key_equals) {
	return node->cb_key_equals(node->key, key);
    }
    return node->key == key;
}

void * map_get_value(map_t * map, void * key)
{
    map_node_t * node = map->head_node;
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

void map_set_value(map_t * map, void * key, void * value)
{
    map_node_t * prev_node = map->head_node;
    if (prev_node == NULL)
    {
	map_node_t * node = map_node_new(map->cb_key_equals, map->cb_key_free, map->cb_value_free);
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
	map_node_t * node = prev_node->next;
	if (map_node_key_equals(node, key))
	{
	    node->value = value;
	    return;
	}
	prev_node = prev_node->next;
    }
    {
	map_node_t * node = map_node_new(map->cb_key_equals, map->cb_key_free, map->cb_value_free);
	node->key = key;
	node->value = value;
	prev_node->next = node;
    }
}

void map_remove_item(map_t * map, void * key)
{
    map_node_t * prev_node = map->head_node;
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
	map_node_t * node = prev_node->next;
	if (map_node_key_equals(node, key))
	{
	    prev_node->next = node->next;
	    map_node_free(node);
	    return;
	}
	prev_node = prev_node->next;
    }
}
