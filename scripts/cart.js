
var cart = [
	"polo shirt",
	"cucumber",
	"bunny slug"
];

var cartMarkup = "";

var Item = function(itemName,price) {

	this.itemName = itemName;
	this.price = price;
};

Item.prototype.addToCart = function() {
	cart.push(this);
}

function displayCart(placement) {
	var cartDisplay = document.createElement('div');
	for(i=0; i<cart.length; i++) {
		var thing = cart[i];
		var slot = document.createElement('h1');
		slot.textContent = "1" + thing;
		cartDisplay += slot;
	}

	placement.appendChild(cartDisplay);
}

