##database
 create database Productsdata;
 
 use Productsdata;
 
 
 create table products(id int auto_increment primary key not null, name VARCHAR(200) NOT NULL,price int not null,discount varchar(200));
 
 insert into  products(name,price,discount)values('boat',200,'20%'),('bike',500,'40%'),('mobile',600,'30%');

create table users(id int auto_increment primary key not null,name varchar(200) not null,email varchar(200) unique not null,password varchar(200) not null);


select * from  users;
select * from products
