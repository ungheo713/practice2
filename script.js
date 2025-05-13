const quotes = [
    "The best way to get started is to quit talking and begin doing. – Walt Disney",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "Don’t let yesterday take up too much of today. – Will Rogers",
    "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
    "In the middle of every difficulty lies opportunity. – Albert Einstein"
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const quoteText = document.getElementById("quote");
    const newQuoteBtn = document.getElementById("new-quote");
  
    newQuoteBtn.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quoteText.textContent = quotes[randomIndex];
    });
  });