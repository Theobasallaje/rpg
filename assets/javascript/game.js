//object that holds the each character objects with their properties that lists out all of the players and their images


var superMan =  {
    name: "Superman",
    image: "../rpg/assets/images/superman.png", 
    hp: 100, 
    damage: 0, 
    attackPowewr: 0,
    counterAttackPower: 0
}
var bizarro =  {
    name: "Bizzaro",
    image: "../rpg/assets/images/bizarro.png", 
    hp: 100, 
    damage: 0, 
    attackPowewr: 0,
    counterAttackPower: 0
}

var theFlash = {
    name: "The Flash",
    image: "../rpg/assets/images/flash.jpg", 
    hp: 100, 
    damage: 0, 
    attackPowewr: 0,
    counterAttackPower: 0
}

var reverseFlash = {
    name: "Reverse Flash",
    image: "../rpg/assets/images/reverseflash.jpg", 
    hp: 100, 
    damage: 0, 
    attackPowewr: 0,
    counterAttackPower: 0
}

var characters = [superMan, bizarro, theFlash, reverseFlash]
//arryas
 

 //global variables 
 

 // Create variables that hold references to the places in the HTML where we want to display things.
 var directionsText = $("#directions");
 var player = $("#player");
 var characterDisplay = $("#characters");
 var superman = $("#superMan");
 var bizarro = $("#bizarro");
 var bizarro = $("#reverseFlash");
 var enemies = $("#enemies");
 var fight = $("#fight");
 var defend = $("#defend");
 var defender = $("#defender");
 var playerDamage = $("#playerDamage");
 var defenderDamage = $("#defenderDamage");


 var playerOne;
 var enemy;

 //functions
//  function fight(){
//     player.html("<img src=" + characters.heros.superMan.image + ">");       
//  }
function populateCharacters(display){
    display.empty();
    console.log("In populate characters")
    for (var i=0; i<characters.length; i++){
        console.log(characters[i].image)
      
        display
        .append(
            `<div data-index=${i} class="characters">
            <div>${characters[i].name}</div>
            <img src=${characters[i].image} >
            <div>${characters[i].hp}</div>
            </div>`
            );
    }
    $(".characters").click(function(){
   
        var index = $(this).attr('data-index');
        if(!playerOne){
            playerOne = characters.splice(index, 1)[0]
            console.log(playerOne)
            characterDisplay.empty()
            player
            .append(
                `<div  class="characters">
                <div>${playerOne.name}</div>
                <img src=${playerOne.image} >
                <div>${playerOne.hp}</div>
                </div>`
                );
            populateCharacters(enemies);
        } else {
            enemy = characters.splice(index, 1)[0]
            defend 
            .append(
                `<div  class="characters">
                <div>${enemy.name}</div>
                <img src=${enemy.image} >
                <div>${enemy.hp}</div>
                </div>`
                );
            populateCharacters(enemies);
        }
    
    });
}



 $(document).ready(function() {
     populateCharacters(characterDisplay);
    // function selectCharacter(){
    //     superman.click(function() {
    //         player.append("<img src=" + characters.heros.superMan.image + ">");
    //     });
    //     bizarro.click(function() {
    //         enemies.append("<img src=" + characters.villains.bizarro.image + ">");
    //     });
    // } 
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
 });

