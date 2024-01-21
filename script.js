function generateRandomNumber(num) {
    // Generate a random number between 0 and num - 1
    const randomIndex = Math.floor(Math.random() * num);
    // If the random index is equal to the length of the array, set the index to 0
    return randomIndex === num ? num - 1 : randomIndex;
  }
const quotes = {
  one: 'Success is not final, failure is not fatal: It is the courage to continue that counts. Winston Churchill',
  two: 'The dye is cast, the curtain is drawn and the whistle has been blown, you have already been born, you have been declared a champion; you must fight until you win. Joyce Mensah',
  three: 'God does not play dice with the universe. Albert Einstein',
  four: 'If God does not leave the universe to chance, then you sure have a purpose to fulfill. Joyce Mensah',
  five: 'The art of leadership is saying no, not yes. It is very easy to say yes. Tony Blair',
};

let inspirationalQuotes = [];

// Generate random quotes
for (let key in quotes) {
  inspirationalQuotes.push(quotes[key]);
}

function formatInspirationalQuotes(quotes) {
  const formatted = quotes.join('\n');
  alert(formatted);
}

const quoteButton = document.getElementById('quoteButton');
if (quoteButton !== null) {
  quoteButton.addEventListener('click', function() {
    const randomIndex = generateRandomNumber(inspirationalQuotes.length);
    alert(inspirationalQuotes[randomIndex]);
  });
} else {
  console.log("quoteButton is concluded");
}


