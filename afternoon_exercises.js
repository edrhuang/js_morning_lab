// JavaScript Function Exercises

// Write a function that accepts three numbers and returns their product.
function product (x,y,z){
	return (x*y*z);
};
product (1,2,3);


// Write a function that accepts an age and returns true if you can drink and false if you cannot drink
function drinking_age (age){
	if (age < 21){
		return false
	} else {
		return true 
	}

};
drinking_age(18)


// Write a function that takes an array as an argument and prints out the array's elements in order
function order (x){
	for(i=0; i<x.length; i++){
		console.log(x[i]);
	}
}
order([4, 2, 5, 6, 3, 1]);

// Implement 'each' in javascript
function add (a){
	console.log(a + "hello")
}

function each (x, rand_function){
	for(i=0; i<x.length; i++){
		rand_function (x[i]);
	}
}
each([4, 5, 6, 7, 8], add);

// Implement 'reduce' in javascript
function add (x, y){
	return (x+y);
}

function reduce (x, combine){
	var answer = 0 
	for(i=0; i<x.length;i++){
		answer = combine(answer, x[i])
	}
	console.log(answer)
}
reduce([1, 2, 3], add)






























