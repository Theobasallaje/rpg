//object that holds the each character objects with their properties that lists out all of the players and their images
var characters = {
    heros: {
        superMan: {
        name: "Superman",
        image: "../rpg/assets/images/superman.png", 
        hp: 100, 
        damage: 0, 
        attackPowewr: 0,
        counterAttackPower: 0
        }
    },
    villains: {
        bizarro : {
        name: "Bizzaro",
        image: "../rpg/assets/images/bizarro.png", 
        hp: 100, 
        damage: 0, 
        attackPowewr: 0,
        counterAttackPower: 0
        }
    }
};

//arryas
 

 //global variables 
 

 // Create variables that hold references to the places in the HTML where we want to display things.
 var directionsText = $("#directions");
 var player = $("#player");
 var superman = $("#superMan");
 var bizarro = $("#bizarro");
 var bizarro = $("#reverseFlash");
 var enemies = $("#enemies");
 var fight = $("#fight");
 var defend = $("#defend");
 var defender = $("#defender");
 var playerDamage = $("#playerDamage");
 var defenderDamage = $("#defenderDamage");

 //functions
//  function fight(){
//     player.html("<img src=" + characters.heros.superMan.image + ">");       
//  }

 $(document).ready(function() {
    function selectCharacter(){
        superman.click(function() {
            player.append("<img src=" + characters.heros.superMan.image + ">");
        });
        bizarro.click(function() {
            enemies.append("<img src=" + characters.villains.bizarro.image + ">");
        });
    } 
 });

// manipulate multiple images at a time
// var heroArr = Object.values(characters.heros);

// console.log(Object.keys(characters.heros));

// function createImgHolder(arr) {
//   for (var i = 0; i < heroArr.length; i++) {
//     var image = document.createElement("img");
//     image.setAttribute("src", heroArr[i].image)
//     console.log(heroArr[i].image);
//   }
// }



/*
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
 */