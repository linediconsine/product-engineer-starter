from sqlalchemy import Engine
from sqlmodel import Session, SQLModel
import json

import model

def create_db_and_tables(engine):
    SQLModel.metadata.create_all(engine)

def create_case(case: model.Case, engine: Engine):
    with Session(engine) as session:
        session.add(case)
        session.commit()

def get_all_cases(engine):
    with Session(engine) as session:
        cases = session.query(model.Case).all()
        return { "cases" : cases }


def get_case(case_id: int, engine):
    with Session(engine) as session:
        case = session.query(model.Case).filter(model.Case.id == case_id)
        return { "case" : case[0] }


def show_report(step: int):
    report_file = '../assets/response-1.json'
    if step == 2:
        report_file = '../assets/response-2.json'
    elif step == 3:
        report_file = '../assets/response-3.json'
    with open(report_file) as json_data:
        report = json.loads(json_data.read())
        json_data.close()
    return report

#todo:
# - session.query is deprecated (fix) 
# - find a better name for this module
# - case_id is not int ( according to the example in frontend)

