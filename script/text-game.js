let userHealth = 20;
let ogreHealth = 20;
let rolls = [];
let heroes = ["PALADIN", "WIZARD", "ROGUE", "BARBARIAN"]
const MINOR_DAMAGE = 2;
const MAJOR_DAMAGE = 4;
let winner = false;
alert(`Welcome to "The titan's fall"! Are you ready to fight and kill the ogre that has been killing people around your town? 
    Here's how it'll work: every time you do something the computer will roll a 20 sided dice.. Just hope that you get more than 10 and you'll be fine.`)

alert(`So... Where were we? Yes... Nestled deep within the ancient "Whispering Woods", the village of Timberbrook is a settlement known for its hardworking inhabitants.
    As I said previously, the village is surrounded by the Wispering Woods: a forest both beautiful and treacherous. Legends say that the deeper one ventures into the woods, the darker and more ominous it becomes.
    Lately, a sense of dread has settled over Timberbrook. An ogre, known as Kastaclysm has taken up residence in a cave not far from the village. He has been terrorizing the villagers, attacking anyone who strays too far from the safety of the village and even venturing into Timberbrook to wreak havoc.`)
alert(`The village elder, a wise and respected figure named Elara, has called upon brave adventurers to rid Timberbrook of this menace. You were the chosen one. She decides to tell the village that they have a brave hero ready to slay the monster that has been terrorizing the village.
    Elara: “our beloved village is in grave danger. The ogre has already claimed the lives of several villagers, and his attacks grow bolder by the day. Our hero is ready to venture into the Whispering Woods, find his lair, and put an end to his reign of terror.”`)

let userHero = prompt(`Choose your hero between: ${heroes.join(", ")}`)
    if (userHero === heroes[0]) {
        alert(`You chose: 
            Name: Sir Cedric the Brave
            Class: Paladin
            Race: Human
            Background: Noble
            Abilities: High Strength and Charisma
            Equipment: Longsword, Shield, Chain Mail
            Special Abilities: Divine Smite, Lay on Hands
            Description: Sir Cedric is a valiant knight dedicated to protecting the innocent. His divine powers allow him to deal extra radiant damage to Gruk, and his healing abilities can keep him in the fight.`)
    } else if (userHero === heroes[1]) {
        alert(`You chose:
            Name: Elara the Wise
            Class: Wizard
            Race: Elf
            Background: Sage
            Abilities: High Intelligence and Dexterity
            Equipment: Spellbook, Staff
            Special Abilities: Fireball, Shield, Magic Missile
            Description: Elara is a knowledgeable wizard with a vast array of spells at her disposal. Her powerful offensive spells can deal significant damage to Gruk, while her defensive spells can protect her from harm.`)
    } else if (userHero === heroes[2]) {
        alert(`You chose:
            Name: Darpas the Starving one
            Class: Rogue
            Race: Halfling
            Background: Criminal
            Abilities: High Dexterity and Wisdom
            Equipment: Daggers, Thieves' Tools, Leather Armor
            Special Abilities: Sneak Attack, Evasion
            Description: Darpas is a stealthy rogue who excels at striking from the shadows. His ability to deal extra damage with sneak attacks makes him a formidable opponent for Gruk, and his agility allows him to avoid the ogre's powerful blows.`)
    } else if (userHero === heroes[3]) {
        alert (`You chose:
            Name: Bruna the Bold
            Class: Barbarian
            Race: Half-Orc
            Background: Outlander
            Abilities: High Strength and Constitution
            Equipment: Greataxe, Javelins, Hide Armor
            Special Abilities: Rage, Reckless Attack
            Description: Bruna is a fierce barbarian with unmatched strength and resilience. When she enters a rage, she can deal massive damage to Gruk and withstand his attacks. Her intimidating presence can also demoralize the ogre.`)
    } else {
        alert(`Please insert a valid option. Remember to type in all caps.`)
    }

alert(`You venture into the forest knowing that your village counts on you and your excellent ability even though you're not too sure of what awaits for you or what you can do to defeat the Ogre. 
    Suddenly, you see him. You see the ogre right outside his cave eating God-knows-what. You decide to strike him suddely, by surprise in order to have the upper hand. Let's see how it goes... Roll the dice!`)

userRoll = Math.floor(Math.random() * 20) + 1;
rolls.unshift(userRoll);

if (userRoll <= 10) {
    alert(`You rolled ${userRoll}... You tried to attack him but as soon as you try to strike, he gets up and slaps you to the ground! The fight starts! Your health: ${userHealth - MINOR_DAMAGE}/20 -- Ogre's health: ${ogreHealth}/20`)
    userHealth -= MINOR_DAMAGE;
} else {
    alert(`You rolled ${userRoll}! You succed to hit him with your sword. But you notice that he's pissed now. The fight starts! Your health: ${userHealth}/20 -- Ogre's health: ${ogreHealth - MINOR_DAMAGE}/20`)
    ogreHealth -= MINOR_DAMAGE;
}

while (!winner) {
    if (userHealth > 0 && ogreHealth > 0) {
        let userAction = prompt(`Type ATTACK (to attack), FLEE (to leave the fight) or CHAT (to resonate with the ogre). After each action the dice will roll and we'll see what happens. 
        Your rolls (most recent first): ${rolls.join(", ")}.
        Your health: ${userHealth} -- ogre's health: ${ogreHealth} Choose your action!`);

        for (let i = 0; i < 1; i++) {
            let userRoll = Math.floor(Math.random() * 20) + 1;
            rolls.unshift(userRoll);

            switch (userAction) {
                case "ATTACK":
                    if (userRoll <= 10) {
                        alert(`Well... at least you tried, right? You rolled a ${userRoll}... You tried to swing your sword at him but you lose your balance and only scratch him. 
                        Your health: ${userHealth}/20 -- Ogre's health: ${ogreHealth - MINOR_DAMAGE}/20`);
                        ogreHealth -= MINOR_DAMAGE;
                        if (ogreHealth < 0) ogreHealth = 0; // Ensure ogreHealth doesn't go below 0
                    } else {
                        alert(`Yes! You rolled a ${userRoll}! You take a jump and strike the ogre that falls to the ground and starts bleeding! 
                        Your health: ${userHealth}/20 -- Ogre's health: ${ogreHealth - MAJOR_DAMAGE}/20`);
                        ogreHealth -= MAJOR_DAMAGE;
                        if (ogreHealth < 0) ogreHealth = 0; // Ensure ogreHealth doesn't go below 0
                    }
                    break;

                case "FLEE":
                    if (userRoll <= 10) {
                        alert(`Well... at least you tried, right? You rolled a ${userRoll}... You tried to flee from the fight but the ogre grabs you right back into it and attacks you. 
                        Your health: ${userHealth - MAJOR_DAMAGE}/20 -- Ogre's health: ${ogreHealth}/20`);
                        userHealth -= MAJOR_DAMAGE;
                        if (userHealth < 0) userHealth = 0; // Ensure userHealth doesn't go below 0
                    } else {
                        alert(`Yes! You rolled a ${userRoll}! You see that the ogre is distracted by the appearance of a female ogre, so you flee successfully. 
                        Your health: ${userHealth}/20 -- Ogre's health: ${ogreHealth}/20`);
                        
                        let userFleeChoice = prompt(`Do you really want to let down all the village and become even more hated than the ogre himself? Type Y (for yes) or N (for no)`);

                        if (userFleeChoice === "Y") {
                            alert(`Well.. congrats the game's over and the village hates you`);
                            winner = true;
                        } else if (userFleeChoice === "N") {
                            alert(`Well then.. Why did you even try then? Let's go back!`);
                        } else {
                            alert(`Invalid input. Y for yes and N for no please.`);
                        }
                    }
                    break;

                case "CHAT":
                    if (userRoll <= 10) {
                        alert(`Well... at least you tried, right? You rolled a ${userRoll}... You try to resonate with the ogre but you unconsciously say something about his mother. He then grabs you and throws you against a tree. 
                        Your health: ${userHealth - MAJOR_DAMAGE}/20 -- Ogre's health: ${ogreHealth}/20`);
                        userHealth -= MAJOR_DAMAGE;
                        if (userHealth < 0) userHealth = 0; // Ensure userHealth doesn't go below 0
                    } else {
                        alert(`Yes! You rolled a ${userRoll}! You successfully resonate with the ogre that starts crying. You then convince him to follow you to the village where he can express how bad he feels for what he has done. The villagers after hearing what he had to say kill him. RIP.`);
                        ogreHealth = 0;
                    }
                    break;

                default:
                    alert("Invalid action. Please choose ATTACK, FLEE, or CHAT.");
                    break;
            }
        }
    } else {
        if (userHealth <= 0) {
            alert("You died.. sorry!");
        } else {
            alert("Congrats! You defeated the ogre!");
        }
        winner = true;
    }
}
