var data = require("./products.json")
var shit = data["items"]
var counter = 0

// How many items with the kind shopping#product 
for (i=0;i<shit.length;i++){	
	if(shit[i]["kind"] === "shopping#product"){
		counter++
	}
}
console.log(counter)

// Find all items with a backorder availability in inventories.
for (i=0;i<shit.length;i++){
	if (shit[i]["product"]["inventories"][0]["availability"] === "backorder"){
		console.log(shit[i]["product"]["author"]["name"])
	}
}

// Find all items with more than one image link.
for (i=0;i<shit.length;i++){
	if (shit[i]["product"]["images"].length > 1){
		console.log(shit[i]["product"]["author"]["name"])
	}
}

//  Find all canon products in the items 
// (careful with case sensitivity).
for (i=0;i<shit.length;i++){
	if(shit[i]["product"]["brand"] === "Canon"){
		console.log(shit[i]["product"]["author"]["name"])
	}
}


// Find all items that have product author name of 
// "eBay" and are brand "Canon".
for (i=0;i<shit.length;i++){
	var name = shit[i]["product"]["author"]["name"] 
	var brand = shit[i]["product"]["brand"]
	if( name === "eBay" &&  brand === "Canon"){
		console.log(shit[i]["id"]);
	}
}

// Print all the products with their brand, price, and an image link



for (i=0;i<shit.length;i++){
	var brand = shit[i]["product"]["brand"]
	var price = shit[i]["product"]["inventories"][0]["price"] 
	var image = shit[i]["product"]["images"][0]["link"]

	console.log("Brand:" + brand)
	console.log("Price: " + price)
	console.log("Image: " + image)

}

