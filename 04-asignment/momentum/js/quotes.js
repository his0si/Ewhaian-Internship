const quotes = [
  {
      quote: "The world is a book and those who do not travel read only one page.",
      author: "Saint Augustine",
  },
  {
      quote: "Adventure is worthwhile.",
      author: "Aesop",
  },
  {
      quote: "The journey of a thousand miles begins with a single step.",
      author: "Lao Tzu",
  },
  {
      quote: "Traveling - it leaves you speechless, then turns you into a storyteller.",
      author: "Ibn Battuta",
  },
  {
      quote: "Not all those who wander are lost.",
      author: "J.R.R. Tolkien",
  },
  {
      quote: "To travel is to discover that everyone is wrong about other countries.",
      author: "Aldous Huxley",
  },
  {
      quote: "A journey is best measured in friends, rather than miles.",
      author: "Tim Cahill",
  },
  {
      quote: "Travel makes one modest. You see what a tiny place you occupy in the world.",
      author: "Gustave Flaubert",
  },
  {
      quote: "Travel is fatal to prejudice, bigotry, and narrow-mindedness.",
      author: "Mark Twain",
  },
  {
      quote: "I travel not to go anywhere, but to go. I travel for travel's sake. The great affair is to move.",
      author: "Robert Louis Stevenson",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

