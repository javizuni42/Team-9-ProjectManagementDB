CREATE TABLE employee_info (
employee_id int UNIQUE NOT NULL,
login_id int UNIQUE AUTO_INCREMENT,
employee_fname varchar(30),
employee_minit char(1),
employee_lname varchar (30),
employee_phone varchar(13),
employee_email varchar(50),
employe_address varchar(50),
employee_city varchar(25),
employee_state varchar(25),
employee_dob date,
employee_jobtitle varchar(30),
employee_salary int,
PRIMARY KEY (employee_id)
);

CREATE TABLE employee_login (
login_id int UNIQUE PRIMARY KEY,
employee_id int UNIQUE,
username varchar(50) NOT NULL,
p_word varchar(50) NOT NULL UNIQUE,
FOREIGN KEY(employee_id) REFERENCES employee_info(employee_id)
);

CREATE TABLE department (
department_id int UNIQUE PRIMARY KEY,
num_employees int,
department_desc varchar(2000),
supervisor varchar(40)
);

CREATE TABLE projects (
project_id int UNIQUE PRIMARY KEY,
task_id int UNIQUE,
project_type varchar(50),
project_desc varchar(2000),
project_start datetime NOT NULL,
project_end datetime DEFAULT NULL
);

CREATE TABLE task (
task_id int UNIQUE NOT NULL PRIMARY KEY,
project_id int UNIQUE NOT NULL,
task_eta TIME NOT NULL,
task_desc varchar(1000),
task_status varchar(1000),
task_issue_id int UNIQUE NOT NULL,
FOREIGN KEY (project_id) REFERENCES projects(project_id)
);

CREATE TABLE task_issue (
task_issue_id int UNIQUE NOT NULL PRIMARY KEY,
task_id int UNIQUE NOT NULL,
task_issue_desc varchar(1000),
task_issue_status varchar(1000),
issue_eta TIME NOT NULL,
FOREIGN KEY (task_id) REFERENCES task(task_id)
);
