#!/usr/bin/env python3

def index_range(page: int, page_size: int) -> tuple:
    """
    A function that returns a tuple of size two containing a start index and
    an end index corresponding to the range of indexes to return in a list
    for pagination parameters.

    Args:
    page (int): The current page number (1-indexed).
    page_size (int): The number of items per page.

    Returns:
    tuple: A tuple containing the start and end index.
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return start_index, end_index

