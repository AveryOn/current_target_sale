from fastapi import FastAPI, Form, HTTPException as hex, Depends
from fastapi.middleware.cors import CORSMiddleware

from fastapi.exceptions import RequestValidationError
from fastapi.responses import PlainTextResponse
from fastapi.encoders import jsonable_encoder

from typing import Any
from pydantic import BaseModel, Field, EmailStr

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins="http://localhost:8080/",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Net_linX(BaseModel):
    state: int | None = None

@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request, exc):
    return PlainTextResponse(str(exc), status_code=409)

class UserData(BaseModel):
    username: str
    password: str


# Зависимость
async def first(q: str | None=None):
    return q

async def second(q: str = Depends(first), some: str | None=None):
    if not q:
        return some
    if q and some:
        return [q, some]
    else:
        return []

# class User:
#     def __init__(self, q: str | None=None, some: str | None=None):
#         self.q = q
#         self.some = some

@app.get("/test/", tags=['Get Requests'])
async def create_item(params = Depends(second)) -> list[Any]:
    return params


@app.post("/test/", tags=['Post Requests'])
async def post_text(userData: UserData) -> UserData:
    if (len(userData.username) and len(userData.password)) <= 0:
        raise hex(status_code=409, detail='The form fields are empty')
    else:
        # print('successful POST!', {'username': userData.username, 'password': userData.password})
        print(jsonable_encoder(userData))

    return userData

class Item(BaseModel):
    name: str
    age: int
    description: str
    tax: int = 10

items = {
    "foo": {"name": "Foo", "tax": 50.2},
    "bar": {"name": "Bar", "description": "The bartenders", "tax": 20.2},
    "baz": {"name": "Baz", "description": None, "tax": 10.5},
}

@app.put("/put_data/{new_value}")
async def put_data(new_value: str, item: Item):
    items[new_value] = jsonable_encoder(item)
    
    return item.dict(exclude_unset=False)