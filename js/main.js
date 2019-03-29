function Item(name, price) {
    this.name = name;
    this.price = "R" + price;

}

Item.prototype.description = function () {
    var description = "This is a beautiful " + this.name + " for the low price of " + this.price + "."
     return description;
}

let chair = new Item("chair", 800);
let table = new Item("table", 1000);
let bed = new Item("bed", 2300);
let couch = new Item("couch", 1500);


// chair item on shop page

let description = document.getElementById("item-1-describe");
    description.innerHTML = chair.description();

    price = document.getElementById("item-1-price");
    price.innerHTML = chair.price;



// Couch item on shop page


    description = document.getElementById("item-2-describe");
    description.innerHTML = table.description();

    price = document.getElementById("item-2-price");
    price.innerHTML = table.price;


// bed item shop page

    description = document.getElementById("item-3-describe");
    description.innerHTML = bed.description();
    
    price = document.getElementById("item-3-describe");
    price.innerHTML = bed.price;


// table item on shop page

    description = document.getElementById("item-4-describe");
    description.innerHTML = couch.description();

    price = document.getElementById("item-4-describe");
    price.innerHTML = couch.price;

