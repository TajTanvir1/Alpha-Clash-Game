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

function continueGame(){
   // 1. generate random alphabet
   const alphabet = getARandomAlphabet();
   console.log('your random alphabet', alphabet);
}

function play(){
   hideElementById('home-screen')
   showElementById('play-ground')
   continueGame()
}