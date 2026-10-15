from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Item(BaseModel):
    id: int
    name: str
    value: float
    isWorking: bool

db = []

@app.get("/api/items")
def get_items(search: Optional[str] = None, sort: Optional[bool] = False):
    result = db.copy()
    if search:
        search_lower = search.lower().replace(" ", "")
        result = [item for item in result if search_lower in item["name"].lower().replace(" ", "")]

    if sort:
        result.sort(key=lambda x: x["value"])

    return result

@app.post("/api/items")
def create_item(item: Item):
    db.append(item.dict())
    return {"message": "Лічильник створено"}

@app.delete("/api/items/{item_id}")
def delete_item(item_id: int):
    global db
    db = [item for item in db if item["id"] != item_id]
    return {"message": "Лічильник видалено"}

@app.put("/api/items/{item_id}")
def update_item(item_id: int, updated_item: Item):
    global db
    for i, item in enumerate(db):
        if item["id"] == item_id:
            db[i] = updated_item.dict()
            return {"message": "Лічильник оновлено"}
    return {"error": "Не знайдено"}