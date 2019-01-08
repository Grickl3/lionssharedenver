


var Tile = function(height,imageSrc,imageSrcActive,imageAltAttr,tileType,productPrice,verdictImgSrc,verdictImgAlt,month,date,time,listingCaption) {

	this.imageSrc = imageSrc;
	this.imageSrcActive = imageSrcActive;
	this.imageAltAttr = imageAltAttr;
	this.tileType = tileType;
	this.verdictImgSrc = verdictImgSrc;
	this.verdictImgAlt = verdictImgAlt;
	this.month = month;
	this.date = date;
	this.time = time;
	this.productPrice = productPrice;
	this.listingCaption = listingCaption;
	this.height = height;
}; 

Tile.prototype.layTile = function() {
	var tile = document.createElement('div');
	tile.classList.add('tile');
	tile.setAttribute('id', this.listingCaption);
	tile.style.height = this.height + "px";

	var img = document.createElement('img');
	img.setAttribute('src', this.imageSrc);
	img.classList.add('tile__background');
	img.setAttribute('alt', this.imageAltAttr);

	var imgActive = document.createElement('img');
	imgActive.setAttribute('src', this.imageSrcActive);
	imgActive.classList.add('tile__background-active');
	imgActive.setAttribute('alt', this.imageAltAttr);
	
	var corner = document.createElement('div');
	corner.classList.add('tile__upper-corner');
	
	if(this.tileType === "product") {
		var price = document.createElement('span');
		price.classList.add('tile__upper-corner__copy');
		price.textContent = "$" + this.productPrice;
		corner.appendChild(price);
	} else if(this.tileType === "review") {
		var verdict = document.createElement('img');
		verdict.classList.add('tile__upper-corner__glyph');
		verdict.setAttribute('src', this.verdictImgSrc);
		verdict.setAttribute('alt', this.verdictImgAlt);
		corner.appendChild(verdict);
	} else if(this.tileType === "event") {
		var month = document.createElement('p');
		month.textContent = this.month;
		month.classList.add("tile__upper-corner__month");
		var date = document.createElement('p');
		date.textContent = this.date;
		date.classList.add("tile__upper-corner__date");
		var time = document.createElement('p');
		time.textContent = this.time;
		time.classList.add("tile__upper-corner__time");

		corner.appendChild(date);
		corner.appendChild(month);
		corner.appendChild(time);
	} else {
		console.log("invalid tile type");
	}

	var stripe = document.createElement('div');
	stripe.classList.add('tile__stripe');
	var stripeCaption = document.createElement('span');
	stripeCaption.classList.add('tile__stripe__copy');
	stripeCaption.textContent = this.listingCaption;
	stripe.appendChild(stripeCaption);


	tileBox.appendChild(tile);
	tile.appendChild(img);
	tile.appendChild(imgActive);
	tile.appendChild(corner);
	tile.appendChild(stripe);

};








