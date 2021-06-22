import { toMorse, toEnglish, } from "./alphabets.js"

// English to Morse Translation Function
const translateEnglish = (event) => {
    event.preventDefault();
    const englishInput = document.getElementById("englishInput");
    console.log(englishInput.value);
    const lowerCaseSplitToWords = englishInput.value.toLowerCase().split(" ");
    console.log(lowerCaseSplitToWords);
    // want to split each word array into an array of objects each object is a set of key value pairs that spells a word
    // ie ["test", "word"] => [[t, e, s, t], [w, o, r, d]]
    const arrayOfWords = lowerCaseSplitToWords.map((word) => word.split(""));
    console.log(arrayOfWords);


    const morseOutput = document.getElementById("morseOutput");
    const translate = arrayOfWords.map((arrayOfLetters) => {
        return arrayOfLetters.map(letter => {
            return Object.entries(toMorse).find(element => {
               if (element[0] === letter) {
                return element
                };
                   
            });
        });
    }); 
    
    console.log(translate);
    morseOutput.value = translate.map(elementArr => {
        return elementArr.map(element => {
            return element[1];
        });
    });
   
       
    console.log(morseOutput.value);

    // display translation

    morseOutput.innerHTML = `Your Morse Code is: ${morseOutput.value.toString(" ")}`;

};

// Morse to English Translation Function
const translateMorse = (event) => {
    event.preventDefault();
    const morseInput = document.getElementById("morseInput");
    console.log(morseInput.value);
    const splitMorseToWords = morseInput.value.toLowerCase().split("    ");
    console.log(splitMorseToWords);
    const splitAllWords = splitMorseToWords.map((word) => word.split(" "));
    console.log(splitAllWords);

    
    const englishOutput = document.getElementById("englishOutput");
    const translate = splitAllWords.map((letter) => {
        if (toEnglish.hasOwnProperty(letter));
        return toEnglish.letter;
    //    return alphabet.find(english => english.letter === letter);
       
    });
    
    console.log(englishOutput.value);

    // display translation -.-- .- -.-- 

    englishOutput.innerHTML = `Your English is: ${englishOutput.value}`;
};

    // still need to create new element or populate inner html of a result display box

    // grab Eng to Morse form and add event listener
const toMorseForm = document.getElementById("toMorseForm");
toMorseForm.addEventListener("submit", translateEnglish);
    
    // grab Morse to Eng form and add event listener
const toEnglishForm = document.getElementById("toEnglishForm");
toEnglishForm.addEventListener("submit", translateMorse);