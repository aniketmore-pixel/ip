// Define a base class for Product
class Product {
    constructor(name, price, quantity) {
        this.name = name;          // Product name
        this.price = price;        // Product price
        this.quantity = quantity;  // Quantity available
    }

    // Method to get the total price of the product based on quantity
    getTotalPrice() {
        return this.price * this.quantity;
    }

    // Method to display product details
    display() {
        console.log(`Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`);
    }
}

// Define a subclass for PerishableProduct
class PerishableProduct extends Product {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);  // Call the parent class constructor
        this.expirationDate = expirationDate; // Expiration date for perishable products
    }

    // Override the display method to include expiration date
    display() {
        super.display(); // Call the parent display method
        console.log(`Expiration Date: ${this.expirationDate}`);
    }
}

// Create an inventory using an array
const inventory = [
    new Product("Laptop", 1000, 5),
    new Product("Phone", 700, 10),
    new PerishableProduct("Milk", 2, 50, "2024-10-30"),
    new PerishableProduct("Bread", 1.5, 20, "2024-10-28")
];

// Function to display inventory details
function displayInventory(inventory) {
    console.log("Inventory:");
    for (let product of inventory) {
        product.display(); // Call the display method for each product
        console.log(`Total Price: $${product.getTotalPrice()}`);
        console.log("---------------------------");
    }
}

// Function to calculate the total value of the inventory
function calculateTotalValue(inventory) {
    let totalValue = 0;
    for (let product of inventory) {
        totalValue += product.getTotalPrice(); // Accumulate total price
    }
    return totalValue;
}

// Generate a summary of the inventory
function* inventorySummary(inventory) {
    yield "Total number of products: " + inventory.length; // Yield total number of products
    yield "Total inventory value: $" + calculateTotalValue(inventory); // Yield total value
}

// Conditional statement to check if inventory is low
function checkInventory(inventory) {
    for (let product of inventory) {
        if (product.quantity < 10) {
            console.log(`Alert: Low stock on ${product.name}. Only ${product.quantity} left.`);
        }
    }
}

// Main function to run the program
function main() {
    displayInventory(inventory); // Display inventory details
    checkInventory(inventory); // Check for low stock

    // Using the generator to get inventory summary
    const summary = inventorySummary(inventory);
    console.log("\nInventory Summary:");
    for (let info of summary) {
        console.log(info); // Log each piece of information yielded by the generator
    }
}

// Run the main function
main();
