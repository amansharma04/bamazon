CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products (
 item_id INT NOT NULL AUTO_INCREMENT,
 product_name VARCHAR(30) NOT NULL,
 department_name VARCHAR(30),
 price FLOAT(10,2),
 stock_quantity INT NOT NULL,
 PRIMARY KEY (item_id)
);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("AA Batteries 20-pack", "Household Supplies", 10.00, 23),
("Cordless Drill", "Tools and Home Improvement", 30.00, 5),
("LED Video Projector", "Electronics", 400.00, 3),
("Memory Foam Pillow 2-pack", "Home and Kitchen", 40.00, 12),
("Dry Erase Marker Set", "Office Products", 6.24, 39),
("Magnetic Dry Erase Board", "Office Products", 31.90, 8),
("Electronic Scale", "Health and Personal Care", 18.99, 54),
("Stainless Steel Water Bottle", "Home and Kitchen", 13.99, 47),
("Combination Padlock", "Tools and Home Improvement", 5.01, 113),
("Cell Phone Charging Cable", "Cell Phone Accessories", 9.99, 148);
