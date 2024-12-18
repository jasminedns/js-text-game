const MINOR_DAMAGE = 2;
const MAJOR_DAMAGE = 4;
let heroes = ["PALADIN", "WIZARD", "ROGUE", "BARBARIAN"]
let ogreHealth = 20;
let rolls = [];
let userHealth = 20;
let userHero;
let weapons = ["longsword", "battleaxe", "shortbow", "warhammer", "dagger"]
let winner = false;

const characterSheet = (sheet) => {
    return userHero.toUpperCase() === heroes[sheet]
}

const isValidAction = (action) => {
    const validActions = ["ATTACK", "HEAL", "FLEE", "CHAT"];
    return validActions.includes(action.toUpperCase())
}

const rollAndSave = () => {
    userRoll = Math.floor(Math.random() * 20) + 1;
    rolls.unshift(userRoll);
}

const sneakAttack = () => {
    if (userRoll <= 10) {
        alert(`You rolled a ${userRoll}... You sneak behind the ogre, ready to use your knife but while you're walking behind him, you step on a tree branch. The ogre hears you, turns around, sees you holding your knife and says: "HAHAHAHAHAHA that's not a knoife", he then grabs his, looks at you and says: "That's a knoife".
        Before you can react, the ogre’s massive knife comes down towards you. You try to dodge, but the knife catches you on the shoulder! You can hear the ogre laughing at you and then he says: "Next time, bring a real knoife mate." 
        The fight starts! Your health: ${userHealth -= MINOR_DAMAGE}/20 -- Ogre's health: ${ogreHealth}/20`)
    } else {
        alert(`You rolled a ${userRoll}! With a determined glint in your eye, you grip your weapon tightly and charge at the ogre. You aim for its big ugly face. The ogre stumbles backward, clutching its face and shouts: "OW!!! My nose! Do you even know how hard it is to find a good ogre plastic surgeon?"
            The fight starts! Your health: ${userHealth}/20 -- Ogre's health: ${ogreHealth -= MINOR_DAMAGE}/20`)
    }
}

const cancelGame = (input) => {
    return input === null
}

const ogreAttack = () => {
    alert(`Now it's the ogre turn to attack! Prepare thyself!`)
    let ogreRoll = Math.floor(Math.random() * 20) + 1;

    if (ogreRoll <= 10) {
        alert(`The ogre, with a roar that could shake mountains, swung its massive club at the hero. But the hero, quick on their feet, deftly dodged the blow. The club smashed into the ground, sending dirt and rocks flying, but the hero remained unscathed, ready to counterattack.
        Your health: ${userHealth}/20 -- ogre's health: ${ogreHealth}/20`)

    } else {
        alert(`The ogre swings his club, sweeping an arc that could clear a forest and hero gets caught by it. The hero on ground lifts up their armor to see a massive purple bruise and whispers: "I really should have stayed in bed today".
            Your health: ${userHealth -= MAJOR_DAMAGE}/20 -- ogre's health: ${ogreHealth}/20`)
            if (userHealth <= 0) zeroHealth(userHealth)

    }
}

const zeroHealth = (characterHealth) => {
    return characterHealth = 0;
}

alert(`                                             The Titan's Fall
    Are you ready to fight and slay the ogre that has been killing people around your town? 
    Here's how it'll work: every time you choose to do something, the computer will roll a 20 sided dice.. Just hope to get 10 or more and you'll be fine.`)

alert(`So... Where were we? Yes... Nestled deep within the ancient Whispering Woods, the village of Timberbrook is a settlement known for its hardworking inhabitants.
    The village is surrounded by the Whispering Woods: a forest both beautiful and treacherous. Legends say that the deeper one ventures into the woods, the darker and more ominous it becomes.
    Lately, an ogre, known as Gruk has taken up residence in a cave not far from the village. He has been terrorizing the villagers, attacking anyone who strays too far from the safety of the village.`)
alert(`The village elder, a wise and respected figure named Elara, has called upon brave adventurers to rid Timberbrook of this menace. You were the chosen one. She decides to tell the village that they have a brave hero ready to slay the monster that has been terrorizing the village.
    Elara says: “Our beloved village is in grave danger. The ogre has already claimed the lives of several villagers, and his attacks grow bolder by the day. Our hero is ready to venture into the Whispering Woods and put an end to his reign of terror.”`)

    userHero = prompt(`Who do you want to be? Choose your hero!
        ${heroes.join(", ")}`)

    while (!cancelGame(userHero) && !heroes.includes(userHero.toUpperCase())) {
        alert(`Please choose a valid option.`)
        userHero = prompt(`Who do you want to be? Choose your hero!
            ${heroes.join(", ")}`);
    }

    if (cancelGame(userHero)) {
        alert(`Well, it looks like our "brave" adventurer has decided to take an early retirement! Perhaps the call of a cozy bed or a warm meal was just too strong to resist. But fear not, the village will still be here when you're ready to return. GAME OVER... for now!`)
        throw new Error("Game Over")
    } else {
        userHero = userHero.toUpperCase()
    
        if (characterSheet(0)) {
            alert(`You chose: 
                Name: Sir Cedric the Brave
                Class: Paladin
                Race: Human
                Background: Noble
                Abilities: High Strength and Charisma
                Equipment: Longsword, Shield, Chain Mail
                Special Abilities: Divine Smite, Lay on Hands
                Description: Sir Cedric is a valiant knight dedicated to protecting the innocent. His divine powers allow him to deal extra radiant damage to Gruk, and his healing abilities can keep him in the fight.`)
        } else if (characterSheet(1)) {
            alert(`You chose:
                Name: Elara the Wise
                Class: Wizard
                Race: Elf
                Background: Sage
                Abilities: High Intelligence and Dexterity
                Equipment: Spellbook, Staff
                Special Abilities: Fireball, Shield, Magic Missile
                Description: Elara is a knowledgeable wizard with a vast array of spells at her disposal. Her powerful offensive spells can deal significant damage to Gruk, while her defensive spells can protect her from harm.`)
        } else if (characterSheet(2)) {
            alert(`You chose:
                Name: Darpas the Starving one
                Class: Rogue
                Race: Halfling
                Background: Criminal
                Abilities: High Dexterity and Wisdom
                Equipment: Daggers, Thieves' Tools, Leather Armor
                Special Abilities: Sneak Attack, Evasion
                Description: Darpas is a stealthy rogue who excels at striking from the shadows. His ability to deal extra damage with sneak attacks makes him a formidable opponent for Gruk, and his agility allows him to avoid the ogre's powerful blows.`)
        } else {
            alert (`You chose:
                Name: Bruna the Bold
                Class: Barbarian
                Race: Half-Orc
                Background: Outlander
                Abilities: High Strength and Constitution
                Equipment: Greataxe, Javelins, Hide Armor
                Special Abilities: Rage, Reckless Attack
                Description: Bruna is a fierce barbarian with unmatched strength and resilience. When she enters a rage, she can deal massive damage to Gruk and withstand his attacks. Her intimidating presence can also demoralize the ogre.`)
        }
    }
    
alert(`Let's now choose your weapon! (It will be assigned randomly between: ${weapons.join(", ")})`)
let randomWeapon = Math.floor(Math.random() * weapons.length)
alert(`You were assigned a ${weapons[randomWeapon]}! Now that everything's set, let's dive into the story!`)


alert(`You venture into the forest knowing that your village counts on you even though you're not too sure of what awaits for you or what you can do to defeat the ogre. 
    Suddenly, you see him. You see the ogre right outside his cave eating God-knows-what. You decide to strike him by surprise in order to have the upper hand. Let's see how it goes... Roll the dice!`)

rollAndSave();

sneakAttack();

while (!winner) {
    if (userHealth > 0 && ogreHealth > 0) {
        let userAction = prompt(`Type ATTACK, HEAL, FLEE (to leave the fight) or CHAT (to resonate with the ogre). After each action the dice will roll and we'll see what happens. 
        Your rolls (most recent first): ${rolls.join(", ")}.
        Your health: ${userHealth}/20 -- ogre's health: ${ogreHealth}/20`)

        if (cancelGame(userAction)) {
            alert(`Well, it looks like our "brave" adventurer has decided to take an early retirement! Perhaps the call of a cozy bed or a warm meal was just too strong to resist. But fear not, the village will still be here when you're ready to return. GAME OVER... for now!`)
            winner = true;
        }
        
        while (!isValidAction(userAction)) {
            alert("Invalid input. Choose a valid option!")
            userAction = prompt(`Type ATTACK, FLEE (to leave the fight) or CHAT (to resonate with the ogre). After each action the dice will roll and we'll see what happens. 
                Your rolls (most recent first): ${rolls.join(", ")}.
                Your health: ${userHealth} -- ogre's health: ${ogreHealth}`)
        }
    
        for (let i = 0; i < 1; i++) {
            rollAndSave();

            switch (userAction.toUpperCase()) {
                case "ATTACK":
                    if (userRoll <= 10) {
                        alert(`Well... at least you tried, right? You rolled a ${userRoll}... You charge the ogre, your weapon is gleaming in the dim light. You swing it but just as your sword is about to strike, the ogre sneezes - a massive, earth-shaking sneeze that sends you flying backward. You land on your back, covered in ogre snot. The ogre looks down at you and says: "Ewww! Did I do that?". He waits for you to go get a shower and get changed, then the fight resumes!    
                        Your health: ${userHealth -= MINOR_DAMAGE}/20 -- Ogre's health: ${ogreHealth}/20`);
                        if (userHealth <= 0) zeroHealth(userHealth);
                    } else {
                        alert(`Yes! You rolled a ${userRoll}! You leap into the air, aiming for its head. Your weapon gets the ogre right on his forehead. The ogre stumbles backwards as you grin from ear to ear and shout: "Sorry big guy, but I think it's time to put you to sleep. Go get your safety blanket!" 
                        Your health: ${userHealth}/20 -- Ogre's health: ${ogreHealth -= MAJOR_DAMAGE}/20`);
                        if (ogreHealth <= 0) {
                            zeroHealth(ogreHealth);
                        } else {
                            ogreAttack();
                        }
                    }
                    break;

                case "HEAL": 
                    if (userRoll <= 7) {
                        if (userHealth === 20) {
                        alert(`You had full health already... But you know what? Since you're trying to be funny I'll be too and since you rolled a ${userRoll}, bad things are going to happen! The hero reaches into their sachel in seach of a healing potion. With a sigh of relif, the hero pulls out a glowing vial, uncorks it and takes it down in one gulp. Everything starts to burn. The potion they grabbed was not a healing elixir, but a vial of poison meant for the ogre that is grinning while watching you suffer.
                            Your health: ${userHealth -= MINOR_DAMAGE}/20 -- Ogre's health: ${ogreHealth}/20`)
                            if (userHealth <= 0) zeroHealth(userHealth);
                        } else {
                            alert(`Let's go! Oh no... You rolled a ${userRoll}... The hero reaches into their sachel in seach of a healing potion. With a sigh of relief, the hero pulls out a glowing vial, uncorks it and takes it down in one gulp. Everything starts to burn. The potion they grabbed was not a healing elixir, but a vial of poison meant for the ogre that is grinning while watching you suffer.
                            Your health: ${userHealth -= MINOR_DAMAGE}/20 -- Ogre's health: ${ogreHealth}/20`)
                            if (userHealth <= 0) zeroHealth(userHealth);
                        }
                    
                    } else if (userRoll >= 8 && userRoll <= 12) {
                        alert(`In the heat of battle, the hero reaches into their satchel, intending to grab a healing potion. Instead, their fingers close around a vial of poison. Realizing the mistake just in time, the hero swiftly hurls the vial at the charging ogre. The glass shatters against the ogre's chest, and the toxic liquid splashes over its skin.
                            Your health: ${userHealth}/20 -- Ogre's health: ${ogreHealth -= MINOR_DAMAGE}/20`)
                            if (ogreHealth <= 0) zeroHealth(ogreHealth)
                    } else {
                        if (userHealth === 20) {
                            alert(`Congrats, you rolled a ${userRoll}! Unfortunately you can't use it.. Oh you want to know why? CAUSE YOU HAVE FULL HEALTH ALREADY! Let's go back to the fight please. (...amateurs)`)
                        } else if (userHealth === 19) {
                            alert(`Yes! You rolled a ${userRoll}... The hero pulls out a vial, its contents glowing with a soothing, golden light and takes it without hesitation.Almost immediately, a warm, comforting sensation spreads through their body, mending wounds and restoring strength. The hero feel rejuvinated! Now.. The battle is far from over, but with their health restored, the hero fights on!
                                Your health: ${userHealth += 1}/20 -- Ogre's health: ${ogreHealth}/20`)
                        } else {
                            alert(`Yes! You rolled a ${userRoll}... The hero pulls out a vial, its contents glowing with a soothing, golden light and takes it without hesitation.Almost immediately, a warm, comforting sensation spreads through their body, mending wounds and restoring strength. The hero feel rejuvinated! Now.. The battle is far from over, but with their health restored, the hero fights on!
                                Your health: ${userHealth += 2}/20 -- Ogre's health: ${ogreHealth}/20`)
                        }
                    }
                    break;

                case "FLEE":
                    if (userRoll <= 10) {
                        alert(`Well... at least you tried, right? You rolled a ${userRoll}... You start running opposite to the ogre and just as you think you're in the clear, you hear a loud, mocking voice behind you: "Running away already? I thought we were just getting started!". The ogre is now running after you - he's surprisingly fast for its size. You push youself harder, but your foot catches on a loose rock, sending you to the ground. The ogre grabs you by the neck and smashes you to the ground. You sigh and while you draw your weapon once more, you mutter: "Well, it was worth a shot"
                        Your health: ${userHealth -= MAJOR_DAMAGE}/20 -- Ogre's health: ${ogreHealth}/20`);
                        if (userHealth <= 0) zeroHealth(userHealth);
                    } else {
                        alert(`Yes! You rolled a ${userRoll}! As the ogre swings its massive club, you decide that leaving to fight another day sounds like a fantastic idea. You seize the moment and decide to make a run for it. You start running towards the village, dodging trees and leaping over roots. The ogre starts running after you, he's faster than you thought when all of a suddden your hear a female voice that says: "Hey there, big boy". You turn around confused and see a female ogre stepping out from behind a boulder, batting her eyelashes at your pursuer. The male ogre, unprepared, can only say "Uh, hi.. I was just, uh, smashing some pathetic human but I guess I can take a break."
                        Your health: ${userHealth}/20 -- Ogre's health: ${ogreHealth}/20`);

                        let userFleeChoice = prompt("Do you want to flee? (yes or no)").toUpperCase();

                        while (userFleeChoice !== "YES" && userFleeChoice !== "NO") {
                            alert("Invalid input. Type yes or no please.");
                            userFleeChoice = prompt("Do you want to flee? (yes or no)").toUpperCase();
                        }

                        if (userFleeChoice === "YES") {
                            let userFleeChoiceII = prompt("...I didn't expect you to do that... are you really sure? (yes or no)").toUpperCase();
                            
                            while (userFleeChoiceII !== "YES" && userFleeChoiceII !== "NO") {
                                alert("Invalid input. Type yes or no please.");
                                userFleeChoiceII = prompt("...I didn't expect you to do that... are you really sure? (yes or no)").toUpperCase();
                            }

                            if (userFleeChoiceII === "YES") {
                                let userFleeChoiceIII = prompt("Are you REALLY REALLY sure? (yes or no)").toUpperCase();
                                
                                while (userFleeChoiceIII !== "YES" && userFleeChoiceIII !== "NO") {
                                    alert("Invalid input. Type yes or no please.");
                                    userFleeChoiceIII = prompt("Are you REALLY REALLY sure? (yes or no)").toUpperCase();
                                }

                                if (userFleeChoiceIII === "YES") {
                                    alert(`Fine, I tried... The village elder cannot believe her eyes while she sees you already there - she knows you ran away. The villagers start grouping, shouting and you can feel the tension. The elder raises her hand to silence the crowd. You start explaining the situation and why you decided to flee instead of trying to slay the ogre, but they don't look happy. The elder gets tired and asks the whole village to raise their hand if they want to banish the - and I quote - "coward". Hands shoot up around you, every single person, even the children raise their hands. You try once again to defend yourself asking for another chance. You see that the village doesn't care about you so you pick your things up and leave. While you're walking away you can still hear some of the villagers calling you names. You think: well, at least I won't have to deal with that ogre anymore.
                                    GAME OVER.`);
                                    winner = true;
                                } else if (userFleeChoiceIII === "NO") {
                                    alert("Oh finally! You just needed some more convincing! Let's go back!");
                                }
                            } else if (userFleeChoiceII === "NO") {
                                alert("You were really making me work for it, huh.. Let's just go back to the fight.");
                            }
                        } else if (userFleeChoice === "NO") {
                            alert("Well then.. Why did you even try in the first place? Let's go back!");
                        }

                    }
                    break;

                case "CHAT":
                    if (userRoll <= 10) {
                        alert(`Well... at least you tried, right? You rolled a ${userRoll}... As you attempt to connect with the ogre, your words inadvertently veer into a sensitive topic about his mother. The ogre's eyes flare with rage. With a thunderous roar, he seizes you in his massive hands and hurls you against a nearby tree, the impact leaving you dazed and bruised.
                        Your health: ${userHealth -= MAJOR_DAMAGE}/20 -- Ogre's health: ${ogreHealth}/20`);
                        if (userHealth <= 0) zeroHealth(userHealth);
                    } else {
                        alert(`Yes! You rolled a ${userRoll}! Your words strike a chord with the ogre, and tears begin to stream down his rugged face. Moved by his remorse, you persuade him to accompany you to the village, where he can seek forgiveness for his past actions. However, upon hearing his confession, the villagers, driven by fear and anger, take matters into their own hands and end his life. Rest in peace, fallen ogre.`);
                        alert(`Congrats, you won! (kinda)`)
                        winner = true;
                    }
                    break;

                default:
                    alert("Invalid action. Please choose ATTACK, FLEE, or CHAT.");
                    break;
            }
        }
    } else {
        if (userHealth <= 0) {
            alert(`The hero's vision blurred, and the world around them began to fade.The hero's sacrifice had not been in vain, for they had weakened the ogre enough for the villagers to rally and drive the beast away. But the hero's journey had come to a tragic end.
                YOU DIED`);
        } else {
            alert(`The beast let out a guttural cry before collapsing to the ground, defeated. The hero puts back his sword and made their way back to the village, where celebration awaited. As they entered the village, the hero was met with cheers and applause.The hero smiled, knowing that they had brought peace and safety back to their home. The ogre was no more, and the village could finally rest easy.
                                    CONGRATS, YOU WON!`);
        }
        winner = true;
    }
}
