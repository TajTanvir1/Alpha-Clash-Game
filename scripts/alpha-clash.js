/*
function play(){
   // -----------------------------hide home screen------------------------------
   const homeSection = document.getElementById('home-screen');
   // console.log(homeSection.classList)
   homeSection.classList.add('hidden')
   // -----------------------------show play ground-------------------------------
   const playGroundSection = document.getElementById('play-ground')
   // console.log(playGroundSection)
   playGroundSection.classList.remove('hidden')
}
*/

function handleKeyboardKeyUpEvent(event) {
   const playerPressed = event.key;
   console.log('Player Pressed', playerPressed);

   // get expected key pressed
   const currentAlphabetElement = document.getElementById('current-alphabet');
   const currentAlphabet = currentAlphabetElement.innerText;
   const expectedAlphabet = currentAlphabet.toLowerCase();
   // console.log(playerPressed, expectedAlphabet);

   // checked matched or not
   if (playerPressed === expectedAlphabet) {
      // console.log('you got a point');
      
      const currentScoreElement = document.getElementById('current-score');
      const currentScoreText = currentScoreElement.innerText;
      const currentScore = parseInt(currentScoreText);
      const newScore = currentScore + 1;
      currentScoreElement.innerText = newScore;
      

      removeBackgroundColorById(expectedAlphabet);
      continueGame();

   }
   else {
      console.log('you pressed wrong key')
      const currentLifeElement = document.getElementById('current-life');
      const currentLifeText = currentLifeElement.innerText;
      const currentLife = parseInt(currentLifeText);
      const newLife = currentLife - 1;
      currentLifeElement.innerText = newLife;
   }
}
// ---------------------------------------------capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continueGame() {
   // 1. generate random alphabet
   const alphabet = getARandomAlphabet();
   // console.log('your random alphabet', alphabet);

   //  set randomly generated alphabets
   const currentAlphabetElement = document.getElementById('current-alphabet');
   currentAlphabetElement.innerText = alphabet;

   // set background color
   setBackgroundColorById(alphabet)
}

function play() {
   hideElementById('home-screen');
   showElementById('play-ground');
   continueGame();
}