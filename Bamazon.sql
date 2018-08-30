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
VALUES ("Bounties", "Household Supplies", 10.00, 23),
("Screws", "Tools and Home Improvement", 30.00, 5),
("ipad", "Electronics", 400.00, 3),
("Toaster", "Home and Kitchen", 40.00, 12),
("Printer", "Office Products", 6.24, 39),
("Staplers", "Office Products", 31.90, 8),
("Weights", "Health and Personal Care", 18.99, 54),
("Water Gallons", "Home and Kitchen", 13.99, 47),
("Drill", "Tools and Home Improvement", 5.01, 113),
("Chargers", "Cell Phone Accessories", 9.99, 148);
