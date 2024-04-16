from sqlmodel import SQLModel, Field
from datetime import datetime

class Case(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    created_at: datetime = Field(default=datetime.utcnow(), nullable=False)
    status: str = Field(default='submitted')