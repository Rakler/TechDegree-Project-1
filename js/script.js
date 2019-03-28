/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
	An array named "quotes" is defined. It stores anonymous objects that contains several properties. 
	All objects contain a "quote" property, a "source" property, a "tags" property and optional year and citation properties.
***/
var quotes = [
	{
		quote : "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
		source : "Mark Twain",
		year : 1970,
		tags: ["Philosophical", "Life advice"]
	},
	{
		quote : "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
		source : "Eleanor Roosevelt",
		citation : "brainyquote.com",
		tags: ["Humor", "Inspirational"]
	},
	{
		quote : "Those who dare to fail miserably can achieve greatly.",
		source : "John F. Kennedy",
		tags: ["Inspirational", "Life advice"]
	},
	{
		quote : "The memories we make with our family is everything.",
		source : "Candace Cameron Bure",
		tags: ["Compassion", "Family"]
	},
	{
		quote : "The bond that links your true family is not one of blood, but of respect and joy in each other's life",
		source : "Richard Bach",
		tags: ["Family", "Compassion"]
	}
		
];

/***
  The getRandomQuote function is responsible to find a random number inbetween 1 and the length of the array, "quotes".
   - var randomNumber is resonsible for storing the random number that is computed. For this purpose, we make use of Math.random to get a random number and Math.floor to get a rounded number. 
   - We then return a random qoute from the "quotes" array based on the random number generated, and stored in the variable "randomNumber".
***/
var getRandomQuote = function(){
	//Calculate and store a whole random number.
	var randomNumber = Math.floor(Math.random() * quotes.length - 1) + 1;
	
	console.log(randomNumber);
	
	//return a random quote from the quotes array by using the random number.
	return quotes[randomNumber];
}
/***
	The printeQuote function's responsibilty is to get a random quote out of the "quotes" array, and conditionally concatenates an html string that is then displayed on the
	main page.
***/
var printQuote = function(){
	
	var randomQuote = getRandomQuote();
	var str = '';
	
	
	str += '<p class="quote">' + randomQuote.quote + '</p>>';
	str += '<p class="source">' + randomQuote.source;
	
	if(typeof randomQuote.citation != 'undefined'){
		str += '<span class="citation">' + randomQuote.citation + '</span>';
	}else if(typeof randomQuote.year != 'undefined'){
		str += '<span class="year">' + randomQuote.year + '</span>';
	}
	str += '</p>';
	str += '<p class="tags"> Tags: ';
	
	if(typeof randomQuote.tags != 'undefined'){
		str += randomQuote.tags.join(", ");
	}
	str += '</p>';
	document.getElementById("quote-box").innerHTML = str;
	console.log(str);
	
	//Generate random background color
	//Code adapted from: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
	var x = Math.floor(Math.random() * 256);
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);
	
	var backgroundColor = 'rgb(' + x + ',' + y + ',' + z + ')';
	
	document.body.style.background = backgroundColor;
	
	return str;
	
}
printQuote();

/**
	Declared a function named "changeQoute" to automatically change the quote every 30 seconds.
**/
function changeQuote(){
	setInterval(printQuote, 30000);
}

/**
	The "changeQuote" function is called so that the quote changes every so often.
**/
changeQuote();

/***
  Below we have an eventlistener that is listener for inputs of type "click", it then executes the "printQuote" function.
***/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);