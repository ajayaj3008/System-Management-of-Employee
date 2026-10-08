from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.employees import router as employee_router

app = FastAPI(
    title="Employee Management API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    employee_router,
    prefix="/api/employees",
    tags=["Employees"]
)


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "employee-backend"
    }
