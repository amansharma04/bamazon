DROP DATABASE IF EXISTS Bamazon;

CREATE DATABASE Bamazon;

USE bamazon_DB;

CREATE TABLE products (
	item_id int auto_increment not null,
    product_name varchar(100) not null,
    department_name varchar(100) not null,
    price int not null,
    stock_quantity int(5),
    primary key (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ('Sofa', 'Home',  299.99, 3), 
('Shirt Men', 'Clothing',12.99, 20), 
('Shirt Women','Clothing',  14.99, 20), 
('Oxfords', 'Shoes', 44.99, 8),
('Chucks','Shoes',  89.99, 10),
('Derby','Shoes', 399.99, 15);