function getQuote() {

quotes = new Array(8);
sources = new Array(8);

h1=document.getElementById("quote");
source=document.getElementById("source");

quotes[0] = "Knowing yourself is the beginning of all wisdom";
sources[0] = "Aristotle";

quotes[1] = "The unexamined life is not worth living";
sources[1] = "Socrates";

quotes[2] = "I hear and I forget. I see and I remember. I do and I understand.";
sources[2] = "Confucious";

quotes[3] = "To live is to suffer, to survive is to find some meaning in the suffering.";
sources[3] = "Friedrich Nietzsche";

quotes[4] = "Simplicity, Patience, Compassion.";
sources[4] = "Lao Tzu";

quotes[5] = "To understand is to be free.";
sources[5] = "Baruch Spinoza";

quotes[6] = "The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.";
sources[6] = "Albert Einstein";

quotes[7] = "The brave man is he who overcomes not only his enemies but his pleasures.";
sources[7] = "Democritus";

i = Math.floor(Math.random() * quotes.length);

h1.innerHTML=quotes[i];
source.innerHTML=sources[i];
}
getQuote();