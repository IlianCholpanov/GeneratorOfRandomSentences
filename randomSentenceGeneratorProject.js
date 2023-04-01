const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});



let names = ["Peter", "Michell", "Jane", "Steve"];
let places = ["Sofia", "Plovdiv", "Varna", "Burgas"];
let verbs = ["eats", "holds", "sees", "plays with", "brings"];
let nouns = ["stones", "cake", "apple", "laptop", "bikes"];
let adverbs = ["slowly", "diligently", "warmly", "sadly", "rapidly"];
let details = ["near the river", "at home", "in the park"];

function getRandomWord(array) {
    let word = array[Math.floor(Math.random() * array.length)];
    return word;
}

let randomName = getRandomWord(names);
let randomPlace = getRandomWord(places);
let randomVerb = getRandomWord(verbs);
let randomNouns = getRandomWord(nouns);
let randomAdverb = getRandomWord(adverbs);
let randomDetails = getRandomWord(details);

// One sentence needs [Who from where] [Action] [Detail] to be created.

// o "Who from where" example: [Name + from + Place] ("David from London").

// o "Action" example: [Adverb] + [Verb] + [Noun] ("calmly watched the sunset").

// o "Detail" example: "near the river", "at home", "in the park".


let who = `${randomName} from ${randomPlace}`;
let action = `${randomAdverb} ${randomVerb} ${randomNouns}`;
let sentence = `${who} ${action} ${randomDetails}`;

console.log('Hello, this is your first random-generated sentence:');
console.log(sentence);

let recursiveAsyncReadline = function () {
    readline.question('Click [Enter] to generate a new one.'), string => {
    }
}
recursiveAsyncReadline()