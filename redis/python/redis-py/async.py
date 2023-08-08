import asyncio
import redis.asyncio as redis

async def main():
    conn = redis.Redis(auto_close_connection_pool=False)
    await conn.set('mykey', 'myvalue')
    val = await conn.get('mykey')
    print('mykey = {}'.format(val))
    await conn.close()

if __name__ == '__main__':
    asyncio.run(main())
