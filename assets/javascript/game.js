// Creates an okbject that lists out all of the players and their images
var SuperMan = {
    image: "../images/test.jpg", 
    hp: 100, 
    damage: 0, 
    attackPowewr: 0,
    counterAttackPower: 0,
    playerStatus: "player"
};
//var randomArray = ["rock", "paper", "scissors"];
 var guessesArray = [];
 var dashes = [];

 // Creating variables. They start at 0.
 var wins = 0;
 var losses = 0;
 var guessCount = 0;
 var rand;

 // Create variables that hold references to the places in the HTML where we want to display things.
 var directionsText = document.getElementById("directions");
 var randomWords = document.getElementById("randomWord");
 var winsElement = document.getElementById("wins");
 var lossesElement = document.getElementById("losses");
 var guessCountElement = document.getElementById("guessCount");
 var guessElement = document.getElementById("userGuess");

     // Randomly generates a word from the array.
function randomWordGen(){
        var randomWord = randomArray[Math.floor(Math.random() * randomArray.length)];
        return randomWord;
        console.log(randomWord);
}

function dashDisplay(randomWord){
    //var dashes = "";
    for (var i=0; i<randomWord.length; i++){
        if (randomWord[i] == " "){
            dashes.push("&nbsp;");
            // dashes.push(" ");
        }
        else {
            dashes.push("-");
        //dashes += "-";
        }
   }
   randomWords.innerHTML = dashes.join(' ');
}

function guesses(userGuess){
    guessesArray.push(userGuess);
    console.log(guessesArray);
    guessElement.textContent = "You have guessed: " + guessesArray.join(" "); //try append or add you guessed to the textContent
}

function compareWords(randomWord, userGuess){
        guesses(userGuess);
        guessCount--;
        guessCountElement.textContent = guessCount;
         
        for (var i=0; i<randomWord.length; i++){
            console.log(randomWord[i]);
           if (userGuess.toUpperCase()===randomWord[i].toUpperCase()) {
               console.log(userGuess+"  "+randomWord[i]);
               ///replace the dash with this letter
               dashes[i] = userGuess;
               randomWords.innerHTML = dashes.join(' ');
           }
        }
           
      
        if (guessCount === 0 ) {
            // alert('You lose');
            losses++;
            lossesElement.textContent = "Losses : " + losses;
            guessCount = 0;
            startGame();
            return;
        }
        if(!dashes.includes('-')){
            // alert('You win!')
            wins++;
            winsElement.textContent = "Wins : " + wins;
            startGame();
            return
        }
        
}

startGame();

function startGame(){
    dashes = [];
    guessesArray = [];
    guessElement.textContent = "You have guessed: ";
    directionsText.textContent = "Guess From the Original Justice League Members";
    guessCountElement.textContent = "10";
    guessCount = 10;
    rand = randomWordGen();
    dashDisplay(rand);
}

 // This function is run whenever the user presses a key.
 document.onkeyup = function (event) {

     // Determines which key was pressed.
     var userGuess = event.key;
     //console.log("user guess: " + userGuess);
     var regex=/^[a-zA-Z]+$/;

     // check if user key is a letter
     if (userGuess.match(regex)) {
     //do game logic
     compareWords(rand, userGuess);
     directionsText.textContent = "Guess From the Original Justice League Members";
     }
 };