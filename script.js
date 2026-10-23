// ===========================
// Quotes Array
// ===========================

const quotes = [

{
quote:"The future depends on what you do today.",
author:"Mahatma Gandhi"
},

{
quote:"Success is not final, failure is not fatal. It is the courage to continue that counts.",
author:"Winston Churchill"
},

{
quote:"Dream big and dare to fail.",
author:"Norman Vaughan"
},

{
quote:"Believe you can and you're halfway there.",
author:"Theodore Roosevelt"
},

{
quote:"Don't watch the clock; do what it does. Keep going.",
author:"Sam Levenson"
},

{
quote:"Hard work beats talent when talent doesn't work hard.",
author:"Tim Notke"
},

{
quote:"Education is the most powerful weapon which you can use to change the world.",
author:"Nelson Mandela"
},

{
quote:"Every expert was once a beginner.",
author:"Helen Hayes"
},

{
quote:"Your only limit is your mind.",
author:"Unknown"
},

{
quote:"The best way to get started is to quit talking and begin doing.",
author:"Walt Disney"
},

{
quote:"Great things never come from comfort zones.",
author:"Unknown"
},

{
quote:"Push yourself because no one else is going to do it for you.",
author:"Unknown"
},

{
quote:"Stay hungry. Stay foolish.",
author:"Steve Jobs"
},

{
quote:"Do something today that your future self will thank you for.",
author:"Sean Patrick Flanery"
},

{
quote:"Success usually comes to those who are too busy to be looking for it.",
author:"Henry David Thoreau"
}

];

// ===========================
// Elements
// ===========================

const quote = document.getElementById("quote");

const author = document.getElementById("author");

const newQuote = document.getElementById("newQuote");

const copyQuote = document.getElementById("copyQuote");

const twitter = document.getElementById("shareTwitter");

const whatsapp = document.getElementById("shareWhatsapp");

// ===========================
// Generate Quote
// ===========================

function generateQuote(){

const random=Math.floor(Math.random()*quotes.length);

quote.style.opacity="0";

author.style.opacity="0";

setTimeout(()=>{

quote.innerText=quotes[random].quote;

author.innerText="— "+quotes[random].author;

quote.style.opacity="1";

author.style.opacity="1";

},300);

}
// ===========================
// New Quote Button
// ===========================

newQuote.addEventListener("click", generateQuote);

// ===========================
// Copy Quote
// ===========================

copyQuote.addEventListener("click", () => {

const text = `${quote.innerText}\n${author.innerText}`;

navigator.clipboard.writeText(text);

copyQuote.innerText = "✅ Copied!";

setTimeout(() => {

copyQuote.innerText = "📋 Copy";

},2000);

});

// ===========================
// Share on X (Twitter)
// ===========================

twitter.addEventListener("click", () => {

const text = `${quote.innerText} ${author.innerText}`;

const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;

window.open(url,"_blank");

});

// ===========================
// Share on WhatsApp
// ===========================

whatsapp.addEventListener("click", () => {

const text = `${quote.innerText}\n${author.innerText}`;

const url = `https://wa.me/?text=${encodeURIComponent(text)}`;

window.open(url,"_blank");

});

// ===========================
// Generate Quote on Page Load
// ===========================

window.onload = generateQuote;

// ===========================
// Spacebar Shortcut
// ===========================

document.addEventListener("keydown",(event)=>{

if(event.code==="Space"){

event.preventDefault();

generateQuote();

}

});