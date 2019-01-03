


/* ===================== TILE SET ======================== */

		// EXAMPLE TILE
		// {
		// "listingTitle": "Example Title", // Internal purposes only
		// "imageSrc": "img/name.png",
		// "imageAltAttr": "Example Alt",
		// "imageHeight": "",
		// "tileType": "", // review, product, event
		// "reviewVerdict": "up", //up, down, fire, shit, weird
		// "eventDate": {"month": "", "date": "", "time": ""},
		// "productPrice": "",
		// "Listing Caption": "",
		// "linkDest": ""
		// }

	var tileSet = [];

	
	// <div class="tile">
	// 	<img class="tile__background" src="img/b-n-w.jpg" alt="black and white outfit">
	// 	<div class="tile__upper-corner">  
	// 		<span class="tile__upper-corner__copy">$75</span>  
	// 		<img class="tile__upper-corner__glyph" src="img/thumbsup.png" alt="">
	//		<span class="tile__upper-corner__copy">NOV<br>12<br>9pm</span>
	// 	</div><!-- UPPER CORNER -->  
	// 	<div class="tile__stripe"> 
	// 		<span class="tile__stripe__copy">extra long T-shirt: white</span>  
	// 	</div><!-- STRIPE -->  
	// </div><!-- TILE -->

	function tileBuild(tileIndex) {

		var cornerContent = "";
		var reviewGlyph = "";
		var reviewGlyphAlt = "";

		function determineCorner(tileIndex) {
			if(tileIndex.tileType === review) {
				
				function getGlyph(tileIndex.reviewVerdict) {
					if(tileIndex.reviewVerdict === up) {
						reviewGlyph = "img/thumbsup.png";
						reviewGlyphAlt = ' alt="thumbs down"';
					} else if (tileIndex.reviewVerdict === fire) {
						reviewGlyph = "img/fire.png";
						reviewGlyphAlt = ' alt="fire"';
					} else if (tileIndex.reviewVerdict === down) {
						reviewGlyph = "img/thumbsdown.png";
						reviewGlyphAlt = ' alt="thumbs down"';
					} else if (tileIndex.reviewVerdict === shit) {
						reviewGlyph = "img/shit.png";
						reviewGlyphAlt = ' alt="shit"';
					} else {
						console.log("invalid review, motherfucker.")
					}
				};

				cornerContent = '"<img class="tile__upper-corner__glyph" src="' +
				reviewGlyph + '"' + reviewGlyphAlt + '>';
			} else if(tileIndex.tileType === product) {
				cornerContent = '"<span class="tile__upper-corner__price">' +
				tileIndex.productPrice + '</span>';
			} else if(tileIndex.tileType === event) {
				cornerContent = '<span class="tile__upper-corner__month">' + 
				tileIndex.eventDate.month + '</span><br>' + 
				'<span class="tile__upper-corner__date">' + 
				tileIndex.eventDate.date + '</span><br>' +
				'<span class="tile__upper-corner__time">' + 
				tileIndex.eventDate.time + '</span>';
			} else {
				console.log(tileIndex + " invalid tile type, bitch.");
			}
		};

		determineCorner(tileIndex);

		var tileMarkUp = '<div class="tile">' +
			'<img class="tile__background" src="' + tileIndex.imageSrc +
			'" alt="' + tileIndex.imageAltAttr + '">' +
			'<div class="tile__upper-corner">' + cornerContent +

		;

		var

	}


	

