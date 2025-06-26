create database test;
use test;

create table user (
	id int primary key,
    name varchar(255),
    age int ,
    email varchar(255),
    CONSTRAINT agecheck check (age>=13)
    );
    
create table posts(
post_id int primary key,
name varchar(255),
date datetime,
user_id int ,
FOREIGN KEY  (user_id) references user(id)
);


insert into user(id,name,age,email)values
(101,"adam",22,"adam@gmail.com"),
(203,"don",18,"don@gmail.com");

select  * from posts;

insert into user values 
(303,"eva",21,"eva23@gmail.com");

insert into posts(name,post_id,date,user_id) values
("first",2,"2022-01-24",203);


alter table user 
add CONSTRAINT uniqueemai UNIQUE(email);



