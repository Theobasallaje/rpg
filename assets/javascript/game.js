//object that holds the each character objects with their properties that lists out all of the players and their images
var superMan =  {
    name: "Superman",
    image: "../rpg/assets/images/superman.png", 
    hp: 250, 
    damage: 0, 
    attackPower: 55,
    counterAttackPower: 55
}
var bizarro =  {
    name: "Bizzaro",
    image: "../rpg/assets/images/bizarro.png", 
    hp: 200, 
    damage: 0, 
    attackPower: 50,
    counterAttackPower: 50
}

var theFlash = {
    name: "The Flash",
    image: "../rpg/assets/images/flash.jpg", 
    hp: 150, 
    damage: 0, 
    attackPower: 35,
    counterAttackPower: 35
}

var reverseFlash = {
    name: "Reverse Flash",
    image: "../rpg/assets/images/reverseflash.jpg", 
    hp: 100, 
    damage: 0, 
    attackPower: 25,
    counterAttackPower: 25
}

//arrays
var characters = [superMan, bizarro, theFlash, reverseFlash]

 // Create global variables that hold references to the places in the HTML where we want to display things.
 var result = $("#result");
 var damageSelection = $("#damageSelection");
 var reset = $("#reset");
 var player = $("#player");
 var characterDisplay = $("#characters");
 var superman = $("#superMan");
 var bizarro = $("#bizarro");
 var enemies = $("#enemies");
 var fight = $("#fight");
 var defend = $("#defend");
 var defender = $("#defender");
 var defender2 = $("#defender2");
 var playerDamage = $("#playerDamage");
 var defenderDamage = $("#defenderDamage");


 var playerOne;
 var enemy;
 var isDefender = false;
//  var chosenCharacter;

 //functions

// function appendCharacters(){
//     this
//     .append(
//         `<div  class="characters">
//         <div>${this.name}</div>
//         <img src=${this.image} >
//         <div>${this.hp}</div>
//         </div>`
//         );
// }

function populateCharacters(display){
    display.empty();
    console.log("In populate characters")
    for (var i=0; i<characters.length; i++){
        console.log(characters[i].image)
        display
        .append(
            `<div data-index=${i} class="characters">
            <div style="font-size:.5em;">${characters[i].name}</div>
            <img class="img" src=${characters[i].image} >
            <div id="hp" style="font-size:.5em;">${characters[i].hp}</div>
            </div>`
            );
    }
    $(".characters").click(function(){
   
        var index = $(this).attr('data-index');
        if(!playerOne){
            playerOne = characters.splice(index, 1)[0]
            console.log(playerOne)
            characterDisplay.empty()
            // appendCharacters()
            player
            .append(
                `<div  class="characters">
                <div style="font-size:.5em;">${playerOne.name}</div>
                <img src=${playerOne.image} >
                <div id="playerhp" style="font-size:.5em;">${playerOne.hp}</div>
                </div>`
                );
            populateCharacters(enemies);
        } else {
            console.log("outside if: " + isDefender);
            // appendCharacters()
            if(!isDefender){
            isDefender = true;
            enemy = characters.splice(index, 1)[0]
            console.log("inside if: " + isDefender);
            defend 
            .append(
                `<div  class="characters">
                <div style="font-size:.5em;">${enemy.name}</div>
                <img src=${enemy.image} >
                <div id="defenderhp" style="font-size:.5em;">${enemy.hp}</div>
                </div>`
                );
            populateCharacters(enemies);
            }
        }
    
    });
}

 $(document).ready(function() {
    $("#button").click(function(){
        damageSelection.show();
        playerOne.damage = playerOne.damage + enemy.counterAttackPower;
        playerOne.hp = playerOne.hp - enemy.counterAttackPower;
        enemy.damage = enemy.damage + playerOne.attackPower;
        enemy.hp = enemy.hp - playerOne.attackPower;
        $("#playerhp").text(playerOne.hp);
        $("#defenderhp").text(enemy.hp);
        defender.text(enemy.name);
        defender2.text(enemy.name);
        playerDamage.text(enemy.counterAttackPower);
        defenderDamage.text(enemy.damage);
        console.log(playerOne.attackPower);
        console.log(enemy.CounterAttackPower);
        playerOne.attackPower += 5;

        if (playerOne.hp <= 0){
            result.text("You have been defeated! GAME OVER..."); 
            damageSelection.hide();
            reset.show();
        } 
        else if (enemy.hp <= 0){
            result.text(enemy.name + " is defeated!");
            defend.text("Defender");
            damageSelection.hide();
            isDefender = false;
            reset.show();
        }
    
        else{
            // console.log(playerOne.hp);
            // console.log(playerOne.damage);
            // console.log(playerOne.attackPower);
            
            // console.log(enemy.hp);
            // defender.text(enemy.name);
            // defender2.text(enemy.name);
            // playerDamage.text(playerOne.damage);
            // defenderDamage.text(enemy.damage);
        }
    });

    reset.click(function(){
        // populateCharacters(characterDisplay);
        location.reload();    
    });
    
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

