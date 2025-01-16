CREATE TABLE practice (
    id VARCHAR(50),
    username VARCHAR(50),
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);