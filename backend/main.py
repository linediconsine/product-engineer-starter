import utility
from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware

from sqlmodel import Session, SQLModel, create_engine
import model

sqlite_url = "sqlite:///cases.db"
engine = create_engine(sqlite_url)


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/new_db")
async def root():
    utility.create_db_and_tables(engine)
    return {"message": "created db"}

@app.get("/cases/new")
async def new_case():
    new_case = model.Case()
    utility.create_case(new_case,engine)
    return {"scenario": "new case"}

@app.get("/cases/detail/{case_id}") 
async def read_case(case_id: int):
    return utility.get_case(case_id,engine)

@app.get("/cases/all")
async def retrive_all_case():
    return utility.get_all_cases(engine)

@app.get("/report/{step}")
async def retrive_all_case(step: int):
    return utility.show_report(step)



# todo: case id is not an integer