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

SELECT *
FROM teacher
WHERE salary > 55000;

ALTER TABLE teacher
CHANGE COLUMN salary ctc int;

UPDATE teacher
SET ctc = ctc + ctc * 0.25;

ALTER TABLE teacher
ADD COLUMN city varchar(15) default "Gurgaon";

ALTER TABLE teacher
DROP column ctc;
