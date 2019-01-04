


/* ===================== TILE SET ======================== */

		// EXAMPLE TILE
			// {
			// "listingTitle": "Example Title", // Internal purposes only
			// "imageSrc": "../img/name.png",
			// "imageAltAttr": "Example Alt",
			// "imageHeight": "",
			// "tileType": "", // review, product, event
			// "reviewVerdict": "up", //up, down, fire, shit, weird
			// "eventDate": {"month": "", "date": "", "time": ""},
			// "productPrice": "",
			// "listingCaption": "",
			// "linkDest": ""
			// }
		// EXAMPLE TILE MARKUP
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

	var tileSet = [
		{
			listingTitle: "21 Savage review", // Internal purposes only
			imageSrc: "../img/21-savage.jpg",
			imageAltAttr: "21 Savage",
			imageHeight: "",
			tileType: "product", // review, product, event
			reviewVerdict: "", //up, down, fire, shit, weird
			eventDate: {"month": "", "date": "", "time": ""},
			productPrice: "12",
			listingCaption: "",
			linkDest: ""
			},
			{
			listingTitle: "Long Shirt", // Internal purposes only
			imageSrc: "../img/b-n-w.jpg",
			imageAltAttr: "black and white outfit",
			imageHeight: "",
			tileType: "product", // review, product, event
			reviewVerdict: "", //up, down, fire, shit, weird
			eventDate: {"month": "", "date": "", "time": ""},
			productPrice: "$75",
			listingCaption: "Extra Long T-Shirt",
			linkDest: ""
			},
			{
			listingTitle: "Tokyo Punk Look", // Internal purposes only
			imageSrc: "../img/box-print.jpg",
			imageAltAttr: "box-print",
			imageHeight: "",
			tileType: "product", // review, product, event
			reviewVerdict: "", //up, down, fire, shit, weird
			eventDate: {"month": "", "date": "", "time": ""},
			productPrice: "$800",
			listingCaption: "Tokyo Punk Look",
			linkDest: ""
			}
	];

	var tileContent = "";

	function layTiles() {
		
		// var tileMarkUp = "";

		for(i=0; i<=tileSet.length; i++) {
			// var tileIndex = tileSet[i];
			var tileImage = tileSet[i].imageSrc;
			var tileImageAlt = tileSet[i].imageAltAttr;

			// console.log(tileIndex);

			// ATTEMPT ONE 

				// function tileBuild(tileIndex) {

					// var cornerContent = "";
					// var reviewGlyph = "";
					// var reviewGlyphAlt = "";

					// function determineCorner(tileIndex) {

					// 	if(tileIndex.tileType === "review") {
					// 		var verdict = tileIndex.reviewVerdict;

					// 		function getGlyph(verdict) {
					// 			if(tileIndex.verdict === up) {
					// 				reviewGlyph = "img/thumbsup.png";
					// 				reviewGlyphAlt = ' alt="thumbs down"';
					// 			} else if (tileIndex.verdict === fire) {
					// 				reviewGlyph = "img/fire.png";
					// 				reviewGlyphAlt = ' alt="fire"';
					// 			} else if (tileIndex.verdict === down) {
					// 				reviewGlyph = "img/thumbsdown.png";
					// 				reviewGlyphAlt = ' alt="thumbs down"';
					// 			} else if (tileIndex.verdict === shit) {
					// 				reviewGlyph = "img/shit.png";
					// 				reviewGlyphAlt = ' alt="shit"';
					// 			} else {
					// 				console.log("invalid review, motherfucker.")
					// 			}
					// 		};

					// 		getGlyph();

					// 		cornerContent = '"<img class="tile__upper-corner__glyph" src="' +
					// 			reviewGlyph + '"' + reviewGlyphAlt + '>';
					// 	} else if(tileIndex.tileType === "product") {
					// 		cornerContent = '"<span class="tile__upper-corner__price">' +
					// 			tileIndex.productPrice + '</span>';
					// 	} else if(tileIndex.tileType === "event") {
					// 		cornerContent = '<span class="tile__upper-corner__month">' + 
					// 			tileIndex.eventDate.month + '</span><br>' + 
					// 			'<span class="tile__upper-corner__date">' + 
					// 			tileIndex.eventDate.date + '</span><br>' +
					// 			'<span class="tile__upper-corner__time">' + 
					// 			tileIndex.eventDate.time + '</span>';
					// 	} else {
					// 		console.log(tileIndex + " invalid tile type, bitch.");
					// 	}
					// };

					// determineCorner(tileIndex);

					// var tileMarkUp = '<div class="tile">' +
						// '<img class="tile__background" src="' + tileIndex.imageSrc +
						// '" alt="' + tileIndex.imageAltAttr + '">' +
						// '<div class="tile__upper-corner">' + cornerContent + '</div><!-- UPPER CORNER -->' +
						// '<div class="tile__stripe">' +
						// '<span class="tile__stripe__copy">' + tileIndex.listingCaption +'</span>' + 
						// '</div><!-- STRIPE -->' + '</div><!-- TILE -->'
					// ;
					// console.log(tileMarkUp);
				// };

				// tileContent += tileMarkUp;
				// console.log(tileContent);

			// ATTEMPT TWO

				tileContent += '<div class="tile">' + 
				'<img class="tile__background" src="' + tileImage +
				'" alt="' + tileImageAlt + '">' +
				'</div><!-- TILE -->';

		}

		tileBox.innerHTML = tileContent;
	};


	

