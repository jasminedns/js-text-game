let userHealth = 20;
let ogreHealth = 20;
let rolls = [];
const MINOR_DAMAGE = 3;
const MAJOR_DAMAGE = 6;
let winner = false;
alert("Welcome to Dungeons and Dragons! Are you ready to fight and kill the ogre that has been killing all the travellers around your town? Here's how it'll work: every time you do something the computer will roll a 20 sided dice.. Just hope that you get more than 10 and you'll be fine. Let's try it out before starting the game. Press OK.");

let userRoll = Math.floor(Math.random() * 20) + 1;

rolls.push(userRoll);

if (userRoll <= 10) {
    alert(`You rolled ${userRoll}, we're not starting very well.. Hope it goes better when you're in-game for your own safety!`)
} else {
    alert(`Damn! A ${userRoll} already? Let's hope you keep rolling like this later`)
}

alert("So... Where were we? Yes... You are a warrior magician that decided that today's the day for the ogre to stop messing with the people around your village. So you take the golden path to the forest in order to find him and slay him. You see him right outside a cave while he's eating who-knows-what. You are aeger to strike him at once and when he doesn't even expect it. Roll to see if you succed to attack him!")

userRoll = Math.floor(Math.random() * 20) + 1;

if (userRoll <= 10) {
    alert(`You rolled ${userRoll}... You tried to attack him but as soon as you try to strike, he gets up and slaps you to the ground! The fight starts! Your health: ${userHealth - MINOR_DAMAGE}/20 -- Ogre's health: ${ogreHealth}/20`)
    userHealth = userHealth - MINOR_DAMAGE;
} else {
    alert(`You rolled ${userRoll}! You succed to hit him with your sword. But you notice that he's pissed now. The fight starts! Your health: ${userHealth}/20 -- Ogre's health: ${ogreHealth - MINOR_DAMAGE}/20`)
    ogreHealth = ogreHealth - MINOR_DAMAGE;
}


while (!winner) {
    if (userHealth > 0 && ogreHealth > 0) { //works!! BUT SHOWS NEGATIVE VALUE FIRST AND THEN EXITS THE LOOP (maybe change damange to 2 and 4)
        let userInput = prompt(`Type ATTACK (to attack), FLEE (to leave the fight) or CHAT (to resonate with the ogre). After each action the dice will roll and we'll see what happens. 
        Your rolls (most recent first): ${rolls.join(", ")}.
        Your health: ${userHealth} -- ogre's health: ${ogreHealth} Choose your action!`);
        if (userInput === "ATTACK") {
            userRoll = Math.floor(Math.random() * 20) + 1;
            if (userRoll <= 10) {
                alert(`Well... at least you tried, right? You rolled a ${userRoll}...  You tried to swing your sword at him but you lose your balance and only scratch him. Your health: ${userHealth}/20 -- Ogre's health: ${ogreHealth - MINOR_DAMAGE}/20 `)
                ogreHealth = ogreHealth - MINOR_DAMAGE

            } else {
                alert(`Yes! You rolled a ${userRoll}! You take a jump and strike the ogre that falls to the ground and starts bleeding! Your health: ${userHealth}/20 -- Ogre's health: ${ogreHealth - MAJOR_DAMAGE}/20 `)
                ogreHealth = (ogreHealth - MAJOR_DAMAGE);
            }
        } else if (userInput === "FLEE") {
            userRoll = Math.floor(Math.random() * 20) + 1;
            if (userRoll <= 10) {
                alert(`Well... at least you tried, right? You rolled a ${userRoll}...  You tried to flee from the fight but the ogre grabs you right back into it and attacks you. Your health: ${userHealth - MAJOR_DAMAGE}/20 -- Ogre's health: ${ogreHealth}/20 `)
                userHealth = userHealth - MAJOR_DAMAGE

            } else {
                alert(`Yes! You rolled a ${userRoll}! You see that the ogre is distracted by the appearance of a female ogre, so you flee succesfully. Your health: ${userHealth}/20 -- Ogre's health: ${ogreHealth}/20 `)
                ogreHealth = 0;
            }
        } else if (userInput === "CHAT") {
            userRoll = Math.floor(Math.random() * 20) + 1;
            if (userRoll <= 10) {
                alert(`Well... at least you tried, right? You rolled a ${userRoll}...  You try to resonate with the ogre but you unconsciusly say something about his mother. He then grabs you and throws you against a tree. Your health: ${userHealth - MAJOR_DAMAGE}/20 -- Ogre's health: ${ogreHealth}/20 `)
                userHealth = userHealth - MAJOR_DAMAGE

            } else {
                alert(`Yes! You rolled a ${userRoll}! You successfully resonate with the ogre that starts crying. You then convince him to follow you to the village where he can express how bad he feels for what he has done. The villagers after hearing what he had to say kill him. RIP.`)
                ogreHealth = 0;
            }
        } else {

        }
        rolls.push(userRoll);
    } else {
        if (userHealth <= 0) {
            alert(`You died.. sorry!`)
        } else {
            alert(`Congrats! You defeated the ogre!`)
        }
        winner = true;

    }
}



















/*
while (userHealth > 0 || !ogreHealth > 0) {

    let userInput = prompt(`Type ATTACK (to attack), HEALTH (to drick a health potion), FLEE (to leave the fight) or CHAT (to resonate with the ogre). After each action the dice will roll and we'll see what happens. Your helath: ${userHealth} -- ogre's health: ${ogreHealth} Choose your action!`);

    switch (userInput) {

        case "ATTACK": 
            userRoll = Math.floor(Math.random() * 20) + 1;
            if (userRoll <= 10) {
                console.log(`Well... at least you tried, right? You rolled a ${userRoll}...  You tried to swing your sword at him but you lose your balance and only scratch him. Your health: ${userHealth}/20 -- Ogre's health: ${ogreHealth - MINOR_DAMAGE}/20 `)
                ogreHealth = ogreHealth - MINOR_DAMAGE
            } else {
                console.log(`Yes! You rolled a ${userRoll}! You take a jump and strike the ogre that falls to the ground and starts bleeding! Your health: ${userHealth}/20 -- Ogre's health: ${ogreHealth - MAJOR_DAMAGE}/20 `)
                ogreHealth = (ogreHealth - MAJOR_DAMAGE);
            }
        break;
        
        default:
            
        break;
    }
}

if (userHealth === 0) {
    console.log(`You lost`)
} else if (ogreHealth === 0) {
    console.log(`you win!`)
} else {
    alert(`input not valid`)
}

*/






