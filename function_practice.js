// will return the function, but its not called so wont see blahh
// "Edward" will print to the console

(function(blah){
	console.log(blah);
	return (function(){console.log("blahh");});
})("Edward");






// arguments can be called within the function 

(function (value) {
  return (function (copy) {
    return copy === value;
  })(value);
})("Hello World");

// (function ("Hello World") {
//   return (function ("Hello World") {
//     return "Hello World" === "Hello World";
//   })("Hello World");
// })("Hello World");




// outter function passes in (1)
// once the function runs the inner function passes (2)
(function (x){
  return (function (y){
    return y;
  });
})(1)(2)

// first
(function (1){
  return (function (y){
    return y;
  });
})(1)

// second
return (function (2){
    return 2;
  });(2)

// console will return 2 




// partial dissection 
(function (x) { 
    return (function (y) { 
        return x; 
    }) 
})(4)(2);

// this code will return 4
// environment remebers what the outter functions value is 



