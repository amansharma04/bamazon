//add variables that show which node packages will be required
var mysql = require('mysql');
var inquirer = require('inquirer');

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Password!",
    database: "Bamazon.sql"
});

//Asks user what they'd like to buy
function beginPrompt() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'item_id',
            message: 'Hello, please enter the Item ID for the item you will be purchasing',
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'How many of this item would you like to buy?',

        }
    ]).then(function (input) {

        var item = input.item_id;
        var quantity = input.quantity;
        var startCnstrct = 'SELECT * FROM products WHERE ?';

        connection.query(startCnstrct, { item_id: item }, function (err, data) {
            if (err) throw err;

            if (data.length === 0) {
                console.log('The item id you entered is not in our system.');
                showItems();

            } else {
                var productData = data[0];
                if (quantity <= productData.stock_quantity) {
                    console.log('Congratulations, the product you requested is in stock! Placing order!');
                    var updatestartCnstrct = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;
                    // Update stock
                    connection.query(updatestartCnstrct, function (err, data) {
                        if (err) throw err;

                        console.log('Thank you for your order! Your order total is $' + productData.price * quantity);
                        console.log('We appreciate your business. Please come again.');
                        console.log("\n****************************************************************\n");

                        // disconnect
                        connection.end();
                    })
                } else {
                    console.log('Oh no! We are out of this item. Please change your order, or contact us at 1-800-bmzn');
                    console.log("\n****************************************************************\n");

                    showItems();
                }
            }
        })
    })
}

// this function will show current stock of products
function showItems() {

    startCnstrct = 'SELECT * FROM products';

    connection.query(startCnstrct, function (err, data) {
        if (err) throw err;

        console.log('\nHere is what we have in stock:');

        var inputDisp = '';
        for (var i = 0; i < data.length; i++) {
            inputDisp = '';
            inputDisp += 'Item ID: ' + data[i].item_id + '  *  ';
            inputDisp += 'Product Name: ' + data[i].product_name + '  *  ';
            inputDisp += 'Department: ' + data[i].department_name + '  *  ';
            inputDisp += 'Price: $' + data[i].price + '\n';

            console.log(inputDisp);
        }

        console.log("***************************************************************\n");

        beginPrompt();
    })
}

function startApp() {
    showItems();
}

//Begin app
startApp();
