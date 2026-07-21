-- User
INSERT INTO users (username, password, role)
VALUES
('admin', '123456', 'admin');

-- Courses
INSERT INTO courses (user_id, title, description, price)
VALUES
(1,'NodeJS','NodeJS Basic',200),
(1,'ExpressJS','Express Framework',250),
(1,'TypeScript','TypeScript Basic',180),
(1,'PostgreSQL','Database',220),
(1,'ReactJS','Frontend',350),
(1,'NextJS','Next Framework',400),
(1,'Docker','Container',280),
(1,'Git','Version Control',100),
(1,'REST API','RESTful API',210),
(1,'JWT','Authentication',170);

-- Students
INSERT INTO students (name, email, phone, birth)
VALUES
('Student 1','student1@gmail.com','0900000001','2000-01-01'),
('Student 2','student2@gmail.com','0900000002','2000-01-02'),
('Student 3','student3@gmail.com','0900000003','2000-01-03'),
('Student 4','student4@gmail.com','0900000004','2000-01-04'),
('Student 5','student5@gmail.com','0900000005','2000-01-05'),
('Student 6','student6@gmail.com','0900000006','2000-01-06'),
('Student 7','student7@gmail.com','0900000007','2000-01-07'),
('Student 8','student8@gmail.com','0900000008','2000-01-08'),
('Student 9','student9@gmail.com','0900000009','2000-01-09'),
('Student 10','student10@gmail.com','0900000010','2000-01-10'),
('Student 11','student11@gmail.com','0900000011','2000-01-11'),
('Student 12','student12@gmail.com','0900000012','2000-01-12'),
('Student 13','student13@gmail.com','0900000013','2000-01-13'),
('Student 14','student14@gmail.com','0900000014','2000-01-14'),
('Student 15','student15@gmail.com','0900000015','2000-01-15'),
('Student 16','student16@gmail.com','0900000016','2000-01-16'),
('Student 17','student17@gmail.com','0900000017','2000-01-17'),
('Student 18','student18@gmail.com','0900000018','2000-01-18'),
('Student 19','student19@gmail.com','0900000019','2000-01-19'),
('Student 20','student20@gmail.com','0900000020','2000-01-20');