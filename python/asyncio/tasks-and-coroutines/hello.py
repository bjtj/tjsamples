import asyncio


async def hello_world():
    print('Hello World!')

loop = asyncio.get_event_loop()
loop.run_until_complete(hello_world())
loop.close()
