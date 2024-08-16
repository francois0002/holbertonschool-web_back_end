#!/usr/bin/env python3
"""
Take the code from wait_n and alter it into a new function task_wait_n.
The code is nearly identicalto wait_n except task_wait_random is being called.
"""
import asyncio
from random import uniform
from typing import List

def task_wait_n(n: int, max_delay: int) -> asyncio.Task:
    """
    Take the code from wait_n and alter it into a new function task_wait_n.
    The code is nearly identicalto wait_n except task_wait_random is being called.
    """
    async def _wait_random():

        delay = uniform(0, max_delay)
        await asyncio.sleep(delay)
        return delay

    async def run_tasks():
        tasks = [asyncio.create_task(_wait_random()) for _ in range(n)]
        return await asyncio.gather(*tasks)

    return asyncio.create_task(run_tasks())
