CREATE TABLE IF NOT EXISTS employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    department VARCHAR(100) NOT NULL,
    role VARCHAR(100) NOT NULL,
    salary NUMERIC(12,2) NOT NULL,
    location VARCHAR(100) NOT NULL
);

INSERT INTO employees
(name, email, department, role, salary, location)
VALUES
(
    'Ajay',
    'ajay@example.com',
    'DevOps',
    'DevOps Engineer',
    750000,
    'Chennai'
),
(
    'John',
    'john@example.com',
    'QA',
    'QA Engineer',
    650000,
    'Bangalore'
),
(
    'Sarah',
    'sarah@example.com',
    'Cloud',
    'AWS Engineer',
    850000,
    'Hyderabad'
)
ON CONFLICT (email) DO NOTHING;
