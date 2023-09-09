CREATE TABLE STUDENT(
roll_no int PRIMARY KEY,
name VARCHAR(50),
city VARCHAR(30),
marks INT
);

SELECT * FROM student;

DESC student;

INSERT INTO student
(roll_no, name, city, marks)
VALUES
(110, "adam", "Delhi", 76),
(108, "bob", "Mumbai", 65),
(124, "casey", "Pune", 94),
(112, "duke", "Pune", 80);

SELECT *
FROM student
WHERE marks > 75;

SELECT distinct city
FROM student;

SELECT city
FROM student
GROUP BY city;

SELECT city, max(marks)
FROM student
GROUP BY city;

SELECT avg(marks)
FROM student;

ALTER TABLE student
ADD COLUMN grade varchar(5);

UPDATE student
SET grade = "O"
WHERE marks >= 80;

UPDATE student
SET grade = "A"
WHERE marks >= 70 AND marks < 80;

UPDATE student
SET grade = "B"
WHERE marks BETWEEN 60 AND 69;