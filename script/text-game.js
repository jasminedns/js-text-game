let userHealth = 20;
let userLost = 0;
let ogreHealth = 20;
let ogreLost= 0;




let rolls = [];
const MINOR_DAMAGE = 3;
const MAJOR_DAMAGE = 6;
let winner = false;
console.log("Welcome to Dungeons and Dragons! Are you ready to fight and kill the ogre that has been killing all the travellers around your town? Here's how it'll work: every time you do something the computer will roll a 20 sided dice.. Just hope that you get more than 10 and you'll be fine. Let's try it out before starting the game. Press OK.");

let userRoll = Math.floor(Math.random() * 20) + 1;

rolls.push(userRoll);

if (userRoll <= 10) {
    console.log(`You rolled ${userRoll}, we're not starting very well.. Hope it goes better when you're in-game for your own safety!`)
} else {
    console.log(`Damn! A ${userRoll} already? Let's hope you keep rolling like this later`)
}

console.log("So... Where were we? Yes... You are a warrior magician that decided that today's the day for the ogre to stop messing with the people around your village. So you take the golden path to the forest in order to find him and slay him. You see him right outside a cave while he's eating who-knows-what. You are aeger to strike him at once and when he doesn't even expect it. Roll to see if you succed to attack him!")

userRoll = Math.floor(Math.random() * 20) + 1;

if (userRoll <= 10) {
    console.log(`You rolled ${userRoll}... You tried to attack him but as soon as you try to strike, he gets up and slaps you to the ground! The fight starts! Your health: ${userHealth - MINOR_DAMAGE}/30 -- Ogre's health: ${ogreHealth}/30`)
    userHealth = userHealth - MINOR_DAMAGE;
} else {
    console.log(`You rolled ${userRoll}! You succed to hit him with your sword. But you notice that he's pissed now. The fight starts! Your health: ${userHealth}/30 -- Ogre's health: ${ogreHealth - MINOR_DAMAGE}/30`)
    ogreHealth = ogreHealth - MINOR_DAMAGE;
}
rolls.push(userRoll);

console.log(`Your rolls (most recent first): ${rolls.join(", ")}`);
console.log(rolls)

while (!winner) {
    if (userHealth > 0 && ogreHealth > 0) {
        let userInput = prompt(`Type ATTACK (to attack), HEALTH (to drick a health potion), FLEE (to leave the fight) or CHAT (to resonate with the ogre). After each action the dice will roll and we'll see what happens. Your helath: ${userHealth} -- ogre's health: ${ogreHealth} Choose your action!`);
        if (userInput === "ATTACK") {
            userRoll = Math.floor(Math.random() * 20) + 1;
                if (userRoll <= 10) {
                    console.log(`Well... at least you tried, right? You rolled a ${userRoll}...  You tried to swing your sword at him but you lose your balance and only scratch him. Your health: ${userHealth}/30 -- Ogre's health: ${ogreHealth - MINOR_DAMAGE}/30 `)
                    ogreHealth = ogreHealth - MINOR_DAMAGE
                } else {
                    console.log(`Yes! You rolled a ${userRoll}! You take a jump and strike the ogre that falls to the ground and starts bleeding! Your health: ${userHealth}/30 -- Ogre's health: ${ogreHealth - MAJOR_DAMAGE}/30 `)
                    ogreHealth = (ogreHealth - MAJOR_DAMAGE);
                }
        } else {

            console.log(`Input not valid try again`)
        } 
    } else {
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
                console.log(`Well... at least you tried, right? You rolled a ${userRoll}...  You tried to swing your sword at him but you lose your balance and only scratch him. Your health: ${userHealth}/30 -- Ogre's health: ${ogreHealth - MINOR_DAMAGE}/30 `)
                ogreHealth = ogreHealth - MINOR_DAMAGE
            } else {
                console.log(`Yes! You rolled a ${userRoll}! You take a jump and strike the ogre that falls to the ground and starts bleeding! Your health: ${userHealth}/30 -- Ogre's health: ${ogreHealth - MAJOR_DAMAGE}/30 `)
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






