var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Friday$19",
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) throw err;
  postItems();
});

function postItems() {
  connection.query("SELECT * FROM products", function (err, queryResult) {
    if (err) throw err;
    var products = [];
    queryResult.forEach((e, i) => products[i] = e.item_id + ": " + e.product_name);
    inquirer.prompt([
      {
        name: "product",
        type: "list",
        message: "Select the product you would like to buy.",
        choices: products
      }
    ]).then(function (answer) {
      var num = answer.product.split(":")[0] - 1;
      inquirer.prompt([
        {
          name: "answer",
          type: "input",
          message: "The price of this item is $" + queryResult[num].price + "\n  There are " + queryResult[num].stock_quantity + " of this item available. How many would you like to buy?",

        }
      ])
    });
  });
}