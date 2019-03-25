/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
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
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
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
	return str;
}
printQuote();
/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.