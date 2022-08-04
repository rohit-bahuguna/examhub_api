-- SET SQL_SAFE_UPDATES =0 ;

-- CREATE SCHEMA exam_portal;

-- CREATE TABLE users (
-- 	userid int,
--     username varchar(50),
--     name_of_user varchar(50) ,
--     email varchar (50),
-- 	user_password varchar(100),
--     user_status tinyint(100),
--     mobile_number int(12),
--     user_type varchar(20)
-- );

-- CREATE TABLE USERS_details(
-- 	userid int ,
-- gender varchar(10) ,
-- address varchar(20) ,
-- profile_picture varchar(20) ,
-- pincode int ,
-- contact int ,
-- city varchar(20) ,
-- country varchar(20) ,
-- college varchar(50) ,
-- company varchar(50) ,
-- age int ,
-- course varchar(50) ,
-- gradution_year year ,
-- account_creation_date timestamp ,
-- last_active_date timestamp
-- );

-- CREATE TABLE questions (
-- question_id bigint,
-- subject_name varchar (20),
-- question varchar(5000),
-- answer_first varchar (200),
-- answer_second varchar (200),
-- answer_third varchar (200),
-- answer_fourth varchar (200),
-- answer_fift varchar (200),
-- correct_answer varchar (200),
-- max_marks bigint,
-- negative_marks float,
-- difficult_level varchar (20)

-- );


-- INSERT INTO USERS (
-- 	userid ,
--     username ,
--     name_of_user  ,
--     email ,
-- 	user_password ,
--     user_status ,
--     mobile_number ,
--     user_type 
-- )
-- VALUES (
-- '01',
-- 'rohitbahuguna',
-- 'Rohit Bahuguna',
-- 'rohitbahuguna@gmail.com',
-- 'df33fd3fd2f1d',
-- false,
-- '1025214524',
-- 'student'
-- )


-- to change the type of the table data  =====>


-- ALTER TABLE users MODIFY COLUMN  user_status boolean;

-- to display  the table data =====>

-- SELECT * FROM exam_portal.users;

-- drop a single coloum fom table =====>

-- ALTER TABLE users DROP COLUMN "column name here"

-- set default value to table column

-- ALTER TABLE users MODIFY COLUMN status boolean false ;


-- set default value to table column

-- ALTER TABLE users MODIFY COLUMN status boolean DEFAULT false ;

-- or =====>

-- CREATE TABLE demo (	userid int DEFAULT false) ;
-- select 
-- * ====>
-- SELECT * FROM users WHERE email  = 'rohitbahuguna@gmail.com';

-- SELECT * FROM users WHERE email = 'rohitbahuguna@gmail.com' LIMIT 1 ;



-- %@gmail.com to select which are ending with @gmail.com (%<select everything which is ending with>)

-- SELECT * FROM users WHERE email LIKE  '%@gmail.com' ;

-- SELECT * FROM users WHERE email =  'rohitbahuguna@gmail.com' AND username = 'rohitbahuguna' ;
  
-- SELECT * FROM users WHERE email =  'rohitbahuguna@gmail.com' OR username = 'rohitbahuguna' ;
  
--  SELECT * FROM users WHERE <something> IS NULL;

--  SELECT * FROM users WHERE <something> IS NOT NULL;


-- SELECT * FROM users WHERE email LIKE'%@gmail.com' AND status = false;

-- ALTER TABLE users_details MODIFY COLUMN  gradution_year year;
-- ALTER TABLE users_details MODIFY COLUMN  account_creation_date timestamp DEFAULT current_timestamp ;
-- ALTER TABLE users_details MODIFY COLUMN  last_active_date timestamp DEFAULT current_timestamp  ;

-- my 

-- INSERT INTO users_details (userid , gender , address , pincode , city ,country , college  , age , 
-- course ,gradution_year ,profile_picture , contact)
-- VALUES (02,'male','Haldwani', 263139,'Nainital' ,'india', 'DSB campus nainital', 24 , 'BVocAMA',
-- 2022 , 'image url' , 1245325415);


-- INSERT INTO user_details (userid , gender , address , profilepic , pincode , contact , city, 
-- country, college , age , course  ,
--  gradyear , accountdate , lastlogin  )
--  VALUES ('01','male','Haldwani', 'image url' ,  263139, 1245325415 , 'Nainital' ,'india', 'DSB campus nainital', 24 , 'BVocAMA',
-- 2022 , '20-12-2021' , '2022-07-29 22:36:17');



-- SELECT * FROM users_details;

-- SELECT *FROM users_details WHERE gender = 'male';

-- SELECT * FROM users_details WHERE gradution_year IS NOT null ORDER BY gradution_year DESC LIMIT 1;

-- SELECT * FROM users_details WHERE gradution_year >= 2022 ;



-- DELETE FROM users_details WHERE  userid = '623';


-- ALTER TABLE users MODIFY COLUMN status boolean DEFAULT false ;

--  UPDATE users_details SET username = 'tom' WHERE  userid = 'id0623' ;

-- Update _user_details SET mobile = '656131313' WHERE userid = 'id0621'

-- ALTER TABLE users ADD UNIQUE email ;


-- INSERT INTO USERS (
-- 	userid ,
--     username ,
--     name_of_user  ,
--     email ,
-- 	user_password ,
--     user_status ,
--     mobile_number ,
--     user_type 
-- )
-- VALUES (
-- '02',
-- 'mohit',
-- 'Mohit Bahuguna',
-- 'mohitbahuguna@gmail.com',
-- 'fjkgd54d4f3xf1d',
-- false,
-- '29627944995',
-- 'student'
-- )

-- ALTER TABLE users MODIFY COLUMN  mobile_number bigint;


