from fastapi import FastAPI, File, UploadFile
from pydantic import BaseModel
from pymongo import MongoClient

class FileModel(BaseModel):
    files: UploadFile
    fileName: str
    fileDescription: str

