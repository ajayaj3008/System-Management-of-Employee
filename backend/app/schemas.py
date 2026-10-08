from pydantic import BaseModel, EmailStr


class EmployeeBase(BaseModel):

    name: str
    email: EmailStr
    department: str
    role: str
    salary: float
    location: str


class EmployeeCreate(EmployeeBase):
    pass


class EmployeeResponse(EmployeeBase):

    id: int

    class Config:
        from_attributes = True
