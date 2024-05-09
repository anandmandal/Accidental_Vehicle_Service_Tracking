from pymongo import MongoClient

client= MongoClient("mongodb+srv://rajeshjan33:rajesh123@cluster0.usme8ro.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

db=client.vehicle_db

collection_name=db["vehicle_collection"]