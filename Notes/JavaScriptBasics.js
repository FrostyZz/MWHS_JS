// I am a single line comment

/* 
 * I am a multi line comment
 */

console.log("Hello World");
// console.log(stuff) prints the consoleo

// variables
// var variableName = value;
		// python     variableName = value
		// java		 String variableName = value;
var aWord = "some text"; // saved a string into the variable aWord
console.log(aWord);

aWord = 5; // aWord is now the number 5 

/*
*Primative Data Types
*Boolean 		is either true or false
*byte is an 8 bit whole number -127 to +127
*short ~+-32000 a 16 bit whoe number
*int ~+- 2.8 billion a 32 bit whole number (default whole number)
*long really big 64 bits
*float 32 bit decimal			float num = 1.0;
*double 64 bit decimal and the(default decimal number)
*char - a single character var letter = 'a';
*
*/

/*
 * + addition
 * - subtraction
 * * multipulcation
 *  / division
 *  % modulus (remainder)			5%6 = 5		7%6 =1		12%6= 0
 */

/*
 * boolean operators
 *  ==	to find if two items are alike
 *  	5=5	is true
 *  	5= "5" is a true
 *  ===	 to find if two items are exactly equal
 *  	5===5	 is true
 *  	5==="5" is false
 *  
 *  !=	to find if two items are not alike
 *  	5 != 5 is false
 *  	5 != 5 is false
 *  	5 != 6 is true
 *  !== to find if two items are not exactly equal
 *  
 */

//conditionals
var anotherWord = "5";
if (anotherWordWord == 5) {
	console.log("why.. just why does tis work?");
}
// if(boolean) {do this stuff}

var food = "sush;"if(food ==="sushi" || food === "pad thai"){
	console.log("Too Soon")
}
else if (food === "pizza"){
	console.log("have you tried dante's?")
}
else{
	console.log("nobody likes " + food + ". Why do you?");
}
// || or will return true if either boolean is true
// && and will return true only if both sides are true

// (((true || false) || false) && true) || true		returns true

//loops
var num = 0;
while(num < 5){
	console.log(num);
	num++; // adds 1 to the value
	//identical to 		num += 1;
	//identical to 		num = num + 1;
}

/*
 * comparison operators
 * 	num < num 		less than non data type specific
 * 	>				greater than non data type specific	
 * 	<=				less than or equal
 * 	>=				greater than or equal to
 */

//while(boolean) {does stuff;}

do{
	console.log("this");
}
while(false);


//for loops
		///for when you know how many times you want something to run
for(var i = 0; i < 5; i ++){
	console.log(i)
}

//for variable = val; endpoint; increment;) {do stuff}

var nums = [5, 7, 12, 9, 2];
//array		var variableName = [value, value, ...];
nums.push(19);	// places a new item at the end of an array
nums.pop();	// removes the last item
nums.sort(); // sorts the first number numerically

//indexing		how you get a specific item from an array

//enhanced for loop
for(x in nums){
	console.log(nums[x]);
}

//functions
function exampleOne(parameter){
	console.log(parameter);
}

exampleOne("Just Print This Thing");
exampleOne(5);
