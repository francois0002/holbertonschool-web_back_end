#!/usr/bin/env python3
"""
a function (do not create an async function, use the regular function
syntax to do this) task_wait_random that takes an integer max_delay and
returns a asyncio.Task
"""
import asyncio
import random

def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Takes integer <max_delay> and returns an asyncio.Task
    """
    async def _wait_random():
        delay = random.uniform(0, max_delay)
        await asyncio.sleep(delay)
        return delay

    return asyncio.create_task(_wait_random())
