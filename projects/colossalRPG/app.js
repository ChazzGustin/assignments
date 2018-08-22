var rs = require("readline-sync");

var playTheGame = function () {
    var playerName = rs.question("Enter Name: ");
    console.log("While walking home from a night of drinking. You notice the only way home is through the 'haunted' cemetary. You know its not really haunted, so you continue your drunk journey home...");
    

    //create an array of enemies
    var enemies = [];
    var Enemy = function (name, hitPoints) {
        this.name = name;
        this.hitPoints = hitPoints;
        this.attack = Math.floor(Math.random() * 30) + 10;
    }
    var fight = false;
var isWalk = false;
    function addEnemy(name, hitPoints) {
        var n = new Enemy(name, hitPoints);
        enemies.push(n);
    }
    addEnemy("Warewolf", 40);
    addEnemy("Vampire", 35);
    addEnemy("Stitched Monster", 30);
    addEnemy("Ghoul", 25);
    addEnemy("Evil Imp", 43);
 
    //create a function to ask the user to attack or run
    var options = ["Attack", "Run"];
    var inventory = ["Cross W/ Ruby", "Holy Water", "Pandoras Box", "Silver Bullets", ];
    var player = {
        name: playerName,
        hitPoints: 80,
        enemiesKilled: 0,
        inventory: [],
    }
    while (player.hitPoints > 0 && player.enemiesKilled < 3) {
    
        var walkPrint = rs.keyIn("Lets get going home... Press 'w' to walk or 'p' to print your stats!\n", {
            limit: 'wp'
        });
        if (walkPrint === 'p'){
            console.log(player);
        };

        if (walkPrint === 'w'){
            isWalk = true;
        }
        //each time they push w randomly select a number between 1-3 to see if attacked
        while (isWalk) {
            //generate a number between 1-3
            var isAttacked = Math.floor(Math.random() * 3 + 1);
            //if 1... if 2... if 3...
            switch (isAttacked) {
                case 1:
                    console.log("NO WAY! ITS A...");
                    var getEnemy = enemies[Math.floor(Math.random() * enemies.length)];
                    var currentEnemy = getEnemy;
                    console.log(currentEnemy);
                    toFight = rs.keyInSelect(options, "You only have two options, run or FIGHT?");
                    console.log("I see you want to " + options[toFight]); //here I need to call the fight function
                    if (toFight === 0) {
                        fight = true;
                    } else if (toFight === 1) {
                        running();
                    }
                    isWalk = false;
                    break;
                case 2:
                    // console.log("Safe for now keep walking");
                    walkPrint = rs.keyIn("Press 'w' to keep walking if you dare or 'p' to print your stats!\n", {
                        limit: 'wp'
                    });
                    break;
                case 3:
                walkPrint = rs.keyIn("Press 'w' to keep walking if you dare or 'p' to print your stats!\n", {
                    limit: 'wp'
                });
                    break;
            }

        };

        function hitPoints() {
            player.hitPoints += 20;
            player.enemiesKilled++;
        }
        // var myInventory = [];
        function win() {
            var getItem = inventory[Math.floor(Math.random() * inventory.length)];
            console.log("Great Job you killed him!");
            //add item to my inventory and increase hitpoints
            player.inventory.push(getItem);
            hitPoints();
            console.log("Awesome! You gained 20 hit points and your inventory now contains: " + player.inventory);
            console.log(player);
            // currentEnemy = getEnemy;
            //need to go back to walking
        }

        function running() {
            var run = Math.floor(Math.random() * 2 + 1);
            // console.log(run);
            if (run === 1) {
                console.log("Whew, that was close you got away this time.")
                currentEnemy = getEnemy;
            } else if (run === 2) {
                console.log("Oh no you didn't quite escape. Now you must fight.");
                fight = true;
            };
        };
        //need to make one for fighting and one for running.
        while (fight) {
            //right now my current enemy has hitpoints of currentEnemy.hitPoints
            var attackPower = Math.floor(Math.random() * 20 + 10);
            console.log("For your battle you have " + attackPower + " attack.");
            //did you kill the enemy. or did he get away.
            if (attackPower > currentEnemy.hitPoints) {
                win();
                currentEnemy = getEnemy;
                fight = false;
            } else {
                //enemy takes damage
                currentEnemy.hitPoints = currentEnemy.hitPoints - attackPower;
                //enemy attacks back
                console.log("The monster is wounded but he is not dead yet. He has " + currentEnemy.hitPoints + " hitpoints remaining. Watch out he is fighting back with " + currentEnemy.attack + " attack!");
                //get current enemy attack power and minus it from my hitpoints
                player.hitPoints = player.hitPoints - currentEnemy.attack;
                if (player.hitPoints <= 0) {
                    console.log("The monster was stronger than you thought. You have " + player.hitPoints + " remaining, your enemy has won and you will never make it out of the forest!");
                  
                    fight = false;
                } else {
                    console.log("You have lived to fight back with your next attack! with " + player.hitPoints + " hit points remaining.");
                }
                //if not dead attack back
                //once someone dies continue walking or game over

            };
        };
    };
    if (player.enemiesKilled >= 3) {
    console.log("You made it home drunk ass!")
    } else {
        console.log("It hurts to lose but I am here for you.")
    }
}
playTheGame();
