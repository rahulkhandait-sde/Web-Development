CREATE DATABASE IF NOT EXISTS college;

USE college;

CREATE TABLE IF NOT EXISTS teacher (
id int PRIMARY KEY,
name varchar(30),
subject varchar(10),
salary int
);

INSERT INTO teacher
(id, name, subject, salary)
VALUES
(23, "ajay", "math", 50000),
(47, "bharat", "english", 60000),
(18, "chetan", "chemistry", 45000),
(9, "divya", "pysics", 75000);

SELECT * FROM teacher;

