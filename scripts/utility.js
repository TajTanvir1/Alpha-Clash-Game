// ---------------------------------------Hide element by ID
function hideElementById(elementId) {
   const element = document.getElementById(elementId)
   element.classList.add('hidden');
}

// ---------------------------------------Show element by ID
function showElementById(elementId) {
   const element = document.getElementById(elementId)
   element.classList.remove('hidden');
}

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
