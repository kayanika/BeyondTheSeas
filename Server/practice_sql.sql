-- const db=require('./db/index');

-- add a new column to the table
ALTER TABLE student_university_shortlist
ADD COLUMN activity_serial integer NOT NULL;

-- adding new column that is a boolean and by default false
ALTER TABLE student_university_shortlist
ADD COLUMN is_shortlisted boolean DEFAULT false;

-- alter datatype of a column to be by default true
ALTER TABLE student_university_shortlist
ALTER COLUMN is_shortlisted SET DEFAULT true;


-- drop the column
ALTER TABLE student_university_shortlist 
DROP COLUMN is_shortlisted;

-- add the column as foreign key
ALTER TABLE student_university_shortlist 
ADD CONSTRAINT fkstudent_university_shortlist_activity_manager 
FOREIGN KEY (activity_serial) 
REFERENCES activity_manager (activityid);

-- drop the foreign key
ALTER TABLE student_university_shortlist
DROP CONSTRAINT fkstudent_university_shortlist_activity_manager;

-- create table from 2 tables
CREATE TABLE student_activity_shortlist AS
SELECT * FROM student
INNER JOIN activity_manager
ON student_university.activity_serial = activity_manager.activityid;

-- drop the table
DROP TABLE student_university_shortlist;

-- add the row to table if not existed before 
INSERT INTO student_university_shortlist (student_id, university_id) VALUES ($1, $2) ON CONFLICT DO NOTHING;

-- the prev query didn't work
-- this is the correct one
INSERT INTO student_university_shortlist (student_id, university_id) VALUES ($1, $2) 
        if not exists (select * from student_university_shortlist where student_id=$1 and university_id=$2);

-- another way to do it
INSERT INTO student_university_shortlist (student_id, university_id)
SELECT $1, $2
WHERE NOT EXISTS (
    SELECT 1 FROM student_university_shortlist WHERE student_id=$1 and university_id=$2
);

-- the previous query
INSERT INTO student_university_shortlist (student_id, university_id) VALUES ($1, $2) 
        if not exists (select * from student_university_shortlist where student_id=$1 and university_id=$2)
        returning *;


-- write it in another way :UPDATE answers SET answer_text=$1 WHERE answer_id=$2 AND question_id=$3 AND student_id=$4 returning *;

-- add a table student_university_blacklist that will have id integer not null, student_id, university_id foreign key, boolen default false is_blacklisted
CREATE TABLE student_university_blacklist (
    id SERIAL PRIMARY KEY,
    student_id integer NOT NULL,
    university_id integer NOT NULL,
    is_blacklisted boolean DEFAULT false,
    CONSTRAINT fkstudent_university_blacklist_student FOREIGN KEY (student_id) REFERENCES student (student_id),
    CONSTRAINT fkstudent_university_blacklist_university FOREIGN KEY (university_id) REFERENCES university (university_id)
);



