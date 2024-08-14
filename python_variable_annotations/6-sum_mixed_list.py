#!/usr/bin/env python3
"""type-annotated function sum_mixed_list
which takes a list mxd_lst of integers and floats"""


from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """type-annotated function sum_list which
    takes a list input_list of floats as argument"""
    return sum(mxd_lst)
