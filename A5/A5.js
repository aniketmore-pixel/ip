class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.price * this.quantity;
    }

    display() {
        console.log(`Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`);    }
}

class PerishableProduct extends Product {
    constructor(name, price, quantity, expiryDate) {
        super(name, price, quantity); // Call the parent class constructor
        this.expiryDate = expiryDate;
    }

    display() {
        super.display();
        console.log(`Expiry Date: ${this.expiryDate}`);
    }
}

const Inventory = [
    new Product("Laptop",1000,5),
    new Product("Phone",700,10),
    new PerishableProduct("Milk",10,12,"2024-10-30"),
    new PerishableProduct("Bread",20,24,"2024-10-31")
];

function displayInventory(Inventory) {
    console.log("Inventory: ");
    for(let product of Inventory) {
        product.display();
    }
}

/* Generator */
function* inventorySummary(Inventory) {
    yield "Total no. of products: " + Inventory.length;
}

function main() {
    displayInventory(Inventory);
    const summary = inventorySummary(Inventory);
    console.log(summary.next().value);
}

main();