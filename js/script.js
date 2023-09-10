/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Author: Voke Elstein [APP]
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
/* One of the greatest actors to grace the silver screen was Sean Connery [1930 - 2020]. 
He was the first actor to play James Bond and I love every movie he was in, my best is The Rock.
This quotes array is a collection of famous quotes from him from the many movies he made over his almost 45 year career.
The array contains the quote: the line he spoke, source: Sean Connery, citation: movie name, year: release year and tags: movie genre */

const quotes = [

  { quote: 'Bond. James Bond.', source: 'Sean Connery', citation: 'Dr. No', year: 1962, tags: 'Spy' },
  { quote: 'Shaken, not stirred.', source: 'Sean Connery', citation: 'Goldfinger', year: 1964, tags: 'Spy'},
  { quote: 'I think he got the point.', source: 'Sean Connery', citation: 'Thunderball', year: 1965, tags: 'Spy'},
  { quote: 'Yes, this is my second life.', source: 'Sean Connery', citation: 'You Only Live Twice', year: 1967, tags: 'Spy'},
  { quote: 'A great day comrades, we sail into history.', source: 'Sean Connery', citation: 'The Hunt for Red October', year: 1990, tags: 'Action'},
  { quote: 'They say if you resort to violence, then you\'ve already lost.', source: 'Sean Connery', citation: 'Rising Sun', year: 1993, tags: 'Spy'},
  { quote: 'You call it luck. I call it destiny.', source: 'Sean Connery', citation: 'The Man Who Would Be King', year: 1975, tags: 'Adventure'},
  { quote: 'Oh, hey, I take the good with the bad. I can\'t love people in slices.', source: 'Sean Connery', citation: 'First Knight', year: 1995, tags: 'Drama'},
  { quote: 'We named the dog Indiana.', source: 'Sean Connery', citation: 'Indiana Jones and the Last Crusade', year: 1989, tags: 'Adventure'},
  { quote: 'I suddenly remembered my Charlemagne. Let my armies be the rocks and the trees and the birds in the sky.', source: 'Sean Connery', citation: 'Indiana Jones and the Last Crusade', year: 1989, tags: 'Adventure'},
  { quote: 'Welcome to The Rock.', source: 'Sean Connery', citation: 'The Rock', year: 1996, tags: 'Action'},
  { quote: 'No thinking - that comes later. You must write your first draft with your heart. You rewrite with your head. The first key to writing is... to write, not to think!', source: 'Sean Connery', citation: 'Finding Forrester', year: 2000, tags: 'Drama'},
  { quote: 'Just remember: if you hang onto the past, you die a little every day.', source: 'Sean Connery', citation: 'Entrapment', year: 1999, tags: 'Action'},
  { quote: 'You\'re the man now, dog!', source: 'Sean Connery', citation: 'Finding Forrester', year: 2000, tags: 'Drama'},
  { quote: 'And the game is on.', source: 'Sean Connery', citation: 'The League of Extraordinary Gentlemen', year: 2003, tags: 'Action'},
];

const colors = [
  "red", "blue", "salmon", "maroon", "olive", "turquoise", "green", "orange", "purple", "palevioletred", "saddlebrown"
];

/***
 * `getRandomQuote` function
***/
/* This section is for creating the getRandomQuote function to randomize displaying quotes from my array. Using Math.floor() and 
Math.random() functions and a for loop, with my limit being the array length of my quotes array I can iterate over every quote in my array */

function getRandomQuote() {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
} 

/***
 * `printQuote` function
***/

/* This section is for creating the printQuote function to display the random quote from the getRandomQuote function */
function printQuote() {
  let randomQuote = getRandomQuote(); // To get a random quote from the getRandomQuote function

  //Next, a variable is created to store the HTML string. Using template literals, the HTML string is created and the quote and source properties are added to the HTML string.
  let html = 
  `<p class="quote">${randomQuote.quote}</p> 
  <p class="source">${randomQuote.source}`;

  //Next, verify if the citation, year and tags properties exist in the quotes object. If they do, add them to the HTML string by concatenation.
   if (randomQuote.citation) {
     html += `<span class="citation">${randomQuote.citation}</span>`;
    }

    if (randomQuote.year) {
      html += `<span class="year">${randomQuote.year}</span>`;
    }

    if (randomQuote.tags) {
      html += `<span class="tags">[Genre: ${randomQuote.tags}]</span>`; /* Adding the square brackets around the tags property to make the info easy to identify */
    }
    html += `</p>`;

  //Next, the HTML string is displayed on the page using the innerHTML property.
  document.getElementById('quote-box').innerHTML = html;

  //Finally, the changeBackgroundColor function is called to randomize the background color of the page
  changeBackgroundColor();
  
} 

// This section is for creating the changeBackgroundColor function to randomize the background color of the page

function changeBackgroundColor() {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/*if (randomQuote.quote === "Welcome to The Rock."){
    document.write(`This quote is from my favorite movie`)
  };
  where can i add this quote */