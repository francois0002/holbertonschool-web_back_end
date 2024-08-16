import asyncio
import heapq
from wait_random import wait_random

async def wait_n(n: int, max_delay: int) -> list:
    tasks = [wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*tasks)

    sorted_delays = []
    for delay in delays:
        heapq.heappush(sorted_delays, delay)

    return [heapq.heappop(sorted_delays) for _ in range(len(sorted_delays))]
