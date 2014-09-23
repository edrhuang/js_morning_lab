// Hardcode an array of words. Have a variable maxLength, 
// push words that are less than the maxLength into a new array, 
// and console.log that.

var arr = ["Obama", "Bush", "Clinton", "Old Dirty Bastard", "Bo"];
var answer = [];
var maxLength = 4;

for(var i = 0; i < arr.length; i++){
	if (arr[i].length <= maxLength){
		answer.push(arr[i]);
	}
}

console.log(answer)