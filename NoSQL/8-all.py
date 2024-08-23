#!/usr/bin/env python3

import pymongo

""" that module lists all documents in a collection """

def list_all(mongo_collection):
    """Lists all documents in a collection"""

    if not mongo_collection:
        return []
    documents = mongo_collection.find()
    return documents

