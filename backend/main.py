from fastapi import FastAPI
from routes.route import router
from fastapi.middleware.cors import CORSMiddleware
 
app=FastAPI()

# handling CORS ->cross orgin as able to connect frontend
origins={
    'http://localhost:5173'
}

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


#Routing
app.include_router(router)
