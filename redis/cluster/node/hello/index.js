require('dotenv').config()
const { createCluster, createClient } = require('redis');
const assert = require('assert/strict');

const cluster_nodes = process.env.REDIS_CLUSTER_NODES.split(',').filter(i => i).map((i) => ({url: i}));
const password = process.env.REDIS_CLUSTER_PASSWORD;

(async () => {
    const cluster = createCluster({
        rootNodes: cluster_nodes,
        defaults: {
            password: password
        }
    });
    cluster.on('error', (err) => console.error('redis cluster error', err));
    await cluster.connect()

    await cluster.set('key', 'value');
    const value = await cluster.get('key');

    assert.equal(value, 'value');

    cluster.disconnect();
})();

