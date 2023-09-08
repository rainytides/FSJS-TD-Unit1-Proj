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
  { quote: 'You only live twice.', source: 'Sean Connery', citation: 'You Only Live Twice', year: 1967, tags: 'Spy'},
  { quote: 'Diamonds are forever.', source: 'Sean Connery', citation: 'Diamonds Are Forever', year: 1971, tags: 'Spy'},
  { quote: 'You call it luck. I call it destiny.', source: 'Sean Connery', citation: 'The Man Who Would Be King', year: 1975, tags: 'Adventure'},
  { quote: 'Oh, hey, I take the good with the bad. I can\'t love people in slices.', source: 'Sean Connery', citation: 'First Knight', year: 1995, tags: 'Drama'},
  { quote: 'We named the dog Indiana.', source: 'Sean Connery', citation: 'Indiana Jones and the Last Crusade', year: 1989, tags: 'Adventure'},
  { quote: 'Welcome to The Rock.', source: 'Sean Connery', citation: 'The Rock', year: 1996, tags: 'Action'},
  { quote: 'No thinking - that comes later. You must write your first draft with your heart. You rewrite with your head. The first key to writing is... to write, not to think!', source: 'Sean Connery', citation: 'Finding Forrester', year: 2000, tags: 'Drama'},
  { quote: 'Just remember: if you hang onto the past, you die a little every day.', source: 'Sean Connery', citation: 'Entrapment', year: 1999, tags: 'Action'},
  {quote: 'You\'re the man now, dog!', source: 'Sean Connery', citation: 'Finding Forrester', year: 2000, tags: 'Drama'},
];
/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);