// ------------------------------------------------------------Hide element by ID
function hideElementById(elementId) {
   const element = document.getElementById(elementId)
   element.classList.add('hidden');
}

// ------------------------------------------------------------Show element by ID
function showElementById(elementId) {
   const element = document.getElementById(elementId)
   element.classList.remove('hidden');
}

// ------------------------------------------------------------background color by Id
function setBackgroundColorById(elementId){
   const element = document.getElementById(elementId);
   element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
   const element = document.getElementById(elementId);
   element.classList.remove('bg-orange-400');

}

// -------------------------------------------------------------get a random number
function getARandomAlphabet() {
   // abcdefghijklmnopqrstuvwxyz
   const alphabetString = "abcdefghijklmnopqrstuvwxyz";
   const alphabets = alphabetString.split('');
   // console.log(alphabets);
   // console.log(alphabets)

   const randomNumber = Math.random() * 25;
   const index = Math.round(randomNumber);
   // console.log(index)

const alphabet = alphabets[index];
console.log(index, alphabet);
return alphabet;
}
