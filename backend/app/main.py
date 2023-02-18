import uvicorn
from fastapi import FastAPI

app = FastAPI()


@app.get("/api")
async def root():
    return {"message": "Hello World"}

@app.get("/api/items/{id}")
def get_single_item(id: str):
    return {"message": "you just call item {0}".format(id)}

def start():
    """Start the server with 'poetry run start'"""
    uvicorn.run("app.main:app", host="localhost", port=8000, reload=True)
