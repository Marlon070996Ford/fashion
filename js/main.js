function Item(name, price) {
    this.name = name;
    this.price = "R" + price;

}

Item.prototype.description = function () {
    var description = "This is a beautiful " + this.name + " for the low price of " + this.price + "."
     return description;
}

let bed = new Item("bed", 800);
let couch = new Item("couch", 500);
let chair = new Item("chair", 300);
let table = new Item("table", 400);


// bed item on shop page

let description = document.getElementById("item-1-describe");
    description.innerHTML = bed.description();

    price = document.getElementById("item-1-price");
    price.innerHTML = bed.price;



// Couch item on shop page


    description = document.getElementById("item-2-describe");
    description.innerHTML = couch.description();

    price = document.getElementById("item-2-price");
    price.innerHTML = couch.price;