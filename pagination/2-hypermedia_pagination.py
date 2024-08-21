#!/usr/bin/env python3

""" Implement a get_hyper method that takes the same arguments
(and defaults) as get_page and returns a dictionary containing
the following key-value pairs:

    - page_size: the length of the returned dataset page
    - page: the current page number
    - data: the dataset page (equivalent to return from previous task)
    - next_page: number of the next page, None if no next page
    - prev_page: number of the previous page, None if no previous page
    - total_pages: the total number of pages in the dataset as an intege
"""


from typing import List
import math
import csv


def index_range(page, page_size):
    """Return a tuple of size two containing a start index and an end index"""
    return ((page - 1) * page_size, page * page_size)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Get a page of the dataset
        """
        assert type(page) == int and page > 0
        assert type(page_size) == int and page_size > 0

        start, end = index_range(page, page_size)
        if start >= len(self.dataset()):
            return []

        return self.dataset()[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> dict:
        """Get a page of the dataset"""
        assert type(page) == int and page > 0
        assert type(page_size) == int and page_size > 0

        start, end = index_range(page, page_size)
        if start >= len(self.dataset()):
            return {}

        data = self.dataset()[start:end]
        total_pages = math.ceil(len(self.dataset()) / page_size)
        next_page = page + 1 if page < total_pages else None
        prev_page = page - 1 if page > 1 else None

        return {
            'page_size': len(data),
            'page': page,
            'data': data,
            'next_page': next_page,
            'prev_page': prev_page,
            'total_pages': total_pages
        }
