DROP TABLE IF EXISTS department;

CREATE TABLE department (
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);
INSERT INTO department(name) 
VALUES ('asdf');
INSERT INTO department(name) 
VALUES ('something');
INSERT INTO department(name) 
VALUES ('else');