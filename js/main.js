$('img[data-enlargable]').addClass('img-enlargable').click(function(){
    var src = $(this).attr('src');
    $('<div>').css({
        background: 'RGBA(0,0,0,.5) url('+src+') no-repeat center',
        backgroundSize: 'contain',
        width:'100%', height:'100%',
        position:'fixed',
        zIndex:'10000',
        top:'0', left:'0',
        cursor: 'zoom-out'
    }).click(function(){
        $(this).remove();
    }).appendTo('body');
});
// function Item(name, price) {
//     this.name = name;
//     this.price = "R" + price;

// }

// Item.prototype.description = function () {
//     var description = "This is a beautiful " + this.name + " for the low price of " + this.price + "."
//      return description;
// }

// let bed = new Item("bed", 800);
// let couch = new Item("couch", 500);
// let chair = new Item("chair", 300);
// let table = new Item("table", 400);


// // bed item on shop page

// let description = document.getElementById("item-1-describe");
//     description.innerHTML = bed.description();

//     price = document.getElementById("item-1-price");
//     price.innerHTML = bed.price;



// // Couch item on shop page