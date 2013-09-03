exports.feats = {
  "combatFeats" : [
    {
      "name" : "Adder Strike",
      "Benefit" : " As a swift action, you can apply one dose of contact or injury poison to two body parts that you use for unarmed strikes. You must still protect yourself against exposure to contact poisons you apply in this way.",
      "catagory" : ["Combat"],
      "prereq" : ["Poison use class feature", " Improved Unarmed Strike", " Craft (alchemy) 1 rank"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Pinpoint Poisoner",
      "Benefit" : " When you use Adder Strike, you can instead poison up to two blowgun darts that you can then use to strike your opponent in melee. (Drawing such darts is a free action.) While holding these darts, you can spend a standard action to attack with one or a full-attack action to attack with both. Such attacks are considered melee touch attacks that deal 1d2 damage plus any bonuses you gain on your normal unarmed strike damage, and they deliver the poison. You can instead throw such darts as if they were shuriken, making your ranged attack rolls against the target’s AC.",
      "catagory" : ["Combat"],
      "prereq" : ["Adder Strike", " Two-Weapon Fighting or flurry of blows class feature", " Craft (alchemy) 6 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Advanced Defensive Combat Training",
      "Benefit" : " You gain a +4 bonus to your CMD.Editor's NoteIf you are not using factions in your game (which this feat requires), ",
      "catagory" : ["Combat", " Faction"],
      "prereq" : ["Defensive Combat Training"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Agile Maneuvers",
      "Benefit" : " You add your Dexterity bonus to your base attack bonus and size bonus when determining your Combat Maneuver Bonus instead of your Strength bonus.",
      "catagory" : ["Combat"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dueling Mastery",
      "Benefit" : " You gain a +2 bonus on Initiative checks as long as you start combat with a dueling sword in your hand. As long as you wield only a single dueling sword in one hand, you gain a +2 shield bonus to your AC—if you wield the sword in two hands, this bonus drops to a +1 shield bonus to AC.Although the dueling sword inflicts slashing damage, you treat it as if it were also a piercing weapon when determining the effects of weapons used by a duelist.Section 15: Copyright Notice - Pathfinder Campaign Setting: The Inner Sea World GuidePathfinder Campaign Setting: The Inner Sea World Guide. © 2011, Paizo Publishing, LLC; Authors: Keith Baker, Wolfgang Baur, Clinton J. Boomer, Jason Bulmahn, Joshua J. Frost, Ed Greenwood, Stephen S. Greer, Jeff Grubb, James Jacobs, Michael Kortes, Tito Leati, Mike McArtor, Rob McCreary, Erik Mona, Jason Eric Nelson, Jeff Quick, Sean K Reynolds, F. Wesley Schneider, Leandra Christine Schneider, David Schwartz, Amber E. Scott, Stan!, Owen K.C. Stephens, Todd Stewart, James L. Sutter, Greg A. Vaughan, Jeremy Walker, and JD Wiker.",
      "catagory" : ["Combat"],
      "prereq" : ["Weapon Proficiency (dueling sword)", " Quick Draw", " Weapon Finesse", " Weapon Focus (dueling sword)"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Amateur Gunslinger",
      "Benefit" : " You gain a small amount of grit and the ability to perform a single 1st-level deed from the gunslinger deed class feature. At the start of the day, you gain 1 grit point, though throughout the day you can gain grit points up to a maximum of your Wisdom modifier (minimum 1). You can regain grit using the rules for the gunslinger’s grit class feature. You can spend this grit to perform the 1st-level deed you chose upon taking this feat, and any other deed you have gained through feats or magic items.",
      "catagory" : ["Combat"],
      "prereq" : ["No levels in a class with grit class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ammo Drop",
      "Benefit" : " You can load a sling or one end of a double sling with one hand as a swift action or move action. This does not provoke an attack of opportunity.Section 15: Copyright Notice - Pathfinder Player Companion: Halflings of GolarionPathfinder Player Companion: Halflings of Golarion. Copyright 2010, Paizo Publishing, LLC; Authors: Hal MacLean and Amber E. Scott.",
      "catagory" : ["Combat"],
      "prereq" : ["Sleight of Hand 1 rank", " proficient with sling."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ankle Biter",
      "Benefit" : " If you are the target of a combat maneuver you can, as an immediate action, attempt to bite your opponent in addition to any attacks of opportunity or other consequences your opponent might incur from attacking you. This bonus natural attack does not provoke an attack of opportunity itself and deals base damage appropriate for a creature of your current size (usually 1d4 for Small creatures). If grappled or pinned, you can continue to make this additional bite attack each round as swift action on your turn. You gain a bonus on any attempt to break the grapple equal to the damage you dealt with your bite that round.",
      "catagory" : ["Combat", " Goblin"],
      "prereq" : ["Goblin", " Escape Artist 1 rank."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Arcane Armor Mastery",
      "Benefit" : " As a swift action, reduce the arcane spell failure chance due to the armor you are wearing by 20% for any spells you cast this round. This bonus replaces, and does not stack with, the bonus granted by Arcane Armor Training.",
      "catagory" : ["Combat"],
      "prereq" : ["Arcane Armor Training", " Armor Proficiency", " Medium", " CL 7"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Arcane Armor Training",
      "Benefit" : " As a swift action, reduce the arcane spell failure chance due to the armor you are wearing by 10% for any spells you cast this round.",
      "catagory" : ["Combat"],
      "prereq" : ["Armor Proficiency", " Light", " CL 3"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Arcane Strike",
      "Benefit" : " As a swift action, you can imbue your weapons with a fraction of your power. For 1 round, your weapons deal +1 damage and are treated as magic for the purpose of overcoming damage reduction. For every five caster levels you possess, this bonus increases by +1, to a maximum of +5 at 20th level.",
      "catagory" : ["Combat"],
      "prereq" : ["Ability to cast arcane spells"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Archon Diversion",
      "Benefit" : " The penalty to AC for using Archon Style to grant nearby allies a bonus to AC against a single opponent decreases to –1, and you can spend a move action instead of a standard action to use this ability.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Archon Style", " Combat Expertise", " Improved Unarmed Strike", " BAB +4 or monk 4"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Archon Justice",
      "Benefit" : " You no longer take a penalty to AC for using Archon Style to grant nearby allies a bonus to AC against a single opponent, and you can spend a swift action instead of a move action to use this ability.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Archon Diversion", " Archon Style", " Combat Expertise", " Improved Unarmed Strike", " BAB +8 or monk 7"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Archon Style",
      "Benefit" : "While using this style, as a standard action, you can actively protect adjacent allies from a single opponent that you are currently adjacent to. This grants any adjacent allies a +2 dodge bonus to AC against that opponent's next melee attack (as long as that attack comes before the beginning of your next turn), but causes you to take a –2 penalty to AC against that opponent until your next turn. The dodge bonus persists even if your allies move away from you, but still only applies against attacks made by the opponent that you designated upon first using this ability.",
      "catagory" : ["Combat", "Style"],
      "prereq" : ["Combat Expertise", " Improved Unarmed Strike", " BAB +2 or monk 2"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Arc Slinger",
      "Benefit" : "You can twirl your sling in a way that maximizes its effectiveness.Prerequisites: Point-Blank Shot, proficient with sling or half ling sling staff. When using a sling or sling staff, you reduce your penalty on ranged attack rolls due to range by 2. Point-Blank Shot’s damage bonus applies within the first normal range increment of your sling (50 feet) or sling staff (80 feet).Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat"],
      "prereq" : ["Point-Blank Shot", " proficient with sling or halfling sling staff"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Armor Proficiency, Light",
      "Benefit" : " When you wear light armor, the armor check penalty for that armor applies only to Dexterity- and Strength-based skill checks.",
      "catagory" : ["Combat"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Armor Proficiency, Medium",
      "Benefit" : " See Armor Proficiency, Light.",
      "catagory" : ["Combat"],
      "prereq" : ["Armor Proficiency", " Light"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Armor Proficiency, Heavy",
      "Benefit" : " See Armor Proficiency, Light.",
      "catagory" : ["Combat"],
      "prereq" : ["Armor Proficiency", " Medium"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Awesome Blow",
      "Benefit" : " As a standard action, the creature may perform an awesome blow combat maneuver. If the creature's maneuver succeeds against a corporeal opponent smaller than itself, its opponent takes damage (typically slam damage plus Strength bonus) and is knocked flying 10 feet in a direction of the attacking creature's choice and falls prone. The attacking creature can only push the opponent in a straight line, and the opponent can't move closer to the attacking creature than the square it started in. If an obstacle prevents the completion of the opponent's move, the opponent and the obstacle each take 1d6 points of damage, and the opponent is knocked prone in the space adjacent to theobstacle.",
      "catagory" : ["Combat", " Monster"],
      "prereq" : ["Str 25", " Power Attack", " Improved Bull Rush", " size Large or larger."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Banner of Doom",
      "Benefit" : " As long your banner is clearly visible, all enemies within 60 feet take a –2 penalty on saving throws against fear. This penalty does not stack with other effects that provide enemies with penalties on saving throws against fear.",
      "catagory" : ["Combat"],
      "prereq" : ["BAB +8", " banner class feature", " tiefling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Bashing Finish",
      "Benefit" : " Whenever you score a critical hit with a melee weapon, you can make a shield bash attack against the same target using the same bonus as a free action.",
      "catagory" : ["Combat"],
      "prereq" : ["Shield Master", " Two-Weapon Fighting", " BAB +11"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Improved Unarmed Strike",
      "Benefit" : " You are considered to be armed even when unarmed—you do not provoke attacks of opportunity when you attack foes while unarmed. Your unarmed strikes can deal lethal or nonlethal damage, at your choice.",
      "catagory" : ["Combat"],
      "prereq" : ["+1d4 bleed damage with unarmed strikes"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Binding Throw",
      "Benefit" : "You can strike your enemy and use the blow as an opportunity to grab and hold him.Prerequisites: Improved Grapple, Improved Trip, Improved Unarmed Strike, Ki Throw. After you successfully use the Ki Throw feat on an opponent, you can use a swift action to attempt a grapple combat maneuver against that opponent.Normal: The grapple combat maneuver is a standard action.Special: A monk can gain Binding Throw as a bonus feat starting at 14th level.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Grapple", " Improved Trip", " Ki Throw"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Blade Binder",
      "Benefit" : " You receive a +2 bonus on CMB checks made to bind an opponent’s weapon, as well as any opposed checks to maintain the bind. This bonus stacks with the +2 bonus from wielding a khopesh or temple sword. If you succeed in blade binding your opponent, your opponent becomes flat-footed until he either wrestles his blade free or drops his weapon.",
      "catagory" : ["Combat"],
      "prereq" : ["BAB +4", " proficiency with khopesh or temple sword"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Blazing Aura",
      "Benefit" : " When you use Scorching Weapons, on your turn as a free action, you may create an aura of heat that lasts for 1 round. This aura deals 1d6 points of fire damage to any creature that begins its turn adjacent to you.",
      "catagory" : ["Combat", " Ifrit"],
      "prereq" : ["Inner Flame", " Scorching Weapons", " character level 13", " Ifrit"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Blind-Fight",
      "Benefit" : " In melee, every time you miss because of concealment (see Combat), you can reroll your miss chance percentile roll one time to see if you actually hit.",
      "catagory" : ["Combat"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Blind-Fight, Greater",
      "Benefit" : " Your melee attacks ignore the miss chance for less than total concealment, and you treat opponents with total concealment as if they had normal concealment (20% miss chance instead of 50%). You may still reroll a miss chance percentile roll as normal.",
      "catagory" : ["Combat"],
      "prereq" : ["Perception 15 ranks", " Blind-Fight", " Improved"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Blind-Fight, Improved",
      "Benefit" : " Your melee attacks ignore the miss chance for less than total concealment. You may still reroll your miss chance percentile roll for total concealment. If you successfully pinpoint an invisible or hidden attacker within 30 feet, that attacker gets no advantages related to hitting you with ranged attacks. That is, you don’t lose your Dexterity bonus to Armor Class, and the attacker doesn’t get the usual +2 bonus for being invisible.",
      "catagory" : ["Combat"],
      "prereq" : ["Perception 10 ranks", " Blind-Fight"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Blinding Flash",
      "Benefit" : " As a move action, you can expertly angle the blade of your weapon or shield to reflect light into an opponent’s eyes, dazzling your foe for 1 round. This feat functions as a gaze attack, and the target must make a Fortitude save (DC 10 + 1/2 your character level + your Dex modifier) to resist the effect. This is a sight-dependent effect, and does not work on creatures that are already blinded or creatures that do not rely on sight as their primary sense. You must be wielding a weapon or shield with a polished or reflective surface in order to use this feat. You must be in an area of bright light to use this feat.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 13", " Combat Expertise", " special (see text)"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Blinding Light",
      "Benefit" : " Whenever an enemy unsuccessfully attempts to counter or dispel your daylight spell-like ability, it must succeed at a Fortitude saving throw (DC 10 + 1/2 your character level + your Charisma modifier) or become blinded for 1 round as its mind is overwhelmed with celestial light. This is a supernatural mind-affecting effect.",
      "catagory" : ["Combat"],
      "prereq" : ["Inner Light", " aasimar", " daylight spell-like ability."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Blinding Sneak Attack",
      "Benefit" : " When you successfully deal sneak attack damage to a foe while you are within an area of magical darkness, you temporarily blind your opponent for 1 round. A successful Fortitude save (DC 10 + the amount of sneak attack damage dealt) negates this effect.",
      "catagory" : ["Combat"],
      "prereq" : ["BAB +5", " darkness spell-like ability", " sneak attack class feature", " tiefling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Blistering Feint",
      "Benefit" : " You gain a +2 bonus on feint checks made while wielding a weapon that deals fire damage. Anytime you successfully feint a creature while using such a weapon, you may deal its fire damage to the enemy.",
      "catagory" : ["Combat", " Ifrit"],
      "prereq" : ["Combat Expertise", " Improved Feint", " Ifrit."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Blood Beak",
      "Benefit" : " Increase the damage of your beak attack to 1d6. Furthermore, when you confirm a critical hit with your beak attack, you also deal 1 point of bleed damage.",
      "catagory" : ["Combat", " Tengu"],
      "prereq" : ["BAB +5", " natural weapon racial trait", " tengu."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Bloody Assault",
      "Benefit" : " You can choose to take a –5 penalty on all melee attack rolls and combat maneuver checks to inflict 1d4 points of bleed damage with your weapon melee attacks, in addition to the normal damage dealt by the weapon. A creature continues to take bleed damage every round at the start of its turn. Bleed damage can be stopped by a DC 15 Heal check or through any magical healing. Bleed damage from this feat does not stack with itself. You must choose to use this feat before making the attack roll, and its effects last until your next turn (although the bleeding lasts until healed, as normal).Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["Combat"],
      "prereq" : ["Power Attack", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Bloody Vengeance",
      "Benefit" : " If an opponent has damaged you within the past minute, you may study that opponent as a standard action. Thereafter, if you hit that creature with a melee attack, the target takes 1 point of bleed damage each round at the start of its turn. The bleeding can be stopped by a DC 15 Heal check or the application of any effect that heals hit point damage. Bleed damage does not stack. Bleed damage bypasses any damage reduction the creature might possess.",
      "catagory" : ["Combat"],
      "prereq" : ["BAB +1."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Bludgeoner",
      "Benefit" : "You can knock foes out cold with just about any blunt instrument. You take no penalty on attack rolls for using a lethal bludgeoning weapon to deal nonlethal damage.Normal: You take a –4 penalty on attack rolls when using a lethal weapon to deal nonlethal damage. You cannot use a lethal weapon to deal nonlethal damage in a sneak attack.Special: A rogue with this feat can use a lethal bludgeoning weapon to deal nonlethal damage with a sneak attack.",
      "catagory" : ["Combat"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Blundering Defense",
      "Benefit" : " Whenever you fight defensively or use the total defense action, allies gain a luck bonus to AC and CMD equal to 1/2 the dodge bonus you gain from the action you are taking. Allies only gain this bonus while they are adjacent to you.",
      "catagory" : ["Combat", " Halfling"],
      "prereq" : ["Cautious Fighter", " halfling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Bodyguard",
      "Benefit" : " When an adjacent ally is attacked, you may use an attack of opportunity to attempt the aid another action to improve your ally’s AC. You may not use the aid another action to improve your ally’s attack roll with this attack.",
      "catagory" : ["Combat"],
      "prereq" : ["Combat Reflexes"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Body Shield",
      "Benefit" : "With a sly maneuver, you force a grappled opponent into the path of an incoming attack.Prerequisites: Dex 13, Improved Grapple, Improved Unarmed Strike, base attack bonus +6. As an immediate action while you are grappling an adjacent creature, you can make a grapple combat maneuver check against that creature to gain cover against a single attack. If you are successful and the attack misses you, that attack targets the creature you used as cover, using the same attack roll. You cannot use this feat against a creature grappling you, and the cover you gain ends after the attack you gained cover against is resolved.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Grapple", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Bounding Hammer",
      "Benefit" : " As a standard action, you may throw a hammer at anopponent within 20 feet. If you hit (whether or not the attack damagesthe target), the hammer rebounds off of the creature and lands in yoursquare. If you have the Snatch Arrows feat, you may choose to catch thehammer when it enters your square (though this does not give you theability to immediately throw the hammer). This ability may not workagainst some creatures or in certain circumstances as determined by theGM; for example, your weapon does not bounce off Incorporeal creatures(unless it has the ghost touch ability), it may stick to creatures withthe adhesive ability, the slowing effect of fighting underwaterprevents you from using this feat, and so on.",
      "catagory" : ["Combat"],
      "prereq" : ["Proficiency with hammer", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Break Guard",
      "Benefit" : "You can use one of your two weapons to occupy your opponent’s defenses while attacking with the other.Prerequisites: Dex 15, Int 13, Combat Expertise, Improved Disarm, Two-Weapon Fighting. While wielding two weapons, whenever you successfully use one weapon to disarm an opponent, you can spend a swift action to attack the opponent you attempted to disarm using your other weapon.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Disarm", " Two-Weapon Fighting"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Brutal Grappler",
      "Benefit" : " Prerequisites: Half-orc or orc.  When you and an ally with this feat have grappled the same creature, you may attempt to damage the opponent on your turn (whether you were the one who first initiated the grapple or were assisting your ally in doing so). You and the ally are treated as aiding each other in the grapple (+2 bonus on your grapple combat maneuver) as long as you both decide to maintain the grapple. Normal: When multiple creatures grapple one target, the creature that first initiates the grapple is the only one that makes a check to damage a grappled opponent, with a +2 bonus for each creature that assists the grapple using the Aid Another action.",
      "catagory" : ["Combat", " Teamwork"],
      "prereq" : ["Half-orc or orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Bull Rush, Greater",
      "Benefit" : " You receive a +2 bonus on checks made to bull rush a foe. This bonus stacks with the bonus granted by Improved Bull Rush. Whenever you bull rush an opponent, his movement provokes attacks of opportunity from all of your allies (but not you).",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Bull Rush", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Bull Rush, Improved",
      "Benefit" : " You do not provoke an attack of opportunity when performing a bull rush combat maneuver. In addition, you receive a +2 bonus on checks made to bull rush a foe. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to bull rush you.",
      "catagory" : ["Combat"],
      "prereq" : ["Power Attack"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Bull Rush Strike",
      "Benefit" : " Whenever you score a critical hit with a melee attack, you can push your opponent back, in addition to the normal damage dealt by the attack. If your confirmation roll exceeds your opponent’s CMD, you may push your opponent back as if from the bull rush combat maneuver. You do not need to move with the target if successful. This does not provoke an attack of opportunity.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Bull Rush", " BAB +9"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Bullseye Shot",
      "Benefit" : " You can spend a move action to steady your shot. When you do, you gain a +4 bonus on the next ranged attack roll you make before the end of your turn.",
      "catagory" : ["Combat"],
      "prereq" : ["Point-Blank Shot", " Precise Shot", " BAB +5"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Bullying Blow",
      "Benefit" : " As a standard action, you may make a melee attack with a –2 penalty on the attack roll. If the attack damages your opponent, you may make an Intimidate check to demoralize that opponent as a free action.",
      "catagory" : ["Combat", " Orc"],
      "prereq" : ["Intimidate 1 rank", " orc."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Catch Off-Guard",
      "Benefit" : " You do not suffer any penalties for using an improvised melee weapon. Unarmed opponents are flat-footed against any attacks you make with an improvised melee weapon.",
      "catagory" : ["Combat"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Cautious Fighter",
      "Benefit" : " When fighting defensively or using total defense, your dodge bonus to AC increases by 2.",
      "catagory" : ["Combat", " Halfling"],
      "prereq" : ["Halfling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Channel Smite",
      "Benefit" : " Before you make a melee attack roll, you can choose to spend one use of your channel energy ability as a swift action. If you channel positive energy and you hit an undead creature, that creature takes an amount of additional damage equal to the damage dealt by your channel positive energy ability. If you channel negative energy and you hit a living creature, that creature takes an amount of additional damage equal to the damage dealt by your channel negative energy ability. Your target can make a Will save, as normal, to halve this additional damage. If your attack misses, the channel energy ability is still expended with no effect.",
      "catagory" : ["Combat"],
      "prereq" : ["Channel energy class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Charge of the Righteous",
      "Benefit" : " When you charge an undead creature or an evil outsider, you do not take the –2 penalty for charging.",
      "catagory" : ["Combat"],
      "prereq" : ["BAB +1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Charge Through",
      "Benefit" : " When making a charge, you can attempt to overrun one creature in the path of the charge as a free action. If you successfully overrun that creature, you can complete the charge. If the overrun is unsuccessful, the charge ends in the space directly in front of that creature.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Overrun", " BAB +1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Charging Hurler",
      "Benefit" : "You know how to use your momentum to enhance your thrown weapon attacks.Prerequisite: Point-Blank Shot. You can use the charge rules to make a thrown weapon attack. All the parameters of a charge apply, except that you must only move closer to your opponent, and you must end your movement within 30 feet of that opponent. If you do, you can make a single thrown weapon attack against that opponent, gaining the +2 bonus on the attack roll and taking a –2 penalty to your AC until the start of your next turn.",
      "catagory" : ["Combat"],
      "prereq" : ["Point-Blank Shot"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Improved Charging Hurler",
      "Benefit" : "Every muscle in your body adds its force to your thrown weapons.Prerequisites: Charging Hurler, Point-Blank Shot. When you use Charging Hurler, your target can be at any range up to your weapon’s maximum range. If your target is within 30 feet, you gain a +2 bonus on damage rolls.Normal: Using Charging Hurler requires you to end your movement within 30 feet of your opponent.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat"],
      "prereq" : ["Charging Hurler"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Chokehold",
      "Benefit" : "While grappling, you can cut off an opponent’s air and blood supply.Prerequisites: Improved Grapple, Improved Unarmed Strike, base attack bonus +6 or monk level 5th. While you have an opponent up to one size category larger than you grappled, you can attempt a grapple combat maneuver with a –5 penalty on the check. If you succeed, you have pinned your opponent and hold the opponent in a chokehold. When you maintain the grapple, you also maintain the chokehold. A creature in a chokehold cannot breathe or speak, and thus cannot cast spells that have a verbal component. An opponent you have in a chokehold has to hold his breath or begin suffocating. Any creature that does not breathe, is immune to bleed damage, or is immune to critical hits is immune to the effects of your chokehold. When the grapple is ended, so is the chokehold.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Grapple", " BAB +6 or monk level 5th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Claw Pounce",
      "Benefit" : " When you make a charge, you can make a full attack with your claws.",
      "catagory" : ["Catfolk", " Combat"],
      "prereq" : ["Str 13", " Dex 15", " Nimble Striker", " BAB +10", " catfolk", " cat's claws racial trait or Aspect of the Beast (claws of the beast manifestation)."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Cleave",
      "Benefit" : " As a standard action, you can make a single attack at your full base attack bonus against a foe within reach. If you hit, you deal damage normally and can make an additional attack (using your full base attack bonus) against a foe that is adjacent to the first and also within reach. You can only make one additional attack per round with this feat. When you use this feat, you take a –2 penalty to your Armor Class until your next turn.",
      "catagory" : ["Combat"],
      "prereq" : ["Power Attack"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Cleave, Great",
      "Benefit" : " As a standard action, you can make a single attack at your full base attack bonus against a foe within reach. If you hit, you deal damage normally and can make an additional attack (using your full base attack bonus) against a foe that is adjacent to the previous foe and also within reach. If you hit, you can continue to make attacks against foes adjacent to the previous foe, so long as they are within your reach. You cannot attack an individual foe more than once during this attack action. When you use this feat, you take a –2 penalty to your Armor Class until your next turn.",
      "catagory" : ["Combat"],
      "prereq" : ["Cleave", " BAB +4"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Cleaving Finish",
      "Benefit" : "When you strike down an opponent, you can continue your swing into another target.Prerequisites: Str 13, Cleave, Power Attack. If you make a melee attack, and your target drops to 0 or fewer hit points as a result of your attack, you can make another melee attack using your highest base attack bonus against another opponent within reach. You can make only one extra attack per round with this feat.",
      "catagory" : ["Combat"],
      "prereq" : ["Cleave"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Improved Cleaving Finish",
      "Benefit" : "You can cut down many opponents in a single strike.Prerequisites: Str 13, Cleave, Cleaving Finish, Great Cleave, Power Attack, base attack bonus +6. You can use Cleaving Finish any number of times per round.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat"],
      "prereq" : ["Cleaving Finish", " Great Cleave", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Cleave Through",
      "Benefit" : " When using Cleave or Great Cleave, if your initial attack hits, you may take a single 5-foot step as a free action before making your additional attacks. If doing so places a creature within your threatened area, that creature becomes a legal target for your additional Cleave attack(s) as long as it meets all the other prerequisites.",
      "catagory" : ["Combat", " Dwarf"],
      "prereq" : ["Str 13", " Cleave", " Power Attack", " BAB +11", " dwarf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Close-Quarters Thrower",
      "Benefit" : "You are agile enough to avoid melee attacks while throwing weapons or bombs.Prerequisites: Dex 13, Dodge, Weapon Focus with selected thrown weapon. Choose a type of thrown weapon. You do not provoke attacks of opportunity for making ranged attacks using the selected weapon. If you are an alchemist, and you select this feat and choose alchemist bombs, you do not provoke attacks of opportunity for the process of drawing components of, creating, and throwing a bomb.Normal: Making a ranged attack provokes attacks of opportunity.",
      "catagory" : ["Combat"],
      "prereq" : ["Dodge", " Weapon Focus with selected thrown weapon"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Cloven Helm",
      "Benefit" : " When wearing a helmet, you add +1 to your AC against critical hit confirmation rolls; this benefit stacks with Dented Helm. When you use Dented Helm to deflect a critical hit, you may apply all damage from the critical hit to your helmet before applying any damage to yourself. If you take no damage, any additional effects, such as critical feats or poison, are negated.",
      "catagory" : ["Combat", " Dwarf"],
      "prereq" : ["Dented Helm", " Hard-Headed", " BAB +11", " dwarf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Clustered Shots",
      "Benefit" : "You take a moment to carefully aim your shots, causing them all to strike nearly the same spot.Prerequisites: Point-Blank Shot, Precise Shot, base attack bonus +6. When you use a full-attack action to make multiple ranged weapon attacks against the same opponent, total the damage from all hits before applying that opponent’s damage reduction.Special: If the massive damage optional rule is being used (Core Rulebook 189), that rule applies if the total damage you deal with this feat is equal to or exceeds half the opponent’s full normal hit points (minimum 50 points of damage).",
      "catagory" : ["Combat"],
      "prereq" : ["Point-Blank Shot", " Precise Shot", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Cockatrice Strike",
      "Benefit" : " As a full-round action, you can make a single unarmed strike against a dazed, flat-footed, paralyzed, staggered, stunned, or unconscious foe. If that attack is a critical hit, the target is petrified unless it succeeds on a Fortitude saving throw with a DC of 10 + 1/2 your character level + your Wisdom modifier. This is a supernatural polymorph effect.",
      "catagory" : ["Combat"],
      "prereq" : ["Medusa’s Wrath", " BAB +14"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Combat Expertise",
      "Benefit" : " You can choose to take a –1 penalty on melee attack rolls and combat maneuver checks to gain a +1 dodge bonus to your Armor Class. When your base attack bonus reaches +4, and every +4 thereafter, the penalty increases by –1 and the dodge bonus increases by +1. You can only choose to use this feat when you declare that you are making an attack or a full-attack action with a melee weapon. The effects of this feat last until your next turn.",
      "catagory" : ["Combat"],
      "prereq" : ["Int 13"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Combat Patrol",
      "Benefit" : " As a full-round action, you may set up a combat patrol, increasing your threatened area by 5 feet for every 5 points of your base attack bonus. Until the beginning of your next turn, you may make attacks of opportunity against any opponent in this threatened area that provokes attacks of opportunity. You may move as part of these attacks, provided your total movement before your next turn does not exceed your speed. Any movement you make provokes attacks of opportunity as normal.Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["Combat"],
      "prereq" : ["Combat Reflexes", " Mobility", " BAB +5"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Combat Reflexes",
      "Benefit" : " You may make a number of additional attacks of opportunity per round equal to your Dexterity bonus. With this feat, you may also make attacks of opportunity while flat-footed.",
      "catagory" : ["Combat"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Combat Style Master",
      "Benefit" : " You can switch your style as a free action. At the start of combat, pick one of your styles. You start the combat in that style, even in the surprise round.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Unarmed Strike", " two more style feats", " BAB +6 or monk level 5th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Coordinated Defense",
      "Benefit" : "You are adept at working with allies to avoid being tripped, grappled, and subjected to other maneuvers. Whenever you are adjacent to an ally who also has this feat, you receive a +2 competence bonus to your Combat Maneuver Defense. This bonus increases to +4 if the creature attempting the maneuver is larger than both you and your ally.",
      "catagory" : ["Combat", " Teamwork"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Coordinated Maneuvers",
      "Benefit" : "You are skilled at working with your allies to perform dangerous combat maneuvers. Whenever you are adjacent to an ally who also has this feat, you receive a +2 competence bonus on all combat maneuver checks. This bonus increases to +4 when attempting to break free from a grapple.",
      "catagory" : ["Combat", " Teamwork"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Cornugon Shield",
      "Benefit" : " When wielding a spiked chain, you gain a +1 shield bonus to your AC.  When you are fighting defensively or using the total defense action, this shield bonus increases to +2.",
      "catagory" : ["Combat"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Cornugon Smash",
      "Benefit" : "",
      "catagory" : ["Combat"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Cornugon Stun",
      "Benefit" : "",
      "catagory" : ["Combat"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Cornugon Trip",
      "Benefit" : "",
      "catagory" : ["Combat"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Covering Defense",
      "Benefit" : " When you use the total defense action while using a light, heavy, or tower shield, you can provide a cover bonus to AC against all attacks to an adjacent ally your size or smaller. This cover bonus is equal to your shield’s shield bonus and lasts until the beginning of your next turn. your shield does not provide a cover bonus to reflex saves.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["Combat"],
      "prereq" : ["Shield Focus", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Critical Focus",
      "Benefit" : " You receive a +4 circumstance bonus on attack rolls made to confirm critical hits",
      "catagory" : ["Combat", " Critical"],
      "prereq" : ["BAB +9"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Critical, Banishing",
      "Benefit" : " When you confirm a critical hit with a slashing or bludgeoning weapon, you may cast dismissal or banishment on that target as an immediate action, and the target takes a –4 penalty on its Will save to resist the spell's effect. You must have dismissal or banishment prepared or otherwise available to cast, and using this ability casts the corresponding spell.",
      "catagory" : ["Combat", " Critical"],
      "prereq" : ["Critical Focus", " ability to cast dismissal or banishment", " CL 9"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Critical, Bleeding",
      "Benefit" : " Whenever you score a critical hit with a slashing or piercing weapon, your opponent takes 2d6 points of bleed damage each round on his turn, in addition to the damage dealt by the critical hit. Bleed damage can be stopped by a DC 15 Heal skill check or through any magical healing. The effects of this feat stack.",
      "catagory" : ["Combat", " Critical"],
      "prereq" : ["Critical Focus", " BAB +11"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Critical, Blinding",
      "Benefit" : " Whenever you score a critical hit, your opponent is permanently blinded. A successful Fortitude save reduces this to dazzled for 1d4 rounds. The DC of this Fortitude save is equal to 10 + your base attack bonus. This feat has no effect on creatures that do not rely on eyes for sight or creatures with more than two eyes (although multiple critical hits might cause blindness, at the GM's discretion). Blindness can be cured by heal, regenerate, remove blindness, or similar abilities.",
      "catagory" : ["Combat", " Critical"],
      "prereq" : ["Critical Focus", " BAB +15"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Critical, Crippling",
      "Benefit" : " Whenever you score a critical hit against an opponent, its speed is halved for 1 minute. A successful Fortitude save reduces this duration to 1d4 rounds. The DC of this save is equal to 10 + your base attack bonus. Against creatures with multiple types of movement, you must choose which movement type to affect. A flying creature hit by this attack must make a DC 10 Fly check to remain airborne, and has its maneuverability reduced by one step.",
      "catagory" : ["Combat", " Critical"],
      "prereq" : ["Critical Focus", " BAB +13"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Critical, Deafening",
      "Benefit" : " Whenever you score a critical hit against an opponent, the victim is permanently deafened. A successful Fortitude save reduces the deafness to 1 round. The DC of this Fortitude save is equal to 10 + your base attack bonus. This feat has no effect on deaf creatures. This deafness can be cured by heal, regeneration, remove deafness, or a similar ability.",
      "catagory" : ["Combat", " Critical"],
      "prereq" : ["Critical Focus", " BAB +13"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Critical, Exhausting",
      "Benefit" : " When you score a critical hit on a foe, your target immediately becomes exhausted. This feat has no effect on exhausted creatures.",
      "catagory" : ["Combat", " Critical"],
      "prereq" : ["Tiring Critical", " BAB +15"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Critical, Sickening",
      "Benefit" : " Whenever you score a critical hit, your opponent becomes sickened for 1 minute. The effects of this feat do not stack. Additional hits instead add to the effect's duration.",
      "catagory" : ["Combat", " Critical"],
      "prereq" : ["Critical Focus", " BAB +11"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Critical, Staggering",
      "Benefit" : " Whenever you score a critical hit, your opponent becomes staggered for 1d4+1 rounds. A successful Fortitude save reduces the duration to 1 round. The DC of this Fortitude save is equal to 10 + your base attack bonus. The effects of this feat do not stack. Additional hits instead add to the duration.",
      "catagory" : ["Combat", " Critical"],
      "prereq" : ["Critical Focus", " BAB +13"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Critical, Stunning",
      "Benefit" : " Whenever you score a critical hit, your opponent becomes stunned for 1d4 rounds. A successful Fortitude save reduces this to staggered for 1d4 rounds. The DC of this Fortitudesave is equal to 10 + your base attack bonus. The effects of this featdo not stack. Additional hits instead add to the duration.",
      "catagory" : ["Combat", " Critical"],
      "prereq" : ["Staggering Critical", " BAB +17"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Critical, Tiring",
      "Benefit" : " Whenever you score a critical hit, your opponent becomes fatigued. This feat has no additional effect on a fatigued or exhausted creature.",
      "catagory" : ["Combat", " Critical"],
      "prereq" : ["Critical Focus", " BAB +13"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Critical, Improved",
      "Benefit" : " When using the weapon you selected, your threat range is doubled.",
      "catagory" : ["Combat"],
      "prereq" : ["Proficiency with weapon", " BAB +8"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Critical Mastery",
      "Benefit" : " When you score a critical hit, you can apply the effects of two critical feats in addition to the damage dealt.",
      "catagory" : ["Combat", " Critical"],
      "prereq" : ["Any two critical feats", " fighter 14"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Critical Versatility",
      "Benefit" : " Once per day, you can spend 1 hour practicing maneuvers to gain one single critical feat that you meet the prerequisites for. You gain the benefits of the chosen critical feat until you choose to practice a different critical feat.",
      "catagory" : ["Combat", " Human"],
      "prereq" : ["ARG"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Crossbow Mastery",
      "Benefit" : "You can load crossbows with blinding speed and even fire them in melee with little fear of reprisal.Prerequisites: Dex 15, Point-Blank Shot, Rapid Reload, Rapid Shot. The time required for you to reload any type of crossbow is reduced to a free action, regardless of the type of crossbow used. You can fire a crossbow as many times in a full attack action as you could attack if you were using a bow. Reloading a crossbow for the type of crossbow you chose when you took Rapid Reload no longer provokes attacks of opportunity.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 15", " Rapid Reload", " Rapid Shot"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Crusader’s Fist",
      "Benefit" : " When you attack with an unarmed strike and hit a creature that you can harm with your lay on hands or touch of corruption feature, you can use a swift action to expend a daily use of that feature to deal its normal damage as if you had hit with the feature’s normal touch attack. This extra damage is not multiplied if you scored a critical hit.",
      "catagory" : ["Combat"],
      "prereq" : ["Lay on hands or touch of corruption class feature", " Improved Unarmed Strike", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Crushing Blow",
      "Benefit" : " You can make a Stunning Fist attempt as a full-round action. If successful, instead of stunning your target, you reduce the target’s AC by an amount equal to your Wisdom modifier for 1 minute. This penalty does not stack with other penalties applied due to Crushing Blow.",
      "catagory" : ["Combat"],
      "prereq" : ["Stunning Fist"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Darting Viper",
      "Benefit" : " You may change whether you’re using the dorndergar as a normal or reach weapon as a swift action.",
      "catagory" : ["Combat"],
      "prereq" : ["BAB +4", " proficiency with the dwarven dorn-dergar."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dastardly Finish",
      "Benefit" : " You can deliver a coup de grace to cowering or stunned targets.",
      "catagory" : ["Combat"],
      "prereq" : ["Sneak attack +5d6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dazing Assault",
      "Benefit" : " You can choose to take a –5 penalty on all melee attack rolls and combat maneuver checks to daze opponents you hit with your melee attacks for 1 round, in addition to the normal damage dealt by the attack. A successful Fortitude save negates the effect. The DC of this save is 10 + your base attack bonus. You must choose to use this feat before making the attack roll, and its effects last until your next turn.",
      "catagory" : ["Combat"],
      "prereq" : ["Power Attack", " BAB +11"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dazzling Display",
      "Benefit" : " While wielding the weapon in which you have Weapon Focus, you can perform a bewildering show of prowess as a full-round action. Make an Intimidate check to demoralize all foes within 30 feet who can see your display. ",
      "catagory" : ["Combat"],
      "prereq" : ["Weapon Focus"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Deadly Aim",
      "Benefit" : " You can choose to take a –1 penalty on all ranged attack rolls to gain a +2 bonus on all ranged damage rolls. When your base attack bonus reaches +4, and every +4 thereafter, the penalty increases by –1 and the bonus to damage increases by +2. You must choose to use this feat before making an attack roll and its effects last until your next turn. The bonus damage does not apply to touch attacks or effects that do not deal hit point damage.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 13", " BAB +1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Deadly Finish",
      "Benefit" : " When you hit with a melee attack and reduce your opponent to –1 or fewer hit points, you can force that opponent to succeed at a Fortitude save (DC 15 + the damage your attack dealt) or die.",
      "catagory" : ["Combat"],
      "prereq" : ["Base attack bonus +11"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Deadly Stroke",
      "Benefit" : " As a standard action, make a single attack with the weapon for which you have Greater Weapon Focus against a stunned or flat-footed opponent. If you hit, you deal double the normal damage and the target takes 1 point of Constitution bleed (see Conditions). The additional damage and bleed is not multiplied on a critical hit.",
      "catagory" : ["Combat"],
      "prereq" : ["Greater Weapon Focus", " Shatter Defenses", " BAB +11"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Death from Above",
      "Benefit" : "You allow gravity to add extra force to your charges. Whenever you charge an opponent from higher ground, or from above while flying, you gain a +5 bonus on attack rolls in place of the bonuses from charging and being on higher ground.",
      "catagory" : ["Combat"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Death or Glory",
      "Benefit" : " Against a creature of size Large or larger, you can make a single melee attack as a full-round action, gaining a +4 bonus on the attack roll, damage roll, and critical confirmation roll. You gain an additional +1 on this bonus at base attack bonus +11, +16, and +20 (for a maximum of +7 at base attack +20). After you resolve your attack, the opponent you attack can spend an immediate action to make a single melee attack against you with the same bonuses.",
      "catagory" : ["Combat"],
      "prereq" : ["Power Attack", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Deathless Initiate",
      "Benefit" : " You are not staggered while using the Diehard feat, but if you take a move and a standard action or a full-round action while you are at 0 or fewer hit points you take 1 point of damage. Further, while using the Diehard feat, you gain a +2 bonus on melee attacks and damage rolls.",
      "catagory" : ["Combat"],
      "prereq" : ["Str 13", " Con 13", " orc or half-orc", " Diehard", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Deathless Master",
      "Benefit" : " When you are at 0 or fewer hit points, you do not lose 1 hit point when you take an action.",
      "catagory" : ["Combat"],
      "prereq" : ["Con 15", " Deathless Initiate", " Ironhide", " BAB +9"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Deathless Zealot",
      "Benefit" : " Whenever a creature rolls to confirm a critical hit against you, it must roll twice and take the lowest result.",
      "catagory" : ["Combat"],
      "prereq" : ["Con 17", " Deathless Master", " BAB +12"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Defensive Combat Training",
      "Benefit" : " You treat your total Hit Dice as your base attack bonus when calculating your Combat Maneuver Defense (see Combat). ",
      "catagory" : ["Combat"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Defensive Weapon Training",
      "Benefit" : "You know how to defend yourself against a certain class of weaponry.Prerequisites: Int 13, base attack bonus +5. Choose a weapon group from the fighter's weapon training class ability list (except natural weapons). You gain a +2 dodge bonus on AC when an opponent attacks you using a weapon from that group. If you also have the weapon training class feature in the selected group, your dodge bonus from this feat increases to +3.Special: You can select this feat more than once. Its effects do not stack. Each time you select this feat, it applies to a different weapon group.",
      "catagory" : ["Combat"],
      "prereq" : ["Int 13", " BAB +5"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Deflect Arrows",
      "Benefit" : " You must have at least one hand free (holding nothing) to use this feat. Once per round when you would normally be hit with an attack from a ranged weapon, you may deflect it so that you take no damage from it. You must be aware of the attack and not flat-footed. Attempting to deflect a ranged attack doesn't count as an action. Unusually massive ranged weapons (such as boulders or ballista bolts) and ranged attacks generated by natural attacks or spell effects can't be deflected.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 13", " Improved Unarmed Strike"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Demon Hunter",
      "Benefit" : " You gain a +2 bonus on Knowledge (planes) checks to know the powers and abilities of demons. You gain a +2 morale bonus on all attack rolls and a +2 morale bonus on caster level checks to penetrate spell resistance made against creatures with the demon subtype you recognize as demons.Section 15: Copyright Notice - Pathfinder Campaign Setting: The Inner Sea World GuidePathfinder Campaign Setting: The Inner Sea World Guide. © 2011, Paizo Publishing, LLC; Authors: Keith Baker, Wolfgang Baur, Clinton J. Boomer, Jason Bulmahn, Joshua J. Frost, Ed Greenwood, Stephen S. Greer, Jeff Grubb, James Jacobs, Michael Kortes, Tito Leati, Mike McArtor, Rob McCreary, Erik Mona, Jason Eric Nelson, Jeff Quick, Sean K Reynolds, F. Wesley Schneider, Leandra Christine Schneider, David Schwartz, Amber E. Scott, Stan!, Owen K.C. Stephens, Todd Stewart, James L. Sutter, Greg A. Vaughan, Jeremy Walker, and JD Wiker.",
      "catagory" : ["Combat"],
      "prereq" : ["Knowledge (planes) 6 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Demoralizing Lash",
      "Benefit" : " To use this feat, you must use a whip (or another weapon in the flails fighter weapon group) to attack a foe demoralized by an Intimidate check. If the attack hits, you extend the duration the creature is shaken by 1 round. This feat has no effect on creatures whose shaken conditions are from sources other than Intimidate checks.",
      "catagory" : ["Combat", " Hobgoblin"],
      "prereq" : ["BAB +1", " Intimidate 1 rank", " Hobgoblin."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dented Helm",
      "Benefit" : " When wearing a helmet, you add +1 to your AC against critical hit confirmation rolls. When a critical hit is confirmed against you, as an immediate action, you can apply half of the damage from the attack to your helmet rather than yourself, applying hardness as normal. If the damage destroys your helmet, any leftover damage is applied to you. After using this feat, you are staggered until the end of your next turn. You may not use this feat if your helmet has the broken condition or the attack ignores armor bonuses to AC.",
      "catagory" : ["Combat", " Dwarf"],
      "prereq" : ["Hard-Headed", " BAB +6", " dwarf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dervish Dance",
      "Benefit" : " When wielding a scimitar with one hand, you can use your Dexterity modifier instead of your Strength modifier on melee attack and damage rolls. You treat the scimitar as a one-handed piercing weapon for all feats and class abilities that require such a weapon (such as a duelist’s precise strike ability). The scimitar must be for a creature of your size. You cannot use this feat if you are carrying a weapon or shield in your off hand.Paizo Peripheral",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 13", " Weapon Finesse", " Perform (dance) 2 ranks", " proficient with scimitar"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Desperate Swing",
      "Benefit" : " Once per day, you can make a single melee attack while taking the total defense action. You take a –4 penalty on attack rolls when making this attack. You also gain a +4 bonus on critical confirmation rolls made while fighting defensively or making an attack of opportunity using this feat.",
      "catagory" : ["Combat", " Halfling"],
      "prereq" : ["Cautious Fighter", " BAB +1", " halfling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Destroyer's Blessing",
      "Benefit" : " When you are raging and you succeed at a sunder combat maneuver, you regain 1 round of rage. If the sunder attempt causes the object to gain the broken condition, you heal 1 hit point. You can only gain these benefits once per round.",
      "catagory" : ["Combat"],
      "prereq" : ["Half-orc or orc", " rage class feature", " worshiper of the Destroyer"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Desperate Battler",
      "Benefit" : " When no ally is within 10 feet of you and you are not receiving benefits from the aid another action, you gain a +1 morale bonus on melee attack and damage rolls.Section 15: Copyright Notice - Pathfinder Campaign Setting: The Inner Sea World GuidePathfinder Campaign Setting: The Inner Sea World Guide. © 2011, Paizo Publishing, LLC; Authors: Keith Baker, Wolfgang Baur, Clinton J. Boomer, Jason Bulmahn, Joshua J. Frost, Ed Greenwood, Stephen S. Greer, Jeff Grubb, James Jacobs, Michael Kortes, Tito Leati, Mike McArtor, Rob McCreary, Erik Mona, Jason Eric Nelson, Jeff Quick, Sean K Reynolds, F. Wesley Schneider, Leandra Christine Schneider, David Schwartz, Amber E. Scott, Stan!, Owen K.C. Stephens, Todd Stewart, James L. Sutter, Greg A. Vaughan, Jeremy Walker, and JD Wiker.",
      "catagory" : ["Combat"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Devastating Strike",
      "Benefit" : " Whenever you use Vital Strike, Improved Vital Strike, or Greater Vital Strike, you gain a +2 bonus on each extra weapon damage dice roll those feats grant (+6 maximum). This bonus damage is multiplied on a critical hit.",
      "catagory" : ["Combat"],
      "prereq" : ["Vital Strike", " BAB +9"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Improved Devastating Strike",
      "Benefit" : " Whenever you use Vital Strike, Improved Vital Strike, or Greater Vital Strike, you gain a bonus on attack rolls to confirm a critical hit equal to the bonus on damage rolls you gain from Devastating Strike.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat"],
      "prereq" : ["Devastating Strike", " BAB +13"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dirty Trick, Greater",
      "Benefit" : "Prerequisites: Int 13, Combat Expertise, Improved Dirty Trick, base attack bonus +6.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules.  You receive a +2 bonus on checks made to attempt a dirty trick. This bonus stacks with the bonus granted by Improved Dirty Trick. Whenever you successfully perform a dirty trick, the penalty lasts for 1d4 rounds, plus 1 round for every 5 by which your attack exceeds the target’s CMD. In addition, removing the condition requires the target to spend a standard action.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Dirty Trick", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dirty Trick, Improved",
      "Benefit" : " You do not provoke an attack of opportunity when performing a dirty trick combat maneuver. In addition, you receive a +2 bonus on checks made to attempt a dirty trick. You also receive a +2 bonus to your Combat Maneuver Defense when an opponent tries a dirty trick on you.",
      "catagory" : ["Combat"],
      "prereq" : ["Combat Expertise"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Disarm, Greater",
      "Benefit" : " You receive a +2 bonus on combat maneuver checks made to disarm a foe. This bonus stacks with the bonus granted by Improved Disarm. Whenever you successfully disarm an opponent, the weapon lands 15 feet away from its previous wielder, in a random direction.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Disarm", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Disarm, Improved",
      "Benefit" : " You do not provoke an attack of opportunity when performing a disarm combat maneuver. In addition, you receive a +2 bonus on checks made to disarm a foe. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to disarm you.",
      "catagory" : ["Combat"],
      "prereq" : ["Combat Expertise"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Disarming Strike",
      "Benefit" : " Whenever you score a critical hit with a melee attack, you can disarm your opponent, in addition to the normal damage dealt by the attack. If your confirmation roll exceeds your opponent’s CMD, you may disarm your opponent as if from the disarm combat maneuver. This does not provoke an attack of opportunity.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Disarm", " BAB +9"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Disengaging Feint",
      "Benefit" : " As a standard action, use Bluff to feint against an opponent. Instead of denying that opponent his Dexterity bonus to AC, a successful feint allows you to move up to your speed without provoking an attack of opportunity from the opponent you feinted for leaving the square you start in.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Feint"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Disengaging Flourish",
      "Benefit" : " As a standard action, make a Bluff check against each opponent that currently threatens you. If you succeed against at least one opponent, you can move up to your speed. This movement does not provoke attacks of opportunity from any opponent you succeeded at feinting against.",
      "catagory" : ["Combat"],
      "prereq" : ["Disengaging Feint"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Disengaging Shot",
      "Benefit" : " Whenever you use Disengaging Feint or Disengaging Flourish, you can make a single melee attack against one opponent you succeeded at feinting against. That opponent is denied his Dexterity bonus to AC against this attack.",
      "catagory" : ["Combat"],
      "prereq" : ["Disengaging Feint", " Dodge", " Mobility"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Disorienting Blow",
      "Benefit" : " You must choose to use this ability before making an attack roll with your Stunning Fist, and this effect replaces other effects or conditions that would be caused by Stunning Fist. If you successfully hit your opponent and it fails its Fortitude save, it becomes confused for 1 round. Additional disorienting blows to the confused target add to the duration of its confusion. This feat is otherwise subject to all of the limits and conditions of Stunning Fist.",
      "catagory" : ["Combat"],
      "prereq" : ["Stunning Fist", " BAB +11"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dispelling Critical",
      "Benefit" : " If you have dispel magic prepared or can cast it spontaneously, when you score a critical hit against an opponent, you may use a swift action to cast dispel magic to make a targeted dispel against that opponent.",
      "catagory" : ["Combat"],
      "prereq" : ["Arcane Strike", " BAB +11", " ability to cast dispel magic"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Disrupting Shot",
      "Benefit" : " If you ready an action to shoot an opponent casting a spell within 30 feet and successfully hit that opponent with a ranged attack, the concentration DC to successfully cast the spell is increased by +4.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 13", " Point-Blank Shot", " fighter 6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Disruptive",
      "Benefit" : " The DC to cast spells defensively increases by +4 for all enemies that are within your threatened area. This increase to casting spells defensively only applies if you are aware of the enemy's location and are capable of taking an attack of opportunity. If you can only take one attack of opportunity per round and have already used that attack, this increase does not apply.",
      "catagory" : ["Combat"],
      "prereq" : ["Fighter 6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Distance Thrower",
      "Benefit" : " With a thrown weapon, you reduce your penalty on ranged attack rolls due to range by 2.",
      "catagory" : ["Combat"],
      "prereq" : ["Str 13"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dodge",
      "Benefit" : " You gain a +1 dodge bonus to your AC. A condition that makes you lose your Dex bonus to AC also makes you lose the benefits of this feat.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 13"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Domain Strike",
      "Benefit" : " When you gain this feat, choose one domain-granted power that you can use to affect no more than one opponent. If you make a successful unarmed strike against an opponent, in addition to dealing your unarmed strike damage, you can use a swift action to deliver the effects of the chosen granted power to that opponent. Doing so provokes no attacks of opportunity.",
      "catagory" : ["Combat"],
      "prereq" : ["Domain class feature", " Improved Unarmed Strike"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dorn-Dergar Master",
      "Benefit" : " You can use a chain-flail as a one-handed weapon.When using it one-handed, changing whether it’s a normal or reachweapon is a full-round action. If you have the Darting Viper feat,changing its reach is a move action.",
      "catagory" : ["Combat"],
      "prereq" : ["Two-Weapon Fighting", " BAB +4", " proficiency with the dwarven dorn-dergar"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Double Slice",
      "Benefit" : " Add your Strength bonus to damage rolls made with your off-hand weapon.",
      "catagory" : ["Combat"],
      "prereq" : ["Two-Weapon Fighting"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Drag Down",
      "Benefit" : " Whenever an opponent successfully trips you, you can attempt to trip that opponent as an immediate action.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Trip"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Drag, Greater",
      "Benefit" : "Prerequisites: Str 13, Improved Drag, Power Attack, base attack bonus +6.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules.  You receive a +2 bonus on checks made to drag a foe. This bonus stacks with the bonus granted by Improved Drag. Whenever you drag a foe, his movement provokes attacks of opportunity from all of your allies (but not you).",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Drag", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Drag, Improved",
      "Benefit" : " You do not provoke an attack of opportunity when performing a drag combat maneuver. In addition, you receive a +2 bonus on checks made to drag a foe. You also receive a +2 bonus to your Combat Maneuver Defense when an opponent tries to drag you.",
      "catagory" : ["Combat"],
      "prereq" : ["Power Attack"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dreadful Carnage",
      "Benefit" : " Whenever you reduce an enemy to 0 or fewer hit points, you can make an Intimidate check to demoralize all enemies within 30 feet as a free action. Enemies that cannot see both you and the enemy you reduced to 0 or fewer hit points are unaffected.",
      "catagory" : ["Combat"],
      "prereq" : ["Str 15", " Furious Focus", " BAB +11"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Drunken Brawler",
      "Benefit" : " When you drink a tankard of ale or strong alcohol, you take a –2 penalty on Reflex saving throws, but gain a number of temporary hit points equal to your level, and gain a +2 alchemical bonus on Fortitude and Will saving throws. These bonuses lasts an hour or until the temporary hit points gained by this effect are spent, whichever occurs first. The penalties last for a full hour.",
      "catagory" : ["Combat"],
      "prereq" : ["Endurance"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Efreeti Stance",
      "Benefit" : " You gain one additional Elemental Fist attempt per day. While using Efreeti Style, you gain fire resistance equal to your base attack bonus or your monk level plus any base attack bonus gained from levels in classes other than monk, whichever is higher. While denied your Dexterity bonus to AC you are also denied this resistance. Creatures that take fire damage from your Elemental Fist attack must succeed at a Reflex save (DC 10 + 1/2 your character level + your Wis modifier) or catch on fire.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat"],
      "prereq" : ["Con 15", " Wis 15", " Efreeti Style", " Elemental Fist", " Improved Unarmed Strike", " BAB +11 or monk 9."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Efreeti Style",
      "Benefit" : " You gain one additional Elemental Fist attempt per day. While using this style and Elemental Fist to deal fire damage, you gain a bonus on fire damage rolls equal to your Wisdom bonus. Further, if your Elemental Fist melee attack misses while you are using it to deal fire damage, you still deal 1d6 points of fire damage to your target.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat"],
      "prereq" : ["Con 13", " Wis 15", " Elemental Fist", " Improved Unarmed Strike", " BAB +9 or monk 5"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Efreeti Touch",
      "Benefit" : " While using Efreeti Style, as a standard action, you can spend two Elemental Fist attempts to unleash a 15-foot cone-shaped burst of flame. Creatures caught in the cone take your unarmed strike damage plus the fire damage from your Elemental Fist and catch on fire. A successful Reflex save (DC 10 + 1/2 your character level + your Wis modifier) reduces the damage by half and prevents a target from catching on fire.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat"],
      "prereq" : ["Con 15", " Wis 17", " Efreeti Style", " Efreeti Stance", " Elemental Fist", " Improved Unarmed Strike", " BAB +13 or monk 11"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Eldritch Claws",
      "Benefit" : "",
      "catagory" : ["Combat"],
      "prereq" : ["Str 15", " natural weapons", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Elemental Fist",
      "Benefit" : " When you use Elemental Strike pick one of the following energy types: acid, cold, electricity, or fire. On a successful hit, the attack deals damage normally plus 1d6 points of damage of the chosen type. You must declare that you are using this feat before you make your attack roll (thus a failed attack roll ruins the attempt). You may attempt an Elemental Fist attack once per day for every four levels you have attained (see Special), and no more than once per round.",
      "catagory" : ["Combat"],
      "prereq" : ["Con 13", " Wis 13", " Improved Unarmed Strike", " BAB +8"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Elephant Stomp",
      "Benefit" : "",
      "catagory" : ["Combat"],
      "prereq" : ["Str 13", " Power Attack", " Improved Overrun", " BAB +1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Elven Accuracy",
      "Benefit" : "",
      "catagory" : ["Combat"],
      "prereq" : ["Elf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Elven Battle Training",
      "Benefit" : " You have received special training with traditional elven weapons (longbows, composite longbows, longswords, rapiers, shortbows, composite shortbows, and any weapon with the word “elven” in its name). You receive a +2 bonus to your CMD against disarm and sunder maneuvers directed at one of these weapons you are wielding. In addition, if you are wielding one of these melee weapons, you may make an additional attack of opportunity each round (this bonus stacks with Combat Reflexes).",
      "catagory" : ["Combat", " Elf"],
      "prereq" : ["BAB +1", " elf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Enforcer",
      "Benefit" : "Prerequisite: Intimidate 1 rank. Whenever you deal nonlethal damage with a melee weapon, you can make an Intimidate check to demoralize your target as a free action. If you are successful, the target is shaken for a number of rounds equal to the damage dealt. If your attack was a critical hit, your target is frightened for 1 round with a successful Intimidate check, as well as being shaken for a number of rounds equal to the damage dealt.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["Combat", " Local"],
      "prereq" : ["Intimidate 1 rank"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Equipment Trick",
      "Benefit" : " You may use any equipment tricks relating to the item if you meet the appropriate trick requirements. If the item would normally be considered an improvised weapon, you may treat it as a normal weapon or an improvised weapon, whichever is more beneficial for you.",
      "catagory" : ["Combat"],
      "prereq" : ["BAB +1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Exotic Weapon Proficiency",
      "Benefit" : " You make attack rolls with the weapon normally.",
      "catagory" : ["Combat"],
      "prereq" : ["BAB +1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "False Opening",
      "Benefit" : " Choose a ranged weapon or a thrown weapon. When you make a ranged attack using that weapon, you can choose to provoke an attack of opportunity from one or more opponents who threaten you. You gain a +4 dodge bonus against such attacks. An opponent that makes such an attack and misses you loses his Dexterity bonus to AC against you until the end of your turn.",
      "catagory" : ["Combat"],
      "prereq" : ["Dodge", " Close Quarters Thrower or Point-Blank Master", " Weapon Focus with selected ranged weapon"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Far Shot",
      "Benefit" : " You only suffer a –1 penalty per full range increment between you and your target when using a ranged weapon.",
      "catagory" : ["Combat"],
      "prereq" : ["Point Blank Shot"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fearsome Barricade",
      "Benefit" : " Choose an adjacent ally as a free action on your turn. Once per round, when an opponent attacks that ally, you may make an Intimidate check to demoralize the opponent as an immediate action. This action counts as an attack of opportunity.",
      "catagory" : ["Combat", " Faction"],
      "prereq" : ["Intimidate 5 ranks", " Ulfen Guard TPA 20."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Feint, Greater",
      "Benefit" : " Whenever you use feint to cause an opponent to lose his Dexterity bonus, he loses that bonus until the beginning of your next turn, in addition to losing his Dexterity bonus against your next attack.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Feint", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Feinting Flurry",
      "Benefit" : " While using flurry of blows to make melee attacks, you can forgo your first attack to make a Bluff check to feint.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 15", " flurry of blows class feature", " Combat Expertise"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Feinting Flurry, Improved",
      "Benefit" : " While using Feinting Flurry, if you successfully feint, your opponent is denied its Dexterity bonus to AC until the end of your turn.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 17", " flurry of blows class feature", " Combat Expertise", " Feinting Flurry", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Feint, Improved",
      "Benefit" : " You can make a Bluff check to feint in combat as a move action.",
      "catagory" : ["Combat"],
      "prereq" : ["Combat Expertise"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Felling Escape",
      "Benefit" : " When you break an opponent’s grapple with a combat maneuver check or Escape Artist check, you can spend a swift action to make a trip attempt against that opponent.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Trip"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Felling Smash",
      "Benefit" : " If you use the attack action to make a single melee attack at your highest base attack bonus while using Power Attack and you hit an opponent, you can spend a swift action to attempt a trip combat maneuver against that opponent.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Trip", " Power Attack", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Feral Combat Training",
      "Benefit" : " Choose one of your natural weapons. While using the selected natural weapon, you can apply the effects of feats that have Improved Unarmed Strike as a prerequisite, as well as effects that augment an unarmed strike.Special: If you are a monk, you can use the selected natural weapon with your flurry of blows class feature.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Unarmed Strike", " Weapon Focus (natural weapon)"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ferocious Tenacity",
      "Benefit" : " Creatures you summon gain the ferocity universal monster ability.",
      "catagory" : ["Combat", " Half-orc", " Orc"],
      "prereq" : ["Half-orc or orc", " ferocity racial trait", " rage class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Final Embrace",
      "Benefit" : " You gain the constrict and grab special attacks. Your constrict attack deals damage equal to your unarmed strike or primary natural weapon melee attack. Further, you can grab and constrict opponents up to your size.Normal: You can grab and constrict creatures one size smaller than you.",
      "catagory" : ["Combat"],
      "prereq" : ["Str 13", " Int 3; BAB +3; naga", " serpentfolk", " or constrict special attack"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Final Embrace Horror",
      "Benefit" : " A creature that takes damage from your constrict attack is also shaken until the start of your next turn.",
      "catagory" : ["Combat"],
      "prereq" : ["Str 15; Ability Focus (constrict); Final Embrace; BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Final Embrace Master",
      "Benefit" : " Double the number of damage dice for your constrict special attack.",
      "catagory" : ["Combat"],
      "prereq" : ["Str 17; Final Embrace Horror; BAB +9"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Firebrand",
      "Benefit" : " You treat a torch as a light weapon that deals bludgeoning damage equal to that of a light mace of its size, plus 1 point of fire damage, and you do not incur penalties as you would for using it as an improvised weapon.",
      "catagory" : ["Combat"],
      "prereq" : ["Treat a torch as a light mace; with one point of fire damage"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fire Hand",
      "Benefit" : " You can wield a torch as a weapon without taking the nonproficient penalty and gain a +1 bonus on attack rolls with melee weapons that deal fire damage.",
      "catagory" : ["Combat", " Goblin"],
      "prereq" : ["Goblin"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Flagbearer",
      "Benefit" : " As long as you hold your clan, house, or party’s flag, members of that allegiance within 30 feet who can see the flag (including yourself ) gain a +1 morale bonus on attack rolls, weapon damage rolls, and saving throws against fear and charm effects. You must hold the flag in one hand in order to grant this bonus. If the standard is taken by the enemy or destroyed, this bonus becomes a penalty, affecting all creatures that the bonus previously affected for 1 hour (or until you reclaim the lost flag).",
      "catagory" : ["Combat", " Local"],
      "prereq" : ["Cha 15"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Flanking Foil",
      "Benefit" : "Fighting multiple foes is easy for you. Whenever you hit an adjacent opponent with a melee attack, until the start of your next turn, that opponent does not gain any flanking bonus on attack rolls while it is flanking you and cannot deal sneak attack damage to you. It can still provide a flank for its allies.",
      "catagory" : ["Combat"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Focused Discipline",
      "Benefit" : "Familiarity with the military traditions of your homeland inspires uncommon valor in you. You gain a +2 bonus on all saving throws against fear effects. Whenever a fear effect targets you and fails to affect you (either because of a successful saving throw or because of immunity to fear), you gain a +2 morale bonus on attack rolls, weapon damage rolls, and CMB checks against the creature that attempted to use the fear affect on you for 1 round.Paizo PeripheralThis content is from material published by Paizo Publishing, LLC, but is not part of the Pathfinder Core Rules.Section 15: Copyright Notice - Pathfinder Campaign Setting: The Inner Sea World GuidePathfinder Campaign Setting: The Inner Sea World Guide. © 2011, Paizo Publishing, LLC; Authors: Keith Baker, Wolfgang Baur, Clinton J. Boomer, Jason Bulmahn, Joshua J. Frost, Ed Greenwood, Stephen S. Greer, Jeff Grubb, James Jacobs, Michael Kortes, Tito Leati, Mike McArtor, Rob McCreary, Erik Mona, Jason Eric Nelson, Jeff Quick, Sean K Reynolds, F. Wesley Schneider, Leandra Christine Schneider, David Schwartz, Amber E. Scott, Stan!, Owen K.C. Stephens, Todd Stewart, James L. Sutter, Greg A. Vaughan, Jeremy Walker, and JD Wiker.",
      "catagory" : ["Combat"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Focused Shot",
      "Benefit" : "Prerequisites: Int 13, Point Blank Shot, Precise Shot. As a standard action, you may make an attack with a bow or crossbow and add your Intelligence",
      "catagory" : ["Combat"],
      "prereq" : ["Int 13", " Precise Shot"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Following Step",
      "Benefit" : " When using the Step Up feat to follow an adjacent foe, you may move up to 10 feet. You may still take a 5-foot step during your next turn, and any movement you make using this feat does not subtract any distance from your movement during your next turn.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 13", " Step Up"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fortified Armor Training",
      "Benefit" : " If an opponent scores a critical hit against you, you can turn the critical hit into a normal hit. If you do, either your armor or your shield gains the broken condition (your choice).",
      "catagory" : ["Combat"],
      "prereq" : ["Proficient with armor or shield"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Furious Focus",
      "Benefit" : " When you are wielding a two-handed weapon or a one-handed weapon with two hands, and using the Power Attack feat, you do not suffer Power Attack’s penalty on melee attack rolls on the first attack you make each turn. You still suffer the penalty on any additional attacks, including attacks of opportunity.",
      "catagory" : ["Combat"],
      "prereq" : ["Str 13", " Power Attack", " BAB +1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fury's Fall",
      "Benefit" : " When making a trip attack, add your Dexterity bonus to your CMB.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Trip"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fury of the Tainted",
      "Benefit" : " While raging, you gain a +4 competence bonus on saving throws made against spells and effects with the [good] descriptor.",
      "catagory" : ["Combat"],
      "prereq" : ["Cha 13", " rage class feature", " tiefling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fury of the Tainted, Improved",
      "Benefit" : " While raging, you gain spell resistance equal to 10 + your class level against spells with the [good] descriptor.",
      "catagory" : ["Combat"],
      "prereq" : ["Cha 13", " Fury of the Tainted", " BAB +8", " rage class feature", " tiefling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fury's Snare",
      "Benefit" : " If you successfully use a whip to trip a foe, you can choose to drop your whip.  Your tripped target gains the entangled condition.  The target can break free of the whip by making a DC 10 Strength check or a DC 15 Escape Artist check (add the enhancement bonus of the whip to these DCs), or by using a full-round action to disentangle himself.  Escaping the whip by making a Strength check means the whip gains the broken condition.  If the whip has a magical quality such as flaming, apply this quality's damage to the target every round on your turn.",
      "catagory" : ["Combat"],
      "prereq" : ["Fury's Fall", " Improved Trip"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Gang Up",
      "Benefit" : " You are considered to be flanking an opponent if at least two of your allies are threatening that opponent, regardless of your actual positioning.",
      "catagory" : ["Combat"],
      "prereq" : ["Combat Expertise"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Giant Killer",
      "Benefit" : " This functions as Goblin Cleaver, but your additional attacks can be made against creatures one size category larger than you or smaller. In addition, any such attacks made against humanoids (giant) gain a +2 circumstance bonus on attack rolls.",
      "catagory" : ["Combat", " Dwarf"],
      "prereq" : ["Str 13", " Cleave", " Goblin Cleaver", " Orc Hewer", " Power Attack", " Strike Back", " BAB +11", " dwarf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Gloom Strike",
      "Benefit" : " When you are within an area of dim light or darkness, you gain a +1 bonus on attack rolls against enemies that are also within dim light or darkness.",
      "catagory" : ["Combat", " Fetchling"],
      "prereq" : ["Blind-Fight", " fetchling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Gnome Weapon Focus",
      "Benefit" : " You gain a +1 bonus on attack rolls with gnome weapons (weapons with “gnome” in the title).",
      "catagory" : ["Combat", " Gnome"],
      "prereq" : ["BAB +1", " gnome", " proficient with all martial weapons"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Goblin Cleaver",
      "Benefit" : " When using Cleave or Great Cleave, if your initial attack hits, you may take your additional attacks against any creature smaller than you that you threaten; your targets need not be adjacent to one another. Additional attacks you make against humanoids (goblinoid) gain a +2 circumstance bonus on attack rolls.",
      "catagory" : ["Combat", " Dwarf"],
      "prereq" : ["Str 13", " Cleave", " Power Attack", " dwarf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Goblin Gunslinger",
      "Benefit" : " You can wield Medium firearms without taking the penalty for an inappropriately sized weapon.",
      "catagory" : ["Combat", " Goblin"],
      "prereq" : ["Goblin"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Gore Fiend",
      "Benefit" : " When you are raging and you confirm a critical hit with a melee weapon or suffer a critical hit yourself (whether by a melee weapon, spell, or ranged weapon), you regain 1 round of rage.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Section 15: Copyright Notice - Pathfinder Companion: Orcs of GolarionPathfinder Companion: Orcs of Golarion. Copyright 2010, Paizo Publishing, LLC; Authors: Steve Kenson, Rob McCreary, Richard Pett, Sean K Reynolds, and JD Wiker.",
      "catagory" : ["Combat"],
      "prereq" : ["Half-orc or orc", " rage class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Gorgon's Fist",
      "Benefit" : " As a standard action, make a single unarmed melee attack against a foe whose speed is reduced (such as from Scorpion Style). If the attack hits, you deal damage normally and the target is staggered until the end of your next turn unless it makes a Fortitude saving throw (DC 10 + 1/2 your character level + your Wis modifier). This feat has no effect on targets that are staggered.",
      "catagory" : ["Combat"],
      "prereq" : ["Scorpion Style", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Gory Finish",
      "Benefit" : " When you use the attack action, you can use a weapon with which you have Weapon Focus to make a single attack at your highest base attack bonus. If you reduce your target to negative hit points, you can spend a swift action to make an Intimidate check to demoralize all foes within 30 feet who could see your attack.",
      "catagory" : ["Combat"],
      "prereq" : ["Dazzling Display", " Weapon Focus"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Grapple, Greater",
      "Benefit" : " You receive a +2 bonus on checks made to grapple a foe. This bonus stacks with the bonus granted by Improved Grapple. Once you have grappled a creature, maintaining the grapple is a move action. This feat allows you to make two grapple checks each round (to move, harm, or pin your opponent), but you are not required to make two checks. You only need to succeed at one of these checks to maintain the grapple.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Grapple", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Grapple, Improved",
      "Benefit" : " You do not provoke an attack of opportunity when performing a grapple combat maneuver. In addition, you receive a +2 bonus on checks made to grapple a foe. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to grapple you.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 13", " Improved Unarmed Strike"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Great Hatred",
      "Benefit" : " You gain an additional +1 bonus on melee and thrown weapon attacks against targets of your hatred racial trait.",
      "catagory" : ["Combat", " Gnome"],
      "prereq" : ["Gnome", " hatred racial trait"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Grudge Fighter",
      "Benefit" : " You gain a +1 morale bonus on attack and damage rolls made against any creature that attacked you in the current combat.",
      "catagory" : ["Combat", " Orc"],
      "prereq" : ["Orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Halfling Slinger",
      "Benefit" : " You gain a +1 racial bonus on attack rolls made using a sling.",
      "catagory" : ["Combat"],
      "prereq" : ["Halfling."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Hamatula Grasp",
      "Benefit" : "",
      "catagory" : ["Combat"],
      "prereq" : ["Hamatula Strike", " Improved Grapple", " Str 13", " BAB +9"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Hamatula Strike",
      "Benefit" : "",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Grapple", " Str 13", " BAB +7"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Hamatulatsu",
      "Benefit" : " Your unarmed attacks can deal either bludgeoning or piercing damage. You decide which type of damage you deal whenever you attack a foe, but you may only choose one type at a time. If you critically hit a foe with your unarmed strike while doing piercing damage, the additional pain caused by the strike causes the foe to become sickened for 1 round (or staggered for 1 round if the target is already sickened). Multiple critical hits in a round against a single foe do not increase the duration of the sickened or staggered condition.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Unarmed Strike", " Weapon Focus (unarmed strike)"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Hammer the Gap",
      "Benefit" : "",
      "catagory" : ["Combat"],
      "prereq" : ["BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Hard-headed",
      "Benefit" : " You gain a +1 bonus on attack rolls and combat maneuver checks made using a helmet. You receive a +2 bonus on saves against spells and special abilities that cause you to become staggered or stunned.",
      "catagory" : ["Combat", " Dwarf"],
      "prereq" : ["BAB +1", " dwarf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Haunted Gnome",
      "Benefit" : " You add haunted fey aspect to your list of gnome magic spell-like abilities, and you can use this spell-like ability twice per day.",
      "catagory" : ["Combat"],
      "prereq" : ["Cha 13", " gnome magic racial trait", " Knowledge (arcana) 1 rank"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Haunted Gnome Assault",
      "Benefit" : " You gain one use of your gnome magic that is independent of your gnome magic spell-like abilities. When you wish to cast a gnome magic spell-like ability for which you have no daily uses remaining, you can expend this independent use to do so.Further, while you are under the effect of haunted fey aspect, you can discharge that spell as a free action after you hit an opponent with a charge attack or score a critical hit against an opponent. If you do, that opponent becomes shaken for 1 round.",
      "catagory" : ["Combat"],
      "prereq" : ["Haunted Gnome", " Knowledge (arcana) 3 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Haunted Gnome Shroud",
      "Benefit" : " You gain another independent use of your gnome magic like that which Haunted Gnome Assault grants. Further, while you are under the effect of haunted fey aspect, you also have concealment (20% miss chance) against an opponent until that opponent deals you damage.",
      "catagory" : ["Combat"],
      "prereq" : ["Haunted Gnome Assault", " Knowledge (arcana) 6 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Hellcat Pounce",
      "Benefit" : "",
      "catagory" : ["Combat"],
      "prereq" : ["Hellcat Stealth", " Skill Focus (Stealth)", " sneak attack +2d6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Hex Strike",
      "Benefit" : " When you gain this feat, choose one hex that you can use to affect no more than one opponent. If you make a successful unarmed strike against an opponent, in addition to dealing your unarmed strike damage, you can use a swift action to deliver the effects of the chosen hex to that opponent. Doing so does not provoke attacks of opportunity.Special: You can take this feat multiple times. Each time you take it, you apply it to a different qualifying hex.",
      "catagory" : ["Combat"],
      "prereq" : ["Hex class feature", " Improved Unarmed Strike"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Hold the Blade",
      "Benefit" : " Whenever an enemy deals damage to you with a melee weapon as part of a flanking attack or sneak attack, you can make a combat maneuver check to disarm against that opponent as an immediate action. You must have at least one hand free when you use this feat. When you use this feat, you take a –4 penalty to your AC until your next turn. You can only use this feat once per round.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Disarm", " BAB +10"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Horse Master",
      "Benefit" : " Use your character level to determine your effective druid level for determining the powers and abilities of your mount.Normal: You use your cavalier level to determine your effective druid level for determining the powers and abilities of your mount.",
      "catagory" : ["Combat"],
      "prereq" : ["Expert trainer class feature", " Ride 6 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Impact Critical Shot",
      "Benefit" : " Whenever you score a critical hit with a ranged attack, in addition to the normal damage your attack deals, if your confirmation roll exceeds your opponent’s CMD, you can push your opponent back as if from the bull rush combat maneuver or knock that target prone as if from a trip combat maneuver. If you choose to bull rush, you cannot move with the target. Your maneuver does not provoke an attack of opportunity.Normal: You must perform a bull rush combat maneuver to bull rush an opponent, and you must perform a trip combat maneuver to trip an opponent.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 13", " Point-Blank Shot", " BAB +9"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Impaling Critical",
      "Benefit" : " Whenever you score a critical hit with the selected piercing melee weapon, you can impale your opponent on your weapon. While your opponent is impaled in this way, each time he starts his turn, you deal damage equal to your weapon’s damage dice plus the extra damage dice from your weapon’s properties. As an immediate action, you can pull your weapon out of your opponent. If your opponent is ever outside your reach, you must spend a free action to let go of your weapon or pull it out of him. Your opponent can also spend a move action to pull your weapon out. When the weapon comes out, your opponent takes damage as if starting his turn impaled. While you impale your opponent with your weapon, you cannot use it to attack, and you must hold on to it.",
      "catagory" : ["Combat"],
      "prereq" : ["Critical Focus", " Weapon Specialization with piercing weapon", " BAB +11"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Improved Impaling Critical",
      "Benefit" : " While you are using Impaling Critical to impale an opponent, and you are still holding onto that weapon, that opponent must succeed at a grapple combat maneuver check against you to pull your weapon out. If you have let go of your weapon, the impaled opponent must spend a standard action to remove the weapon. Until the opponent pulls the weapon out, his speed in all modes is halved and his maneuverability, if any, is reduced by one step. When the weapon comes out, instead of dealing the damage normal for Impaling Critical, you can deal bleed damage equal to your weapon’s damage dice result once per round at the start of that opponent’s turn.",
      "catagory" : ["Combat"],
      "prereq" : ["Impaling Critical", " BAB +13"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Improved Initiative",
      "Benefit" : " You get a +4 bonus on initiative checks.",
      "catagory" : ["Combat"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Improved Low Blow",
      "Benefit" : " Your bonus to confirm critical hits against opponents larger than yourself improves to +2. Furthermore, once per day, after you fail to hit with a critical hit confirmation roll, you can reroll the confirmation roll, but must take the new result even if it is worse.",
      "catagory" : ["Combat", " Halfling"],
      "prereq" : ["BAB +4", " halfling", " low-blow racial trait"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Improved Surprise Follow-Through",
      "Benefit" : " When using Great Cleave, each opponent you attack on your turn (other than the first) is denied his Dexterity bonus against you.",
      "catagory" : ["Combat", " Half-orc", " Orc"],
      "prereq" : ["Str 13", " Cleave", " Great Cleave", " Power Attack", " Surprise Follow Through", " BAB +8"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Improved Two-Weapon Feint",
      "Benefit" : " While using Two-Weapon Fighting to make melee attacks, you can forgo your first primary-hand melee attack to make a Bluff check to feint an opponent. If you successfully feint, that opponent is denied his Dexterity bonus to AC until the end of your turn.",
      "catagory" : ["Combat"],
      "prereq" : ["Combat Expertise", " Improved Two-Weapon Fighting"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Improvised Weapon Mastery",
      "Benefit" : " You do not suffer any penalties for using an improvised weapon. Increase the amount of damage dealt by the improvised weapon by one step (for example, 1d4 becomes 1d6) to a maximum of 1d8 (2d6 if the improvised weapon is two-handed). The improvised weapon has a critical threat range of 19–20, with a critical multiplier of ×2.",
      "catagory" : ["Combat"],
      "prereq" : ["Catch Off-Guard or Throw Anything", " BAB +8"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Indomitable Mount",
      "Benefit" : " Once per round when your mount must make a saving throw, you can make a Ride check as an immediate action. Your mount makes its save if your Ride check result is greater than the DC of the opponent’s attack.",
      "catagory" : ["Combat", " Local"],
      "prereq" : ["Mounted Combat", " Handle Animal 5 ranks", " Ride 5 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "In Harm's Way",
      "Benefit" : " While using the aid another action to improve an adjacent ally’s AC, you can intercept a successful attack against that ally as an immediate action, taking full damage from that attack and any associated effects (bleed, poison, etc.). A creature cannot benefit from this feat more than once per attack.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules.  ",
      "catagory" : ["Combat"],
      "prereq" : ["Bodyguard"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Inner Flame",
      "Benefit" : " Your bonus on saves against fire attacks and spells with the fire descriptor or light descriptor increases to +4. When you use Scorching Weapons, the affected weapons deal an additional 1d6 points of fire damage instead of 1, and when you are grappling, you deal this damage to your grappling opponent on your turn.",
      "catagory" : ["Combat", " Ifrit"],
      "prereq" : ["Scorching Weapons", " character level 7", " Ifrit."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Intimidating Prowess",
      "Benefit" : " Add your Strength modifier to Intimidate skill checks in addition to your Charisma modifier.",
      "catagory" : ["Combat"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Jaguar Pounce",
      "Benefit" : "",
      "catagory" : ["Combat"],
      "prereq" : ["BAB +4"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Jawbreaker",
      "Benefit" : " When you make a successful Stunning Fist attempt against an opponent that is grappled, helpless, or stunned, instead of imparting any other Stunning Fist effect, you can cripple that opponent’s mouth, dealing normal unarmed strike damage and 1d4 points of bleed damage. Until the bleed damage ends, the target is unable to use its mouth to attack, speak clearly, and employ verbal spell components. A creature that is immune to critical hits or that has no discernible mouth is immune to the effects of this feat.",
      "catagory" : ["Combat"],
      "prereq" : ["Heal 6 ranks", " Improved Unarmed Strike", " Stunning Fist"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Bonebreaker",
      "Benefit" : "When your opponent is unable to adequately defend against them, your precise unarmed strikes break bone and tear tissue.Prerequisites: Dex 13, Improved Grapple, Improved Unarmed Strike, Jawbreaker, Stunning Fist, Heal 9 ranks. When you make a successful Stunning Fist attempt against an opponent that is grappled, helpless, or stunned, you can forgo any other Stunning Fist effect to deal 1d6 Strengthor Dexterity damage to that opponent.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Grapple", " Jawbreaker", " Heal 9 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Neckbreaker",
      "Benefit" : " If you have an opponent your size or smaller helpless or pinned, after you initiate or maintain a grapple, you can make a Stunning Fist attempt at a –5 penalty on the attack roll. If you succeed, you wrench that opponent’s neck, dealing 2d6 Strength or Dexterity damage. If the targeted ability score is reduced to 0, any remaining damage is dealt to that opponent’s Constitution score. A creature that is immune to critical hits or that has no discernible head and neck is immune to the effects of this feat.",
      "catagory" : ["Combat"],
      "prereq" : ["Bonebreaker", " Greater Grapple", " Improved Grapple", " Improved Unarmed Strike", " Jawbreaker", " Stunning Fist", " Heal 12 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Juggle Load",
      "Benefit" : " You can load a sling or double sling as a free action. This does not provoke attacks of opportunity. This feat allows you to fire your sling as many times in a full-attack action as you could attack if you were using a bow.",
      "catagory" : ["Combat"],
      "prereq" : ["Ammo Drop", " Sleight of Hand 1 rank", " proficient with sling."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ki Diversity",
      "Benefit" : "Prerequisites: Ki pool class feature, Wis 13, Kusari-Gama 25 TPA.  You learn how to channel your ki in a new ability. Choose one of the following ki powers:Bone Crusher: When you succeed at a trip or disarm combat maneuver, you may spend 1 point from your ki pool as a swift action to deal damage to your opponent as if you had hit them with an unarmed strike.Dim Mak: You may spend 1 point from your ki pool as a swift action to execute your next Stunning Fist attack as a melee touch attack rather than a normal melee attack.Mind of the Kensai: You may spend 1 point from your ki pool as a swift action to imbue a single melee weapon in your hands with the ki focus weapon special ability until your next turn.Wings of the Crane: If you have the Def lect Arrows feat, you may spend 1 point from your ki pool as an immediate action to use that feat to deflect a second missile weapon that round. If you have the Snatch Arrows feat, you may use this ability to catch a second weapon, but not throw it back.Zen Combatant: You may spend 1 point from your ki pool as a swift action to substitute your Wisdom score for your Strength or Dexterity for all melee or ranged attacks you make that round. Special: You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, you may choose an additional ability from the list above. Monks can select this feat as a monk bonus feat.Editor's NoteIf you are not using factions in your game (which this feat requires), the book it is from heavily recommends using some other roleplaying based prerequisite. Otherwise, the average level that this feat would be available to someone using the faction rules is level 7, but this can be as high as level 9 as well.Section 15: Copyright Notice - Pathfinder Chronicles: Faction GuidePathfinder Chronicles: Faction Guide. Copyright 2010, Paizo Publishing, LLC; Authors: Joshua J. Frost, Jason Nelson, and Sean K Reynolds.",
      "catagory" : ["Combat", " Faction"],
      "prereq" : [" Ki pool class feature", " Wis 13"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ki Throw",
      "Benefit" : " On a successful unarmed trip attack against a target your size or smaller, you may throw the target prone in any square you threaten rather than its own square. This movement does not provoke attacks of opportunity, and you cannot throw the creature into a space occupied by other creatures.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Trip", " Improved Unarmed Strike"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ki Throw, Enhanced",
      "Benefit" : " When using the Ki Throw feat, you can expend 1 ki point to amplify the force of your attack. If your ki throw succeeds, when the target hits the ground, it takes damage as if you had hit it with an unarmed strike.",
      "catagory" : ["Combat"],
      "prereq" : ["Ki pool class feature", " Ki Throw"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ki Throw, Improved",
      "Benefit" : " When using the Ki Throw feat, you may throw your target into any square you threaten that is occupied by another creature. Make a bull rush combat maneuver check with a –4 penalty against the secondary target. If this check succeeds, the thrown creature lands prone in the secondary target’s square, while the secondary target is pushed back and knocked prone in an adjacent square. If the check fails, the thrown creature lands prone in the nearest square you threaten adjacent to the secondary target.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Bull Rush", " Ki Throw"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Kobold Ambusher",
      "Benefit" : " You take no penalty on Stealth checks when you move up to your full speed. You can use the run or charge action and remain hidden, taking a –10 penalty on the check to do so.",
      "catagory" : ["Combat", " Kobold"],
      "prereq" : ["Stealth 4 ranks", " kobold"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Kobold Sniper",
      "Benefit" : " When you are sniping, you only take a –10 penalty on your Stealth checks to stay hidden.",
      "catagory" : ["Combat", " Kobold"],
      "prereq" : ["Stealth 1 rank", " kobold."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Landing Roll",
      "Benefit" : " If you are tripped, you can spend an immediate action to move 5 feet without provoking an attack of opportunity. This does not count as taking a 5-foot step. You fall prone after this movement.",
      "catagory" : ["Combat"],
      "prereq" : ["Mobility"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Large Target",
      "Benefit" : " Your attacks with all kinds of slings add a +1 bonus on damage rolls for every size category your opponent is larger than you. For example, if you are Small and your opponent Large (a difference of two sizes), you gain a +2 damage bonus. This is considered precision damage and is not multiplied on a critical hit.",
      "catagory" : ["Combat"],
      "prereq" : ["Proficient with sling."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Lead from the Back",
      "Benefit" : " During any round in which you gain the benefit of cover or concealment against at least one opponent, and you are not threatened by any opponent, you can bark orders and encouragement to your allies as a standard action. Doing so grants all allies within 30 feet a +1 bonus on all weapon damage rolls for 1 round.",
      "catagory" : ["Combat", " Goblin"],
      "prereq" : ["Goblin", " Intimidate 1 rank."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Let Them Come",
      "Benefit" : "their undoing. Prerequisites: Dwarf, Ninth Battalion TPA 25.  You treat all one- or two-handed melee weapons as if they had the brace special feature. Normal: Only weapons with the brace special feature can be readied against charges.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Editor's NoteIf you are not using factions in your game (which this feat requires), ",
      "catagory" : ["Combat", " Faction"],
      "prereq" : ["Dwarf", " Ninth Battalion TPA 25."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Lightning Stance",
      "Benefit" : " If you take two actions to move or a withdraw action in a turn, you gain 50% concealment for 1 round.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 17", " Wind Stance", " BAB +11"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Lookout",
      "Benefit" : "Your allies help you avoid being surprised. Whenever you are adjacent to an ally who also has this feat, you may act in the surprise round as long as your ally would normally be able to act in the surprise round. If you would normally be denied the ability to act in the surprise round, your initiative is equal to your initiative roll or the roll of your ally –1, whichever is lower. If both you and your ally would be able to act in the surprise round without the aid of this feat, you may take both a standard and a move action (or a full-round action) during the surprise round.",
      "catagory" : ["Combat", " Teamwork"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Low Profile",
      "Benefit" : " You gain a +1 dodge bonus to AC against ranged attacks. In addition, you do not provide soft cover to creatures when ranged attacks pass through your square.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules.  ",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 13", " Small size or smaller"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Lucky Strike",
      "Benefit" : " Spend a use of your adaptive luck racial trait to reroll the damage from a single weapon attack. You deal damage equal to the new damage roll, or the original roll, whichever is greater.",
      "catagory" : ["Combat", " Halfling"],
      "prereq" : ["BAB +5", " adaptive luck racial trait", " halfling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Lunge",
      "Benefit" : " You can increase the reach of your melee attacks by 5 feet until the end of your turn by taking a –2 penalty to your AC until your next turn. You must decide to use this ability before any attacks are made.",
      "catagory" : ["Combat"],
      "prereq" : ["BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Manyshot",
      "Benefit" : " When making a full-attack action with a bow, your first attack fires two arrows. If the attack hits, both arrows hit. Apply precision-based damage (such as sneak attack) and critical hit damage only once for this attack. Damage bonuses from using a composite bow with a high Strength bonus apply to each arrow, as do other damage bonuses, such as a ranger's favored enemy bonus. Damage reduction and resistances apply separately to each arrow.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 17", " Rapid Shot", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Martial Mastery",
      "Benefit" : " Each combat feat you have that applies to a specific weapon (e.g., Weapon Focus) can be used with all weapons in the same weapon group.",
      "catagory" : ["Combat", " Human"],
      "prereq" : ["Martial Versatility", " fighter 16", " human"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Martial Versatility",
      "Benefit" : " Choose one combat feat you know that applies to a specific weapon (e.g., Weapon Focus). You can use that feat with any weapon within the same weapon group.",
      "catagory" : ["Combat", " Human"],
      "prereq" : ["Fighter 4", " human"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Martial Weapon Proficiency",
      "Benefit" : " You make attack rolls with the selected weapon normally (without the non-proficient penalty).",
      "catagory" : ["Combat"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Massed Charge",
      "Benefit" : "You are trained in the methods of heavy cavalry and can steer your mount with great accuracy, even in tight confines.Prerequisites: Mounted Combat, Handle Animal 1 rank, Ride 6 ranks.  When mounted on a horse, you and your mount suffer no penalties for squeezing when you share a 10-foot space with another mount and rider with this feat. In addition, you and your mount gain a +2 bonus on CMD versus bull rush, overrun, and trip attempts. Normal: Horses and other Large mounts occupy a 10 foot square area. For two horses to share that space requires them to squeeze, halving their movement rate and imposing a -4 penalty on attack rolls and AC.Section 15: Copyright Notice - The Pathfinder Chronicles Campaign SettingThe Pathfinder Chronicles Campaign Setting Copyright 2008, Paizo Publishing; Author: Stan!, Keith Baker, Wolfgang Baur, Clinton J. Boomer, Jason Bulmahn, Joshua J. Frost, Ed Greenwood, Stephen S. Greer, Jeff Grubb, James Jacobs, Michael Kortes, Tito Leati, Mike McArtor, Rob McCreary, Erik Mona, Jason Eric Nelson, Jeff Quick, Sean K Reynolds, David Schwartz, Leandra Christine Schneider, F. Wesley Schneider, Amber E. Scott, Owen K.C. Stephens, Todd Stewart, James L. Sutter, Greg A. Vaughan, Jeremy Walker, JD Wiker.",
      "catagory" : ["Combat", " Local"],
      "prereq" : ["Mounted Combat", " Handle Animal 1 rank", " Ride 6 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Master Combat Performer",
      "Benefit" : " You can make performance combat checks as a free action. You are proficient in all weapons with the performance special quality.",
      "catagory" : ["Combat"],
      "prereq" : ["Performing Combatant or 3 performance feats", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Measured Response",
      "Benefit" : " When you hit an opponent with a melee or ranged attack, you may choose to deal average damage (rounded down), as if you had rolled exactly the average amount on the damage die or dice. You add your damage bonuses and penalties as normal.Section 15: Copyright Notice - Pathfinder Player Companion: Faiths of BalancePathfinder Player Companion: Faiths of Balance. © 2011, Paizo Publishing, LLC; Author: Colin McComb.",
      "catagory" : ["Combat"],
      "prereq" : ["BAB +1."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Medusa's Wrath",
      "Benefit" : " Whenever you use the full-attack action and make at least one unarmed strike, you can make two additional unarmed strikes at your highest base attack bonus. These bonus attacks must be made against a dazed, flat-footed, paralyzed, staggered, stunned, or unconscious foe.",
      "catagory" : ["Combat"],
      "prereq" : ["Gorgon's Fist", " BAB +11"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Missile Shield",
      "Benefit" : " You must be using a light, heavy, or tower shield to use this feat. Once per round when you would normally be hit with an attack from a ranged weapon (not including spell effects, natural attacks, or massive ranged weapons), you may deflect it so that you take no damage, as if you had the Deflect Arrows feat. You must be aware of the attack and not flat-footed.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. ",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 13", " Shield Focus"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Mobility",
      "Benefit" : " You get a +4 dodge bonus to Armor Class against attacks of opportunity caused when you move out of or within a threatened area. A condition that makes you lose your Dexterity bonus to Armor Class (if any) also makes you lose dodge bonuses.",
      "catagory" : ["Combat"],
      "prereq" : ["Dodge"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Monastic Legacy",
      "Benefit" : " Add half the levels you have in classes other than monk to your monk level to determine your effective monk level for your base unarmed strike damage. This feat does not make levels in classes other than monk count toward any other monk class features.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Unarmed Strike", " still mind class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Monkey Lunge",
      "Benefit" : "",
      "catagory" : ["Combat"],
      "prereq" : ["Lunge", " Acrobatics 1 rank"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Moonlight Stalker",
      "Benefit" : " While you have concealment from an opponent, you gain a +2 bonus on attack and damage rolls against that opponent.",
      "catagory" : ["Combat"],
      "prereq" : ["Gain +2 attack and damage against opponent you have concealment from."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Moonlight Stalker Feint",
      "Benefit" : " Once per round, against an opponent from whom you have concealment, you can spend a swift action to make a Bluff check to feint.",
      "catagory" : ["Combat"],
      "prereq" : [" Int 13", " Blind-Fight", " Combat Expertise", " Moonlight Stalker", " Bluff 6 ranks", " darkvision or low-light vision racial trait."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Moonlight Stalker Master",
      "Benefit" : " While you have concealment, your opponents’ miss chance against you increases by 10%. If an opponent misses you due to your concealment, you can spend an immediate action to move 5 feet, this movement does not provoke attacks of opportunity and does not count as a 5-foot step.",
      "catagory" : ["Combat"],
      "prereq" : ["Int 13", " Blind-Fight", " Combat Expertise", " Improved Feint", " Moonlight Stalker", " Moonlight Stalker Feint", " Bluff 9 ranks", " darkvision or low-light vision racial trait."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Mounted Archery",
      "Benefit" : "The penalty you take when using a ranged weapon while mounted ishalved: –2 instead of –4 if your mount is taking a double move, and –4instead of –8 if your mount is running.",
      "catagory" : ["Combat"],
      "prereq" : ["Mounted Combat"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Mounted Combat",
      "Benefit" : "Once per round when your mount is hit in combat, you may attempt a Ridecheck (as an immediate action) to negate the hit. The hit is negated if your Ride check result is greater than the opponent's attack roll.",
      "catagory" : ["Combat"],
      "prereq" : ["Ride 1 rank"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Mounted Onslaught",
      "Benefit" : " On your turn you may overrun more than one creature. Each overrun combat maneuver check beyond the first has a cumulative –5 penalty. If you fail to overrun a target, your movement ends. Your mount may only make a single hoof attack against one target that is knocked prone by your overrun (not one per prone opponent).",
      "catagory" : ["Combat", " Local"],
      "prereq" : ["Mounted Combat", " Trample", " Ride 5 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Mounted Skirmisher",
      "Benefit" : " If your mount moves its speed or less, you can still take a full-attack action.",
      "catagory" : ["Combat"],
      "prereq" : ["Ride rank 14", " Mounted Combat", " Trick Riding"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Mounted Shield",
      "Benefit" : " You may add your base shield bonus (including the bonus from Shield Focus but not including enhancement bonuses) to your mount’s AC. In addition, you may add this bonus when making a Ride check to negate a hit against your mount using the Mounted Combat feat.",
      "catagory" : ["Combat"],
      "prereq" : ["Mounted Combat", " Shield Focus"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Multiattack",
      "Benefit" : " The creature's secondary attacks with natural weapons take only a –2 penalty.",
      "catagory" : ["Combat", " Monster"],
      "prereq" : ["Three or more natural attacks."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Multiweapon Fighting",
      "Benefit" : " Penalties for fighting with multiple weapons are reduced by –2 with the primary hand and by –6 with off hands.",
      "catagory" : ["Combat", " Monster"],
      "prereq" : ["Dex 13", " three or more hands."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Net Adept",
      "Benefit" : " You can treat a net as a one-handed melee reach weapon with a 10-foot reach. Further, you take no penalty on melee attack rolls for using an unfolded net, and you can use one full-round action or two move actions to fold a net.",
      "catagory" : ["Combat"],
      "prereq" : ["Exotic Weapon Proficiency (net)", " BAB +1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Net and Trident",
      "Benefit" : " You can treat a net as a one-handed ranged weapon, allowing you to wield a light or one-handed melee weapon and still make ranged attacks with your net. When you use your light or one-handed melee weapon to attack an entangled opponent, you gain a +2 bonus on damage rolls and on attack rolls to confirm a critical hit.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 15", " Net Adept", " Two-Weapon Fighting"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Net Maneuvering",
      "Benefit" : " In melee, you can use a net to trip or disarm opponents instead of entangling them. You gain a +2 bonus on disarm checks made to use a net in this way. Further, if you have an opponent entangled in your net, you can attempt to drag or reposition that opponent as long as he is within your net’s reach or you control the trailing rope on your net.",
      "catagory" : ["Combat"],
      "prereq" : ["Net Adept", " BAB +3"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Net Trickery",
      "Benefit" : " In place of one of your melee attacks, you can use your net to attempt a dirty trick combat maneuver to blind an opponent. If you have an opponent entangled in your net, you can attempt to trip that opponent as long as he is within your net’s reach or you control the trailing rope on your net. You also gain a +2 bonus on drag and reposition combat maneuver checks you make using your net.",
      "catagory" : ["Combat"],
      "prereq" : ["Net Adept", " Net Maneuvering", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Nightmare Fist",
      "Benefit" : " While fighting within an area of magical darkness, you gain a +2 bonus on damage rolls with unarmed strikes, or a +4 bonus against opponents that are shaken, frightened, or panicked. You also gain a +2 morale bonus on Acrobatics and Intimidate checks.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Unarmed Strike", " Intimidate 1 rank", " ability to create magical darkness"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Nightmare Weaver",
      "Benefit" : " By spending a full-round action to cast darkness, you can also make Intimidate checks to demoralize all foes in the spell’s initial area.",
      "catagory" : ["Combat"],
      "prereq" : ["Nightmare Fist", " Intimidate 2 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Nightmare Striker",
      "Benefit" : " While a faerie fire you have cast (not one cast from a spell completion or spell trigger item) outlines an opponent, the DC for that opponent to resist your Stunning Fist attempts increases by +2. If you hit an opponent with a Stunning Fist attempt, and that opponent fails her saving throw, you can render the target shaken for 1d2 rounds plus 1 round for every 5 by which the opponent failed her save.",
      "catagory" : ["Combat"],
      "prereq" : ["Nightmare Weaver", " Stunning Fist", " Heal 5 ranks", " ability to cast faerie fire"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Nimble Striker",
      "Benefit" : " You do not take a –2 penalty to AC when you use the Cleave feat, Lunge feat, or when you charge.",
      "catagory" : ["Catfolk", " Combat"],
      "prereq" : ["Dex 13", " BAB +1", " catfolk", " sprinter racial trait"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Opening Volley",
      "Benefit" : "Your ranged assault leaves your foe disoriented and vulnerable to your melee attack. Whenever you deal damage with a ranged attack, you gain a +4 circumstance bonus on the next melee attack roll you make against the opponent. This attack must occur before the end of your next turn.",
      "catagory" : ["Combat"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Orc Hewer",
      "Benefit" : " This feat functions as Goblin Cleaver, but your additional attacks can be made against creatures your size or smaller. In addition, any such attacks that you make against humanoids (orc) gain a +2 circumstance bonus on attack rolls.",
      "catagory" : ["Combat", " Dwarf"],
      "prereq" : ["Str 13", " Cleave", " Goblin Cleaver", " Power Attack", " dwarf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Orc Weapon Expertise",
      "Benefit" : " When you take this feat, choose one of the benefits below. Whenever you wield a weapon that has “orc” in its name, you gain the benefit you chose so long as you are actually proficient with that weapon. ",
      "catagory" : ["Combat", " Orc"],
      "prereq" : ["BAB +1", " orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Osyluth Guile",
      "Benefit" : "",
      "catagory" : ["Combat"],
      "prereq" : ["Bluff 8 ranks", " Dodge"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Outflank",
      "Benefit" : " Whenever you and an ally who also has this feat are flanking the same creature, your flanking bonus on attack rolls increases to +4. In addition, whenever you score a critical hit against the flanked creature, it provokes an attack of opportunity from your ally.",
      "catagory" : ["Combat", " Teamwork"],
      "prereq" : ["BAB +4"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Overrun, Greater",
      "Benefit" : " You receive a +2 bonus on checks made to overrun a foe. This bonus stacks with the bonus granted by Improved Overrun. Whenever you overrun opponents, they provoke attacks of opportunity if they are knocked prone by your overrun.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Overrun", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Overrun, Improved",
      "Benefit" : " You do not provoke an attack of opportunity when performing an overrun combat maneuver. In addition, you receive a +2 bonus on checks made to overrrun a foe. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to overrun you. Targets of your overrun attempt may not chose to avoid you.",
      "catagory" : ["Combat"],
      "prereq" : ["Power Attack"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Paired Opportunists",
      "Benefit" : " Whenever you are adjacent to an ally who also has this feat, you receive a +4 circumstance bonus on attacks of opportunity against creatures that you both threaten. Enemies that provoke attacks of opportunity from your ally also provoke attacks of opportunity from you so long as you threaten them (even if the situation or an ability would normally deny you the attack of opportunity). This does not allow you to take more than one attack of opportunity against a creature for a given action.",
      "catagory" : ["Combat", " Teamwork"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Parting Shot",
      "Benefit" : " Once per encounter, when using the withdraw action, you can make a single ranged attack at any point during your movement.",
      "catagory" : ["Combat"],
      "prereq" : ["Shot on the Run", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Passing Trick",
      "Benefit" : " Whenever you make a successful Acrobatics check to move through an opponent’s space, you can spend a swift action to make a Bluff check against that opponent to feint in combat.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Feint", " Mobility", " size Small or smaller"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Penetrating Strike",
      "Benefit" : " Your attacks made with weapons selected with Weapon Focus ignore up to 5 points of damage reduction. This feat does not apply to damage reduction without a type (such as DR 10/—).",
      "catagory" : ["Combat"],
      "prereq" : ["Weapon Focus", " fighter 12"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Penetrating Strike, Greater",
      "Benefit" : " Your attacks made with weapons selected with Weapon Focus ignore up to 10 points of damage reduction. This amount is reduced to 5 points for damage reduction without a type (such as DR 10/—).",
      "catagory" : ["Combat"],
      "prereq" : ["Penetrating Strike", " fighter 16"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Perfect Strike",
      "Benefit" : " You must declare that you are using this feat before you make your attack roll (thus a failed attack roll ruins the attempt). You must use one of the following weapons to make the attack: kama, nunchaku, quarterstaff, sai, and siangham. You can roll your attack roll twice and take the higher result. If one of these rolls is a critical threat, the other roll is used as your confirmation roll (your choice if they are both critical threats). You may attempt a perfect attack once per day for every four levels you have attained (but see Special), and no more than once per round.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 13", " Wis 13", " Improved Unarmed Strike", " BAB +8"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Performance Weapon Mastery",
      "Benefit" : "You wield all your weapons with the flair of a performer. You treat all weapons you are proficient in as if they had the performance weapon quality.",
      "catagory" : ["Combat"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Performing Combatant",
      "Benefit" : " You can make performance combat checks in any combat. When making a performance check outside of performance combat, you can pick a single performance feat to use. You automatically gain any bonus on the performance combat check the feat grants, and then you make a DC 20 performance combat check. On a success, you gain the full effect of the performance feat you chose.",
      "catagory" : ["Combat"],
      "prereq" : ["Dazzling Display", " any one Performance feat"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Pinpoint Targeting",
      "Benefit" : "As a standard action, make a single ranged attack. The target does notgain any armor, natural armor, or shield bonuses to its Armor Class. You do not gain the benefit of this feat if you move this round.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Precise Shot", " BAB +16"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Pin Down",
      "Benefit" : " Whenever an opponent you threaten takes a 5-foot step or uses the withdraw action, that opponent provokes an attack of opportunity from you. If the attack hits, you deal no damage, but the targeted creature is prevented from making the move action that granted a 5-foot step or the withdraw action and does not move.",
      "catagory" : ["Combat"],
      "prereq" : ["Combat Reflexes", " fighter level 11th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Pinning Knockout",
      "Benefit" : " While you have an opponent pinned, when you succeed at a grapple combat maneuver check to deal an opponent nonlethal damage using an unarmed strike or a light or one-handed weapon, double your damage result. Any creature that is immune to critical hits is immune to the effects of this feat.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 13", " Greater Grapple", " BAB +9 or monk level 9th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Pinning Rend",
      "Benefit" : " While you have an opponent pinned, when you succeed at a grapple combat maneuver check to deal an opponent damage using an unarmed strike or a light or one-handed weapon, that opponent also takes bleed damage equal to your unarmed strike or weapon damage dice. Any creature that is immune to critical hits is immune to the effects of this feat.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 13", " Greater Grapple", " Improved Grapple", " Improved Unarmed Strike", " base bonus +9 or monk level 9th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Piranha Strike",
      "Benefit" : "",
      "catagory" : ["Combat"],
      "prereq" : ["Weapon Finesse", " BAB +1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Point-Blank Master",
      "Benefit" : " Choose one type of ranged weapon. You do not provoke attacks of opportunity when firing the selected weapon while threatened.",
      "catagory" : ["Combat"],
      "prereq" : ["Weapon Specialization with a ranged weapon"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Point-Blank Shot",
      "Benefit" : " You get a +1 bonus on attack and damage rolls with ranged weapons at ranges of up to 30 feet.",
      "catagory" : ["Combat"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Power Attack",
      "Benefit" : " You can choose to take a –1 penalty on all melee attack rolls and combat maneuver checks to gain a +2 bonus on all melee damage rolls. This bonus to damage is increased by half (+50%) if you are making an attack with a two-handed weapon, a one handed weapon using two hands, or a primary natural weapon that adds 1-1/2 times your Strength modifier on damage rolls. This bonus to damage is halved (–50%) if you are making an attack with an off-hand weapon or secondary natural weapon.When your base attack bonus reaches +4, and every 4 points thereafter, the penalty increases by –1 and the bonus to damage increases by +2.You must choose to use this feat before making an attack roll, and its effects last until your next turn. The bonus damage does not apply to touch attacks or effects that do not deal hit point damage.",
      "catagory" : ["Combat"],
      "prereq" : ["Str 13", " BAB +1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Precise Shot",
      "Benefit" : "You can shoot or throw ranged weapons at an opponent engaged in meleewithout taking the standard –4 penalty on your attack roll.Note: Two characters are engaged in melee if they are enemies of each other and either threatens the other.",
      "catagory" : ["Combat"],
      "prereq" : ["Point Blank Shot"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Precise Shot, Improved",
      "Benefit" : " Your ranged attacks ignore the AC bonus granted to targets by anything less than total cover, and the miss chance granted to targets by anything less than total concealment. Total cover and total concealment provide their normal benefits against your ranged attacks.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 19", " Precise Shot", " BAB +11"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Precise Strike",
      "Benefit" : " Whenever you and an ally who also has this feat are flanking the same the creature, you deal an additional 1d6 points of precision damage with each successful melee attack. This bonus damage stacks with other sources of precision damage, such as sneak attack. This bonus damage is not multiplied on a critical hit.",
      "catagory" : ["Combat", " Teamwork"],
      "prereq" : ["Dex 13", " BAB +1."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Prone Shooter",
      "Benefit" : " If you have been prone since the end of your last turn, the penalty to your Armor Class against melee attacks made against you is reduced to -2. In addition, the bonus to your Armor Class against ranged attacks made against you is increased to +6. If you have been prone since the end of your last turn, the penalty to your Armor Class against melee attacks made against you is reduced to -2. In addition, the bonus to your Armor Class against ranged attacks made against you is increased to +6.",
      "catagory" : ["Combat"],
      "prereq" : ["BAB +1*"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Prone Slinger",
      "Benefit" : "Your sideways sling release allows you to launch bullets and stones even while prone. While prone, you can use a sling to make ranged attacks.",
      "catagory" : ["Combat"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Punishing Kick",
      "Benefit" : " You must declare that you are using this feat before you make your attack roll (thus a failed attack roll ruins the attempt). On a successful hit, the attack deals damage normally and you can choose to push your target 5 feet or attempt to knock them prone. If you decide to push the target, it is moved 5 feet directly away from you. This movement does not provoke attacks of opportunity, and the target must end this move in a safe space it can stand in. If you decide to attempt to knock the target prone, the target receives a Fortitude saving throw with a DC of 10 + 1/2 your character level + your Wisdom modifier to avoid the effect. You may attempt a punishing kick attack once per day for every four levels you have attained (but see Special), and no more than once per round.",
      "catagory" : ["Combat"],
      "prereq" : ["Con 13", " Wis 13", " Improved Unarmed Strike", " BAB +8"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Pushing Assault",
      "Benefit" : " When you hit a creature your size or smaller with a two-handed weapon attack modified by the Power Attack feat, you can choose to push the target 5 feet directly away from you instead of dealing the extra damage from Power Attack. If you score a critical hit, you can instead push the target 10 feet directly away from you. This movement does not provoke attacks of opportunities, and the target must end this move in a safe space it can stand in. You choose which effect to apply after the attack roll has been made, but before the damage is rolled.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. ",
      "catagory" : ["Combat"],
      "prereq" : ["Str 15", " Power Attack", " BAB +1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Quarterstaff Master",
      "Benefit" : " By employing a number of different stances and techniques, you can wield a quarterstaff as a one-handed weapon. At the start of your turn, you decide whether or not you are going to wield the quarterstaff as a one-handed or two-handed weapon. When you wield it as a one-handed weapon, your other hand is free, and you cannot use the staff as a double weapon. You can take the feat Weapon Specialization in the quarterstaff even if you have no levels in fighter.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. ",
      "catagory" : ["Combat"],
      "prereq" : ["Weapon Focus (quarterstaff)", " BAB +5"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Quick Bull Rush",
      "Benefit" : " On your turn, you can perform a single bull rush combat maneuver in place of one of your melee attacks. You must choose the melee attack with the highest base attack bonus to make the bull rush.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Bull Rush", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Quick Dirty Trick",
      "Benefit" : " On your turn, you can perform a single dirty trick combat maneuver in place of one of your melee attacks. You must choose the melee attack with the highest base attack bonus to make the dirty trick combat maneuver.",
      "catagory" : ["Combat"],
      "prereq" : ["May perform a dirty trick in place of one of your melee attacks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Quick Drag",
      "Benefit" : " On your turn, you can perform a single drag combat maneuver in place of one of your melee attacks. You must choose the melee attack with the highest base attack bonus to make the drag.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Drag", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Quick Draw",
      "Benefit" : " You can draw a weapon as a free action instead of as a move action. You can draw a hidden weapon (see the Sleight of Hand skill) as a move action.",
      "catagory" : ["Combat"],
      "prereq" : ["BAB +1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Quick Reposition",
      "Benefit" : " On your turn, you can perform a single reposition combat maneuver in place of one of your melee attacks. You must choose the melee attack with the highest base attack bonus to make the reposition.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Reposition", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Quick Steal",
      "Benefit" : " On your turn, you can perform a single steal combat maneuver in place of one of your melee attacks. You must choose the melee attack with the highest base attack bonus to make the steal.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Steal", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Quivering Palm Adept",
      "Benefit" : " Add +2 to the saving throw DC against your quivering palm attacks.",
      "catagory" : ["Combat"],
      "prereq" : ["Quivering palm class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Quivering Palm Versatility",
      "Benefit" : " After successfully using your quivering palm attack on a creature, you can produce one of the following effects instead of killing the creature, as long as you do so within a number of days equal to your monk level.",
      "catagory" : ["Combat"],
      "prereq" : ["Quivering palm class feature", " BAB +13"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Rapid Grappler",
      "Benefit" : "You are a quick hand at grappling.Prerequisite: Dex 13, Greater Grapple, Improved Grapple, Improved Unarmed Strike, base attack bonus +9 or monk level 9th. Whenever you use Greater Grapple to successfully maintain a grapple as a move action, you can then spend a swift action to make a grapple combat maneuver check.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 13", " Greater Grapple", " Improved Grapple", " Improved Unarmed Strike", " BAB +9 or monk level 9th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Rapid Reload",
      "Benefit" : "",
      "catagory" : ["Combat"],
      "prereq" : ["Weapon Proficiency (crossbow) or Exotic Weapon Proficiency (firearms)"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Rapid Shot",
      "Benefit" : "When making a full-attack action with a ranged weapon, you can fire oneadditional time this round. All of your attack rolls take a –2 penaltywhen using Rapid Shot.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 13", " Point Blank Shot"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ray Shield",
      "Benefit" : " You must be using a light, heavy, or tower shield to use this feat. Once per round when you would normally be hit with a ranged touch attack (including rays and similar magical effects), you may deflect it so that you take no damage from it. your shield suffers the full effects of the spell or effect, if applicable.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 15", " Missile Shield", " Spellbreaker"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Rebounding Leap",
      "Benefit" : " When you succeed at the Acrobatics check to jump as part of your leaping lance class feature, you can remount your steed as a swift action.",
      "catagory" : ["Combat"],
      "prereq" : ["Acrobatics 5 ranks", " Ride 11 ranks", " leaping lance class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Rebuffing Reduction",
      "Benefit" : " Whenever an opponent that is adjacent to you fails to penetrate your DR with a melee attack, you can spend an immediate action to attempt a bull rush combat maneuver against that opponent. If you succeed, you cannot move with the opponent.",
      "catagory" : ["Combat"],
      "prereq" : ["Damage reduction", " Improved Bull Rush"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Reckless Aim",
      "Benefit" : " When you shoot or throw ranged weapons at an opponent engaged in melee, you can choose to take a –1 penalty to your AC and gain a +2 competence bonus on your attack roll. However, when you roll a natural 1 on a ranged attack roll made with this bonus, you automatically hit a random adjacent creature that threatens your intended target.",
      "catagory" : ["Combat"],
      "prereq" : ["Point-Blank Shot", " Precise Shot"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Rending Claws",
      "Benefit" : " If you hit a creature with two claw attacks in the same turn, the second claw attack deals an additional 1d6 points of damage. This damage is precision damage and is not multiplied on a critical hit. You can use this feat once per round.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. ",
      "catagory" : ["Combat"],
      "prereq" : ["Str 13", " two claw attacks", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Rending Fury",
      "Benefit" : " You deal rend damage if you hit with half the normal natural attacks your rend requires.",
      "catagory" : ["Combat"],
      "prereq" : ["Rend special attack", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Improved Rending Fury",
      "Benefit" : " Whenever you successfully rend an opponent, you deal an extra 1d6 damage. This damage is not multiplied on a critical hit.",
      "catagory" : ["Combat"],
      "prereq" : ["Rending Fury", " BAB +9"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Greater Rending Fury",
      "Benefit" : " Whenever you rend an opponent, you deal 1d6 bleed damage to that opponent. This is an addition to the effects of the rend.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Rending Fury", " BAB +12"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Reposition, Greater",
      "Benefit" : "Prerequisites: Int 13, Combat Expertise, Improved Reposition, base attack bonus +6.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules.  You receive a +2 bonus on checks made to reposition a foe. This bonus stacks with the bonus granted by Improved Reposition. Whenever you reposition a foe, his movement provokes attacks of opportunity from all of your allies (but not you).",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Reposition", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Reposition, Improved",
      "Benefit" : " You do not provoke an attack of opportunity when performing a reposition combat maneuver. In addition, you receive a +2 bonus on checks made to reposition a foe. You also receive a +2 bonus to your Combat Maneuver Defense when an opponent tries to reposition you.",
      "catagory" : ["Combat"],
      "prereq" : ["Combat Expertise"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Repositioning Strike",
      "Benefit" : " Whenever you score a critical hit with a melee attack, you can move your opponent, in addition to the normal damage dealt by the attack. If your confirmation roll exceeds your opponent’s CMD, you may move your opponent as if from the reposition combat maneuver. This does not provoke an attack of opportunity.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Reposition", " BAB +9."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Reposition, Tactical",
      "Benefit" : " When making a reposition combat maneuver, you can move an enemy into a trap or other hazardous area, such as a pit, wall scythe, or blade barrier. When you do so, the moved enemy is treated as though it had activated the trap or triggered the hazard, and it takes a –2 penalty to AC and on saving throws to mitigate the trap or hazard's effects.",
      "catagory" : ["Combat"],
      "prereq" : ["Int 13", " Combat Expertise", " Improved Reposition"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Revelation Strike",
      "Benefit" : " When you gain this feat, choose one revelation that you can use to affect no more than one opponent. If you make a successful unarmed strike against an opponent, in addition to dealing your unarmed strike damage, you can use a swift action to deliver the effects of the chosen revelation to that opponent. Doing so provokes no attacks of opportunity.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Unarmed Strike", " revelation class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Reverse-Feint",
      "Benefit" : " As a move action, you can leave a gap in your defenses for one adjacent opponent to use. If the opponent attacks you on its next turn, it gains a +4 bonus on its attack roll. Whether or not the opponent successfully hits, you may attack it as an immediate action with a single melee attack, gaining a +2 bonus on your attack roll.",
      "catagory" : ["Combat", " Orc"],
      "prereq" : ["ARG"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Rhino Charge",
      "Benefit" : "",
      "catagory" : ["Combat"],
      "prereq" : ["Power Attack", " Improved Bull Rush", " BAB +5"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ride-By Attack",
      "Benefit" : " When you are mounted and use the charge action, you may move and attack as if with a standard charge and then move again (continuing the straight line of the charge). Your total movement for the round can't exceed double your mounted speed. You and your mount do not provoke anattack of opportunity from the opponent that you attack.",
      "catagory" : ["Combat"],
      "prereq" : ["Mounted Combat"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Riptide Attack",
      "Benefit" : " When you succeed at a trip combat maneuver, you may automatically make a drag combat maneuver against your tripped target as a swift action. Your base attack bonus for the drag check is the same as the base attack bonus you used for the trip check. The drag attempt provokes attacks of opportunity as normal.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Drag", " Improved Trip."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Risky Striker",
      "Benefit" : " You can choose to take a –1 penalty to AC to gain a +2 bonus on melee damage rolls against creatures two or more size categories larger than you. When your base attack bonus reaches +4 and every four levels thereafter, the damage increases by 2. The bonus damage is multiplied in the case of a critical hit. You can only choose to use this feat when you declare that you are making an attack action or a full-attack action with a melee weapon. The effects last until your next turn.",
      "catagory" : ["Combat", " Halfling"],
      "prereq" : ["ARG"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Roll with It",
      "Benefit" : " If you are struck by a melee weapon you can try to convert some or all of that damage into movement that sends you off in an uncontrolled bouncing roll. To do so, you must make an Acrobatics check (DC = 5 + the damage dealt from the attack) as an immediate action. If you succeed in this check, you take no damage from the actual attack but instead convert that damage into movement with each point equating to 1 foot of movement.For example, if you would have taken 6 points of damage, you would convert that into 6 feet of movement. You immediately move in a straight line in a direction of your choice this number of feet (rounded up to the nearest 5-foot-square), halting if you reach a distance equal to your actual speed. If this movement would make you strike an object or creature of your size or larger, the movement immediately ends, you take 1d4 points of damage, and fall prone in that square. This involuntary movement provokes attacks of opportunity normally if you move through threatened squares, but does not provoke an attack of opportunity from the creature that struck you in the first place.",
      "catagory" : ["Combat", " Goblin"],
      "prereq" : ["Goblin", " Acrobatics 1 rank."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Saddle Shrieker",
      "Benefit" : " You can choose to take a –1 penalty on all attack rolls and combat maneuver checks to grant your mount a +1 bonus on all attack rolls and damage rolls made with natural weapons. These effects affect you and your mount for 1 round. When your base attack bonus reaches +4, and every 4 points thereafter, this penalty increases by –1 and the bonus to your mount’s attack and damage increases by +1 to a maximum of +5. You must choose to use this feat before making an attack roll.",
      "catagory" : ["Combat", " Goblin"],
      "prereq" : ["Goblin", " Ride 1 rank."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sap Adept",
      "Benefit" : " Whenever you use a bludgeoning weapon to deal nonlethal sneak attack damage, you gain a bonus on your damage roll equal to twice the number of sneak attack damage dice you rolled.",
      "catagory" : ["Combat"],
      "prereq" : ["Sneak attack +1d6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sap Master",
      "Benefit" : " Whenever you use a bludgeoning weapon to deal nonlethal sneak attack damage to a flat-footed opponent, roll your sneak attack dice twice, totaling the results as your nonlethal sneak attack damage for that attack.",
      "catagory" : ["Combat"],
      "prereq" : ["Sap Adept", " sneak attack +3d6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Saving Shield",
      "Benefit" : "",
      "catagory" : ["Combat"],
      "prereq" : ["Shield Proficiency"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "School Strike",
      "Benefit" : " info.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Unarmed Strike", " wizard school class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Scorching Weapons",
      "Benefit" : " You gain a +2 bonus on saving throws against fire attacks and spells with the fire descriptor or light descriptor. As a swift action, you can make up to two held manufactured metallic weapons become red-hot for 1 round, dealing 1 additional point of fire damage with a successful hit. This does not stack with other effects that add fire damage to weapons, such as the flaming weapon special ability.",
      "catagory" : ["Combat", " Ifrit"],
      "prereq" : ["Ifrit"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Scorpion Style",
      "Benefit" : "To use this feat, you must make a single unarmed attack as a standardaction. If this unarmed attack hits, you deal damage normally, and thetarget's base land speed is reduced to 5 feet for a number of roundsequal to your Wisdom modifier unless it makes a Fortitude saving throw (DC 10 + 1/2 your character level + your Wis modifier).",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Unarmed Strike"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sea Hunter",
      "Benefit" : " When you make a successful melee attack against a swimming target, as a free action you can attempt to knock the target off balance. Treat this as a trip combat maneuver. If you succeed, the target is considered off balance (see Table: Combat Adjustments Underwater) until it recovers its balance, usually by making a Swim check on its turn. This feat has no effect on creatures with a swim speed, those using magic such as freedom of movement, and creatures that can't be tripped.",
      "catagory" : ["Combat", " Merfolk"],
      "prereq" : ["Combat Expertise", " merfolk"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Second Chance",
      "Benefit" : " When making a full attack, if you miss on your first attack, you can forgo making any other attacks for the rest of your turn to reroll that attack at your highest base attack bonus.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. ",
      "catagory" : ["Combat"],
      "prereq" : ["Combat Expertise", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Second Chance, Improved",
      "Benefit" : " When you reroll a missed attack using the Second Chance feat, you can still make the rest of your attacks that turn, albeit at a –5 penalty to each attack.",
      "catagory" : ["Combat"],
      "prereq" : ["Second Chance", " BAB +11"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Serpent Lash",
      "Benefit" : " As a standard action, you can make a disarm or trip maneuver with your whip. If it succeeds, you can make an additional disarm or trip maneuver with the same bonus against a target adjacent to the first and also within your whip’s reach.",
      "catagory" : ["Combat"],
      "prereq" : ["Weapon Finesse", " proficient in whip"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shadow Strike",
      "Benefit" : " You can deal precision damage, such as sneak attack damage, against targets with concealment (but not total concealment).Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. ",
      "catagory" : ["Combat"],
      "prereq" : ["BAB +1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sharpclaw",
      "Benefit" : " You gain two claw attacks. These are primary natural attacks that deal 1d4 points of damage.",
      "catagory" : ["Combat", " Ratfolk"],
      "prereq" : ["Ratfolk"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shatter Defenses",
      "Benefit" : " Any shaken, frightened, or panicked opponent hit by you this round is flat-footed to your attacks until the end of your next turn. This includes any additional attacks you make this round.",
      "catagory" : ["Combat"],
      "prereq" : ["Dazzling Display", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shatterspell",
      "Benefit" : " As a standard action, you can attempt to sunder an ongoing spell effect as if you had the spell sunder rage power. You may use this feat once per day, plus one additional time per day for every 5 points by which your base attack bonus exceeds +10.",
      "catagory" : ["Combat", " Dwarf"],
      "prereq" : ["Disruptive", " Spellbreaker", " dwarf", " fighter 10"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shield Bash, Improved",
      "Benefit" : " When you perform a shield bash, you may still apply the shield's shield bonus to your AC.",
      "catagory" : ["Combat"],
      "prereq" : ["Shield Proficiency"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shield Focus",
      "Benefit" : " Increase the AC bonus granted by any shield you are using by 1.",
      "catagory" : ["Combat"],
      "prereq" : ["Shield Proficiency", " BAB +1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shield Focus, Greater",
      "Benefit" : " Increase the AC bonus granted by any shield you are using by 1. This bonus stacks with the bonus granted by Shield Focus.",
      "catagory" : ["Combat"],
      "prereq" : ["Shield Focus", " fighter 8"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shield Master",
      "Benefit" : "You do not suffer any penalties on attack rolls made with a shieldwhile you are wielding another weapon. Add your shield’s enhancement bonus to attack and damage rolls made with the shield as if it were a weapon enhancement bonus.",
      "catagory" : ["Combat"],
      "prereq" : ["Shield Slam", " BAB +11"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shield Proficiency",
      "Benefit" : " When you use a shield (except a tower shield), the shield's armor check penalty only applies to Strength- and Dexterity-based skills.",
      "catagory" : ["Combat"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shield of Swings",
      "Benefit" : " When you take a full-attack action while wielding a two-handed weapon, you can choose to reduce the damage by 1/2 to gain a +4 shield bonus to AC and CMD until the beginning of your next turn. The reduction in damage applies until the beginning of your next turn.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. ",
      "catagory" : ["Combat"],
      "prereq" : ["Str 13", " Power Attack", " BAB +1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shield Specialization",
      "Benefit" : " Choose one type of shield (buckler, light, heavy, or tower shield). With the selected shield, you gain a +2 bonus to your Armor Class against critical hit confirmation rolls. In addition, you may add your base shield bonus (including the bonus from Shield Focus but not including enhancement bonuses) to your CMD.",
      "catagory" : ["Combat"],
      "prereq" : ["Shield Focus", " fighter 4"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shield Specialization, Greater",
      "Benefit" : "Prerequisites: Proficiency with selected shield, Greater Shield Focus, Shield Focus, Shield Specialization with selected shield, fighter level 12th.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules.  Choose one type of shield (buckler, light, heavy, or tower shield) for which you possess the Shield Specialization feat. With the selected shield, you gain a +2 bonus to your Armor Class against critical hit confirmation rolls (this bonus stacks with that from Shield Specialization). In addition, once per day you may negate a critical hit, and damage is instead rolled normally.",
      "catagory" : ["Combat"],
      "prereq" : ["Shield Focus", " Greater", " Shield Specialization", " fighter 12"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shield Slam",
      "Benefit" : " Any opponents hit by your shield bash are also hit with a free bull rush attack, substituting your attack roll for the combat maneuver check (see Combat). This bull rush does not provoke an attack of opportunity. Opponents who cannot move back due to a wall or other surface are knocked prone after moving the maximum possible distance. You may choose to move with your target if you are able to take a 5-foot step or to spend an action to move this turn.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Shield Bash", " Two-Weapon Fighting", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shield Wall",
      "Benefit" : " Whenever you are wielding a shield and are adjacent to an ally wielding a shield who also has this feat, the AC bonus from your shield increases, depending on the shield wielded by your ally.If your ally is wielding a buckler or a light shield, your shield bonus increases by +1.If your ally is wielding a heavy shield or a tower shield, your shield bonus increases by +2.You keep these bonuses even if your ally loses his shield bonus due to making a shield bash attack.If an adjacent ally with this feat uses a tower shield to grant total cover, you also benefit if an attack targeting you passes through the edge of the shield.",
      "catagory" : ["Combat", " Teamwork"],
      "prereq" : ["Shield Proficiency."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shot on the Run",
      "Benefit" : " As a full-round action, you can move up to your speed and make a single ranged attack at any point during your movement.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 13", " Mobility", " Point Blank Shot", " BAB +4"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shrewd Tactician",
      "Benefit" : " Opponents do not gain a +2 bonus on attack rolls for flanking you, although they can still sneak attack you. You also gain a +3 bonus on Sense Motive checks made to resist a foe’s Bluff checks to feint in combat.",
      "catagory" : ["Combat"],
      "prereq" : ["Alertness", " Combat Reflexes"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sidestep",
      "Benefit" : " Whenever an opponent misses you with a melee attack, you may move 5 feet as an immediate action so long as you remain within that opponent’s threatened area. This movement does not provoke attacks of opportunity. If you take this step, you cannot take a 5-foot step during your next turn. If you take an action to move during your next turn, subtract 5 feet from your total movement.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. ",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 13", " Dodge", " Mobility"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sidestep, Improved",
      "Benefit" : " After sidestepping an opponent’s missed attack using the Sidestep feat, you may still take a 5-foot step during your next turn, or you may move up to your full speed if you take an action to move during your next turn.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 15", " Sidestep"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Siege Commander",
      "Benefit" : " When you lead a siege engine assembly crew, you grant all of its members a +4 competence bonus on checks to assemble or move the weapon. You also halve the time required to assemble a siege engine.",
      "catagory" : ["Combat"],
      "prereq" : ["Craft (siege weapon) 5 ranks", " Knowledge (engineering) 5 ranks or Profession (Siege Engineer) 1 rank"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Siege Engineer",
      "Benefit" : " You are considered to be proficient with all siege weapons. Also, when you are crew lead for a siege engine, you do not generate mishaps on the roll of a natural 1.",
      "catagory" : ["Combat"],
      "prereq" : ["Knowledge (engineering) 5 ranks or Profession (siege engineer) 5 ranks", " proficiency with 1 siege weapon"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Master Siege Engineer",
      "Benefit" : " If you are the crew lead on a siege engine, your crew can use move actions to load a siege engine. When you spend actions to aim a siege engine, you and your crew can use move actions instead of full-round actions to aim the siege engine.",
      "catagory" : ["Combat"],
      "prereq" : ["Siege Engineer", " Knowledge (engineering) 10 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Siege Gunner",
      "Benefit" : " You take no size penalty for aiming a direct-fire siege weapon larger than yourself. If you operate an indirect-fire siege weapon and miss, you misdirect fire by 1 square per range increment.",
      "catagory" : ["Combat"],
      "prereq" : ["Siege Engineer"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Simple Weapon Proficiency",
      "Benefit" : " You make attack rolls with simple weapons without penalty.",
      "catagory" : ["Combat"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sleeper Hold",
      "Benefit" : " You must declare that you are using this feat before you make a combat maneuver check to maintain a grapple (thus a failed check to maintain the grapple ruins the attempt). If you maintain a grapple for a number of consecutive rounds equal to your opponent’s Constitution bonus (minimum 1 round), you can attempt to knock out your opponent. The victim must succeed at a Fortitude save (DC 10 + 1/2 your character level + your Str modifier) or else it falls unconscious for 1d4 rounds. Each successive round you attempt this, the target takes a cumulative –1 penalty on its saving throw. When you use this feat, you take an additional –2 penalty to your AC. Creatures that are immune to bleed damage, stunning, or critical hits are immune to this ability.",
      "catagory" : ["Combat"],
      "prereq" : ["Greater Grapple", " BAB +8"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sliding Axe Throw",
      "Benefit" : " You can choose to take a –2 penalty on a ranged attack roll with an axe, bouncing it or sliding it along the ground. If the target is flat-footed, running, or charging, this attack ignores any bonuses to the target’s AC from its shield. If the attack hits, you may immediately make a trip attempt against the target as a free action. If you fail to trip your opponent, your opponent does not get an attempt to trip you in return.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 13", " BAB +1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sling Flail",
      "Benefit" : "You can use your loaded sling to effectively strike at nearby foes.Prerequisite: Weapon Focus (sling), base attack bonus +1. You can make melee attacks using your loaded sling, using that weapon’s normal statistics but treating it as a flail. Using a sling in this way does not expend mundane ammunition, but magical or masterwork ammunition loses its special properties after a single hit.Special: Any feats you have that apply when you use a flail also apply when you use a loaded sling as a melee weapon.",
      "catagory" : ["Combat"],
      "prereq" : ["Weapon Focus (sling)", " BAB +1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Snap Shot",
      "Benefit" : " While wielding a ranged weapon with which you have Weapon Focus, you threaten squares within 5 feet of you. You can make attacks of opportunity with that ranged weapon. You do not provoke attacks of opportunity when making a ranged attack as an attack of opportunity.",
      "catagory" : ["Combat"],
      "prereq" : ["Rapid Shot", " Weapon Focus", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Improved Snap Shot",
      "Benefit" : " You threaten an additional 10 feet with Snap Shot.Normal: Making a ranged attack provokes attacks of opportunity.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 15", " Snap Shot", " BAB +9"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Greater Snap Shot",
      "Benefit" : " Whenever you make an attack of opportunity using a ranged weapon and hit, you gain a +2 bonus on the damage roll and a +2 bonus on rolls to confirm a critical hit with that attack. These bonuses increase to +4 when you have base attack bonus +16, and to +6 when you have base attack bonus +20.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 17", " Improved Snap Shot", " BAB +12"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sorcerous Strike",
      "Benefit" : " When you gain this feat, you choose one bloodline power that you can use to affect a single opponent. If you make a successful unarmed strike against an opponent, in addition to dealing your unarmed strike damage, you can spend a swift action to deliver the effects of the chosen bloodline power to that opponent. Doing so provokes no attacks of opportunity.",
      "catagory" : ["Combat"],
      "prereq" : ["Sorcerer bloodline class feature", " Improved Unarmed Strike"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Snatch Arrows",
      "Benefit" : " When using the Deflect Arrows feat you may choose to catch the weapon instead of just deflecting it.Thrown weapons can immediately be thrown back as an attack against theoriginal attacker (even though it isn't your turn) or kept for lateruse.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 15", " Deflect Arrows"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Spellbreaker",
      "Benefit" : " Enemies in your threatened area that fail their checks to cast spells defensively provoke attacks of opportunity from you.",
      "catagory" : ["Combat"],
      "prereq" : ["Disruptive", " fighter 10"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Spiked Destroyer",
      "Benefit" : " When you succeed at a bull rush or overrun combat maneuver, you may automatically make an attack roll with your armor spikes against the target of the maneuver as a swift action. This attack is made using your highest attack bonus.",
      "catagory" : ["Combat"],
      "prereq" : ["Proficient in spiked armor"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Spinning Throw",
      "Benefit" : " On a successful unarmed trip combat maneuver against an opponent your size or smaller, you can spend a swift action to attempt a bull rush combat maneuver against that opponent. If your bull rush succeeds, you can move that opponent to any unoccupied square you threaten, then push that opponent the number of 5-foot increments your successful bull rush allows. The target is then knocked prone. If the bull rush fails, you can use the Ki Throw feat as normal. If you also have the Improved Ki Throw feat, a successful bull rush allows you to push the opponent into a space secondary targets occupy. You resolve this effect as if you used the Improved Ki Throw feat to throw the opponent into that space.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Bull Rush", " Improved Trip", " Improved Unarmed Strike", " Ki Throw"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Spirited Charge",
      "Benefit" : " When mounted and using the charge action, you deal double damage with a melee weapon (or triple damage with a lance).",
      "catagory" : ["Combat"],
      "prereq" : ["Ride-By Attack"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Spit Venom",
      "Benefit" : " As a full-round action, you can spit poison up to 10 feet as a ranged touch attack. If you hit, the target must make a successful Fortitude save or be blinded for 1d6 rounds. The DC of this save is equal to 10 + 1/2 your total Hit Dice + your Constitution modifier. You can use this ability once per day plus one additional time per day for every three Hit Dice you have.",
      "catagory" : ["Combat", " Nagaji"],
      "prereq" : ["Nagaji"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Spring Attack",
      "Benefit" : " As a full-round action, you can move up to your speed and make a single melee attack without provoking any attacks of opportunity from the target of your attack. You can move both before and after the attack, but you must move at least 10 feet before the attack and the total distance that you move cannot be greater than your speed. You cannot use this ability to attack a foe that is adjacent to you at the start of your turn.",
      "catagory" : ["Combat"],
      "prereq" : ["Mobility", " BAB+4"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Stabbing Shot",
      "Benefit" : " When adjacent to an opponent and making a full-attack action with a longbow or shortbow (including composite bows), you may choose to make a melee attack against that opponent with a drawn arrow rather than firing it. If the attack hits—whether or not it does damage—your target is pushed back 5 feet away from you. You can then fire arrows from your bow normally, at the original target, or at another target within range. This melee attack replaces the extra attack from Rapid Shot, and all of your attack rolls for the round (the melee attack and the ranged attacks) take a –2 penalty. If your initial attack leaves you with no enemies threatening you, you can make the subsequent ranged attack or attacks without provoking attacks of opportunity.",
      "catagory" : ["Combat"],
      "prereq" : ["Rapid Shot", " elf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Stage Combatant",
      "Benefit" : " When you make an attack with a weapon that you have Weapon Focus in, you take no penalty on the attack roll when you are attempting to make an attack that deals no damage or nonlethal damage.",
      "catagory" : ["Combat"],
      "prereq" : ["Weapon Focus", " BAB +5"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Stance of the Xorn",
      "Benefit" : " Flanking creatures do not gain a +2 bonus to attack you (this does not prevent you from being sneak attacked or denied yourDexterity  bonus). A condition that makes you lose your Dex bonus to AC also makes you lose the benefits of this feat.",
      "catagory" : ["Combat"],
      "prereq" : ["Wis 15", " BAB +3"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Stand Still",
      "Benefit" : "When a foe provokes an attack of opportunity due to moving through youradjacent squares, you can make a combat maneuver check as your attackof opportunity. If successful, the enemy cannot move for the rest ofhis turn. An enemy can still take the rest of his action, but cannotmove. This feat also applies to any creature that attempts to move froma square that is adjacent to you if such movement provokes an attack ofopportunity.",
      "catagory" : ["Combat"],
      "prereq" : ["Combat Reflexes"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Steady Engagement",
      "Benefit" : " If you use the Stand Still feat to prevent an opponent from moving, you may make a disarm or trip combat maneuver against the target as an immediate action.",
      "catagory" : ["Combat"],
      "prereq" : ["Combat Reflexes", " Stand Still"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Steal, Greater",
      "Benefit" : " You receive a +2 bonus on checks made to steal an item from a foe. This bonus stacks with the bonus granted by Improved Steal. If you successfully steal an item from a foe during combat, it does not notice the theft until after combat is over or if it attempts to use the missing item.",
      "catagory" : ["Combat"],
      "prereq" : ["Steal", " Improved", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Steal, Improved",
      "Benefit" : " You do not provoke an attack of opportunity when performing a steal combat maneuver. In addition, you receive a +2 bonus on checks made to steal an item from a foe. You also receive a +2 bonus to your Combat Maneuver Defense when an opponent tries to steal an item from you.",
      "catagory" : ["Combat"],
      "prereq" : ["Combat Expertise"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Step Up",
      "Benefit" : "Whenever an adjacent foe attempts to take a 5-foot step away from you,you may also make a 5-foot step as an immediate action so long as youend up adjacent to the foe that triggered this ability. If you takethis step, you cannot take a 5-foot step during your next turn. If youtake an action to move during your next turn, subtract 5 feet from yourtotal movement.",
      "catagory" : ["Combat"],
      "prereq" : ["BAB +1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Step Up and Strike",
      "Benefit" : " When using the Step Up or Following Step feats to follow an adjacent foe, you may also make a single melee attack against that foe at your highest base attack bonus. This attack counts as one of your attacks of opportunity for the round. Using this feat does not count toward the number of actions you can usually take each round.",
      "catagory" : ["Combat"],
      "prereq" : ["Following Step", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Strangler",
      "Benefit" : " Whenever you successfully maintain a grapple and choose to deal damage, you can spend a swift action to deal your sneak attack damage to the creature you are grappling.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Grapple", " sneak attack +1d6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Strike Back",
      "Benefit" : "You can ready an action to make a melee attack against any foe thatattacks you in melee, even if the foe is outside of your reach.",
      "catagory" : ["Combat"],
      "prereq" : ["BAB +11"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Stunning Assault",
      "Benefit" : " You can choose to take a –5 penalty on all melee attack rolls and combat maneuver checks to stun targets you hit with your melee attacks for 1 round. A successful Fortitude save negates the effect. The DC of this save is 10 + your base attack bonus. You must choose to use this feat before making the attack roll, and its effects last until your next turn.",
      "catagory" : ["Combat"],
      "prereq" : ["Power Attack", " BAB +16"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Stunning Fist",
      "Benefit" : "You must declare that you are using this feat before you make yourattack roll (thus, a failed attack roll ruins the attempt). StunningFist forces a foe damaged by your unarmed attack to make a Fortitude saving throw (DC 10 + 1/2 your character level + your Wis modifier), in addition to dealing damage normally. A defender who fails this saving throw is stunned for 1 round (until just before your next turn). A stunned character drops everything held, can’t take actions, loses any Dexterity bonus to AC, and takes a –2 penalty to AC.You may attempt a stunning attack once per day for every four levelsyou have attained (but see Special), and no more than once per round.Constructs, oozes, plants, undead, incorporeal creatures, and creatures immune to critical hits cannot be stunned.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 13", " Wis 13", " Improved Unarmed Strike", " BAB +8"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Stunning Fist Adept",
      "Benefit" : " Add +1 to the saving throw DC against your Stunning Fist attacks. This bonus does not stack with feats that grant you bonuses to the DC for saving throws against your Stunning Fist attacks, such as Mantis Style.",
      "catagory" : ["Combat"],
      "prereq" : ["Stunning Fist", " BAB +3"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Stunning Pin",
      "Benefit" : " Whenever you pin an opponent, you can spend a swift action to make a Stunning Fist attempt against that opponent.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Grapple", " Stunning Fist"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sunder, Greater",
      "Benefit" : " You receive a +2 bonus on checks made to sunder an item. This bonus stacks with the bonus granted by Improved Sunder. Whenever you sunder to destroy a weapon, shield, or suit of armor, any excess damage is applied to the item's wielder. No damage is transferred if you decide to leave the item with 1 hit point.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Sunder", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sunder, Improved",
      "Benefit" : " You do not provoke an attack of opportunity when performing a sunder combat maneuver. In addition, you receive a +2 bonus on checks made to sunder an item. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to sunder your gear. ",
      "catagory" : ["Combat"],
      "prereq" : ["Power Attack"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sundering Strike",
      "Benefit" : " Whenever you score a critical hit with a melee attack, you can sunder your opponent’s weapon, in addition to the normal damage dealt by the attack. If your confirmation roll exceeds your opponent’s CMD, you may deal damage to your opponent’s weapon as if from the sunder combat maneuver (roll normal damage to the weapon separately). This does not provoke an attack of opportunity.",
      "catagory" : ["Combat"],
      "prereq" : ["Sunder", " Improved", " BAB +9"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Surprise Follow-Through",
      "Benefit" : " When using Cleave or Great Cleave, the second foe you attack on your turn is denied its Dexterity bonus against you.",
      "catagory" : ["Combat", " Half-orc", " Orc"],
      "prereq" : ["Str 13", " Cleave", " Power Attack", " BAB +1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Surprise Strike",
      "Benefit" : " Once per day, when fighting defensively or making an attack of opportunity while taking the total defense action with the Desperate Swing feat, you take no penalty on the attack roll.",
      "catagory" : ["Combat", " Halfling"],
      "prereq" : ["Cautious Fighter", " Desperate Swing", " BAB +6", " halfling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Swap Places",
      "Benefit" : "You are skilled at changing places with your ally during a chaotic melee. Whenever you are adjacent to an ally ",
      "catagory" : ["Combat", " Teamwork"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sword And Pistol",
      "Benefit" : " When you use the Two-Weapon Fighting feat while wielding a melee weapon and a crossbow or firearm, your attacks with the crossbow or firearm provoke no attacks of opportunity from foes that you threaten with your melee weapon.",
      "catagory" : ["Combat"],
      "prereq" : ["Snap Shot", " Two-Weapon Fighting", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sympathetic Rage",
      "Benefit" : " Whenever you are adjacent to an ally who is raging, you may choose to enter a similar but less powerful rage as a free action on your turn. This weaker rage gives you all the benefits and penalties of a barbarian's rage, except your morale bonus to Strength and Constitution is only +2. There is no limit to how long you can rage, as long as you remain adjacent to a raging ally (for example, you could take a 5-foot step away from one raging ally toward another raging ally and maintain your rage). As with a barbarian's rage, when this weaker rage ends, you are fatigued. You cannot use this feat if you are fatigued.",
      "catagory" : ["Combat", " Half-orc", " Orc"],
      "prereq" : ["Half-orc or orc", " non-lawful"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Tactical Reposition",
      "Benefit" : " When making a reposition combat maneuver, you can move an enemy into a trap or other hazardous area, such as a pit, wall scythe, or blade barrier. When you do so, the moved enemy is treated as though it had activated the trap or triggered the hazard, and it takes a –2 penalty to AC and on saving throws to mitigate the trap or hazard's effects.",
      "catagory" : ["Combat"],
      "prereq" : ["Int 13", " Combat Expertise", " Improved Reposition"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Tail Terror",
      "Benefit" : " You can make a tail slap attack with your tail. This is a secondary natural attack that deals 1d4 points of bludgeoning damage. Furthermore, you can augment your tail slap attack with a kobold tail attachment. For the purpose of weapon feats, you are considered proficient with all kobold tail attachments.",
      "catagory" : ["Combat", " Kobold"],
      "prereq" : ["BAB +1", " kobold"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Duelist",
      "Benefit" : " When fighting with the falcata and buckler, your shield bonus to AC increases by +1 and you gain a +2 bonus on Acrobatics checks.Section 15: Copyright Notice - Pathfinder Campaign Setting: The Inner Sea World GuidePathfinder Campaign Setting: The Inner Sea World Guide. © 2011, Paizo Publishing, LLC; Authors: Keith Baker, Wolfgang Baur, Clinton J. Boomer, Jason Bulmahn, Joshua J. Frost, Ed Greenwood, Stephen S. Greer, Jeff Grubb, James Jacobs, Michael Kortes, Tito Leati, Mike McArtor, Rob McCreary, Erik Mona, Jason Eric Nelson, Jeff Quick, Sean K Reynolds, F. Wesley Schneider, Leandra Christine Schneider, David Schwartz, Amber E. Scott, Stan!, Owen K.C. Stephens, Todd Stewart, James L. Sutter, Greg A. Vaughan, Jeremy Walker, and JD Wiker.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 13", " Exotic Weapon Proficiency (falcata)", " Weapon Focus (falcata)", " proficient with a buckler."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Tangle Feet",
      "Benefit" : " When you successfully make an Acrobatics check to avoid provoking an attack of opportunity from a larger opponent when you move through its threatened area or its space, you can make that opponent lose its balance until the end of its next turn as a free action. While that creature’s balance is lost, if it attempts to move, it must make a successful DC 15 Acrobatics check or fall prone, wasting the move action. You can only affect one creature with this effect each round.",
      "catagory" : ["Combat", " Goblin"],
      "prereq" : ["Dodge", " Mobility", " Underfoot", " Goblin", " Small size or smaller"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Tantrum",
      "Benefit" : "",
      "catagory" : ["Combat"],
      "prereq" : ["Bluff 1 rank", " rage class feature", " gnome"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Taskmaster",
      "Benefit" : " As a standard action, you spur an ally, who must have fewer Hit Dice than yourself, to reckless effort. For 1 minute, the ally gains a +1 morale bonus on attack rolls, weapon damage rolls, and Will saves against mind-affecting effects. However, the ally also takes a –2 penalty to AC and on skill checks. To affect an unwilling ally, you must succeed at an Intimidate check with the same DC used to demoralize your ally.",
      "catagory" : ["Combat", " Hobgoblin"],
      "prereq" : ["Demoralizing Lash", " Intimidate 5 ranks", " Hobgoblin"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Team Up",
      "Benefit" : " When you and at least two of your allies are adjacent to an opponent, you can attempt the aid another action as a move action.",
      "catagory" : ["Combat"],
      "prereq" : ["Gang-Up", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Teleport Tactician",
      "Benefit" : " Any creature using a teleportation effect to enter or leave a square threatened by you provokes an attack of opportunity, even if casting defensively or using a supernatural ability.",
      "catagory" : ["Combat"],
      "prereq" : ["Combat Reflexes", " Disruptive", " Spellbreaker"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Terrorizing Display",
      "Benefit" : "",
      "catagory" : ["Combat", " Hobgoblin"],
      "prereq" : ["Dazzling Display", " Demoralizing Lash", " Taskmaster", " Weapon Focus", " Intimidate 10 ranks", " Hobgoblin", " proficiency with selected weapon"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Throw Anything",
      "Benefit" : "You do not suffer any penalties for using an improvised ranged weapon.You receive a +1 circumstance bonus on attack rolls made with thrownsplash weapons.",
      "catagory" : ["Combat"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Thunder and Fang",
      "Benefit" : " You can use an earth breaker as though it were a one-handed weapon. When using an earth breaker in one hand and a klar in your off hand, you retain the shield bonus your klar grants to your Armor Class even when you use it to attack. Treat your klar as a light weapon for the purposes of determining your two-weapon fighting penalty.",
      "catagory" : ["Combat"],
      "prereq" : ["Str 15", " Two-Weapon Fighting", " Weapon Focus (earth breaker)", " Weapon Focus (klar)"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Touch of Serenity",
      "Benefit" : " You must declare that you are using this feat before you make your attack roll (thus a failed attack roll ruins the attempt). On a successful hit, the attack deals no damage and bestows no other effect or condition, but the target cannot cast spells or attack (including attacks of opportunity and attacks as immediate actions) for 1 round unless it succeeds on a Will saving throw with a DC of 10 + 1/2 your character level + your Wisdom modifier. You may attempt a touch of serenity once per day for every four levels you have attained (but see Special), and no more than once per round.",
      "catagory" : ["Combat"],
      "prereq" : ["Wis 18", " Unarmed Strike", " Improved", " BAB +8"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Tower Shield Proficiency",
      "Benefit" : " When you use a tower shield, the shield's armor check penalty only applies to Strength and Dexterity-based skills.",
      "catagory" : ["Combat"],
      "prereq" : ["Shield Proficiency"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Trample",
      "Benefit" : " When you attempt to overrunan opponent while mounted, your target may not choose to avoid you.Your mount may make one hoof attack against any target you knock down,gaining the standard +4 bonus on attack rolls against prone targets.",
      "catagory" : ["Combat"],
      "prereq" : ["Mounted Combat"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Tree Hanger",
      "Benefit" : " You gain a +2 bonus to your CMD against all trip attacks. If your square has a branch or other sturdy large object that you could hang from, as a swift action you may make a DC 15 Acrobatics check to jump upward and use your tail to hang from that object. While hanging, you can't be tripped, you ignore the effects of difficult terrain in your square, and you gain a +2 bonus to your CMD against bull rush, drag, and reposition attacks. If you leave that square (including if you are moved against your will), you lose your grip on the object and are no longer hanging. While hanging, you cannot use your tail for anything else.",
      "catagory" : ["Combat", " Vanara"],
      "prereq" : ["Acrobatics 1 rank", " vanara"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Trick Riding",
      "Benefit" : " While wearing light or no armor, you do not need to make Ride skill checks for any task listed in the Ride skill with a DC of 15 or lower. You do not take a –5 penalty for riding a mount bareback. You can make a check using Mounted Combat to negate a hit on your mount twice per round instead of just once.",
      "catagory" : ["Combat"],
      "prereq" : ["Ride 9 ranks", " Mounted Combat"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Trip, Greater",
      "Benefit" : " You receive a +2 bonus on checks made to trip a foe. This bonus stacks with the bonus granted by Improved Trip. Whenever you successfully trip an opponent, that opponent provokes attacks of opportunity.",
      "catagory" : ["Combat"],
      "prereq" : ["Combat Expertise", " Improved Trip", " BAB +6", " Int 13."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Trip, Improved",
      "Benefit" : " You do not provoke an attack of opportunity when performing a trip combat maneuver. In addition, you receive a +2 bonus on checks made to trip a foe. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to trip you. ",
      "catagory" : ["Combat"],
      "prereq" : ["Combat Expertise"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Tripping Staff",
      "Benefit" : " You treat quarterstaves as if they had the trip special feature.",
      "catagory" : ["Combat"],
      "prereq" : ["Int 13", " Combat Expertise", " Improved Trip", " Weapon Focus (quarterstaff )", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Tripping Strike",
      "Benefit" : " Whenever you score a critical hit with a melee attack, you can trip your opponent, in addition to the normal damage dealt by the attack. If your confirmation roll exceeds your opponent’s CMD, you may knock your opponent prone as if from the trip combat maneuver. This does not provoke an attack of opportunity. If you are tripped during your own trip attempt, you can drop your weapon to avoid being tripped.",
      "catagory" : ["Combat"],
      "prereq" : ["Trip", " Improved", " BAB +9"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Tripping Twirl",
      "Benefit" : " As a full-round action, while wielding a quarterstaff two-handed, you can attempt a trip combat maneuver against each enemy adjacent to you.",
      "catagory" : ["Combat"],
      "prereq" : ["Int 13", " Combat Expertise", " Improved Trip", " Tripping Staff", " Weapon Focus (quarterstaff )", " Weapon Specialization (quarterstaff )", " BAB +12"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Twin Thunders",
      "Benefit" : "When you fight giants, your powerful blows combine with skills learned from generations of your people to quickly even the odds.Prerequisite:  Dwarf or gnome, defensive training racial trait, Two-Weapon Fighting or flurry of blows class feature, Weapon Focus with both wielded weapons. Once per round, when wielding a bludgeoning weapon in each hand against a creature with the giant subtype, if you hit the creature with your off-hand weapon after you hit with your primary weapon, roll the damage dice for your off-hand weapon twice and add the results together before adding any bonuses. Such extra weapon damage dice are not multiplied on a critical hit.",
      "catagory" : ["Combat"],
      "prereq" : ["Flurry of blows class feature or Two-Weapon Fighting", " Weapon Focus with wielded bludgeoning weapons", " defensive training race trait", " dwarf or gnome"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Twin Thunders Flurry",
      "Benefit" : "Your dual bludgeoning strikes are especially deadly when you are fighting giants.Prerequisite:  Dwarf or gnome; defensive training racial trait; Improved Two-Weapon Fighting and Two-Weapon Fighting, or flurry of blows class feature; Twin Thunders; Weapon Focus with both wielded weapons; base attack bonus +6. You can trip a creature with the giant subtype of up to Huge size, and you gain a +2 bonus on damage rolls against creatures of the giant subtype. Further, each time you hit a creature of the giant subtype with your off-hand weapon after you hit that creature with your primary weapon, you can deal the extra off-hand weapon damage Twin Thunders grants you.",
      "catagory" : ["Combat"],
      "prereq" : ["Twin Thunders", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Twin Thunders Master",
      "Benefit" : "With thunderous simultaneous strikes, you can batter a mighty giant into submission.Prerequisite:  Dwarf or gnome; defensive training racial trait; Improved Two-Weapon Fighting and Two-Weapon Fighting, or flurry of blows class feature; Twin Thunders; Twin Thunders Flurry; Weapon Focus with both wielded weapons; base attack bonus +9. Whenever you deal an opponent extra damage with the Twin Thunders feat, that opponent is shaken for 1 round. You also force that opponent to succeed at a Fortitude saving throw (DC 10 + half your level + your Str modifier) or become staggered for 1 round. If you use this feat to render staggered an opponent that is already staggered, you daze that opponent instead. In a similar way, you can stun an opponent that is already dazed.",
      "catagory" : ["Combat"],
      "prereq" : ["Twin Thunders Flurry", " BAB +9"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Two-Handed Thrower",
      "Benefit" : "You hurl weapons with both hands and with great force, sometimes using a whirling technique to send your weapon flying through the air at tremendous speeds.Prerequisite: Str 15. Whenever you use two hands to throw a one-handed or two-handed weapon, you gain a bonus on damage rolls equal to 1-1/2 times your Strength bonus. Using two hands to throw any weapon requires only a standard action for you. If you also have the Quick Draw feat, you can throw two-handed weapons at your full normal rate of attacks.Normal: You add your Strength bonus on thrown weapon damage, regardless of available hands. Throwing a two-handed weapon is a full-round action.",
      "catagory" : ["Combat"],
      "prereq" : ["Str 15"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Two-Weapon Defense",
      "Benefit" : " When wielding a double weapon or two weapons (not including natural weapons or unarmed strikes), you gain a +1 shield bonus to your AC.",
      "catagory" : ["Combat"],
      "prereq" : ["Two-Weapon Fighting"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Two-Weapon Feint",
      "Benefit" : "You use one weapon to distract your enemy while slipping another past his defenses.Prerequisite:  Dex 15, Int 13, Combat Expertise, Two-Weapon Fighting. While using Two-Weapon Fighting to make melee attacks, you can forgo your first primary-hand melee attack to make a Bluff check to feint an opponent.",
      "catagory" : ["Combat"],
      "prereq" : ["Combat Expertise", " Two-Weapon Fighting"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Two-Weapon Fighting",
      "Benefit" : " Your penalties on attack rolls for fighting with two weapons are reduced. The penalty for your primary hand lessens by 2 and the one for your off hand lessens by 6. See Two-Weapon Fighting.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 15"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Two-Weapon Fighting, Greater",
      "Benefit" : " You get a third attack with your off-hand weapon, albeit at a –10 penalty.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 19", " Improved Two-Weapon Fighting", " BAB +11"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Two-Weapon Fighting, Improved",
      "Benefit" : " In addition to the standard single extra attack you get with an off-hand weapon, you get a second attack with it, albeit at a –5 penalty.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 17", " Two-Weapon Fighting", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Two-Weapon Rend",
      "Benefit" : "If you hit an opponent with both your primary hand and your off-handweapon, you deal an additional 1d10 points of damage plus 1-1/2 timesyour Strength modifier. You can only deal this additional damage onceeach round.",
      "catagory" : ["Combat"],
      "prereq" : ["Double Slice", " Improved Two-Weapon Fighting", " BAB +11"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Unarmed Strike, Improved",
      "Benefit" : " You are considered to be armed even when unarmed—you do not provoke attacks of opportunity when you attack foes while unarmed. Your unarmed strikes can deal lethal or nonlethal damage, at your choice.",
      "catagory" : ["Combat"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Uncanny Defense",
      "Benefit" : " While fighting defensively or taking the total defense action, you gain a bonus on your Reflex saving throws and to your CMD equal to 1/2 of the dodge bonus to AC you gained from taking that action.",
      "catagory" : ["Combat", " Halfling"],
      "prereq" : ["Cautious Fighter", " BAB +3", " halfling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Under and Over",
      "Benefit" : " If an opponent larger than you attempts to grapple you and fails, you may make a trip attack as an immediate action against that opponent with a +2 bonus. This does not provoke an attack of opportunity.  ",
      "catagory" : ["Combat"],
      "prereq" : ["Agile Maneuvers", " Small size or smaller"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Unseat",
      "Benefit" : "",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Bull Rush", " Mounted Combat"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Vast Hatred",
      "Benefit" : " Select two creature types (and subtypes where appropriate) from the list of potential favored enemies from the ranger class ability. Your +1 attack bonus from the hatred racial trait applies to creatures of the selected types (and subtypes).",
      "catagory" : ["Combat", " Gnome"],
      "prereq" : ["Gnome", " hatred racial trait"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Vicious Stomp",
      "Benefit" : " Whenever an opponent falls prone adjacent to you, that opponent provokes an attack of opportunity from you. This attack must be an unarmed strike.",
      "catagory" : ["Combat"],
      "prereq" : ["Combat Reflexes", " Improved Unarmed Strike"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Vital Strike",
      "Benefit" : " When you use the attack action, you can make one attack at your highest base attack bonus that deals additional damage. Roll the weapon’s damage dice for the attack twice and add the results together before adding bonuses from Strength, weapon abilities (such as flaming), precision-based damage, and other damage bonuses. These extra weapon damage dice are not multiplied on a critical hit, but are added to the total.",
      "catagory" : ["Combat"],
      "prereq" : ["BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Vital Strike, Greater",
      "Benefit" : " When you use the attack action, you can make one attack at your highest base attack bonus that deals additional damage. Roll the weapon’s damage dice for the attack four times and add the results together before adding bonuses from Strength, weapon abilities (such as flaming), precision based damage, and other damage bonuses. These extra weapon damage dice are not multiplied on a critical hit, but are added to the total.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Vital Strike", " BAB +16"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Vital Strike, Improved",
      "Benefit" : " When you use the attack action, you can make one attack at your highest base attack bonus that deals additional damage. Roll the weapon’s damage dice for the attack three times and add the results together before adding bonuses from Strength, weapon abilities (such as flaming), precision-based damage, and other damage bonuses. These extra weapon damage dice are not multiplied on a critical hit, but are added to the total.",
      "catagory" : ["Combat"],
      "prereq" : ["Vital Strike", " BAB +11"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Vulpine Pounce",
      "Benefit" : " When you change shape into your kitsune form and use the charge action in the same round, you can make a full attack against your opponent.",
      "catagory" : ["Combat", " Kitsune"],
      "prereq" : ["Swift Kitsune Shapechanger", " BAB +10", " kitsune"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Wave Strike",
      "Benefit" : "You present a serene facade until you unsheathe your weapon and strike in one fluid motion.Prerequisite: Weapon expertise class feature or Quick Draw, Bluff 1 rank. If on your first turn of combat you draw a melee weapon to attack an opponent within your reach, you can spend a swift action to make a Bluff check to feint against that opponent.",
      "catagory" : ["Combat"],
      "prereq" : ["Weapon expertise class feature or Quick Draw", " Bluff 1 rank"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Weapon Finesse",
      "Benefit" : " With a light weapon, elven curve blade, rapier, whip, or spiked chain made for a creature of your size category, you may use your Dexterity modifier instead of your Strength modifier on attack rolls. If you carry a shield, its armor check penalty applies to your attack rolls.",
      "catagory" : ["Combat"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Weapon Focus",
      "Benefit" : " You gain a +1 bonus on all attack rolls you make using the selected weapon.",
      "catagory" : ["Combat"],
      "prereq" : ["Proficiency with weapon", " BAB +1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Weapon Focus, Greater",
      "Benefit" : " You gain a +1 bonus on attack rolls you make using the selected weapon. This bonus stacks with other bonuses on attack rolls, including those from Weapon Focus.",
      "catagory" : ["Combat"],
      "prereq" : ["Weapon Focus", " fighter 8"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Weapon Specialization",
      "Benefit" : " You gain a +2 bonus on all damage rolls you make using the selected weapon.",
      "catagory" : ["Combat"],
      "prereq" : ["Weapon Focus", " fighter 4"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Weapon Specialization, Greater",
      "Benefit" : " You gain a +2 bonus on all damage rolls you make using the selected weapon. This bonus to damage stacks with other damage roll bonuses, including any you gain from Weapon Specialization.",
      "catagory" : ["Combat"],
      "prereq" : ["Weapon Specialization", " fighter 12"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Wheeling Charge",
      "Benefit" : " When you are mounted and use the charge action, your mount can make one turn of up to 90 degrees as part of the move, as long as each part of the move is at least 10 feet. You may make an attack during any part of this move. Your total movement for the round can’t exceed double your mounted speed. Allied creatures do not impede your charge, though you cannot attack from or end your move in an ally’s space.",
      "catagory" : ["Combat", " Local"],
      "prereq" : ["Mounted Combat", " Ride-By Attack", " Ride 5 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Whip Mastery",
      "Benefit" : "Your superior expertise with this weapon does not provoke attacks of opportunity from your enemies.Prerequisite: Weapon Focus (whip), base attack bonus +2. You no longer provoke attacks of opportunity when attacking with a whip. You can deal lethal damage with a whip, although you can still deal nonlethal damage when you want. Further, you can deal damage with a whip despite a creature’s armor bonus or natural armor bonus.Normal: Attacking with a whip provokes attacks of opportunity as if you used a ranged weapon. A whip deals no damage to a creature that has an armor bonus of +1 or natural armor bonus of +3.",
      "catagory" : ["Combat"],
      "prereq" : ["Weapon Focus (whip)", " BAB +2"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Improved Whip Mastery",
      "Benefit" : " While wielding a whip, you threaten the area of your natural reach plus 5 feet. You can also use a whip to grasp an unattended Small or Tiny object within your whip’s reach and pull that object into your square. To do so, you must hit AC 10 with a melee touch attack. Further, you can use the whip to grasp onto an object within your whip’s reach, using 5 feet of your whip as if it were a grappling hook, allowing you to use the rest of your whip to swing on like a rope. As a free action, you can release the object your whip is grasping, but you cannot use the whip to attack while the whip is grasping an object.",
      "catagory" : ["Combat"],
      "prereq" : ["Whip Mastery", " BAB +5"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Greater Whip Mastery",
      "Benefit" : " You are so quick with your whip that you never drop it due to a failed disarm or trip combat maneuver attempt. Further, you gain the ability to grapple using your whip. To do so, use the normal grapple rules with the following changes.Attack: You cannot use your whip to attack while you are using it to grapple an opponent.Damage: When dealing damage to your grappled opponent, you deal your whip’s weapon damage rather than your unarmed strike damage. Free Hands: You take no penalty on your combat maneuver check for having fewer than two hands free when you use your whip to grapple.Reach: Rather than pulling your grappled opponent adjacent to you when you successfully grapple and when you move the grapple, you must keep him within your whip’s reach minus his own reach to maintain the grapple. If the difference in reach is less than 0, such as is the case for a Medium whip wielder and a Gargantuan creature, you cannot grapple that opponent with your whip. If you have to pull a creature adjacent to you to grapple it with your whip, you still provoke an attack of opportunity from that opponent unless you have the Improved Grapple feat.Tie Up: While adjacent to your opponent, you can attempt to use your whip to tie him up. If you do so to an opponent you have grappled rather than pinned, you take only a –5 penalty on the combat maneuver check rather than the normal –10.",
      "catagory" : ["Combat"],
      "prereq" : ["Improved Whip Mastery", " BAB +8"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Whip Slinger",
      "Benefit" : " When wielding a sling, double sling, or halfling sling staff, you threaten areas around you as normal and can make attacks of opportunity with the sling into these threatened areas. The sling deals 1d4 nonlethal bludgeoning damage (1d6 for a Medium wielder), threatens a critical hit on a 20, and deals ×2 damage on a critical hit. If the sling isn’t loaded with ammunition when you make an attack of opportunity, you take a –4 penalty on the attack roll.",
      "catagory" : ["Combat"],
      "prereq" : ["Proficient with sling."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Whirlwind Attack",
      "Benefit" : "When you use the full-attack action, you can give up your regularattacks and instead make one melee attack at your highest base attackbonus against each opponent within reach. You must make a separateattack roll against each opponent.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 13", " Combat Expertise", " Spring Attack", " BAB +4"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Wind Stance",
      "Benefit" : " If you move more than 5 feet this turn, you gain 20% concealment for 1 round against ranged attacks.",
      "catagory" : ["Combat"],
      "prereq" : ["Dex 15", " Dodge", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Witty Feint",
      "Benefit" : "",
      "catagory" : ["Combat"],
      "prereq" : ["Bluff 1 rank", " weapon training class feature", " gnome"],
      "onGain" : function (player) {
        return player;
      }
    }
  ],
  "generalFeats" : [
    {
      "name" : "Abundant Revelations",
      "Benefit" : " Choose one of your revelations that has a number of uses per day. You gain 1 additional use per day of that revelation.",
      "catagory" : ["General"],
      "prereq" : ["Mystery class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Accursed Hex",
      "Benefit" : " When you target a creature with a hex that cannot target the same creature more than once per day, and that creature succeeds at its saving throw against the hex’s effect, you can target the creature with the same hex a second time before the end of your next turn. If the second attempt fails, you can make no further attempts to target that creature with the same hex for 1 day. Normal: You can only target a creature with these hexes once per day.",
      "catagory" : ["General"],
      "prereq" : ["Hex class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Acrobatic",
      "Benefit" : "",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Adept Champion",
      "Benefit" : "You can alter your smite ability, channeling the power of your deity into divine inspiration that grants you greater aptitude for performing combat maneuvers.Prerequisites: Smite evil class feature, base attack bonus +5. While using your smite evil class feature, as a swift action at the start of your turn, you can forgo the bonus on damage rolls and instead gain half that bonus as a bonus oncombat maneuver checks against the target of your smite. The effects of your smite evil feature return to normal at the start of your next turn.",
      "catagory" : ["General"],
      "prereq" : ["Smite evil class feature", " BAB +5"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Additional Traits",
      "Benefit" : " You gain two character traits of your choice. These traits must be chosen from different lists, and cannot be chosen fromlists from which you have already selected a character trait. You mustmeet any additional qualifications for the character traits you choose— this feat cannot enable you to select a dwarf character trait if youare an elf, for example.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Adept Channel",
      "Benefit" : "Some orc adepts enjoy a greater connection to their gods, and can channel their faith through their unholy symbols. You gain the ability to channel energy as a cleric.Prerequisites: Ability to cast divine spells, summon familiar class ability, caster level 4th, Charisma 13.  You gain the channel energy class feature, as a cleric, usable 2 times per day. This ability otherwise functions like the cleric's channel energy ability, except that your effective cleric level is equal to your divine spellcasting class level –3. Unlike a cleric, however, the number of times per day you may channel energy is not affected by your Charisma modifier.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Section 15: Copyright Notice - Pathfinder Companion: Orcs of GolarionPathfinder Companion: Orcs of Golarion. Copyright 2010, Paizo Publishing, LLC; Authors: Steve Kenson, Rob McCreary, Richard Pett, Sean K Reynolds, and JD Wiker.",
      "catagory" : ["General"],
      "prereq" : ["Ability to cast divine spells", " summon familiar class ability", " caster level 4th", " Cha 13"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Advanced Ranger Trap",
      "Benefit" : " Add +1 to the Difficulty Class on all Perception and Disable Device skill checks to find or disable the traps you make with your trap class feature. Add a +1 to the Difficulty Class on all saving throws against the effects of the trap you make with your trap class feature.",
      "catagory" : ["General"],
      "prereq" : ["Trap class feature", " ranger 5"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Alertness",
      "Benefit" : "",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Alignment Channel",
      "Benefit" : " Instead of its normal effect, you can choose to have your ability to channel energy heal or harm outsiders of the chosen alignment subtype. You must make this choice each time you channel energy. If you choose to heal or harm creatures of the chosen alignment subtype, your channel energy has no effect on other creatures. The amount of damage healed or dealt and the DC to halve the damage is otherwise unchanged.",
      "catagory" : ["General"],
      "prereq" : ["Channel energy class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Altitude Affinity",
      "Benefit" : " You are automatically acclimated at high altitudes. In addition, you gain a +2 competence bonus on all Survival checks made at altitudes of 5,000 feet or higher.Section 15: Copyright Notice - Pathfinder Campaign Setting: The Inner Sea World GuidePathfinder Campaign Setting: The Inner Sea World Guide. © 2011, Paizo Publishing, LLC; Authors: Keith Baker, Wolfgang Baur, Clinton J. Boomer, Jason Bulmahn, Joshua J. Frost, Ed Greenwood, Stephen S. Greer, Jeff Grubb, James Jacobs, Michael Kortes, Tito Leati, Mike McArtor, Rob McCreary, Erik Mona, Jason Eric Nelson, Jeff Quick, Sean K Reynolds, F. Wesley Schneider, Leandra Christine Schneider, David Schwartz, Amber E. Scott, Stan!, Owen K.C. Stephens, Todd Stewart, James L. Sutter, Greg A. Vaughan, Jeremy Walker, and JD Wiker.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ancestral Scorn",
      "Benefit" : " Whenever you successfully demoralize an outsider of the evil subtype with an Intimidate check, it becomes sickened for 1 round in addition to being affected by the normal effects of being demoralized. If you beat the DC by 5 or more, the creature is nauseated for 1 round instead.",
      "catagory" : ["General"],
      "prereq" : ["Intimidate 5 ranks", " tiefling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Andoren Falconry",
      "Benefit" : " You improve your affinity with birds of prey, such as eagles, falcons, hawks, and owls. You gain a +2 bonus on Handle Animal checks made to train or control birds of prey. In addition, if you have a bird of prey as an animal companion, your animal companion gains one of the following bonuses chosen at the time this animal companion is gained: a +1 dodge bonus to AC, a +1 morale bonus on all attack rolls, or a +2 morale bonus on all Will saves.Section 15: Copyright Notice - Pathfinder Campaign Setting: The Inner Sea World GuidePathfinder Campaign Setting: The Inner Sea World Guide. © 2011, Paizo Publishing, LLC; Authors: Keith Baker, Wolfgang Baur, Clinton J. Boomer, Jason Bulmahn, Joshua J. Frost, Ed Greenwood, Stephen S. Greer, Jeff Grubb, James Jacobs, Michael Kortes, Tito Leati, Mike McArtor, Rob McCreary, Erik Mona, Jason Eric Nelson, Jeff Quick, Sean K Reynolds, F. Wesley Schneider, Leandra Christine Schneider, David Schwartz, Amber E. Scott, Stan!, Owen K.C. Stephens, Todd Stewart, James L. Sutter, Greg A. Vaughan, Jeremy Walker, and JD Wiker.",
      "catagory" : ["General"],
      "prereq" : ["Cha 13", " Animal Affinity", " animal companion class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Animal Affinity",
      "Benefit" : " You get a +2 bonus on all Handle Animal and Ride skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ankle Biter",
      "Benefit" : " If you are the target of a combat maneuver you can, as an immediate action, attempt to bite your opponent in addition to any attacks of opportunity or other consequences your opponent might incur from attacking you. This bonus natural attack does not provoke an attack of opportunity itself and deals base damage appropriate for a creature of your current size (usually 1d4 for Small creatures). If grappled or pinned, you can continue to make this additional bite attack each round as swift action on your turn. You gain a bonus on any attempt to break the grapple equal to the damage you dealt with your bite that round.",
      "catagory" : ["Combat", " Goblin"],
      "prereq" : ["Goblin", " Escape Artist 1 rank."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Antagonize",
      "Benefit" : " You can make Diplomacy and Intimidate checks to make creatures respond to you with hostility. No matter which skill you use, antagonizing a creature takes a standard action that does not provoke attacks of opportunity, and has a DC equal to 10 + the target’s Hit Dice + the target’s Wisdom modifier. You cannot make this check against a creature that does not understand you or has an Intelligence score of 3 or lower. Before you make these checks, you may make a Sense Motive check (DC 20) as a swift action to gain an insight bonus on these Diplomacy or Intimidate checks equal to your Charisma bonus until the end of your next turn. The benefits you gain for this check depend on the skill you use. This is a mind-affecting effect.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Arcane Blast",
      "Benefit" : " As a standard action, you can sacrifice a prepared spell or unused spell slot of 1st level or higher and transform it into a ray, targeting any foe within 30 feet as a ranged touch attack. This attack deals 2d6 points of damage plus an additional 1d6 points of damage for every level of the spell or spell slot you sacrificed. 0-level spells may not be sacrificed in this manner.This is a supernatural ability.",
      "catagory" : ["General"],
      "prereq" : ["Arcane spellcaster", " caster level 10th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Arcane Insight",
      "Benefit" : " Whenever you use the Arcane Shield feat, you also gain a +1 insight bonus to your Armor Class for 1 round.",
      "catagory" : ["General"],
      "prereq" : ["Arcane Shield."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Arcane Jinxer",
      "Benefit" : " When you attempt to jinx a creature, you can expend one of your prepared arcane spells or available arcane spell slots to give your target a penalty on its jinx save equal to the level of the expended spell or spell slot. This does not alter the effect of the jinx, only the saving throw to resist the jinx.",
      "catagory" : ["General"],
      "prereq" : ["Arcane spellcaster", " Halfling Jinx trait."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Arcane School Spirit",
      "Benefit" : "",
      "catagory" : ["General"],
      "prereq" : ["Bluff 1 rank", " arcane school class feature", " gnome"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Arcane Shield",
      "Benefit" : " As a immediate action, you can sacrifice a prepared spell or unused spell slot of 1st level or higher and gain a deflection bonus to AC equal to the level of the spell or spell slot you sacrificed for 1 round. 0-level spells may not be sacrificed in this manner.",
      "catagory" : ["General"],
      "prereq" : ["Arcane spellcaster", " caster level 10th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Arcane Talent",
      "Benefit" : " Choose a 0-level spell from the sorcerer/wizard spell list. You can cast this spell three times per day as a spell-like ability. The caster level is equal to your character level. The save DC is 10 + your Charisma modifier.",
      "catagory" : ["General"],
      "prereq" : ["Cha 10; elf", " half-elf", " or gnome"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Arcane Vendetta",
      "Benefit" : " You deal +2 damage with weapon attacks made against any target you have witnessed casting an arcane spell (not using a spell-like ability) in the last 5 rounds. You must have successfully identified the spell with a Spellcraft check to know without a doubt that the spell is arcane.Paizo Peripheral",
      "catagory" : ["General", " Local"],
      "prereq" : ["Spellcraft 1 rank"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Area Jinx",
      "Benefit" : " When you use your jinx, you create an instantaneous invisible burst with a maximum radius of 10 feet anywhere within the normal range of your jinx, affecting multiple targets. Any creature within this burst, regardless of whether or not you can see it, must make a saving throw to resist your jinx. If you use your jinx again, all of your current jinxes immediately end.",
      "catagory" : ["General"],
      "prereq" : ["Widen Spell", " Halfling Jinx trait."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Aspect of the Beast",
      "Benefit" : " Your bestial nature manifests itself in one of the following ways. You choose the manifestation when you choose the feat, and then you cannot change it.",
      "catagory" : ["General"],
      "prereq" : ["Wild shape class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Athletic",
      "Benefit" : " You get a +2 bonus on Climb and Swim skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Augment Summoning",
      "Benefit" : " Each creature you conjure with any summon spell gains a +4 enhancement bonus to Strength and Constitution for the duration of the spell that summoned it.",
      "catagory" : ["General"],
      "prereq" : ["Spell Focus (conjuration)"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Aversion Tolerance",
      "Benefit" : " You gain a +2 bonus on saves made to resist aversions to objects, sounds, and materials appropriate to your vampire type (such as garlic, holy symbols, and mirrors for a moroi). When confronted with such things, you may immediately make a saving throw instead of after 1 round.",
      "catagory" : ["General"],
      "prereq" : ["Vampire"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Babble-Peddler",
      "Benefit" : "",
      "catagory" : ["General"],
      "prereq" : ["Appraise 5 ranks", " Bluff 5 ranks", " gnome"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Battle Singer",
      "Benefit" : " When using bardic performance to inspire courage in allies, you can choose to sing in Goblin—allies who do not speak Goblin gain no benefits from this performance. Allied goblins who hear your battle songs become more energetic and brave, and thus add the bonus granted by your inspire courage ability to all saving throws as a morale bonus.",
      "catagory" : ["Goblin"],
      "prereq" : ["Goblin", " bardic performance class feature."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Bestow Hope",
      "Benefit" : " When you heal a creature by channeling positive energy, you also relieve its fear. If a creature you heal is shaken, that condition ends. If the creature is frightened, it becomes shaken instead. If the creature is panicked, it becomes frightened instead.",
      "catagory" : ["General"],
      "prereq" : ["Channel positive energy class feature", " Improved Channel"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Betrayer",
      "Benefit" : "You can charm people into lowering their defenses, allowing you to ambush them more effectively.Prerequisites: Quick Draw, Persuasive, base attack bonus +3. When you succeed at a Diplomacy check to change a creature’s attitude, you can draw a weapon and make a single melee attack against that creature as an immediate action. If you changed your target’s attitude to friendly or better, your target is considered flat-footed against this attack. If the target survives, it takes a –2 penalty on its initiative check for this combat. Once you attack a creature, its attitude becomes hostile.",
      "catagory" : ["General"],
      "prereq" : ["Persuasive", " Quick Draw", " BAB +3"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Bewildering Koan",
      "Benefit" : " As a swift action, spend 1 point from your ki pool and make a Bluff check by asking a creature one of the impossible questions you ponder when meditating.If the creature fails its check*, you choose whether it loses its next action or you gain a +2 bonus on all damage rolls you make against that creature for 1 round.",
      "catagory" : ["General"],
      "prereq" : ["Bluff 1 rank", " ki pool class feature", " gnome"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Big Game Hunter",
      "Benefit" : " You gain a +1 bonus on attack rolls and a +2 bonus on weapon damage rolls against Large or larger creatures.Section 15: Copyright NoticeRise of the Runelords Player’s Guide. Copyright 2007 Paizo Publishing LLC. Author F. Wesley Schneider.",
      "catagory" : ["General"],
      "prereq" : ["+1 bonus on attack rolls and +2 bonus on weapon damage rolls against Large or larger creatures."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Black Marketeer",
      "Benefit" : " By utilizing your black market connections, youacquire a resource pool worth 100 gp. This functions like the resourcepool gained by the Profits of Kalistrade feat except it can only be used onillegal or illicit items or services (note that something may beillegal or illicit in one area but perfectly acceptable in another) andis centered on Osirion rather than Druma. Typical illegal or illicititems are drugs, poisons, evil magic items, slaves, or dead bodies,though intangibles such as secret information may also qualify (and forthese items, a secret of equal value—at the GM’s discretion—must becontributed to the pool).Section 15: Copyright Notice - Pathfinder Companion: Osirion, Land of PharaohsPathfinder Companion: Osirion, Land of Pharaohs, Copyright 2008, Paizo Publishing, LLC; Authors: Jason Nelson and Todd Stewart.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Blinding Light",
      "Benefit" : " Whenever an enemy unsuccessfully attempts to counter or dispel your daylight spell-like ability, it must succeed at a Fortitude saving throw (DC 10 + 1/2 your character level + your Charisma modifier) or become blinded for 1 round as its mind is overwhelmed with celestial light. This is a supernatural mind-affecting effect.",
      "catagory" : ["General", " Aasimar"],
      "prereq" : ["Inner Light", " aasimar", " daylight spell-like ability"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Bloated Initiate",
      "Benefit" : " You learn the basics of the ancient art of hemotheurgy.Pick one school of magic in which you possess the Spell Focus feat—you cast spells from this school of magic at +1 caster level. This bonus stacks with the bonus from Spell Focus.Unfortunately, the side effects cause you to be constantly under the effects of a medium load—your maximum bonus to AC from Dexterity is +3, you gain an armor check penalty of –3, and your speed decreases as appropriate (generally from 30 feet to 20 feet for a Medium creature).Section 15: Copyright  Notice - Pathfinder Chronicles: City of StrangersPathfinder Chronicles: City of Strangers. Copyright 2010, Paizo Publishing, LLC; Author: James L. Sutter.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Blood of Heroes",
      "Benefit" : " Whenever you gain a level, you gain 2 hero points instead of 1.",
      "catagory" : ["General"],
      "prereq" : ["Heroic Fortune"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Blood Ties",
      "Benefit" : " When attempting a Diplomacy check to influence a creature with a plausible connection to your sorcerous bloodline, you may instead make a Bluff check. For example, a gnome sorcerer with the draconic bloodline may use this feat against dragons and their kin, but no other creatures.Paizo Peripheral ",
      "catagory" : ["General"],
      "prereq" : ["Bluff 1 rank", " bloodline class feature", " gnome"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Blood Vengeance",
      "Benefit" : " Whenever one of your worthy allies is brought to negative hit points or killed, you may enter a state similar to but less powerful than a barbarian’s rage as a free action on your turn. If you have the rage class feature and are already raging, your morale bonuses to Strength and Constitution increase by +2 for the duration of your rage. If you do not have the rage class feature, or you have no more rage rounds left, this weaker rage gives you all the benefits and penalties of a rage, except your morale bonus to Strength and Constitution is only +2, and this state lasts for 4 rounds. As with a barbarian’s rage, when this weaker rage ends, you are fatigued; if another ally falls before this duration ends, the weaker rage lasts for 4 more rounds after that. This feat does not allow you to enter a rage if you are fatigued. You may only use this feat if the fallen ally had at least as many Hit Dice as you.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Section 15: Copyright Notice - Pathfinder Companion: Orcs of GolarionPathfinder Companion: Orcs of Golarion. Copyright 2010, Paizo Publishing, LLC; Authors: Steve Kenson, Rob McCreary, Richard Pett, Sean K Reynolds, and JD Wiker.",
      "catagory" : ["General"],
      "prereq" : ["Half-orc or orc", " non-lawful"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Bloodletting",
      "Benefit" : " Whenever you threaten a creature with a critical hit with a piercing or slashing weapon (regardless of whether you confirm the critical hit or not), you cause that creature to bleed, making it take 1 point of bleed damage at the beginning of each round thereafter.",
      "catagory" : ["General"],
      "prereq" : ["Whenever you threaten a creature with a critical hit inflict bleed damage in subsequent rounds"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Bolster Jinx",
      "Benefit" : " A jinxed target’s penalty on Fortitude, Reflex, or Will saves increases by 2 if you have the Great Fortitude, Lightning Reflexes, or Iron Will feat, respectively. If you have more than one of these feats, the additional penalties apply to all of the corresponding saves.",
      "catagory" : ["General"],
      "prereq" : ["Great Fortitude", " Iron Will", " or Lightning Reflexes; Halfling Jinx trait."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Bolstered Resilience",
      "Benefit" : "You can dramatically increase your damage reduction in exchange for its temporary loss.Prerequisite: Damage reduction. As an immediate action, you can double your DR against a single attack, to a maximum of DR 20. The type of the DR remains unchanged. If the attack you are guarding against is not successful, the increased damage reduction persists until you are hit with an attack or until the start of your next turn, whichever happens first. At the start of your next turn, you become fatigued. You cannot use this feat while you are fatigued.",
      "catagory" : ["General"],
      "prereq" : ["Damage reduction"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Boon Companion",
      "Benefit" : " The abilities of your animal companion or familiar are calculated as though your class were 4 levels higher, to a maximum effective druid level equal to your character level. If you have more than one animal companion or familiar, choose one to receive this benefit. If you lose or dismiss an animal companion or familiar that has received this benefit, you may apply this feat to the replacement creature.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Branded for Retribution",
      "Benefit" : "You brand an enemy with your bane weapon, making it more vulnerable to your allies’ attacks.Prerequisite: Bane class feature. As a standard action, expend 3 rounds of your bane class feature and make a melee touch attack with the weapon affected by bane. If you hit, your target takes no damage but is branded until the start of your next turn. While this brand remains, your allies’ weapons are considered to have the bane ability with which your weapon is imbued when they attack the branded creature.",
      "catagory" : ["General"],
      "prereq" : ["Bane class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Breadth of Experience",
      "Benefit" : " You get a +2 bonus on all Knowledge and Profession skill checks, and can make checks with those skills untrained.",
      "catagory" : ["General"],
      "prereq" : ["Dwarf", " elf", " or gnome; 100+ years old"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Burn! Burn! Burn!",
      "Benefit" : " You deal an extra 1d4 points of fire damage when you attack with fire from a non-magical or alchemical source (such as with torches or alchemical fire) and gain a +4 competence bonus on Reflex saving throws made to avoid catching on fire or putting yourself out when on fire. Additional damage caused by this feat does not apply to magical attacks or to splash damage.",
      "catagory" : ["Goblin"],
      "prereq" : ["Goblin", " Disable Device 1 rank."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Butterfly's Sting",
      "Benefit" : " When you confirm a critical hit against a creature, you can choose to forgo the effect of the critical hit and grant a critical hit to the next ally who hits the creature with a melee attack before the start of your next turn. Your attack only deals normal damage, and the next ally automatically confirms the hit as a critical.",
      "catagory" : ["General", " Critical"],
      "prereq" : ["Combat Expertise"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Careful Speaker",
      "Benefit" : " You gain a +2 bonus on all Bluff checks made to fool someone or pass secret messages (but not to feint in combat), and a +2 bonus on all Will saves against attempts to scry upon you or read your mind.Section 15: Copyright Notice - Pathfinder Campaign Setting: The Inner Sea World GuidePathfinder Campaign Setting: The Inner Sea World Guide. © 2011, Paizo Publishing, LLC; Authors: Keith Baker, Wolfgang Baur, Clinton J. Boomer, Jason Bulmahn, Joshua J. Frost, Ed Greenwood, Stephen S. Greer, Jeff Grubb, James Jacobs, Michael Kortes, Tito Leati, Mike McArtor, Rob McCreary, Erik Mona, Jason Eric Nelson, Jeff Quick, Sean K Reynolds, F. Wesley Schneider, Leandra Christine Schneider, David Schwartz, Amber E. Scott, Stan!, Owen K.C. Stephens, Todd Stewart, James L. Sutter, Greg A. Vaughan, Jeremy Walker, and JD Wiker.",
      "catagory" : ["General"],
      "prereq" : ["Wisdom 13"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Cartwheel Dodge",
      "Benefit" : "You use your knack for avoiding damage to reposition yourself in combat.Prerequisites: Evasion class feature, improved evasion class feature, acrobatics 12 ranks. When you successfully use improved evasion to avoid taking damage, you can move up to half your speed as an immediate action. This movement provokes attacks of opportunity as normal.",
      "catagory" : ["General"],
      "prereq" : ["Improved evasion class feature", " Acrobatics 12 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Caustic Slur",
      "Benefit" : "",
      "catagory" : ["General"],
      "prereq" : ["Bluff 1 rank", " favored enemy class feature", " gnome"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Channel, Improved",
      "Benefit" : " Add 2 to the DC of saving throws made to resist the effects of your channel energy ability. ",
      "catagory" : ["General"],
      "prereq" : ["Channel energy class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Channeled Revival",
      "Benefit" : "You can expend a large portion of your channeling power to reverse death itself.Prerequisite: Channel energy 6d6 (positive energy). As a full-round action that provokes attacks of opportunity, you can expend three uses of your channel energy class feature to restore a dead creature to life as if you had cast the breath of life spell (Core Rulebook 251).",
      "catagory" : ["General"],
      "prereq" : ["Channel positive energy 6d6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Channeled Shield Wall",
      "Benefit" : " As a swift action, you can spend a use of your channel energy to grant yourself a +2 deflection bonus while using a shield. This bonus lasts 1 minute per cleric level or effective cleric level. While you benefit from this bonus, allies with shields also gain a +2 deflection bonus while they are adjacent to you.",
      "catagory" : ["General"],
      "prereq" : ["Channel energy 3d6", " proficiency with a shield"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Channeling Scourge",
      "Benefit" : " When you use channel energy to deal damage, your inquisitor levels count as cleric levels for determining the number of damage dice and the saving throw DC.",
      "catagory" : ["General"],
      "prereq" : ["Inquisitor channel energy class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Childlike",
      "Benefit" : " You can take 10 on Bluff checks to convince others you are telling the truth, so long as your story makes you appear innocent. You gain a +2 bonus on Disguise skill checks to pose as a human child, and ignore the check penalties for disguising yourself as a different race and age category while doing so.",
      "catagory" : ["General"],
      "prereq" : ["Cha 13", " halfling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Combat Casting",
      "Benefit" : " You get a +4 bonus on concentration checks made to cast a spell or use a spell-like ability when casting on the defensive or while grappled.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Combat Distraction",
      "Benefit" : " As a full-round action, you can choose to do something that seems to serve no useful purpose. Example actions could include laughing at another creature’s misfortune, rooting in your pockets for a snack, bending over to pick up what looks like a weird bug, or trying to fly into the air by flapping your arms like a sea gull. Although you’re acting like a lunatic, your unpredictable actions are distracting. Any creature other than a goblin within 5 feet of you takes a –2 penalty on Perception checks and concentration checks for as long as you continue to be a distraction and remain in range. This penalty stacks with other goblins performing combat distractions, as long as you’re both adjacent to the distracted target.",
      "catagory" : ["Goblin"],
      "prereq" : ["Goblin", " Acrobatics 1 rank", " Escape Artist 1 rank."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Command Undead",
      "Benefit" : " As a standard action, you can use one of your uses of channel negative energy to enslave undead within 30 feet. Undead receive a Will save to negate the effect. The DC for this Will save is equal to 10 + 1/2 your cleric level + your Charisma modifier. Undead that fail their saves fall under your control, obeying your commands to the best of their ability, as if under the effects of control undead. Intelligent undead receive a new saving throw each day to resist your command. You can control any number of undead, so long as their total Hit Dice do not exceed your cleric level. If you use channel energy in this way, it has no other effect (it does not heal or harm nearby creatures). If an undead creature is under the control of another creature, you must make an opposed Charisma check whenever your orders conflict.",
      "catagory" : ["General"],
      "prereq" : ["Channel negative energy class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Companion Figurine",
      "Benefit" : " You may select the creature summoned by your figurine of wondrous power as an animal companion or familiar, or as appropriate. The figurine has the standard abilities of a familiar or animal companion of its type, plus additional abilities related to its figurine type (see below). The main advantage of this is that if your familiar or companion is killed in creature form, it merely reverts to statue form and can be used again later.",
      "catagory" : ["General"],
      "prereq" : ["Handle Animal 1 rank", " own a figurine of wondrous power."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Conceal Scent",
      "Benefit" : " Creatures cannot use the scent ability to track you(though they can still track you through standard means such asfootprints). Creatures with scent can detect your presence by smell athalf the normal distance, but cannot pinpoint your location with scent.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Contingent Channeling",
      "Benefit" : "You can imbue others with your healing energy so that they can use it at the moment of greatest need.Prerequisites: True healer class feature, Selective Channeling. You can use a standard action to touch an ally and expend one of your daily uses of channel energy to create a repository of positive energy within that ally. This repository contains the same number and type of dice as normal for your channel energy feature, and it lasts for 1 minute. An ally who has such a repository can use an immediate action to roll the repository’s dice and regain a number of hit points equal to the result. If an ally who has such a repository is reduced to negative hit points, the repository triggers, allowing the ally to heal without using an action.Section 15: Copyright Notice - Pathfinder Roleplaying Game: Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["General"],
      "prereq" : ["True healer class feature", " Selective Channeling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Conviction",
      "Benefit" : " When you present to a vampire a holy symbol or other object it is averse to, the DC for the creature to overcome such an aversion increases by 2.",
      "catagory" : ["General"],
      "prereq" : ["Cha 13"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Cooperative Crafting",
      "Benefit" : " You can assist another character in crafting mundane and magical items. You must both possess the relevant Craft skill or item creation feat, but either one of you can fulfill any other prerequisites for crafting the item. You provide a +2 circumstance bonus on any Craft or Spellcraft checks related to making an item, and your assistance doubles the gp value of items that can be crafted each day.",
      "catagory" : ["General"],
      "prereq" : ["1 rank in any Craft skill", " any item creation feat"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Corsair",
      "Benefit" : " You get a +2 bonus on initiative checks made whileon a ship and deal an additional +1 damage when using light orone-handed weapons on a ship.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Cosmopolitan",
      "Benefit" : "Living in large, exotic cities has put you in touch with many diverse civilizations, cultures, and races. You can speak and read two additional languages of your choice. In addition, choose two Intelligence-, Wisdom-, or Charisma-based skills. Those skills always count as class skills for you.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Counterspell, Improved",
      "Benefit" : " When counterspelling, you may use a spell of the same school that is one or more spell levels higher than the target spell.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Create Reliquary Arms and Shields",
      "Benefit" : " When you craft a magic weapon, magic armor, or magic shield, you may add one casting of consecrate or desecrate as part of the item crafting process. This increases the item’s price by 250 gp.",
      "catagory" : ["General"],
      "prereq" : ["Craft Magic Arms and Armor", " ability to cast consecrate or desecrate"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Create Sanguine Elixir",
      "Benefit" : " Once per day, when you clear your mind to regain spell slots, you can create a sanguine elixir. When you do, pick one of your bloodline powers. You transfer that power into a small potion that any creature can drink to temporarily gain the benefit of your bloodline power. Creating a sanguine elixir takes 1 hour, and requires special oils and distillates worth 100 gp, and when you make the sanguine elixir, you lose access to the bloodline power until the next time you clear your mind to regain spell slots. When a creature drinks a sanguine elixir, it can activate the bloodline power anytime before the end of its next turn, as if it had access to that bloodline power. A creature that drinks the elixir cannot gain the benefit if its character level does not equal or exceed the minimum level of the bloodline power. Any level-dependent effects use the character level of the creature that drinks the sanguine elixir, or your sorcerer level, whichever is lower. Drinking a sanguine elixir is just like drinking a potion. A sanguine elixir is treated as a magic item with your caster level.",
      "catagory" : ["General"],
      "prereq" : ["Cha 15", " Brew Potion", " Craft (alchemy) 12 ranks", " sorcerer 3"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Crusader’s Flurry",
      "Benefit" : " You can use your deity’s favored weapon as if it were a monk weapon.Section 15: Copyright Notice - Pathfinder Roleplaying Game: Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["General"],
      "prereq" : ["Channel energy and flurry of blows class feature", " Weapon Focus with deity’s favored weapon"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Cypher Magic",
      "Benefit" : " You cast spells from scrolls at +1 caster level higher than the scroll’s caster level. This benefit extends to scrolls that you have created. In addition, you gain a +2 bonus on caster level checks made to activate a scroll with a higher caster level than your own.Paizo Peripheral",
      "catagory" : ["General"],
      "prereq" : ["Int 15", " Scribe Scroll."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Cypher Script",
      "Benefit" : " Any spell you scribe in your spellbook costs half as much as normal and takes up only half the room it normally would (round all fractions up). It only takes you 10 minutes per spell level to scribe a spell into your spellbook (5 minutes for cantrips).Section 15: Copyright Notice - Pathfinder Campaign Setting: The Inner Sea World GuidePathfinder Campaign Setting: The Inner Sea World Guide. © 2011, Paizo Publishing, LLC; Authors: Keith Baker, Wolfgang Baur, Clinton J. Boomer, Jason Bulmahn, Joshua J. Frost, Ed Greenwood, Stephen S. Greer, Jeff Grubb, James Jacobs, Michael Kortes, Tito Leati, Mike McArtor, Rob McCreary, Erik Mona, Jason Eric Nelson, Jeff Quick, Sean K Reynolds, F. Wesley Schneider, Leandra Christine Schneider, David Schwartz, Amber E. Scott, Stan!, Owen K.C. Stephens, Todd Stewart, James L. Sutter, Greg A. Vaughan, Jeremy Walker, and JD Wiker.",
      "catagory" : ["General"],
      "prereq" : ["Knowledge (arcana) 1 rank", " Linguistics 1 rank", " Spellcraft 1 rank", " spellbook class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dark Adept",
      "Benefit" : " You gain three new spell-like abilities, each usable once per day. These spell-like abilities are detect magic, feather fall, and levitate. Your caster level for these spell-like abilities equals your total character level.",
      "catagory" : ["General"],
      "prereq" : ["Drow", " character level 3rd"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Deadly Dealer",
      "Benefit" : " You can throw a card as though it were a dart, with the same damage, range, and other features. You must use the Arcane Strike feat when throwing a card in this way, or else the card lacks the magical force and precision to deal lethal damage. A card is destroyed when thrown in this way.",
      "catagory" : ["General"],
      "prereq" : ["Throw cards (such as harrow cards) as if they were darts"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Deceitful",
      "Benefit" : " You get a +2 bonus on all Bluff and Disguise skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Deceptive Exchange",
      "Benefit" : " If you successfully feint an opponent, you can trick that opponent into accepting a one-handed object you are holding instead of denying that opponent its Dexterity bonus to AC against your next attack. The opponent must have appendages capable of holding the object you offer, and it must have one such appendage free to take the object.",
      "catagory" : ["General"],
      "prereq" : ["Improved Feint"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Deep Drinker",
      "Benefit" : " When you gain temporary ki from drunken ki, you gain 2 temporary ki rather than just 1.",
      "catagory" : ["General"],
      "prereq" : ["Con 13", " monk 11", " drunken ki class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Deepsight",
      "Benefit" : " Your darkvision has a range of 120 feet.",
      "catagory" : ["General"],
      "prereq" : ["Darkvision 60 feet."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Defending Eidolon",
      "Benefit" : " Whenever you are adjacent to your eidolon, you can choose for the eidolon to take a –1 penalty on melee attack rolls and combat maneuver checks to gain a +1 dodge bonus to your Armor Class. When your eidolon’s base attack bonus reaches +5, and for every +5 thereafter, the penalty increases by –1 and the dodge bonus increases by +1. You must choose to use this feat when your eidolon is making an attack or full-attack action with melee or natural weapons, and its effect lasts until your eidolon’s next turn, or until you are no longer adjacent to the eidolon, whichever occurs first.",
      "catagory" : ["General"],
      "prereq" : ["Shield ally class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Deft Hands",
      "Benefit" : " You get a +2 bonus on Disable Device and Sleight of Hand skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Demonic Obedience",
      "Benefit" : " Each demon lord requires a different obedience, but all obediences take only an hour to perform. Once the obedience has been performed, you gain the benefit of a resistance to some element or attack associated with your demon lord, as indicated in the “Obedience” entry for the demon lord.",
      "catagory" : ["General"],
      "prereq" : ["3 ranks in Knowledge (planes)", " must worship a demon lord"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Deny Death",
      "Benefit" : " As long as you have 1 ki point in your ki pool, when you fail your Constitution check to stabilize, you do not lose 1 hit point. If you succeed at the check, you can spend 1 ki point to heal 1d6 hit points. If you roll a natural 20 on the check to stabilize, you can spend 1 ki point to heal 2d6 hit points of damage instead.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. ",
      "catagory" : ["General"],
      "prereq" : ["Ki pool", " Endurance"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Desert Dweller",
      "Benefit" : " You treat extreme heat conditions as severe heat, and severe heat as very hot conditions. You are not impacted at all by very hot conditions. In addition, you gain a +4 bonus on all Constitution checks made to resist the effects of starvation or thirst.Paizo Peripheral",
      "catagory" : ["General"],
      "prereq" : ["Con 13", " Survival 1 rank"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Destroy Identity",
      "Benefit" : " Whenever you score a critical hit against an opponent, the target is so maimed that it takes 2 points of Charisma damage and becomes staggered for 1 round.",
      "catagory" : ["General"],
      "prereq" : ["Critical Focus", " BAB +11"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Destructive Dispel",
      "Benefit" : "When you dispel an enemy’s magical defenses, those defenses crash down with debilitating effects.Prerequisites: Ability to cast dispel magic or greater dispel magic, caster level 11th. When you successfully make a targeted dispel check against an opponent, that opponent must succeed at a Fortitude save (DC equals the DC of the spell used to dispel) or be stunned until the start of your next turn. If the save succeeds, the opponent is instead sickened until the start of your next turn.",
      "catagory" : ["General"],
      "prereq" : ["Ability to cast dispel magic or greater dispel magic", " caster level 11th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Detect Expertise",
      "Benefit" : " When you use any of the spells listed in this feat’s prerequisites to detect a creature’s alignment or its magic, you have a chance of detecting what spellcasting expertise it has. After you observe a creature with the detect spell for 3 rounds, it must make a Will save (DC 10 + 1/2 your caster level + your Intelligence modifier). If it fails the saving throw, you learn what bloodlines, domains, hexes, schools, or mysteries (if any) the creature possesses. If the creature makes its save, it is immune to the effects of this feat for 24 hours.",
      "catagory" : ["General"],
      "prereq" : ["Int 13; ability to cast detect chaos", " detect evil", " detect good", " detect law", " or detect magic"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Die for Your Master",
      "Benefit" : " If your tumor familiar is attached, and you would be reduced to 0 or fewer hit points by damage in combat (from a weapon or other blow, not a spell or special ability), the familiar throws itself in the way of the attack as an immediate action. If it makes a Reflex saving throw (DC = damage dealt), it takes all the damage from the attack; if it fails, it takes half damage and you take half damage.",
      "catagory" : ["General"],
      "prereq" : ["Tumor familiar alchemist discovery"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dilettante",
      "Benefit" : " You gain a +2 bonus on Knowledge checks if you have1–5 ranks in that skill. This bonus does not stack with Skill Focus.You can make untrained Knowledge checks with DCs up to 15.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dimensional Agility",
      "Benefit" : " After using abundant step or casting dimension door, you can take any actions you still have remaining on your turn. You also gain a +4 bonus on Concentration checks when casting teleportation spells.Section 15: Copyright Notice - Pathfinder Roleplaying Game: Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["General"],
      "prereq" : ["Abundant step class feature or ability to cast dimension door"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dimensional Assault",
      "Benefit" : " As a full-round action, you use abundant step or cast dimension door as a special charge. Doing so allows you to teleport up to double your current speed (up to the maximum distance allowed by the spell or ability) and to make the attack normally allowed on a charge.",
      "catagory" : ["General"],
      "prereq" : ["Dimensional Agility"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dimensional Dervish",
      "Benefit" : " You can take a full-attack action, activating abundant step or casting dimension door as a swift action. If you do, you can teleport up to twice your speed (up to the maximum distance allowed by the spell or ability), dividing this teleportation into increments you use before your first attack, between each attack, and after your last attack. You must teleport at least 5 feet each time you teleport.",
      "catagory" : ["General"],
      "prereq" : ["Dimensional Assault", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dimensional Maneuvers",
      "Benefit" : " While using the Dimensional Dervish feat, you gain a +4 bonus on combat maneuver checks to bull rush, disarm, reposition, or trip an opponent.",
      "catagory" : ["General"],
      "prereq" : ["Dimensional Dervish", " BAB +9"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dimensional Savant",
      "Benefit" : " While using the Dimensional Dervish feat, you provide flanking from all squares you attack from. Flanking starts from the moment you make an attack until the start of your next turn. You can effectively flank with yourself and with multiple allies when using this feat.",
      "catagory" : ["General"],
      "prereq" : ["Dimensional Dervish", " BAB +9"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Discordant Voice",
      "Benefit" : " Whenever you are using bardic performance to create a spell-like or supernatural effect, allies within 30 feet of you deal an extra 1d6 points of sonic damage with successful weapon attacks. This damage stacks with other energy damage a weapon might deal. Projectile weapons bestow this extra damage on their ammunition, but the extra damage is dealt only if the projectile hits a target within 30 feet of you.",
      "catagory" : ["General"],
      "prereq" : ["Bardic performance class feature", " Perform (oratory or sing) 10 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Disorienting Maneuver",
      "Benefit" : " If you successfully use Acrobatics to tumble through an opponent’s space, you gain a +2 circumstance bonus on attack rolls against that opponent until the start of your next turn. If you choose to make a trip attempt against that opponent, you gain a +4 circumstance bonus on your combat maneuver check. This bonus on trip also lasts until the start of your next turn.",
      "catagory" : ["General"],
      "prereq" : ["Dodge", " Acrobatics 5 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dispel Synergy",
      "Benefit" : " If you successfully dispel an ongoing magical effect on an opponent, that opponent takes a –2 penalty on saving throws against your spells until the end of your next turn.",
      "catagory" : ["General"],
      "prereq" : ["Spellcraft 5 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dispelling Fist",
      "Benefit" : " If you have dispel magic prepared or can cast it spontaneously, you can cast it as a swift action after hitting an opponent with an unarmed strike. Treat this as a targeted dispel against the opponent you hit.",
      "catagory" : ["General"],
      "prereq" : ["Improved Unarmed Strike", " ability to cast dispel magic", " BAB +11", " caster level 7th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Disposable Weapon",
      "Benefit" : " Whenever you use a melee or thrown weapon with the fragile weapon special quality to score a critical threat against an opponent, you can give your weapon the broken condition to automatically confirm the critical hit.",
      "catagory" : ["General"],
      "prereq" : ["Weapon Proficiency", " BAB +1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Disruptive Recall",
      "Benefit" : " When you use a melee attack to successfully disrupt an arcane spellcaster’s spell, you can immediately use your spell recall class feature to regain a magus spell you have already cast. This ability functions as if you had expended a number of points from your arcane pool equal to the level of the spell you disrupted, up to the maximum level spell you can cast.",
      "catagory" : ["General"],
      "prereq" : ["Spell recall class feature", " Spellcraft 5 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Distant Jinx",
      "Benefit" : " The range of your jinx increases by 30 feet.",
      "catagory" : ["General"],
      "prereq" : ["Halfling Jinx trait."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Divination Guide",
      "Benefit" : " Whenever you cast augury or divination, you receive further guidance by your deity’s agents. You gain a +1 sacred bonus on all saving throws for 10 minutes per your caster level in the class you used to cast the augury or divination spell.",
      "catagory" : ["General"],
      "prereq" : ["Ability to cast augury or divination", " caster level 3rd."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Divine Deception",
      "Benefit" : " You gain a +5 bonus on Use Magic Device checks to use divine spell-trigger or spell completion items or to emulate a divine class feature.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Section 15: Copyright Notice - Pathfinder Chronicles: Faction GuidePathfinder Chronicles: Faction Guide. Copyright 2010, Paizo Publishing, LLC; Authors: Joshua J. Frost, Jason Nelson, and Sean K Reynolds.",
      "catagory" : ["General"],
      "prereq" : ["Knowledge (religion) 5 ranks", " Use Magic Device 5 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Divine Interference",
      "Benefit" : " As an immediate action, when an enemy within 30 feet hits an ally with an attack, you can sacrifice a prepared divine spell or (if you are a spontaneous caster) an unused spell slot and make the enemy reroll the attack roll. The second attack roll takes a penalty equal to the level of the spell you sacrifice. You must sacrifice a spell of 1st-level or higher to use this ability. Whether or not the second attack is successful, you cannot use this effect on the same creature again for 1 day.",
      "catagory" : ["General"],
      "prereq" : ["Divine spellcaster", " caster level 10th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Diviner’s Delving",
      "Benefit" : " You gain a +2 bonus on caster level checks with divinations to overcome spell resistance or effects that impede divination (for example, nondetection). When using a divination spell that requires concentration, you gain information from the spell 1 round sooner than normal (so you gain information from the first 2 rounds with 1 round of concentration, and information from the third round in the second round of concentration).",
      "catagory" : ["General"],
      "prereq" : ["Spell Focus (divination)."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dragonbane Aura",
      "Benefit" : " When fighting dragons, your aura of courage expands to a 20-foot-radius emanation, and allies in the aura gain a morale bonus on saving throws against dragon breath equal to your aura of courage’s bonus against fear effects.",
      "catagory" : ["General"],
      "prereq" : ["Aura of courage class feature", " caster level 8th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dog Killer-Horse Hunter",
      "Benefit" : " You gain a +2 morale bonus on all attack and damage rolls made against dogs and horses (including dog-like and horse-like targets such a nightmares or worgs). Additionally, you gain a +2 bonus on rolls to confirm critical hits against these foes.",
      "catagory" : ["Goblin"],
      "prereq" : ["Goblin", " Handle Animal 1 rank."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Double Bane",
      "Benefit" : " You can apply your bane to a second weapon you are wielding. While your bane class feature is active, at the start of each of your turns as a free action, you choose whether to apply the ability to one weapon or the other, or both. For each round you apply your bane class feature to two weapons, you expend 2 rounds of that feature.",
      "catagory" : ["General"],
      "prereq" : ["Bane class feature", " Two-Weapon Fighting"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Draconic Defender",
      "Benefit" : "",
      "catagory" : ["General"],
      "prereq" : ["Con 17", " Toughness"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Draconic Discipline",
      "Benefit" : "",
      "catagory" : ["General"],
      "prereq" : ["Wis 17", " base Will +10", " any lawful alignment", " dragon type"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Eagle Eyes",
      "Benefit" : " You ignore up to –5 in penalties due to distance on visual Perception checks, allowing you to see accurately at much greater distances than most.",
      "catagory" : ["General"],
      "prereq" : ["Wis 13", " keen senses racial trait."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Eclectic",
      "Benefit" : "",
      "catagory" : ["General"],
      "prereq" : ["Human"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Effortless Trickery",
      "Benefit" : " You can maintain concentration on one spell of the illusion school as a swift action. This has no effect on spells of other schools or on illusion spells with durations that don’t depend on your active concentration. While you may only maintain one spell as a swift action, you may take your move and standard actions to maintain other spells normally, if you wish.",
      "catagory" : ["General"],
      "prereq" : ["Gnome"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Eldritch Heritage",
      "Benefit" : " Select one sorcerer bloodline. You must have Skill focus in the class skill that bloodline grants to a sorcerer at 1st level (for example, Heal for the celestial bloodline). This bloodline cannot be a bloodline you already have. You gain the first-level bloodline power for the selected bloodline. For purposes of using that power, treat your sorcerer level as equal to your character level – 2, even if you have levels in sorcerer. You do not gain any of the other bloodline abilities.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. ",
      "catagory" : ["General"],
      "prereq" : ["Cha 13", " Skill Focus in bloodline skill", " character level 3rd"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Eldritch Heritage, Improved",
      "Benefit" : " You gain either the 3rd-level or the 9th-level power (your choice) of the bloodline you selected with the Eldritch Heritage feat. For purposes of using that power, treat your sorcerer level as equal to your character level – 2, even if you have levels in sorcerer. You do not gain any of the other bloodline abilities.",
      "catagory" : ["General"],
      "prereq" : ["Cha 15", " Eldritch Heritage", " character level 11th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Eldritch Heritage, Greater",
      "Benefit" : " You gain an additional power from the bloodline you selected with the Eldritch Heritage feat. You gain a 15th-level (or lower) sorcerer bloodline power that you do not already have. For purposes of using that power, treat your character level as your sorcerer level for all your sorcerer bloodline powers granted by this feat, Eldritch Heritage, and Improved Eldritch Heritage.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. ",
      "catagory" : ["General"],
      "prereq" : ["Cha 17", " Eldritch Heritage", " Improved Eldritch Heritage", " character level 17th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Elemental Channel",
      "Benefit" : " Instead of its normal effect, you can choose to have your ability to channel energy heal or harm outsiders of your chosen elemental subtype. You must make this choice each time you channel energy. If you choose to heal or harm creatures of your elemental subtype, your channel energy has no affect on other creatures. The amount of damage healed or dealt and the DC to halve the damage is otherwise unchanged.",
      "catagory" : ["General"],
      "prereq" : ["Channel energy class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Elemental Focus",
      "Benefit" : " Choose one energy type (acid, cold, electricity, or fire). Add +1 to the Difficulty Class for all saving throws against spells that deal damage of the energy type you select.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Elemental Focus, Greater",
      "Benefit" : "Prerequisite: Elemental Focus.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules.  Add +1 to the Difficulty Class for all saving throws against spells that deal damage of the energy type you select. This bonus stacks with the bonus from Elemental Focus.",
      "catagory" : ["General"],
      "prereq" : ["Elemental Focus"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Endurance",
      "Benefit" : " You gain a +4 bonus on the following checks and saves: Swim checks made to resist nonlethal damage from exhaustion; Constitution checks made to continue running; Constitution checks made to avoid nonlethal damage from a forced march; Constitution checks made to hold your breath; Constitution checks made to avoid nonlethal damage from starvation or thirst; Fortitude saves made to avoid nonlethal damage from hot or cold environments; and Fortitude saves made to resist damage from suffocation.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Diehard",
      "Benefit" : " When your hit point total is below 0, but you are not dead, you automatically stabilize. You do not need to make a Constitution check each round to avoid losing additional hit points. You may choose to act as if you were disabled, rather than dying. You must make this decision as soon as you are reduced to negative hit points (even if it isn't your turn). If you do not choose to act as if you were disabled, you immediately fall unconscious.",
      "catagory" : ["General"],
      "prereq" : ["Endurance"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Elusive Redirection",
      "Benefit" : " When you successfully use your elusive target class feature to avoid taking damage, you can spend an immediate action and an additional point from your ki pool to redirect that attack back at your attacker or toward any other opponent adjacent to you and your attacker. This attack uses the same attack roll as the original attack, but it targets the opponent you choose.",
      "catagory" : ["General"],
      "prereq" : ["Elusive target class feature", " Combat Expertise", " Improved Unarmed Strike", " flowing monk 12"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Endure Pain",
      "Benefit" : "If you take nonlethal damage, you may attempt a Fortitude saving throw (DC equal to 10 + the nonlethal damage dealt) to reduce that damage by half. The Endurance feat grants a +4 bonus on this saving throw.",
      "catagory" : ["General"],
      "prereq" : ["Survived being tortured 10 or more times"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Eschew Materials",
      "Benefit" : " You can cast any spell with a material component costing 1 gp or less without needing that component. The casting of the spell still provokes attacks of opportunity as normal. If the spell requires a material component that costs more than 1 gp, you must have the material component on hand to cast the spell, as normal.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Evolved Familiar",
      "Benefit" : " Select an evolution from the list of 1-point evolutions available to a summoner’s eidolon. Your familiar has this evolution. The familiar must conform to any limitations of the evolution. For instance, no familiars can benefit from the mount evolution and only familiars with wings can take the wing buffet evolution.",
      "catagory" : ["General"],
      "prereq" : ["Int 13", " Cha 13", " familiar class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Expanded Arcana",
      "Benefit" : " Add one spell from your class’s spell list to your list of spells known. This is in addition to the number of spells normally gained at each new level in your class. You may instead add two spells from your class’s spell list to your list of spells known, but both of these spells must be at least one level lower than the highest level spell you can cast in that class. Once made, these choices cannot be changed.",
      "catagory" : ["General"],
      "prereq" : ["Caster level 1st", " see feat"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Experienced Vagabond",
      "Benefit" : " When dealing with criminals, vagabonds, unsavorycharacters, or other members of a country’s underclass, you gain a +1bonus on Bluff, Diplomacy, Knowledge (Local), and Sense Motive checks.When traveling with at least one other person who has this feat, yougain a +2 circumstance bonus on Perception checks to avoid beingsurprised at the start of combat.",
      "catagory" : ["General"],
      "prereq" : ["Bluff 1 rank", " Knowledge (local) 1 rank", " member of an underclass"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Exploit Lore",
      "Benefit" : " Once per day, when you successfully identify all abilities and weaknesses of a creature using the appropriate Knowledge check, you gain a +2 bonus on attack and damage rolls against that creature for 1 minute. If you identify the abilities and weaknesses of numerous creatures, you must pick one creature to be the target of this effect.",
      "catagory" : ["General"],
      "prereq" : ["Monster lore class feature", " BAB +11"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Extended Bane",
      "Benefit" : " Add your Wisdom bonus to the number of rounds per day that you can use your bane ability.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. ",
      "catagory" : ["General"],
      "prereq" : ["Bane class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Extra Arcana",
      "Benefit" : " You gain one additional magus arcana. You must meet all the prerequisites for this magus arcana.",
      "catagory" : ["General"],
      "prereq" : ["Magus arcana class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Extra Arcane Pool",
      "Benefit" : " Your arcane pool increases by 2.",
      "catagory" : ["General"],
      "prereq" : ["Arcane pool class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Extra Bane",
      "Benefit" : " You can use your bane ability for 3 additional rounds per day.",
      "catagory" : ["General"],
      "prereq" : ["Bane class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Extra Bombs",
      "Benefit" : " You can throw two additional bombs per day.",
      "catagory" : ["General"],
      "prereq" : ["Bomb class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Extra Cantrips or Orisons",
      "Benefit" : " Add two cantrips to your cantrips known or two orisons to your orisons known.",
      "catagory" : ["General"],
      "prereq" : ["Ability to cast cantrips or orisons"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Extra Channel",
      "Benefit" : " You can channel energy two additional times per day.",
      "catagory" : ["General"],
      "prereq" : ["Channel energy class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Extra Evolution",
      "Benefit" : " Your eidolon’s evolution pool increases by 1.",
      "catagory" : ["General"],
      "prereq" : ["Eidolon class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Extra Discovery",
      "Benefit" : " You gain one additional discovery. You must meet all of the prerequisites for this discovery.",
      "catagory" : ["General"],
      "prereq" : ["Discovery class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Extra Gnome Magic",
      "Benefit" : " You gain an additional three uses per day of your gnome spell-like abilities (dancing lights, ghost sound, prestidigitation). You can use these in any combination; for example, you can use dancing lights four times in one day (taking all three additional uses for the same spell), or you can cast ghost sound twice, prestidigitation twice, speak with animals twice, and dancing lights once. If you have a feat, trait, or other ability that changes your racial 0-level spell-like abilities to other 0-level spells, this feat applies to them instead.Paizo Peripheral ",
      "catagory" : ["General"],
      "prereq" : ["Cha 13", " Gnome"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Extra Hex",
      "Benefit" : "",
      "catagory" : ["General"],
      "prereq" : ["Hex class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Extra Ki",
      "Benefit" : " Your ki pool increases by 2. ",
      "catagory" : ["General"],
      "prereq" : ["Ki pool class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Extra Lay On Hands",
      "Benefit" : " You can use your lay on hands ability two additional times per day. ",
      "catagory" : ["General"],
      "prereq" : ["Lay on hands class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Extra Mercy",
      "Benefit" : " Select one additional mercy for which you qualify. When you use lay on hands to heal damage to one target, it also receives the additional effects of this mercy.",
      "catagory" : ["General"],
      "prereq" : ["Mercy class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Extra Performance",
      "Benefit" : " You can use bardic performance for 6 additional rounds per day.",
      "catagory" : ["General"],
      "prereq" : ["Bardic performance class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Extra Rage",
      "Benefit" : " You can rage for 6 additional rounds per day.",
      "catagory" : ["General"],
      "prereq" : ["Rage class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Extra Rage Power",
      "Benefit" : " You gain one additional rage power. You must meet all of the prerequisites for this rage power.",
      "catagory" : ["General"],
      "prereq" : ["Rage power class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Extra Ranger Trap",
      "Benefit" : " You can set ranger traps two additional times per day.",
      "catagory" : ["General"],
      "prereq" : ["Trap class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Extra Revelation",
      "Benefit" : " You gain one additional revelation. You must meet all of the prerequisites for this revelation.",
      "catagory" : ["General"],
      "prereq" : ["Revelation class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Extra Rogue Talent",
      "Benefit" : " You gain one additional rogue talent. You must meet all of the prerequisites for this rogue talent.",
      "catagory" : ["General"],
      "prereq" : ["Rogue talent class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Extra Summons",
      "Benefit" : " You gain 1 additional use of your summon monster spell-like ability per day.",
      "catagory" : ["General"],
      "prereq" : ["Ability to cast summon monster as a spell-like ability", " summoner 1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Eye of the Arclord",
      "Benefit" : " Once per day as a standard action, you can open an incandescent third eye upon your forehead. The eye can remain open for 1 minute, during which time you cast all divination spells at +1 caster level (as long as you begin casting the spell before the eye closes), gain darkvision 60 feet, and can use detect magic (as the spell of the same name). You gain a +8 bonus on Perception checks to notice invisible creatures while the eye is open as well.Section 15: Copyright Notice - Pathfinder Campaign Setting: The Inner Sea World GuidePathfinder Campaign Setting: The Inner Sea World Guide. © 2011, Paizo Publishing, LLC; Authors: Keith Baker, Wolfgang Baur, Clinton J. Boomer, Jason Bulmahn, Joshua J. Frost, Ed Greenwood, Stephen S. Greer, Jeff Grubb, James Jacobs, Michael Kortes, Tito Leati, Mike McArtor, Rob McCreary, Erik Mona, Jason Eric Nelson, Jeff Quick, Sean K Reynolds, F. Wesley Schneider, Leandra Christine Schneider, David Schwartz, Amber E. Scott, Stan!, Owen K.C. Stephens, Todd Stewart, James L. Sutter, Greg A. Vaughan, Jeremy Walker, and JD Wiker.",
      "catagory" : ["General"],
      "prereq" : ["Knowledge (arcana) 4 ranks", " ability to cast arcane spells"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Eyes of Judgment",
      "Benefit" : " When using your detect alignment class feature, you may spend 3 rounds studying a creature within 60 feet. You cannot take any other actions while doing this. After that time has passed, you learn the alignment of the creature.",
      "catagory" : ["General"],
      "prereq" : ["Detect alignment ability class feature", " caster level 6th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Familiar, Improved",
      "Benefit" : " When choosing a familiar, the creatures listed here are also available to you. You may choose a familiar with an alignment up to one step away on each alignment axis (lawful through chaotic, good through evil).",
      "catagory" : ["General"],
      "prereq" : ["Ability to acquire a familiar"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Famine Tolerance",
      "Benefit" : " You can go without feeding for a number of days equal to twice your Hit Dice before having to make hunger saves. When you use your blood drain ability, you gain twice the normal amount of temporary hit points for each feeding.",
      "catagory" : ["General"],
      "prereq" : ["Moroi or nosferatu vampire"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fascination Jinx",
      "Benefit" : " If you jinx a creature under the effect of a bard’s fascinate ability, it also takes a –10 penalty on initiative checks while affected by the jinx. A creature under the effect of your fascinate ability has a –2 penalty on its save against your jinx.",
      "catagory" : ["General"],
      "prereq" : ["Bardic performance class feature", " Halfling Jinx trait."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fast Crawl",
      "Benefit" : " While prone, you can move at half speed. This movement provokes attacks of opportunity as normal. You can take a 5-foot step while crawling. This benefit does not stack with the rogue crawl talent.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fast Drinker",
      "Benefit" : " Drinking strong alcohol to gain temporary ki, takes a swift action rather than a standard action.",
      "catagory" : ["General"],
      "prereq" : ["Con 18", " drunken ki class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fast Empathy",
      "Benefit" : " Using wild empathy is a standard action for you.",
      "catagory" : ["General"],
      "prereq" : ["Handle Animal 5 ranks", " wild empathy class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fast Healer",
      "Benefit" : " When you regain hit points by resting or through magical healing, you recover additional hit points equal to half your Constitution modifier (minimum +1).Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["General"],
      "prereq" : ["Con 13", " Diehard", " Endurance"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Favored Defense",
      "Benefit" : " Choose one of your favored enemy types. You add half your favored enemy bonus to your CMD and as a dodge bonus to AC when attacked by a favored enemy.",
      "catagory" : ["General"],
      "prereq" : ["Favored enemy class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Favored Judgment",
      "Benefit" : " Select a favored race from the ranger’s favored enemies chart. Any sacred or profane bonus you gain from a judgment is 1 higher for attacks you make against or take from creatures that match the selected favored enemy.",
      "catagory" : ["General"],
      "prereq" : ["Wis 13", " judgment class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fearless Aura",
      "Benefit" : " Your aura of courage expands to a 20-foot-radius emanation. Allies within the aura are immune to fear effects.",
      "catagory" : ["General"],
      "prereq" : ["Aura of courage class feature", " caster level 8th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fearsome Finish",
      "Benefit" : " Upon reducing an enemy to 0 or fewer hit points, for the remaining duration of the combat encounter, you gain a +4 bonus on any Intimidate checks made to demoralize opponents who can see both you and the opponent you reduced to 0 or fewer hit points. This bonus does not stack.",
      "catagory" : ["General"],
      "prereq" : ["Intimidating Prowess"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fey Foundling",
      "Benefit" : " Your strange connection to the First World and the fey infuses you with life, and whenever you receive magical healing, you heal an additional 2 points per die rolled. You gain a +2 bonus on all saving throws against death effects. Unfortunately, you also suffer +1 point of damage from cold iron weapons (although you can wield cold iron weapons without significant discomfort).Paizo PeripheralThis content is from material published by Paizo Publishing, LLC, but is not part of the Pathfinder Core Rules.Section 15: Copyright Notice - Pathfinder Campaign Setting: The Inner Sea World GuidePathfinder Campaign Setting: The Inner Sea World Guide. © 2011, Paizo Publishing, LLC; Authors: Keith Baker, Wolfgang Baur, Clinton J. Boomer, Jason Bulmahn, Joshua J. Frost, Ed Greenwood, Stephen S. Greer, Jeff Grubb, James Jacobs, Michael Kortes, Tito Leati, Mike McArtor, Rob McCreary, Erik Mona, Jason Eric Nelson, Jeff Quick, Sean K Reynolds, F. Wesley Schneider, Leandra Christine Schneider, David Schwartz, Amber E. Scott, Stan!, Owen K.C. Stephens, Todd Stewart, James L. Sutter, Greg A. Vaughan, Jeremy Walker, and JD Wiker.",
      "catagory" : ["General"],
      "prereq" : ["Can only select at 1st level"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Field Repair",
      "Benefit" : " If you are trained in a Craft skill appropriate to a broken item, you can repair that item with no raw material cost and no penalty on your Craft skill check for using improvised tools. If you spend a day, the item regains 1 hit point plus one-quarter of its original hit points. Alternatively, if the item gained the broken condition because it is a firearm that has misfired or a siege engine that suffered a mishap, or has the broken condition because it has the fragile weapon quality (or some similar quality), you can make a Craft check with the DC it takes to craft that item (see Table 2–2, below). If the check succeeds, the item loses the broken condition.Normal: Improvised tools impose a –2 penalty on Craft checks. Items require raw materials to repair.",
      "catagory" : ["General"],
      "prereq" : ["Craft 4 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fiendish Darkness",
      "Benefit" : " You can use darkness three times per day as a spell-like ability.",
      "catagory" : ["General"],
      "prereq" : ["Darkness spell-like ability", " tiefling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fiendish Darkness, Improved",
      "Benefit" : " You gain a +2 bonus to your effective caster level when using your darkness spell-like ability. In addition, whenever you cast a spell with the [evil] descriptor that targets another creature, you can spend a swift action to apply the effects of your darkness spell-like ability to the spell cast, with the darkness effect centered on the spell’s target. Using the darkness spell-like ability in this way expends all three uses of it for the day, and it cannot be used if fewer than three uses of it remain for that day.",
      "catagory" : ["General"],
      "prereq" : ["Fiendish Darkness", " darkness spell-like ability", " caster level 3rd", " tiefling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fiendish Facade",
      "Benefit" : " You gain a +5 racial bonus on Disguise checks when attempting to impersonate a particular race. You must select the race you are able to impersonate when you select this feat, and thereafter you cannot change the race you have chosen. That race must be Medium size.",
      "catagory" : ["General"],
      "prereq" : ["Tiefling", " must be taken at 1st level"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fiendish Heritage",
      "Benefit" : " Your fiendish bloodline proves particularly strong, being tied to a specific race of fiends. Rather than taking a tiefling’s usual racial ability modifiers, choose one of the tiefling heritages presented on Table: Variant Tiefling Heritages.",
      "catagory" : ["General"],
      "prereq" : ["Tiefling", " must be taken at 1st level."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fiendish Resilience",
      "Benefit" : " Choose one of the following energy types that you have resistance to: cold, electricity, or fire. Anytime you make a Reflex saving throw against an attack that deals the selected type of energy damage and is subject to your evasion class feature, you gain a +4 competence bonus on the save.",
      "catagory" : ["General"],
      "prereq" : ["Dex 13", " evasion class feature", " tiefling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fiendish Sorcery, Improved",
      "Benefit" : " If you are a sorcerer and possess the Rakshasa bloodline or Shadow bloodline, treat your Charisma score as 2 points higher for all sorcerer class abilities.",
      "catagory" : ["General"],
      "prereq" : ["Fiendish Darkness", " darkness spell-like ability", " caster level 3rd", " tiefling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fight On",
      "Benefit" : " Once per day, you can gain a number of temporary hit points equal to your Constitution modifier. You can activate this feat as an immediate action when reduced to 0 or fewer hit points. You can use this feat to prevent yourself from dying. These temporary hit points last for 1 minute. If your hit points drop below 0 due to the loss of these temporary hit points, you fall unconscious and are dying as normal. If you also have the ferocity racial trait, you can use that once you have lost the temporary hit points from this feat.Source: Advanced Player's Guide",
      "catagory" : ["General"],
      "prereq" : ["Con 13; dwarf", " Half-orc", " or orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fire God's Blessing",
      "Benefit" : " When in combat, if you deal fire damage to an enemy, you heal 1 hit point. You can only benefit from this healing once per round. Attacks that cause a target to catch on fire heal you each round the target takes fire damage.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Section 15: Copyright Notice - Pathfinder Companion: Orcs of GolarionPathfinder Companion: Orcs of Golarion. Copyright 2010, Paizo Publishing, LLC; Authors: Steve Kenson, Rob McCreary, Richard Pett, Sean K Reynolds, and JD Wiker.",
      "catagory" : ["General"],
      "prereq" : ["Half-orc or orc", " worshiper of the Fire God"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fire Music",
      "Benefit" : " When you cast a bard spell that deals damage, you may replace the spell’s normal damage with fire damage or split the spell’s damage so that half of it is the normal damage type and half is fire damage.",
      "catagory" : ["General"],
      "prereq" : ["Spellcraft 5 ranks", " ability to cast bard spells", " ability to cast at least one arcane fire spell from another class"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fleet",
      "Benefit" : " While you are wearing light or no armor, your base speed increases by 5 feet. You lose the benefits of this feat if you carry a medium or heavy load.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Focused Eidolon",
      "Benefit" : " While you are adjacent to your eidolon, you receive a +4 bonus on concentration checks.",
      "catagory" : ["General"],
      "prereq" : ["Shield ally class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fortune Teller",
      "Benefit" : " Upon taking this feat, choose a focus item for your divination magic—a crystal ball, runes, a harrow deck, or some such item. Whenever you cast a spell from the divination school, you may use this focus item instead of the spell’s material component, as long as the cost of the material component is no more than 1,000 gp. If you choose to perform the spell using your focus item and the spell’s normal material component (regardless of that component’s cost), you cast the spell at +1 caster level.Paizo PeripheralThis content is from material published by Paizo Publishing, LLC, but is not part of the Pathfinder Core Rules.",
      "catagory" : ["General"],
      "prereq" : ["Ability to cast divination spells"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fox Shape",
      "Benefit" : " You can take the form of a fox whose appearance is static and cannot be changed each time you assume this form. Your bite attack’s damage is reduced to 1d3 points of damage on a hit, but you gain a +10 racial bonus on Disguise checks made to appear as a fox. Changing from kitsune to fox shape is a standard action. This ability otherwise functions as beast shape II, and your ability scores change accordingly.",
      "catagory" : ["General", " Kitsune"],
      "prereq" : ["Cha 13", " BAB +3", " kitsune"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Free Spirit",
      "Benefit" : " You gain a +2 morale bonus on saving throws made against mind-affecting effects and on all Escape Artist or grapple checks made to escape a grapple or to escape from bonds.Paizo PeripheralThis content is from material published by Paizo Publishing, LLC, but is not part of the Pathfinder Core Rules.Section 15: Copyright Notice - Pathfinder Campaign Setting: The Inner Sea World GuidePathfinder Campaign Setting: The Inner Sea World Guide. © 2011, Paizo Publishing, LLC; Authors: Keith Baker, Wolfgang Baur, Clinton J. Boomer, Jason Bulmahn, Joshua J. Frost, Ed Greenwood, Stephen S. Greer, Jeff Grubb, James Jacobs, Michael Kortes, Tito Leati, Mike McArtor, Rob McCreary, Erik Mona, Jason Eric Nelson, Jeff Quick, Sean K Reynolds, F. Wesley Schneider, Leandra Christine Schneider, David Schwartz, Amber E. Scott, Stan!, Owen K.C. Stephens, Todd Stewart, James L. Sutter, Greg A. Vaughan, Jeremy Walker, and JD Wiker.",
      "catagory" : ["General"],
      "prereq" : ["Cha 13", " chaotic alignment"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Friendly Switch",
      "Benefit" : " As part of your movement or as a 5-foot-step, youcan move into the space occupied by an ally of your size or smaller,which displaces the ally into the space you just left. Your ally mustbe willing and able to move and able to occupy the space you were in.This movement does not provoke attacks of opportunity. This does notcount toward your ally’s movement on his next turn.",
      "catagory" : ["General"],
      "prereq" : ["Base attack bonus +1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Furious Finish",
      "Benefit" : " While raging, when you use the Vital Strike feat, you can choose not to roll your damage dice and instead deal damage equal to the maximum roll possible on those damage dice. If you do, your rage immediately ends, and you are fatigued (even if you would not normally be).",
      "catagory" : ["General"],
      "prereq" : ["Rage class feature", " Vital Strike", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Galley Slave",
      "Benefit" : " You get a +2 circumstance bonus on Profession (sailor) made while aboard a ship with oars and rowers. When fighting on a ship, your first hit each battle gets a +2 damage bonus.",
      "catagory" : ["General"],
      "prereq" : ["Profession (sailor) 1 rank", " current or former galley slave"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Gliding Steps",
      "Benefit" : " If you have at least one ki (Ed: ki point) in your ki pool, when you move you do not provoke attacks of opportunity when leaving the first square of that movement. You can spend 1 ki point to avoid provoking attacks of opportunity during that entire move.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. ",
      "catagory" : ["General"],
      "prereq" : ["Dodge", " Mobility", " Nimble Moves", " ki pool"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Glorious Heat",
      "Benefit" : " When you cast a divine spell with the [fire] descriptor, choose a single ally within 30 feet that you can see. Unofficially Corrected Text: That ally heals a number of hit points equal to the level of the spell cast and gains a +1 morale bonus on attack rolls until the end of its next turn (see Editor's Note at right.)The original benefit text is included below if you or your GM prefers to use it (which is not recommended.)Original Text: That ally heals half your level in hit points, and gains a +1 morale bonus on attack rolls until the end of its next turn.",
      "catagory" : ["General"],
      "prereq" : ["Ability to cast divine spells", " caster level 5th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Gnome Trickster",
      "Benefit" : " In addition to your normal gnome spell-like abilities, you also gain the following spell-like abilities: 1/day—mage hand and prestidigitation.Source: Advanced Player's Guide",
      "catagory" : ["General"],
      "prereq" : ["Cha 13", " gnome", " gnome magic racial trait"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Godless Healing",
      "Benefit" : " Once per day when you have half your total hit points or fewer, you may heal yourself of an amount of damage equal to 1d8 plus your total Hit Dice as a move action. This is a supernatural ability.",
      "catagory" : ["General"],
      "prereq" : ["Cannot have a patron deity"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Go Unnoticed",
      "Benefit" : " During the first round of combat, flat-footed opponents are considered not to have noticed you yet for the purposes of Stealth skill checks, allowing you to make a Stealth check that round to hide from them.",
      "catagory" : ["General"],
      "prereq" : ["Dex 13", " Small size or smaller"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Grant Initiative",
      "Benefit" : " At the start of each encounter, you can either choose to keep the bonus granted to you by your Wisdom modifier on initiative checks or choose to give that bonus to one of your allies that you can see. You must make this choice before you or the ally you are granting the bonus to makes the initiative check.",
      "catagory" : ["General"],
      "prereq" : ["Cunning initiative class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Great Fortitude",
      "Benefit" : " You get a +2 bonus on all Fortitude saving throws.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Great Fortitude, Improved",
      "Benefit" : " Once per day, you may reroll a Fortitude save. You must decide to use this ability before the results are revealed. You must take the second roll, even if it is worse.",
      "catagory" : ["General"],
      "prereq" : ["Great Fortitude"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Greater Channel Smite",
      "Benefit" : " Before making any melee attacks on your turn, you can use a swift action to expend one daily use of your channel energy class feature. The dice from your channel energy feature form a pool of damage dice you can access to further damage creatures normally harmed by the energy you are channeling—undead for positive energy, living creatures for negative energy. Prior to making each melee attack, allocate dice from the pool to be used as extra damage dice if you hit. Your target can make a Will save, as normal, to halve this extra damage. This extra damage is not multiplied when you score a critical hit. If you miss, the extra damage dice remain in your pool, but any dice left unexpended at the end of your turn are wasted.",
      "catagory" : ["General"],
      "prereq" : ["Channel Smite", " BAB +8"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Greater Mercy",
      "Benefit" : " When you use your lay on hands ability and the target of that ability does not have any conditions your mercies can remove, it instead heals an additional +1d6 points of damage.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. ",
      "catagory" : ["General"],
      "prereq" : ["Cha 13", " lay on hands class feature", " mercy class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Greater Wild Empathy",
      "Benefit" : " You gain a +2 insight bonus on wild empathy checks, and you may use wild empathy to duplicate an Intimidate check rather than a Diplomacy check. In addition, choose one of the following kinds of creatures: elementals, fey, lycanthropes, plants, or vermin. You may influence creatures of that type with wild empathy, if their Intelligence score is 1 or 2, or they do not possess an Intelligence score. Once you choose the type of creature, it cannot be changed.",
      "catagory" : ["General"],
      "prereq" : ["Knowledge (nature) 5 ranks", " wild empathy class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Green Guardian",
      "Benefit" : " Spells you cast that deal damage, channel negative energy, or otherwise harm life do not hurt normal or magical plants. In addition, whenever you cast a spell that utilizes, heals, or enhances normal or magical plants (such as entangle or plant growth), you cast the spell at +1 caster level.Section 15: Copyright Notice - Pathfinder Campaign Setting: The Inner Sea World GuidePathfinder Campaign Setting: The Inner Sea World Guide. © 2011, Paizo Publishing, LLC; Authors: Keith Baker, Wolfgang Baur, Clinton J. Boomer, Jason Bulmahn, Joshua J. Frost, Ed Greenwood, Stephen S. Greer, Jeff Grubb, James Jacobs, Michael Kortes, Tito Leati, Mike McArtor, Rob McCreary, Erik Mona, Jason Eric Nelson, Jeff Quick, Sean K Reynolds, F. Wesley Schneider, Leandra Christine Schneider, David Schwartz, Amber E. Scott, Stan!, Owen K.C. Stephens, Todd Stewart, James L. Sutter, Greg A. Vaughan, Jeremy Walker, and JD Wiker.",
      "catagory" : ["General"],
      "prereq" : ["Your spells work more efficiently on plants"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Groundling",
      "Benefit" : " You can use speak with animals as a spell-like ability at will, but only to communicate with burrowing animals like gophers, moles, and the like. You can still use your gnome speak with animals ability once per day to speak with any animal, as usual.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. ",
      "catagory" : ["General"],
      "prereq" : ["Cha 13", " gnome", " gnome magic racial trait."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Guided Hand",
      "Benefit" : " With your deity’s favored weapon, you can use your Wisdom modifier instead of your Strength or Dexterity modifier on attack rolls.",
      "catagory" : ["General"],
      "prereq" : ["Channel Smite", " proficiency with deity’s chosen weapon"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Gunslinger",
      "Benefit" : " When you attack with a firearm, you do not provoke attacks of opportunity.",
      "catagory" : ["General"],
      "prereq" : ["Base attack bonus +4", " Weapon Focus (any firearm)", " proficiency with any firearm."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Gunsmithing",
      "Benefit" : " If you have access to a gunsmith's kit, you can create and restore firearms, craft bullets, and mix black powder for all types of firearms. You do not need to make a Craft check to create firearms and ammunition or to restore firearms.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Harmonic Sage",
      "Benefit" : " While inside an artificial structure, you can spend a free action to make a DC 15 Knowledge (engineering) check when you begin your bardic performance. Success on this check allows you to do one of the following.Self-Harmonize: By performing over the acoustic reverberations of your performance, you increase the DC of your bardic performance effects +1.Reverberation: You can choose to have the effect of your current bardic performance continue for 1 round after you cease maintaining it, regardless of why you cease maintaining it. You can still have no more than one bardic performance in effect at one time.Normal: A bardic performance lasts only as long as you maintain it.",
      "catagory" : ["General"],
      "prereq" : ["Bardic performance class feature", " Knowledge (engineering) 5 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Harmonic Spell",
      "Benefit" : " Whenever you cast a 1st or higher level spell while you are maintaining a bardic performance, you can maintain the bardic performance for that round without expending one of your rounds of performance for the day. In addition, you can switch from one bardic performance to another as a swift action when you cast a spell while maintaining a bardic performance.Paizo Peripheral",
      "catagory" : ["General"],
      "prereq" : ["Bardic performance ability"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Harrowed",
      "Benefit" : "Numerous Harrow readings early in your life seem to have hit the mark precisely, increasing your belief that you are destined for a specific purpose in life. You get a +1 bonus on all Will saves made to resist enchantment effects. Once per day, you may draw a card from a Harrow deck you own. At any one time for the rest of that day, you may apply a +2 bonus on any d20 roll modified by the card’s suit. For example, if you drew a card from the suit of Dexterity, you could apply this +2 bonus on an Initiative check, a Ref lex save, a Dexterity-based skill check, or a ranged attack roll. You may assign this +2 bonus after you make the roll, but you must do so before you know whether the roll was a success or not.Paizo Peripheral",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Hellcat Stealth",
      "Benefit" : "",
      "catagory" : ["General"],
      "prereq" : ["Skill Focus (Stealth)", " Stealth 6 ranks."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Helpless Prisoner",
      "Benefit" : "",
      "catagory" : ["General"],
      "prereq" : ["Bluff 5 ranks", " Escape Artist 1 rank", " gnome."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Hermean Blood",
      "Benefit" : " Though you may not know it, the blood of greatness flows in your veins. Pick two skills that share the same associated ability score. Those skills are always considered class skills for you. It’s possible that Island agents may come looking for you, either to evaluate you for an invitation or to cover up an embarrassing dalliance, as determined by the GM’s whim.Paizo PeripheralThis content is from material published by Paizo Publishing, LLC, but is not part of the Pathfinder Core Rules.Section 15: Copyright Notice - Pathfinder Campaign Setting: The Inner Sea World GuidePathfinder Campaign Setting: The Inner Sea World Guide. © 2011, Paizo Publishing, LLC; Authors: Keith Baker, Wolfgang Baur, Clinton J. Boomer, Jason Bulmahn, Joshua J. Frost, Ed Greenwood, Stephen S. Greer, Jeff Grubb, James Jacobs, Michael Kortes, Tito Leati, Mike McArtor, Rob McCreary, Erik Mona, Jason Eric Nelson, Jeff Quick, Sean K Reynolds, F. Wesley Schneider, Leandra Christine Schneider, David Schwartz, Amber E. Scott, Stan!, Owen K.C. Stephens, Todd Stewart, James L. Sutter, Greg A. Vaughan, Jeremy Walker, and JD Wiker.",
      "catagory" : ["General"],
      "prereq" : ["Can only select at 1st level"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Hero's Fortune",
      "Benefit" : "Even at the start of your career, it was clear that you had a chance at greatness, and your legend continues to grow with every adventure. You gain a hero point. The maximum number of hero points you can have at any one time is increased to 5.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Heroic Defiance",
      "Benefit" : " Once per day as an immediate action you can delay the onset of one harmful condition or affliction (such as panicked, paralyzed, stunned, and so on), including permanent and instantaneous conditions. Activating this feat delays the onset of the condition until the end of your next turn, after which time the condition takes its normal effect. This feat has no effect on hit point damage or ability damage.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. ",
      "catagory" : ["General"],
      "prereq" : ["Diehard", " Endurance", " base Fortitude save +8."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Heroic Recovery",
      "Benefit" : " Once per day as a standard action you may attempt a new saving throw against a harmful condition or affliction requiring a Fortitude save that is affecting you. If this save against the affliction fails, there is no additional effect, but a successful save counts toward curing an affliction such as poison or disease. You cannot use this feat to recover from instantaneous effects, effects that do not allow a saving throw, or effects that do not require a Fortitude save.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["General"],
      "prereq" : ["Diehard", " Endurance", " base Fortitude save +4."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Hymn Singer",
      "Benefit" : " When using bardic performance, you may choose to play, recite, or sing a religious song or piece of scripture of your faith. Each round of bardic performance you spend in this way, you count as presenting a holy symbol, chanting prayers, or ringing a hand bell for the purpose of keeping vampires at bay.",
      "catagory" : ["General"],
      "prereq" : ["Bardic performance", " good alignment", " worshiper of a good deity"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Implant Bomb",
      "Benefit" : " You may implant a bomb in a willing or helpless creature (a mindless creature under your control, such as a zombie, counts as willing for this purpose). This takes 1 hour and expends 1 use of your bomb ability for the day. When the implanted creature dies or is destroyed, the bomb detonates in the creature’s square as if it were a delayed bomb set by you (though you can set the bomb’s damage to less than your normal bomb damage). You can use any bomb-affecting discoveries on this implanted bomb (acid bomb, frost bomb, smoke bomb, and so on) as normal. The bomb automatically detonates 24 hours after you implant it in the creature.",
      "catagory" : ["General"],
      "prereq" : ["Heal 5 ranks", " delayed bomb alchemist discovery"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Inner Light",
      "Benefit" : " Whenever you cast your daylight spell-like ability, you do so as if your caster level were one higher.",
      "catagory" : ["General", " Aasimar"],
      "prereq" : ["Aasimar", " daylight spell-like ability"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Insightful Gaze",
      "Benefit" : " Whenever you make a Sense Motive check to oppose someone's Bluff check, you can roll two dice and take the higher result.",
      "catagory" : ["General"],
      "prereq" : ["Stern gaze class feature", " Sense Motive 5 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Instant Judgment",
      "Benefit" : " You can spend an immediate action to pronounce a judgment or change an active judgment.Normal: Pronouncing or changing a judgment requires a swift action.",
      "catagory" : ["General"],
      "prereq" : ["Second judgment class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Intimidating Bane",
      "Benefit" : " Whenever you use Dazzling Display while your bane feature is active, you gain a +2 bonus on the Intimidate check that Dazzling Display allows against creatures of the type your bane weapon currently affects. Such creatures remain shaken while your bane feature is still active and effective against their creature type.",
      "catagory" : ["General"],
      "prereq" : ["Bane class feature", " Dazzling Display", " character level 8th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Intimidating Gaze",
      "Benefit" : " Once per day, as a free action, when making an Intimidate skill check, you can roll two dice and take the higher result.",
      "catagory" : ["General"],
      "prereq" : ["Stern gaze class feature", " Intimidate 5 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Invoke Primal Instinct",
      "Benefit" : "",
      "catagory" : ["General"],
      "prereq" : ["Bluff 1 rank", " wild shape class feature", " gnome."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sword Oath",
      "Benefit" : " You may select longsword-related feats as if you were a 4th-level fighter. For example, you may select Weapon Specialization (longsword) as a feat.",
      "catagory" : ["General"],
      "prereq" : ["Proficient in longsword", " Weapon Focus (longsword)", " BAB +4"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ironguts",
      "Benefit" : " You gain a +2 racial bonus on saving throws against any effect causing the nauseated or sickened conditions and against all ingested poisons (but not other poisons). In addition, you receive a +2 bonus on Survival skill checks to find food for yourself (and only yourself ).Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["General"],
      "prereq" : ["Con 13; dwarf", " half-orc", " or orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ironhide",
      "Benefit" : " You gain a +1 natural armor bonus due to your unusually tough hide.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["General"],
      "prereq" : ["Con 13; dwarf", " half-orc", " or orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Iron Will",
      "Benefit" : " You get a +2 bonus on all Will saving throws.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Iron Will, Improved",
      "Benefit" : " Once per day, you may reroll a Will save. You must decide to use this ability before the results are revealed. You must take the second roll, even if it is worse.",
      "catagory" : ["General"],
      "prereq" : ["Iron Will"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Jinx Alchemy",
      "Benefit" : " A jinxed creature cannot benefit from the effects of potions, elixirs, or any other substance that he must ingest in order to activate. This includes alchemical substances such as antitoxin, but not extracts, mutagens, or other alchemist class abilities that only affect the alchemist. A jinxed creature still takes any penalties and detrimental effects from ingested compounds or poisons.",
      "catagory" : ["General"],
      "prereq" : ["Swift alchemy class feature", " Halfling Jinx trait."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Judgment Surge",
      "Benefit" : "Once per day, you can treat your class level for your judgment class feature as if it were 3 higher than normal. If you have multiple judgments active at the same time, this benefit applies to all of them.",
      "catagory" : ["General"],
      "prereq" : ["Judgment class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Keen Scent",
      "Benefit" : " You gain the scent special ability.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["General"],
      "prereq" : ["Wis 13", " half-orc or orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Smell Fear",
      "Benefit" : " You receive a +4 bonus on Perception checks to detect creatures with the shaken, frightened, or panicked conditions using scent. You can substitute your Perception skill for Sense Motive skill checks if the subject has one of the previous conditions or is attempting to cover up their fear in some way.Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["General"],
      "prereq" : ["Keen Scent", " half-orc or orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ki Stand",
      "Benefit" : " While you have at least 1 ki point in your ki pool, you can stand up as a swift action that provokes attacks of opportunity.",
      "catagory" : ["General"],
      "prereq" : ["Ki pool"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Knockout Artist",
      "Benefit" : " When you use your unarmed strike to deal nonlethal damage and sneak attack damage to an opponent denied his Dexterity bonus to AC, you gain a +1 bonus on the damage roll per each sneak attack damage die you roll.",
      "catagory" : ["General"],
      "prereq" : ["Sneak attack class feature", " Improved Unarmed Strike"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Leadership",
      "Benefit" : "",
      "catagory" : ["General"],
      "prereq" : ["Character level 7th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Lead from the Back",
      "Benefit" : " During any round in which you gain the benefit of cover or concealment against at least one opponent, and you are not threatened by any opponent, you can bark orders and encouragement to your allies as a standard action. Doing so grants all allies within 30 feet a +1 bonus on all weapon damage rolls for 1 round.",
      "catagory" : ["Combat", " Goblin"],
      "prereq" : ["Goblin", " Intimidate 1 rank."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Leaf Singer",
      "Benefit" : " When you use bardic performance with audible components in a forest, the range or area of your chosen performance is doubled. In addition, the DC for saving throws against your bardic performance is increased by +2 for creatures of the fey type, regardless of where the performance occurs.Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["General"],
      "prereq" : ["Cha 13", " bardic performance", " elf or half-elf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Learn Ranger Trap",
      "Benefit" : " Select one ranger trap. You may use this trap a number of times per day equal to your Wisdom bonus (minimum 1). The DC for your trap is equal to 10 + 1/2 your character’s level + your Wisdom bonus, and it lasts 1 day per two character levels.",
      "catagory" : ["General"],
      "prereq" : ["Survival 5 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Letter Fury",
      "Benefit" : " If someone reads or writes in your presence (including casting spells like glyph of warding or symbol) you can, as an immediate action, choose to activate your rage class ability for 1 round. This round of rage does not count toward the total number of rounds which you can rage each day, but if you wish to continue your rage beyond that single round you must expend rounds from your daily rage allotment as normal. Once you use this feat you must wait at least 1 minute after you cease raging before you can use it again.",
      "catagory" : ["Goblin"],
      "prereq" : ["Goblin", " rage class feature."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Life-Dominant Soul",
      "Benefit" : " You are healed by channeled positive energy used to heal living creatures and channeled negative energy used to heal undead, but both only heal half the normal amount. You still take damage from positive energy used to harm undead, such as that from channeled energy and lay on hands.",
      "catagory" : ["General"],
      "prereq" : ["Dhampir"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Life Lure",
      "Benefit" : " As a standard action, you can channel positive energy to fascinate all undead within 30 feet for a number of rounds equal to your Charisma modifier (minimum of 1). Undead that succeed at a Will save (DC 10 + 1/2 your cleric level + your Charisma modifier) are unaffected. Channeling energy for this purpose does not heal or harm creatures.",
      "catagory" : ["General"],
      "prereq" : ["Channel positive energy class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Lightning Reflexes",
      "Benefit" : " You get a +2 bonus on all Reflex saving throws.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Lightning Reflexes, Improved",
      "Benefit" : "",
      "catagory" : ["General"],
      "prereq" : ["Lightning Reflexes"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Light Step",
      "Benefit" : " You can ignore the effects of difficult terrain in natural environments, as if it were normal terrain.Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["General"],
      "prereq" : ["Acrobatic Steps", " Nimble Moves", " elf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Lingering Performance",
      "Benefit" : " The bonuses and penalties from your bardic performance continue for 2 rounds after you cease performing. Any other requirement, such as range or specific conditions, must still be met for the effect to continue. If you begin a new bardic performance during this time, the effects of the previous performance immediately cease.Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["General"],
      "prereq" : ["Bardic performance class ability"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Luck of Heroes",
      "Benefit" : " Whenever you spend a hero point to reroll a die roll or to grant yourself a bonus before a die roll is made, there is a chance that the hero point is not spent. Whenever you spend a hero point, roll a d20. If the result is greater than 15, the hero point is not spent. You cannot use this Feat when you use the cheat death Hero Point option.",
      "catagory" : ["General"],
      "prereq" : ["Heroic Fortune"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Lucky Halfling",
      "Benefit" : " Once per day, when one of your allies within 30 feet makes a saving throw, you may roll the same saving throw as if you were the one subject to the effect requiring it. You may use this ability after your ally has rolled, but before the GM declares if the roll was a success or failure. Your ally may choose to use your saving throw in place of his own.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["General"],
      "prereq" : ["Halfling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Magical Aptitude",
      "Benefit" : " You get a +2 bonus on all Spellcraft checks and Use Magic Device checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Malicious Eye",
      "Benefit" : " When a creature fails its save against your evil eye hex, add the effect of your jinx to the effect of the hex. The save penalties from the hex and jinx stack. Using your jinx on another creature does not end the hex or the jinx effect on the hexed target.",
      "catagory" : ["General"],
      "prereq" : ["Evil eye witch hex", " Halfling Jinx trait."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Master Alchemist",
      "Benefit" : " You receive a +2 bonus on Craft (alchemy) checks, and you may create mundane alchemical items much more quickly than normal. When making poisons, you can create a number of doses equal to your Intelligence modifier (minimum 1) at one time. These additional doses do not increase the time required, but they do increase the raw material cost.",
      "catagory" : ["General"],
      "prereq" : ["Craft (alchemy) 5 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Master Craftsman",
      "Benefit" : " Choose one Craft or Profession skill in which you possess at least 5 ranks. You receive a +2 bonus on your chosen Craft or Profession skill. Ranks in your chosen skill count as your caster level for the purposes of qualifying for the Craft Magic Arms and Armor and Craft Wondrous Item feats. You can create magic items using these feats, substituting your ranks in the chosen skill for your total caster level. You must use the chosen skill for the check to create the item. The DC to create the item still increases for any necessary spell requirements (see the magic item creation rules in Magic Items). You cannot use this feat to create any spell-trigger or spell-activation item.",
      "catagory" : ["General"],
      "prereq" : ["5 ranks in any Craft or Profession skill"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Master of the Ledger",
      "Benefit" : " You get a +2 bonus on Appraise checks, a +2 bonus on any one Profession skill, and when dealing with anyone of your profession, you get a +4 bonus on Sense Motive checks when using the hunch task (see the Sense Motive skill). Your ability to accurately and carefully invest money gives you insight into the movements of coin though the marketplace. If you have access to a marketplace in a settlement of village size or larger, you may invest up to 100 gp in that market; the exact nature of your investments isn’t important but is usually divided among several businesses. Once invested, you do not have access to this money for at least 1 month.",
      "catagory" : ["General"],
      "prereq" : ["Appraise 6 ranks", " Profession (any one) 6 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Master of Wonders",
      "Benefit" : "",
      "catagory" : ["General"],
      "prereq" : ["Iron Will", " Wonderseeker faction", " gnome."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Maximized Spellstrike",
      "Benefit" : " When you make a melee attack and successfully use your spellstrike ability against an opponent denied his Dexterity bonus to AC, you can spend 3 points from your arcane pool to maximize the spell delivered through your spellstrike as if using the Maximize Spell metamagic feat.",
      "catagory" : ["General"],
      "prereq" : ["Maximized magic magus arcana", " weapon expertise class feature or Quick Draw"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Menacing Bane",
      "Benefit" : " You can use your bane class feature to imbue a melee weapon with the menacing special weapon ability instead of bane. You can spend a swift action to switch between the two special weapon abilities. Doing so otherwise works according to your bane class feature.Special: If you have the Double Bane feat, you can imbue each weapon you wield with either bane or menacing. No single weapon can have both.",
      "catagory" : ["General"],
      "prereq" : ["Bane class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Merciful Bane",
      "Benefit" : " While a weapon you wield is under the effect of your bane class feature, you can spend a swift action to switch between dealing lethal or nonlethal damage with bane. While your bane effect allows you to deal nonlethal damage in this way, you take no penalty on your attack roll for using a lethal weapon to deal nonlethal damage.Normal: When using a lethal weapon to deal nonlethal damage, you take a –4 penalty on attack rolls.",
      "catagory" : ["General"],
      "prereq" : ["Bane class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Merciless Rush",
      "Benefit" : " When you bull rush a creature and your check exceeds the target’s CMD by 5 or more, you can choose to move through that creature instead of pushing it back a number of feet, effectively trampling the creature and dealing it a number of points of damage equal to your Strength modifier.",
      "catagory" : ["General"],
      "prereq" : ["Improved Bull Rush"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Minotaur's Charge",
      "Benefit" : " When you hit an opponent with a charge attack, you might also initiate a bull rush as a free action. This does not require you to move into your opponent’s square and does not provoke an attack of opportunity. If you successfully push your opponent 15 feet or more, he is also knocked prone.Section 15: Copyright Notice - Classic Monsters RevisitedClassic Monsters Revisited. Copyright 2008, Paizo Publishing, LLC; Authors: Wolfgang Baur, Jason Bulmahn, Joshua J. Frost, James Jacobs, Nicolas Logue, Mike McArtor, James L. Sutter, Greg A. Vaughan, Jeremy Walker.",
      "catagory" : ["General"],
      "prereq" : ["Strength 13", " Improved Bull Rush", " powerful charge."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Monster Lore, Improved",
      "Benefit" : " You gain a sacred bonus on all skill checks to identify the abilities and weaknesses of creatures equal to 1/2 your level in classes that grant you the monster lore class feature.",
      "catagory" : ["General"],
      "prereq" : ["Monster lore class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Monstrous Mask",
      "Benefit" : " You get a +5 racial bonus on Intimidate checks made against all creatures of the humanoid type.",
      "catagory" : ["General"],
      "prereq" : ["Tiefling", " must be taken at 1st level"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Moonlight Summons",
      "Benefit" : " Creatures you summon shed light as a light spell. They are immune to confusion and sleep effects, and their natural weapons are treated as silver for the purposes of overcoming damage reduction.",
      "catagory" : ["General"],
      "prereq" : ["Spell Focus (conjuration)", " ability to cast summon nature’s ally"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Mounted Blade",
      "Benefit" : "",
      "catagory" : ["General"],
      "prereq" : [" "],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Mystic Stride",
      "Benefit" : " You can move at full speed even through thorns, briars, and overgrown areas that are enchanted or magically manipulated to impede motion, even if those areas confer the entangled condition.",
      "catagory" : ["General"],
      "prereq" : ["Dex 15", " Nimble Moves", " woodland stride class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Natural Spell",
      "Benefit" : "You can complete the verbal and somatic components of spells whileusing wild shape. You substitute various noises and gestures for thenormal verbal and somatic components of a spell.",
      "catagory" : ["General"],
      "prereq" : ["Wis 13", " wild shape class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Necromantic Affinity",
      "Benefit" : " You gain a +2 bonus on saving throws made to resist spells and effects that utilize negative energy, cause negative levels, or cause ability damage, ability drain, or ability penalties. In addition, damage caused by inflict spells heals you as if you were an undead creature, but you also take damage from cure spells. Paizo PeripheralThis content is from material published by Paizo Publishing, LLC, but is not part of the Pathfinder Core Rules.Section 15: Copyright Notice - Pathfinder Campaign Setting: The Inner Sea World GuidePathfinder Campaign Setting: The Inner Sea World Guide. © 2011, Paizo Publishing, LLC; Authors: Keith Baker, Wolfgang Baur, Clinton J. Boomer, Jason Bulmahn, Joshua J. Frost, Ed Greenwood, Stephen S. Greer, Jeff Grubb, James Jacobs, Michael Kortes, Tito Leati, Mike McArtor, Rob McCreary, Erik Mona, Jason Eric Nelson, Jeff Quick, Sean K Reynolds, F. Wesley Schneider, Leandra Christine Schneider, David Schwartz, Amber E. Scott, Stan!, Owen K.C. Stephens, Todd Stewart, James L. Sutter, Greg A. Vaughan, Jeremy Walker, and JD Wiker.",
      "catagory" : ["General"],
      "prereq" : ["Con 15"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Nimble Moves",
      "Benefit" : "Whenever you move, you may move through 5 feet of difficult terraineach round as if it were normal terrain. This feat allows you to take a5-foot step into difficult terrain.",
      "catagory" : ["General"],
      "prereq" : ["Dex 13"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Acrobatic Steps",
      "Benefit" : "",
      "catagory" : ["General"],
      "prereq" : ["Dex 15", " Nimble Moves"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Nimble Natural Summons",
      "Benefit" : " Creatures you summon with summon nature’s ally can move through any sort of undergrowth (such as natural thorns, briars, and similar terrain) at their normal speeds without taking damage or suffering other impairment. Thorns, briars, and undergrowth areas that have been magically manipulated to impede motion, however, still affect the summoned creatures.",
      "catagory" : ["General"],
      "prereq" : ["Augment Summoning", " Spell Focus (conjuration)", " caster level 6th."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Noble Scion",
      "Benefit" : " You gain a +2 bonus on all Knowledge (nobility) checks, and that chosen Knowledge skill is always considered a class skill for you.",
      "catagory" : ["General"],
      "prereq" : ["Cha 13", " can only select at 1st level"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Oracular Intuition",
      "Benefit" : " You get a +2 bonus on Sense Motive checks and Spellcraft checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.",
      "catagory" : ["General"],
      "prereq" : ["Mystery class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ordered Mind",
      "Benefit" : " You are able to modify more of your spells to use as counterspells. The DC of the Spellcraft check you must succeed at to identify an opponent’s spell is equal to 20 + the spell level of the opponent’s spell (instead of 15 + the spell level), but you are able to cast as your counterspell any spell from the same school of the foe’s spell (instead of the same spell). The level of the spell used to counterspell must be of a level equal to or higher than your foe’s spell.",
      "catagory" : ["General"],
      "prereq" : ["Use a different spell than your foe's when using counterspell"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Painful Anchor",
      "Benefit" : " When an evil outsider uses a calling, summoning, or teleportation effect, or any ability that physically transports a creature to or from another plane (such as blink or etherealness) within your anchoring aura, it takes damage equal to 4d8 + your Charisma modifier. This damage comes from holy power and is not subject to damage reduction, energy immunities, or energy resistances.",
      "catagory" : ["General"],
      "prereq" : ["Anchoring aura class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Parry Spell",
      "Benefit" : " Whenever you successfully counter a spell, it returns back to its caster. This works exactly like the spell turning spell.Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["General"],
      "prereq" : ["Spellcraft 15 ranks", " Improved Counterspell"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Pass for Human",
      "Benefit" : " You receive a +10 bonus on Disguise checks to disguise yourself as a human, and do not receive the penalty for disguising yourself as a member of another race when you do so. In areas largely populated or settled by humans, you can take 10 on your Disguise check, meaning most people tend to assume you are human unless given a reason to think otherwise.",
      "catagory" : ["General"],
      "prereq" : ["Half-elf", " half-orc", " or halfling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Persuasive",
      "Benefit" : " You get a +2 bonus on Diplomacy and Intimidate skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Misty Euphoria",
      "Benefit" : " You gain a +2 bonus to Will saves if you have used a specific drug in the past hour. If you fail a saving throw against an enchantment effect while you are under the effects of the specific drug, you can attempt it again 1 round later at the same DC; this feat only gives you one extra chance to succeed on the saving throw (though if you have other reroll abilities, such as a rogue’s slippery mind, you may attempt them this round).Section 15: Copyright Notice - Pathfinder Chronicles: Dark Markets, A Guide to KatapeshPathfinder Chronicles: Dark Markets, A Guide to Katapesh. Copyright 2009, Paizo Publishing, LLC; Authors: Stephen S. Greer, Amber Scott, Greg A. Vaughan, and Sean K Reynolds.",
      "catagory" : ["General"],
      "prereq" : ["Gain a bonus to your Willpower while under the effects of drug."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Misty Healing",
      "Benefit" : " When you take a dose of raw specific drug, you heal 1 hit point. When you take a dose of refined specific drug, you heal 5 hit points. The specific drug still has its normal effects on you (temporary hit points, and so on).Section 15: Copyright Notice - Pathfinder Chronicles: Dark Markets, A Guide to KatapeshPathfinder Chronicles: Dark Markets, A Guide to Katapesh. Copyright 2009, Paizo Publishing, LLC; Authors: Stephen S. Greer, Amber Scott, Greg A. Vaughan, and Sean K Reynolds.",
      "catagory" : ["General"],
      "prereq" : ["Addicted to a drug"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Misty Rejuvenation",
      "Benefit" : " If you have used a drug in the past hour, and you are brought to 0 or fewer hit points, you may immediately gain 10 temporary hit points as a swift action. You may use this ability even if you are unconscious, but it cannot save you from an attack that immediately kills you.",
      "catagory" : ["General"],
      "prereq" : ["Addicted to a drug"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Planar Preservationist",
      "Benefit" : " For every summon nature's ally extract you know, you learn the equivalent summon monster spell as an extract. If you later learn other summon nature's ally extracts, you automatically learn the equivalent summon monster spell as an extract.",
      "catagory" : ["General"],
      "prereq" : ["Preservationist alchemist archetype"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Planar Wild Shape",
      "Benefit" : " When you use wild shape to take the form of an animal, you can expend an additional daily use of your wild shape class feature to add the celestial template or fiendish template to your animal form. (Good druids must use the celestial template, while evil druids must use the fiendish template.) If your form has the celestial template and you score a critical threat against an evil creature while using your form’s natural weapons, you gain a +2 bonus on the attack roll to confirm the critical hit. The same bonus applies if your form has the fiendish template and you score a critical threat against a good creature.Section 15: Copyright Notice - Pathfinder Roleplaying Game: Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["General"],
      "prereq" : ["Wild shape class feature", " Knowledge (planes) 5 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Potent Holy Symbol",
      "Benefit" : " Any round in which you use your holy symbol as a divine focus for the casting of a spell or to channel positive energy, you count as presenting a holy symbol, chanting prayers, or ringing a hand bell for the purpose of keeping vampires at bay.",
      "catagory" : ["General"],
      "prereq" : ["Good alignment", " worshiper of a good deity"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Powerful Shape",
      "Benefit" : " When in wild shape, treat your size as one category larger for the purpose of calculating CMB, CMD, carrying capacity, and any size-based special attacks you use or that are used against you (such as grab, swallow whole, and trample).",
      "catagory" : ["General"],
      "prereq" : ["Wild shape class feature", " druid 8"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Practiced Tactician",
      "Benefit" : " You can use your tactician ability to grant allies a teamwork feat one additional time per day.",
      "catagory" : ["General"],
      "prereq" : ["Tactician class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Preferred Spell",
      "Benefit" : " Choose one spell which you have the ability to cast. You can cast that spell spontaneously by sacrificing a prepared spell or spell slot of equal or higher level. You can apply any metamagic feats you possess to this spell when you cast it. This increases the minimum level of the prepared spell or spell slot you must sacrifice in order to cast it but does not affect the casting time.",
      "catagory" : ["General"],
      "prereq" : ["Spellcraft 5 ranks", " Heighten Spell"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Prodigy",
      "Benefit" : " Choose two Craft, Perform, or Profession skills in any combination (two Craft skills, a Craft skill and a Perform skill, and so on). You receive a +2 bonus on checks with these skills. If you have 10 or more ranks in any one of these skills, the bonus increases to +4 for that skill.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Prophetic Visionary",
      "Benefit" : " Once per day, you can enter a deep trance to receive a vision of the future. The trance lasts for 10 minutes, during which time you can take no other actions. If you are interrupted, you must begin again. When you come out of the trance, you know whether a particular action in the immediate future will bring good or bad results, as an augury spell with a 70% chance of success.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. ",
      "catagory" : ["General"],
      "prereq" : ["Mystery class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Protector's Strike",
      "Benefit" : " When you choose the target of your smite evil ability, you also choose one creature other than you within line of sight. While your smite is in effect, the additional creature you chose gains a deflection bonus to AC equal to your Charisma modifier against attacks made by the target of the smite. This bonus ends when the smite ends. You do not gain the deflection bonus to AC typical for the smite evil class feature.",
      "catagory" : ["General"],
      "prereq" : ["Smite evil class feature", " BAB +5"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Pure Faith",
      "Benefit" : " You gain a +4 sacred bonus to saving throws against poison.",
      "catagory" : ["General"],
      "prereq" : ["Divine health class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Quick Channel",
      "Benefit" : " You may channel energy as a move action by spending 2 daily uses of that ability.",
      "catagory" : ["General"],
      "prereq" : ["Knowledge (religion) 5 ranks", " channel energy class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Quick Wild Shape",
      "Benefit" : " You can wild shape as a move action or a swift action. However, you are limited to forms available to a druid two levels lower when changing form as a move action, or four levels lower as a swift action.",
      "catagory" : ["General"],
      "prereq" : ["Wild shape class feature", " caster level 8th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Racial Heritage",
      "Benefit" : " Choose another humanoid race. You count as both human and that race for any effects related to race. For example, if you choose dwarf, you are considered both a human and a dwarf for the purpose of taking traits, feats, how spells and magic items affect you, and so on.Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["General"],
      "prereq" : ["Human"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Radiant Charge",
      "Benefit" : " When you hit with a charge attack, you can expend all of your remaining uses of lay on hands to deal extra damage equal to 1d6 per use of lay on hands expended + your Charisma bonus. This damage comes from holy power and is not subject to damage reduction, energy immunities, or energy resistances.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. ",
      "catagory" : ["General"],
      "prereq" : ["Lay on hands class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Raging Brutality",
      "Benefit" : " While raging and using Power Attack, you can spend 3 additional rounds of your rage as a swift action to add your Constitution bonus on damage rolls for melee attacks or thrown weapon attacks you make on your turn. If you are using the weapon two-handed, instead add 1-1/2 times your Constitution bonus. This bonus damage is not multiplied on a critical hit.",
      "catagory" : ["General"],
      "prereq" : ["Rage class feature", " Power Attack", " BAB +12"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Raging Deathblow",
      "Benefit" : " While raging, whenever your attack reduces your opponent to –1 or fewer hit points, you gain 1 extra round of rage for that day. If that attack was a critical hit, you gain 1 additional extra round of rage for that day. Whenever you rest to renew your total number of rounds of rage per day, any extra rounds you still have from this feat are lost.",
      "catagory" : ["General"],
      "prereq" : ["Greater rage class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Raging Hurler",
      "Benefit" : " While raging, you can throw a two-handed weapon as a standard action, and you double the range increment for weapons you throw. If you also have the Quick Draw feat, you can throw two-handed weapons at your full normal rate of attacks. Further, you can pick up an unattended object that you can use as a improvised weapon within your reach as part of the attack action to throw that item.",
      "catagory" : ["General"],
      "prereq" : ["Rage class feature", " Throw Anything"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Raging Throw",
      "Benefit" : " While raging, when you attempt a bull rush combat maneuver, you can spend 1 additional round of your rage as a swift action to add your Constitution bonus on your combat maneuver check to the bull rush. Further, if you bull rush an opponent into a square another creature occupies or into a solid object, the opponent and the creature or object take bludgeoning damage equal to your Strength modifier + your Constitution modifier.",
      "catagory" : ["General"],
      "prereq" : ["Con 13", " rage class feature", " Improved Bull Rush", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Raging Vitality",
      "Benefit" : " Whenever you are raging, the morale bonus to your Constitution increases by +2. Your rage does not end if you become unconscious. While unconscious you must still expend rounds of rage per day each round.",
      "catagory" : ["General"],
      "prereq" : ["Con 15", " rage class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Razortusk",
      "Benefit" : " You can make a bite attack for 1d4 points of damage, plus your Strength modifier. You’re considered proficient in this attack and can apply feats or effects appropriate to natural attacks to it. If used as part of a full attack action, the bite is considered a secondary attack and is made at your full base attack bonus –5, and adds half your Strength modifier to damage.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["General"],
      "prereq" : ["Half-orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Reject Poison",
      "Benefit" : " Whenever a creature attempts to poison you with a poison you have previously used or undergone the effects of, you have a 20% chance of naturally rejecting the poison's effects on you, negating its effects and wasting its use.",
      "catagory" : ["General"],
      "prereq" : ["Dex 13", " poison use class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Remote Bomb",
      "Benefit" : " The maximum delay for your delayed bombs increases to a number of minutes equal to your level.",
      "catagory" : ["General"],
      "prereq" : ["Delayed bomb discovery"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Resilient Eidolon",
      "Benefit" : " If you are knocked unconscious, fall asleep, or are killed, your eidolon remains for a number of rounds equal to your summoner level before it is banished. If you are brought back to consciousness before this duration expires, your eidolon is not banished. If the duration expires before you are brought back to consciousness, your eidolon is banished normally.",
      "catagory" : ["General"],
      "prereq" : ["Eidolon class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Revered Guidance",
      "Benefit" : " Select one of the following creature subtypes: dwarf, elf, gnome, halfling, human, or orc. You gain a +4 racial bonus on Diplomacy checks made to influence creatures of the selected subtype.",
      "catagory" : ["General", " Aasimar"],
      "prereq" : ["Aasimar", " must be taken at 1st level"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Reward of Grace",
      "Benefit" : " Each time you use your lay on hands ability, you gain a +1 sacred bonus on all attack rolls for 1 round.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. ",
      "catagory" : ["General"],
      "prereq" : ["Lay on hands class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Reward of Life",
      "Benefit" : " Each time you use your lay on hands ability to heal a creature other than yourself, you heal a number of hit points equal to your Charisma bonus. This ability has no effect if you use lay on hands to harm undead.",
      "catagory" : ["General"],
      "prereq" : ["Lay on hands class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Rhetorical Flourish",
      "Benefit" : " When using the Diplomacy skill to make a request or change a creature’s attitude, you can use verbal misdirection. To do so, make a Bluff check against that creature. If you succeed, you gain a +4 bonus on your next Diplomacy check against that creature if the check is made within the next minute. If you fail by 5 or more, you instead take a –2 penalty on your next Diplomacy check against that creature.",
      "catagory" : ["General"],
      "prereq" : ["Cha 13", " Persuasive"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ricochet Splash Weapon",
      "Benefit" : " Whenever your splash weapon misses and the misdirection roll indicates it lands in a square occupied by a creature, you may make an attack roll (at a -5 penalty) as if you had thrown the splash weapon at that creature. If this attack roll succeeds, the splash weapon hits and the creature takes full damage instead of splash damage. Squares adjacent to this creature still take splash damage as normal.",
      "catagory" : ["General"],
      "prereq" : ["Dex 13", " Throw Anything"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Righteous Healing",
      "Benefit" : " If you cast a cure spell while you have a judgment active, each target regains 1 extra hit point from the cure spell + 1 hit point per three inquisitor levels you possess.",
      "catagory" : ["General"],
      "prereq" : ["Judgment class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Roll with It",
      "Benefit" : " If you are struck by a melee weapon you can try to convert some or all of that damage into movement that sends you off in an uncontrolled bouncing roll. To do so, you must make an Acrobatics check (DC = 5 + the damage dealt from the attack) as an immediate action. If you succeed in this check, you take no damage from the actual attack but instead convert that damage into movement with each point equating to 1 foot of movement.For example, if you would have taken 6 points of damage, you would convert that into 6 feet of movement. You immediately move in a straight line in a direction of your choice this number of feet (rounded up to the nearest 5-foot-square), halting if you reach a distance equal to your actual speed. If this movement would make you strike an object or creature of your size or larger, the movement immediately ends, you take 1d4 points of damage, and fall prone in that square. This involuntary movement provokes attacks of opportunity normally if you move through threatened squares, but does not provoke an attack of opportunity from the creature that struck you in the first place.",
      "catagory" : ["Combat", " Goblin"],
      "prereq" : ["Goblin", " Acrobatics 1 rank."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Rugged Northerner",
      "Benefit" : " You treat extreme cold conditions as severe cold, and severe cold as cold weather conditions. You are not impacted at all by normal cold weather conditions. In addition, you do not become fatigued by frostbite or hypothermia.",
      "catagory" : ["General"],
      "prereq" : ["Con 13", " Survival 1 rank"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Run",
      "Benefit" : "When running, you move five times your normal speed (if wearing medium,light, or no armor and carrying no more than a medium load) or fourtimes your speed (if wearing heavy armor or carrying a heavy load). Ifyou make a jump after a running start (see the Acrobatics skilldescription), you gain a +4 bonus on your Acrobatics check. Whilerunning, you retain your Dexterity bonus to your Armor Class.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sacred Summons",
      "Benefit" : " When using summon monster to summon creatures whose alignment subtype or subtypes exactly match your aura, you may cast the spell as a standard action instead of with a casting time of 1 round.Editor's NoteThis feat works off of the alignment subtype of a summoned creature, not the alignment of the creature. Effectively, this means that this feat will only work with creatures in the summon monster list whose subtypes (listed in the table itself) match your deity's alignment. Creatures marked with * cannot be summoned as a standard action with this feat, as they do not have the requisite alignment subtype(s).Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. ",
      "catagory" : ["General"],
      "prereq" : ["Aura class feature", " ability to cast summon monster"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Saddle Shrieker",
      "Benefit" : " You can choose to take a –1 penalty on all attack rolls and combat maneuver checks to grant your mount a +1 bonus on all attack rolls and damage rolls made with natural weapons. These effects affect you and your mount for 1 round. When your base attack bonus reaches +4, and every 4 points thereafter, this penalty increases by –1 and the bonus to your mount’s attack and damage increases by +1 to a maximum of +5. You must choose to use this feat before making an attack roll.",
      "catagory" : ["Combat", " Goblin"],
      "prereq" : ["Goblin", " Ride 1 rank."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Scholar",
      "Benefit" : "You have graduated from one of the many colleges, universities, and specialty schools of higher learning scattered throughout the Inner Sea region. Pick any two Knowledge skills. You gain a +2 bonus on these two skills. If you have 10 or more ranks in one of these Knowledge skills, the bonus increases to +4 for that skill.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Schooled Reserve",
      "Benefit" : " You add your bravery bonus on Will saves against mind-affecting spells and effects from vampires. This does not stack with the normal bravery bonus on saves against fear effects.",
      "catagory" : ["General"],
      "prereq" : ["Bravery class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sea Legs",
      "Benefit" : " You gain a +2 bonus on Acrobatics, Climb, and Swim checks.",
      "catagory" : ["General"],
      "prereq" : ["Profession (sailor) 5 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Secret Signs",
      "Benefit" : " You gain a +4 bonus on Bluff checks made to pass secret messages. In addition, you are adept at hiding the somatic components of spellcasting. If you cast a spell that has only somatic components, an observer must make a Perception check opposed by your Sleight of Hand check to notice your spellcasting. Spellcraft checks made to identify any spell you cast that has somatic components take a –2 penalty.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Section 15: Copyright Notice - Pathfinder Campaign Setting: The Inner Sea World GuidePathfinder Campaign Setting: The Inner Sea World Guide. © 2011, Paizo Publishing, LLC; Authors: Keith Baker, Wolfgang Baur, Clinton J. Boomer, Jason Bulmahn, Joshua J. Frost, Ed Greenwood, Stephen S. Greer, Jeff Grubb, James Jacobs, Michael Kortes, Tito Leati, Mike McArtor, Rob McCreary, Erik Mona, Jason Eric Nelson, Jeff Quick, Sean K Reynolds, F. Wesley Schneider, Leandra Christine Schneider, David Schwartz, Amber E. Scott, Stan!, Owen K.C. Stephens, Todd Stewart, James L. Sutter, Greg A. Vaughan, Jeremy Walker, and JD Wiker.",
      "catagory" : ["General"],
      "prereq" : ["Int 13"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Selective Channeling",
      "Benefit" : " When you channel energy, you can choose a number of targets in the area up to your Charisma modifier. These targets are not affected by your channeled energy.",
      "catagory" : ["General"],
      "prereq" : ["Cha 13", " channel energy class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Self-Sufficient",
      "Benefit" : " You get a +2 bonus on all Heal checks and Survival checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sense Link",
      "Benefit" : " When sharing the senses of your eidolon, you gain a +4 competence bonus on Perception checks for the duration of your bond senses ability.",
      "catagory" : ["General"],
      "prereq" : ["Bond senses class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shadow Druid",
      "Benefit" : " Add the following spells to your druid spell list.",
      "catagory" : ["General"],
      "prereq" : ["Add selected spells to your druid spell list"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shadow Gambit",
      "Benefit" : " As a standard action, you can draw upon energies from the Plane of Shadow to cause an ongoing figment spell you cast to damage a foe as if the illusion were real. The illusion must be one you retain ongoing control of, such as minor image, and the target must be both visible to you and within or adjacent to the area of your illusion. Using this feat immediately ends the figment’s duration.",
      "catagory" : ["General"],
      "prereq" : ["Spell Focus (illusion)", " caster level 5th."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shadow Dodge",
      "Benefit" : " You are able to use the light around you to move back and forth from shadow to light again, and your sudden shifting dazzles your enemies’ eyes. By spending a number of feet (in 10-foot increments) when you use this feat to move from one square to another and back again, you gain a Dodge bonus to your AC. This bonus is equal to +1 for every 10 feet you spend moving like this. You do not provoke an attack of opportunity while using this ability. Enemies who do not use sight in order to pinpoint your location or who are otherwise able to locate you more precisely (such as creatures that possess blindsight, tremorsense, or true seeing) ignore this AC bonus. Likewise, this feat is ineffective in areas of darkness or bright light, where one cannot readily shift between light and shadow.",
      "catagory" : ["General"],
      "prereq" : ["Dex 13", " worshiper of evil god"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shake it Off",
      "Benefit" : "You support your allies and help them recover from crippling effects. When you are adjacent to one or more allies who also have this feat, you gain a +1 bonus on saving throws per such ally (maximum +4).",
      "catagory" : ["General", " Teamwork"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shaping Focus",
      "Benefit" : " If you are a multiclassed druid, your wild shape ability is calculated as though your druid level were four higher, to a maximum level equal to your character level.",
      "catagory" : ["General"],
      "prereq" : ["Knowledge (nature) 5 ranks", " wild shape class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shapeshifter Foil",
      "Benefit" : "Your command of shapeshifting magic can disrupt similar effects in others.Prerequisite:  Knowledge (arcana) 5 ranks or Knowledge (nature) 5 ranks, ability to use any polymorph effect. A creature you deal damage to has difficulty using or maintaining polymorph effects until the end your next turn. To use a polymorph effect it must make a concentration check (DC 15 + twice the level of the effect). If you deal damage to an opponent under a polymorph effect, that opponent must succeed at a Will saving throw (DC 10 + 1/2 your character level + your Wisdom modifier) or be forced back to its original form. If you score a critical hit against such an opponent, no saving throw is allowed.",
      "catagory" : ["General"],
      "prereq" : ["Knowledge (arcana) 5 ranks or Knowledge (nature) 5 ranks", " ability to use polymorph effects"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shapeshifting Hunter",
      "Benefit" : "You blend your knowledge of foes and your shapeshifting abilities together.Prerequisite: Favored enemy class feature, wild shape class feature. Your levels of druid stack with your ranger levels for determining when you select your next favored enemy. Also, your ranger levels stack with your druid levels in determining the number of times per day you can use your wild shape class feature, up to a maximum of eight times per day.",
      "catagory" : ["General"],
      "prereq" : ["Favored enemy class feature", " wild shape class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Share Spells, Improved",
      "Benefit" : " Any non-instantaneous spell (but not any spell-like ability) you cast on yourself can also affect a creature bonded to you (such as an animal companion, eidolon, familiar, or special mount). The creature must be within 5 feet of you at the time of casting to receive the benefit. The spell’s duration is halved between you and your bonded creature (for example, a spell with a duration of 1 hour has a duration of 30 minutes for both you and your bonded creature).",
      "catagory" : ["General"],
      "prereq" : ["Spellcraft 10 ranks", " ability to acquire an animal companion", " eidolon", " familiar", " or special mount."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shared Insight",
      "Benefit" : " As a move action, you can grant all friendly creatures within 30 feet who can see or hear you a +2 bonus on Perception checks for a number of rounds equal to your Wisdom modifier (minimum 1 round).Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["General"],
      "prereq" : ["Wis 13", " half-elf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shared Judgment",
      "Benefit" : "You extend the benefits of your judgment to an ally.Prerequisite: Second judgment class feature. You can pronounce a single judgment and extend its effects to one adjacent ally instead of pronouncing a second judgment. Similarly, once you have the third judgment class feature, you can pronounce a single judgment and extend its effects to two adjacent allies instead of pronouncing a second and third judgment. Alternatively, once you have the third judgment class feature, you can pronounce two judgments and extend the effects of one judgment to one adjacent ally instead of pronouncing a third judgment. Once an ally has gained the effects of your judgment, he need not remain adjacent to you to continue gaining that benefit. You can spend a free action to end this benefit for one or both allies. If your judgment bonus is suspended for you, it is suspended for all allies, but when it resumes, it does so for all allies.",
      "catagory" : ["General"],
      "prereq" : ["Second judgment class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sharp Senses",
      "Benefit" : " You receive a +4 racial bonus on Perception skill checks. This replaces the normal bonus from the keen senses racial trait.",
      "catagory" : ["General"],
      "prereq" : ["Keen senses racial trait"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shatter Resolve",
      "Benefit" : " When you damage a creature by channeling negative energy, you fill it with fear. A creature that is affected by your channel negative energy ability and fails its Will save to halve the damage also becomes shaken for a number of rounds equal to the number of dice used to calculate the damage caused by the channel energy ability (so if you deal 1d6 points of damage, the condition lasts 1 round; if 2d6 points of damage, then 2 rounds, and so on).",
      "catagory" : ["General"],
      "prereq" : ["Channel negative energy class feature", " worshiper of evil god"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sin Seer",
      "Benefit" : " You gain the detect evil class feature. You may use it or the detect undead class feature, but not at the same time.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. ",
      "catagory" : ["General"],
      "prereq" : ["Detect undead class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Skeleton Summoner",
      "Benefit" : " Add \"human skeleton\" to the list of creatures you can summon with summon monster I and \"human skeletal champion\" to the list of creatures you can summon with summon monster III. Once per day, when you cast summon monster, you may summon a skeletal version of one of the creatures on that spell's summoning list (apply the skeleton template to that creature to create this monster).",
      "catagory" : ["General"],
      "prereq" : ["Spell Focus (necromancy)", " ability to cast summon monster"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Skill Focus",
      "Benefit" : "You get a +3 bonus on all checks involving the chosen skill. If youhave 10 or more ranks in that skill, this bonus increases to +6.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Skilled Driver",
      "Benefit" : " You gain a +4 bonus on driving checks with your chosen vehicle.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Expert Driver",
      "Benefit" : " You can make an accelerate, decelerate, or turn action as a move action instead of a standard action. Furthermore, when stopping a vehicle, you subtract 10 feet from the roll to determine how many feet the vehicle moves forward before it stops.",
      "catagory" : ["General"],
      "prereq" : ["Skilled Driver"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Slayer’s Knack",
      "Benefit" : "You know how to battle your favored enemies with such efficacy that any weapon you wield against them becomes more deadly.Prerequisite: Favored enemy class feature, base attack bonus +6. When you take this feat, choose one of your favored enemy types. Against enemies of that type, the threat range of any weapon you wield is doubled. This effect does not stack with any other effect that expands a weapon’s threat range.Special: You can take this feat multiple times. Each time you take it, you choose a different favored enemy type.",
      "catagory" : ["General"],
      "prereq" : ["Favored enemy class feature", " BAB +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sluggish Jinx",
      "Benefit" : " Your jinx’s penalty on saving throws also applies to the target’s initiative and attack rolls.",
      "catagory" : ["General"],
      "prereq" : ["Halfling Jinx trait."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sly Draw",
      "Benefit" : " When you draw a light weapon, you may make a Sleightof Hand check instead of a Bluff check to feint in combat. Other featsand abilities that affect a feint still apply to your feint.",
      "catagory" : ["General"],
      "prereq" : ["Quick Draw"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sneaking Precision",
      "Benefit" : " Whenever you successfully sneak attack an opponent for a second time on your turn, you can spend a swift action to apply the effects of one critical feat you know to that opponent.",
      "catagory" : ["General"],
      "prereq" : ["Sneak attack class feature", " Critical Focus", " any critical feat", " BAB +9"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sneaky Vagabond",
      "Benefit" : " You get a +2 bonus on Stealth checks when others are actively trying to find you. In crowds, this bonus increases to +4. Additionally, you gain a +2 circumstance bonus on Diplomacy and Knowledge (Local) checks when trying to find a place to hide.Section 15: Copyright Notice - Pathfinder Companion: Taldor, Echoes of GloryPathfinder Companion: Taldor, Echoes of Glory. Copyright 2009, Paizo Publishing, LLC; Author: Joshua J. Frost",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sociable",
      "Benefit" : " As a move action, you grant all friendly creatures within 30 feet who can see or hear you (including yourself ) a +2 bonus on Diplomacy checks for a number of rounds equal to your Charisma modifier (minimum 1 round).Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["General"],
      "prereq" : ["Cha 13", " half-elf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sorcerous Bloodstrike",
      "Benefit" : " Once per day, as an immediate action upon reducing a creature to 0 or fewer hit points with one of your sorcerer spells, you can regain one usage of a sorcerer bloodline power that has a limited number of uses per day. The slain creature must have at least half as many Hit Dice as your sorcerer level. You cannot use this feat to gain another usage of a bloodline power that you have not yet used today.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. ",
      "catagory" : ["General"],
      "prereq" : ["Cha 13", " sorcerer bloodline class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Spear Dancer",
      "Benefit" : " Each time you hit a creature with a two-handed reach weapon that you have Weapon Focus in, the creature is dazzled for 1 round.",
      "catagory" : ["General"],
      "prereq" : ["Weapon Focus (any two-handed reach weapon)", " Perform 4 ranks."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Spell Bane",
      "Benefit" : " While your bane class feature is affecting a creature type, the saving throw’s DCs for your spells increase by +2 for creatures of that type.",
      "catagory" : ["General"],
      "prereq" : ["Bane class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Spell Bluff",
      "Benefit" : " If another spellcaster tries to counterspell your casting, she adds +4 to her Spellcraft DC when trying to determine your spell.",
      "catagory" : ["General"],
      "prereq" : ["Bluff 5 ranks", " Spellcraft 5 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Spell Expertise, Minor",
      "Benefit" : " Choose one 1st-level spell that you know. You may cast that spell twice per day as a spell-like ability. The caster level for this spell-like ability is equal to your caster level in the class from whose spell list the spell is taken. The spell-like ability’s save DC is Charisma-based. If the spell has an expensive focus or material component, it may not be chosen for this feat. You cannot apply metamagic feats to this spell.",
      "catagory" : ["General"],
      "prereq" : ["Cast 4th-level spells"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Spell Expertise, Major",
      "Benefit" : " Choose one spell that you know of 5th level or lower. You may cast that spell twice per day as a spelllike ability. The caster level for this spell-like ability is equal to your caster level in the class from whose spell list the spell is taken. The spell-like ability’s save DC is Charisma-based. If the spell has an expensive focus or material component, it may not be chosen for this feat. You cannot apply metamagic feats to this spell.",
      "catagory" : ["General"],
      "prereq" : ["Minor Spell Expertise", " cast 9th-level spells"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Spell Focus",
      "Benefit" : " Add +1 to the Difficulty Class for all saving throws against spells from the school of magic you select.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Spell Focus, Greater",
      "Benefit" : "",
      "catagory" : ["General"],
      "prereq" : ["Spell Focus"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Spell Hex",
      "Benefit" : " Select one 1st-level spell in the class that grants you the major hex class feature. You can learn that spell as a hex, and can use that hex three times per day. This is a spell-like ability. You use your class level in the major-hex-granting class as your caster level for the spell hex. The spell hex uses your hex DC instead of its original spell DC.",
      "catagory" : ["General"],
      "prereq" : ["Major hex class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Spell Mastery",
      "Benefit" : " Each time you take this feat, choose a number of spells that you already know equal to your Intelligence modifier. From that point on, you can prepare these spells without referring to a spellbook.",
      "catagory" : ["General"],
      "prereq" : ["1st-level Wizard"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Spell Penetration",
      "Benefit" : " You get a +2 bonus on caster level checks (1d20 + caster level) made to overcome a creature's spell resistance.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Spell Penetration, Greater",
      "Benefit" : "",
      "catagory" : ["General"],
      "prereq" : ["Spell Penetration"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Spell Perfection",
      "Benefit" : " Pick one spell which you have the ability to cast. Whenever you cast that spell you may apply any one metamagic feat you have to that spell without affecting its level or casting time, as long as the total modified level of the spell does not use a spell slot above 9th level. In addition, if you have other feats which allow you to apply a set numerical bonus to any aspect of this spell (such as Spell Focus, Spell Penetration, Weapon Focus [ray], and so on), double the bonus granted by that feat when applied to this spell.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["General"],
      "prereq" : ["Spellcraft 15 ranks", " 3 metamagic feats"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Spell Specialization",
      "Benefit" : " Select one spell of a school for which you have taken the Spell Focus feat. Treat your caster level as being two higher for all level-variable effects of the spell.",
      "catagory" : ["General"],
      "prereq" : ["Int 13", " Spell Focus"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Spell Specialization, Greater",
      "Benefit" : " By sacrificing a prepared spell of the same or higher level than your specialized spell, you may spontaneously cast your specialized spell. The specialized spell is treated as its normal level, regardless of the spell slot used to cast it. You may add a metamagic feat to the spell by increasing the spell slot and casting time, just like a cleric spontaneously casting a cure or inflict spell with a metamagic feat.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. ",
      "catagory" : ["General"],
      "prereq" : ["Int 13", " Spell Focus", " Spell Specialization", " ability to cast 5th-level spells"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Spellsong",
      "Benefit" : " You can combine your bardic performance and your spellcasting in two ways. First, you can conceal the activity of casting a bard spell by masking it in a performance. As a swift action, you may combine your casting time of a spell with a Perform check. Observers must make a Perception or Sense Motive check opposed by your Perform check to realize you are also casting a spell. This uses 1 round of your bardic performance ability, regardless of the spell's casting time.",
      "catagory" : ["General"],
      "prereq" : ["Cha 13", " bard performance class feature", " ability to cast 1st-level spells"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Spider Step",
      "Benefit" : " As a move action, you can move up to half your slow fall distance (maximum 50 feet) across a wall or ceiling or across ropes, branches, or even water or other surfaces that cannot support your weight. You must reach a solid, level surface by the end of your turn or you will fall.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["General"],
      "prereq" : ["Acrobatics 6 ranks", " Climb 6 ranks", " monk 6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Cloud Step",
      "Benefit" : " As a move action, you can air walk (as the spell) up to half your slow fall distance, maximum 50 feet. You must reach a solid, level surface by the end of your turn or you will fall.",
      "catagory" : ["General"],
      "prereq" : ["Spider Step", " monk 12"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Splash Weapon Mastery",
      "Benefit" : " When throwing a splash weapon, you act as if you had",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Splintering Weapon",
      "Benefit" : " Whenever you use a melee or thrown weapon with the fragile weapon feature or similar quality and hit an opponent, you can give your weapon the broken condition to deal that opponent 1d4 points of bleed damage.",
      "catagory" : ["General"],
      "prereq" : ["Weapon Proficiency", " BAB +1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Split Hex",
      "Benefit" : " When you use one of your hexes (not a major hex or a grand hex) that targets a single creature, you can choose another creature within 30 feet of the first target to also be targeted by the hex.",
      "catagory" : ["General"],
      "prereq" : ["Witch 10"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Split Major Hex",
      "Benefit" : " When you use one of your major hexes (not a grand hex) that targets a creature, you can choose another creature within 30 feet of the first target to also be targeted by the major hex.",
      "catagory" : ["General"],
      "prereq" : ["Split Hex", " caster level 18th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Spontaneous Metafocus",
      "Benefit" : " Pick a single spell that you are able to cast spontaneously. When you apply metamagic feats to that spell, you can cast the spell using the normal casting time instead of at the slower casting time.",
      "catagory" : ["General"],
      "prereq" : ["Cha 13", " one metamagic feat", " ability to spontaneously cast spells"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Squash Flat",
      "Benefit" : " Whenever you make a bull rush attack and your check exceeds the target’s CMD by 5 or more, you can choose to expend one of the increments of 5 feet you would normally move the target back to instead attempt to trip the target as a part of your bull rush action. This does not provoke an attack of opportunity.",
      "catagory" : ["General"],
      "prereq" : ["Improved Bull Rush", " Merciless Rush", " worshiper of evil god"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Squire",
      "Benefit" : " This feat acts similarly to the Leadership feat, with several exceptions. You can only attract a 1st-level cohort (referred to hereafter as a squire) with this feat, and cannot recruit followers until you have the Leadership feat. You determine your Leadership score according to the rules presented in the Leadership feat, but your squire is always at least three or more levels lower than yourself.",
      "catagory" : ["General"],
      "prereq" : ["Character level 3rd", " proficiency with all martial weapons."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Stalwart",
      "Benefit" : " While using the total defense action, fighting defensively action, or Combat Expertise, you can forgo the dodge bonus to AC you would normally gain to instead gain an equivalent amount of DR, to a maximum of DR 5/—, until the start of your next turn. This damage reduction stacks with DR you gain from class features, such as the barbarian's, but not with DR from any other source. If you are denied your Dexterity bonus to AC, you are also denied this DR.",
      "catagory" : ["General"],
      "prereq" : ["Diehard", " BAB +4"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Improved Stalwart",
      "Benefit" : " Double the DR you gain from Stalwart, to a maximum of DR 10/—.",
      "catagory" : ["General"],
      "prereq" : ["Stalwart", " BAB +11"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Starlight Summons",
      "Benefit" : " Creatures you summon gain the Blind-Fight feat, a +5 bonus to Perception and Stealth checks in dim light or darkness, and their natural weapons are treated as cold iron for overcoming damage reduction.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. ",
      "catagory" : ["General"],
      "prereq" : ["Spell Focus (conjuration)", " ability to cast summon nature’s ally"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Stealthy",
      "Benefit" : " You get a +2 bonus on all Escape Artist and Stealth skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Steel Soul",
      "Benefit" : " You receive a +4 racial bonus on saving throws against spells and spell-like abilities. This replaces the normal bonus from the dwarf’s hardy racial trait.",
      "catagory" : ["General"],
      "prereq" : ["Dwarf", " hardy racial trait"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Stoic",
      "Benefit" : " You gain a +1 bonus on all saving throws against fear effects. If you successfully save against any fear effect, you are immune to further fear effects from that source for 24 hours.",
      "catagory" : ["General"],
      "prereq" : ["Iron Will"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Stonecunning, Improved",
      "Benefit" : " You receive a +4 bonus on Perception checks to notice unusual stonework. This bonus replaces the stonecunning ability’s normal bonus on Perception checks.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["General"],
      "prereq" : ["Wis 13", " dwarf", " stonecunning racial trait."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Stone-Faced",
      "Benefit" : " You receive a +4 bonus on Bluff checks to lie or conceal your feelings or true motives, but not to feint in combat or deliver secret messages. In addition, the DC for Sense Motive checks to get a hunch about you is 25 rather than 20.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["General"],
      "prereq" : ["Dwarf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Stone Read",
      "Benefit" : " While within a primarily underground or mountainous environment, you gain a +2 bonus on Perception checks. If you have 10 or more ranks in Knowledge (dungeoneering), the bonus increases to +4.",
      "catagory" : ["General"],
      "prereq" : ["Knowledge (dungeoneering) 4 ranks."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Improved Stonecunning",
      "Benefit" : " You receive a +4 bonus on Perception checks to notice unusual stonework. This bonus replaces the stonecunning ability’s normal bonus on Perception checks.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["General"],
      "prereq" : ["Wis 13", " dwarf", " stonecunning racial trait"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Stone Sense",
      "Benefit" : " You gain tremorsense to a range of 10 feet.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["General"],
      "prereq" : ["Perception 10 ranks", " Improved Stonecunning"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Stone Singer",
      "Benefit" : " When you use bardic performance with audible components underground, the range or area of your chosen performance is doubled, and you can affect deaf creatures if they possess tremorsense and are in your new range. In addition, the DC for saving throws against your bardic performance is increased by +2 for creatures of the earth subtype, regardless of where the performance occurs.",
      "catagory" : ["General"],
      "prereq" : ["Cha 13", " bardic performance", " dwarf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Strong Comeback",
      "Benefit" : "You learn quickly from past mistakes. Whenever you are allowed to reroll an ability check, a skill check, or a saving throw, you gain a +2 circumstance bonus on the reroll",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Summoner's Call",
      "Benefit" : " Whenever you summon your eidolon, it is more powerful for a brief period of time. You may give it a +2 enhancement bonus to its Strength, Dexterity, or Constitution. This bonus lasts 10 minutes after the summoning ritual is complete.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["General"],
      "prereq" : ["Eidolon class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sunlit Strike",
      "Benefit" : " Whenever you successfully hit an enemy that is vulnerable to light (such as by the light blindness, light sensitivity, or sunlight powerlessness universal monster rules) with a melee weapon you've imbued with your Arcane Strike feat, you deal an additional 1d6 points of damage to the target of your attack. The struck creature must also succeed at a Fortitude saving throw (DC 10 + 1/2 your character level + your Strength modifier) or become staggered for 1 round.",
      "catagory" : ["General", " Aasimar"],
      "prereq" : ["Arcane Strike", " daylight spell-like ability"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sunlight Summons",
      "Benefit" : " Creatures that you summon shed light as a light spell. They are immune to blinding or dazzling effects, and their natural weapons are treated as magical for overcoming damage reduction.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. ",
      "catagory" : ["General"],
      "prereq" : ["Spell Focus (conjuration)", " ability to cast summon nature’s ally"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Superior Summoning",
      "Benefit" : " Each time you cast a summoning spell that conjures more than one creature, add one to the total number of creatures summoned.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. ",
      "catagory" : ["General"],
      "prereq" : ["Augment Summoning", " caster level 3rd"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Supernal Feast",
      "Benefit" : " Whenever you are adjacent to a good outsider that takes bleed or blood drain damage, you gain 1 temporary hit point as you bathe in the celestial being's gore. Furthermore, as a full-round action, you can feast on the fallen body of a good outsider that has been dead no longer than 24 hours. When you do, you regain 1 temporary hit point per Hit Die the outsider possessed at a rate of 1 hit point per minute. Temporary hit points gained from this feat last 1d4 hours.",
      "catagory" : ["General", " Aasimar"],
      "prereq" : ["Con 15", " aasimar"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sure Grasp",
      "Benefit" : " Roll twice while climbing or when making a Reflex save to avoid falling, and take the higher result.",
      "catagory" : ["General"],
      "prereq" : ["Climb 1 rank"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Survivor",
      "Benefit" : " You gain a +5 bonus on all Constitution checks made to stabilize while dying. Once per day, if you are struck by a critical hit or sneak attack, you can spend an immediate action to negate the critical or the sneak attack damage, making the attack a normal hit.",
      "catagory" : ["General"],
      "prereq" : ["Con 13", " Diehard", " Endurance"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Swift Kitsune Shapechanger",
      "Benefit" : " You can assume human or kitsune form as a swift action. If you have the Fox Shape feat, you can assume fox form as a swift action as well.",
      "catagory" : ["General", " Kitsune"],
      "prereq" : ["Dex 13", " BAB +6", " kitsune"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Conscript",
      "Benefit" : " When wielding a farm implement (such as a hand axe, pick, pitchfork, or scythe) as a weapon, you get a +1 bonus on damage rolls. When fighting alongside other conscripts you get a +1 bonus on initiative checks.Section 15: Copyright Notice - Pathfinder Companion: Taldor, Echoes of GloryPathfinder Companion: Taldor, Echoes of Glory. Copyright 2009, Paizo Publishing, LLC; Author: Joshua J. Frost",
      "catagory" : ["General"],
      "prereq" : ["Serf in service to a lord"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Knight",
      "Benefit" : " You gain a cohort as if you had selected the Leadership feat; this cohort is a human or halfling commoner, expert, or warrior with the Imperial Squire feat. When within 10 feet of your squire, you get a +2 bonus on initiative checks and a +1 dodge bonus to AC.Section 15: Copyright Notice - Pathfinder Companion: Taldor, Echoes of GloryPathfinder Companion: Taldor, Echoes of Glory. Copyright 2009, Paizo Publishing, LLC; Author: Joshua J. Frost",
      "catagory" : ["General"],
      "prereq" : ["BAB +6", " heavy armor proficiency", " proficient in a martial weapon"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Squire",
      "Benefit" : " When within 50 feet of a mounted ally with the Mounted Combat feat, you get a +2 bonus on initiative. If this ally is injured, you gain a +1 dodge bonus on AC as long as you are within 10 feet of him.",
      "catagory" : ["General"],
      "prereq" : ["BAB +1", " proficient in a martial weapon"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Taunt",
      "Benefit" : " You can demoralize opponents using Bluff rather than Intimidate (see the Intimidate skill description for details) and take no skill check penalty for being smaller than your target.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["General"],
      "prereq" : ["Cha 13", " Small size or smaller"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Tenacious Transmutation",
      "Benefit" : " The DC of caster level checks to dispel or remove your transmutations increases by 2; even if the spell is negated, its effects persist for 1 additional round before dissipating.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["General"],
      "prereq" : ["Spell Focus (transmutation)"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Terrifying Mask",
      "Benefit" : " Anytime you can make a Sense Motive check to get a hunch or detect whether someone is trustworthy or not, you can choose to instead make an Intimidate check at a –2 penalty. This ability only works on creatures of the humanoid type.",
      "catagory" : ["General"],
      "prereq" : ["Cha 13", " Monstrous Mask", " tiefling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Theurgy",
      "Benefit" : " You can augment the power of your divine spells with arcane energy and augment your arcane spells with divine energy.",
      "catagory" : ["General"],
      "prereq" : ["Wis 13", " Int or Cha 13", " ability to cast 1st-level arcane spells", " ability to cast 1st-level divine spells"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Thoughtful Discernment",
      "Benefit" : " Once per day as a free action, you can think back about a single statement you heard in the last day and determine if it was a lie. This acts like the discern lies spell, but instead of affecting a creature, it affects a single statement a creature has made. For example, if the king told you, \"My daughter is in the monster's dungeon\" before you left to find her, as long as the king said that to you within the past day, you can use this feat to determine whether or not the king deliberately and knowingly lied to you when he made that statement.",
      "catagory" : ["General"],
      "prereq" : ["Discern lies class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Totem Spirit",
      "Benefit" : " The benefit granted by this feat depends on which Shoanti tribe you belong to:",
      "catagory" : ["General"],
      "prereq" : ["Member of a jungle tribe."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Toughness",
      "Benefit" : "You gain +3 hit points. For every Hit Die you possess beyond 3, yougain an additional +1 hit point. If you have more than 3 Hit Dice, yougain +1 hit points whenever you gain a Hit Die (such as when you gain alevel).",
      "catagory" : ["General"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Trapper’s Setup",
      "Benefit" : " When you manually trigger a trap against opponents, that trap receives either a +2 circumstance bonus on melee attack rolls or a +2 circumstance bonus to its saving throw DC.",
      "catagory" : ["General"],
      "prereq" : ["Craft (traps) 5 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Turn Undead",
      "Benefit" : " You can, as a standard action, use one of your uses of channel positive energy to cause all undead within 30 feet of you to flee, as if panicked. Undead receive a Will save to negate the effect. The DC for this Will save is equal to 10 + 1/2 your cleric level + your Charisma modifier. Undead that fail their save flee for 1 minute. Intelligent undead receive a new saving throw each round to end the effect. If you use channel energy in this way, it has no other effect (it does notheal or harm nearby creatures).",
      "catagory" : ["General"],
      "prereq" : ["Channel positive energy class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ultimate Mercy",
      "Benefit" : " You can expend 10 uses of lay on hands to bring a single dead creature you touch back to life as a raise dead spell with a caster level equal to your paladin level. You must provide the material component for raise dead or choose to accept 1 temporary negative level; this level automatically goes away after 24 hours, never becomes a permanent negative level, and cannot be overcome in any way except by waiting for the duration to expire.",
      "catagory" : ["General"],
      "prereq" : ["Cha 19", " Greater Mercy", " lay on hands", " mercy class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ultimate Resolve",
      "Benefit" : " Your aura of resolve is a 20-foot emanation, and does not end if you fall unconscious.",
      "catagory" : ["General"],
      "prereq" : ["Aura of resolve class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Uncanny Alertness",
      "Benefit" : " This feat gives you an additional +1 bonus on Perception and Sense Motive checks, and you gain a +2 bonus on saving throws against sleep and charm effects.",
      "catagory" : ["General"],
      "prereq" : ["Alertness"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Uncanny Concentration",
      "Benefit" : " You do not need to make concentration checks when affected by vigorous or violent motion or by violent weather. You gain a +2 bonus on all other concentration checks.",
      "catagory" : ["General"],
      "prereq" : ["Combat Casting"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Undead Master",
      "Benefit" : " When you cast animate dead or use the Command Undead feat, you are considered to be four levels higher when determining the number of Hit Dice you animate. When you cast command undead, your duration is doubled.",
      "catagory" : ["General"],
      "prereq" : ["Spell Focus (necromancy)", " ability to cast animate dead or command undead"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Undermining Exploit",
      "Benefit" : " You gain a +4 insight bonus on combat maneuvers against opponents that are located in rocky, difficult terrain.",
      "catagory" : ["General"],
      "prereq" : ["Knowledge (dungeoneering) 4 ranks."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Unsanctioned Detection",
      "Benefit" : " As a swift action, you can focus the clarity granted by your detect evil ability to heighten your awareness of other things. This gives you a +10 sacred bonus on Perception and Sense Motive checks for one round. This expends your use of the detect evil class ability for the next 24 hours.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. ",
      "catagory" : ["General"],
      "prereq" : ["Detect evil class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Unsanctioned Knowledge",
      "Benefit" : " Pick one 1st-level spell, one 2nd-level spell, one 3rd-level spell, and one 4th-level spell from the bard, cleric, inquisitor, or oracle spell lists. Add these spells to your paladin spell list as paladin spells of the appropriate level. Once chosen, these spells cannot be changed.",
      "catagory" : ["General"],
      "prereq" : ["Int 13", " must be able to cast 1st-level paladin spells"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Urban Forager",
      "Benefit" : " You may use the Survival skill to forage and track in urban locations using the following table:",
      "catagory" : ["General"],
      "prereq" : ["Knowledge (Local) 4 ranks", " Survival 4 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Vampiric Companion",
      "Benefit" : " Your animal companion or familiar's type changes to “undead.” The creature gains your vampire or dhampir weaknesses and fast healing 5.",
      "catagory" : ["General"],
      "prereq" : ["Dhampir or vampire", " nongood alignment", " 10 levels in a class that grants a familiar or animal companion"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Vandal",
      "Benefit" : " You treat unattended objects as if they were vulnerable to your sneak attack, but you only deal half as much damage as you would against an actual creature.For instance, if you rolled 12 extra damage from the sneak attack you would deal an extra 6 damage to the object. This only applies when attacking unattended objects.",
      "catagory" : ["Goblin"],
      "prereq" : ["Goblin", " sneak attack class feature."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Variant Prayer-Scroll",
      "Benefit" : " You gain the ability to create a different type of prayer scroll. You may create a prayer scroll with this ability by using any strip of parchment and a writing instrument, but doing so requires 10 minutes of uninterrupted work. Swapping your current prayer scroll for a different prepared one is a standard action. When wearing a different prayer scroll, you gain its special abilities, but lose your normal prayer scroll’s immunity to spell completion and spell trigger magic items. Your prayer scrolls can be used only by you, and have no effect when used by other jiang-shis. When you choose this feat, select one of the following prayer scroll types.",
      "catagory" : ["General"],
      "prereq" : ["Jiang-shi vampire"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Magic Tattoo",
      "Benefit" : " Select a school of magic (other than divination) in which you have Spell Focus—you cast spells from this school at +1 caster level. Additionally, you gain a single spell-like ability usable up to three times per day. The spell-like ability gained are as follows:",
      "catagory" : ["General"],
      "prereq" : ["Spell Focus (any except divination)"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Vermin Heart",
      "Benefit" : " You may target vermin with spells and special abilities that only affect animals (although they are still affected by spells targeting vermin as well). You may use wild empathy to influence vermin as easily as you influence animals.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["General"],
      "prereq" : ["Wild empathy class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Versatile Channeler",
      "Benefit" : " You may make a choice whenever you use your channel energy class feature.",
      "catagory" : ["General"],
      "prereq" : ["Channel energy class feature", " worship a neutral deity or neutral alignment and no deity"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Versatile Jinxer",
      "Benefit" : " Choose either Intelligence or Wisdom. The DC of your jinx is based on this ability score instead of on Charisma.",
      "catagory" : ["General"],
      "prereq" : ["Iron Will", " Halfling Jinx trait."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Vigilant Eidolon",
      "Benefit" : " While your eidolon is within your reach, you gain a +4 bonus on Perception checks. If you have 10 or more ranks in Perception, this bonus increases to +8. This does not apply if your eidolon is helpless or unconscious.",
      "catagory" : ["General"],
      "prereq" : ["Eidolon class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Voice of the Sibyl",
      "Benefit" : " You get a +1 bonus on all Bluff, Diplomacy, and Perform (oratory) skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +3 for that skill. You do not get these bonuses if you do not use your voice when using the skill (such as using Bluff to feint in combat).",
      "catagory" : ["General"],
      "prereq" : ["Cha 15"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Wand Dancer",
      "Benefit" : " When using a spell trigger item, you can move both before and after triggering the item, as long as the total distance moved is not greater than your speed. Choose one creature potentially affected by your spell trigger item. Your movement does not provoke attacks of opportunity from that creature only. You must move at least 5 feet before and after using your spell trigger item to utilize this feat.Section 15: Copyright Notice - Pathfinder Campaign Setting: The Inner Sea World GuidePathfinder Campaign Setting: The Inner Sea World Guide. © 2011, Paizo Publishing, LLC; Authors: Keith Baker, Wolfgang Baur, Clinton J. Boomer, Jason Bulmahn, Joshua J. Frost, Ed Greenwood, Stephen S. Greer, Jeff Grubb, James Jacobs, Michael Kortes, Tito Leati, Mike McArtor, Rob McCreary, Erik Mona, Jason Eric Nelson, Jeff Quick, Sean K Reynolds, F. Wesley Schneider, Leandra Christine Schneider, David Schwartz, Amber E. Scott, Stan!, Owen K.C. Stephens, Todd Stewart, James L. Sutter, Greg A. Vaughan, Jeremy Walker, and JD Wiker.",
      "catagory" : ["General"],
      "prereq" : ["Dex 13", " Dodge", " Mobility", " Perform (dance) 5 ranks."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "War Singer",
      "Benefit" : " When you use bardic performance with audible components on a battlefield (any area where a combat involving a dozen or more combatants is taking place), the range or area of your chosen performance is doubled. In addition, the DC for saving throws against your bardic performance is increased by +2 for creatures of the orc subtype, regardless of where the performance occurs.Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["General"],
      "prereq" : ["Cha 13", " bardic performance", " half-orc or orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Warrior Priest",
      "Benefit" : " You gain a +1 bonus on initiative checks and a +2 bonus on concentration checks made to cast a spell or use a spell-like ability when casting defensively or while grappled.",
      "catagory" : ["General"],
      "prereq" : ["Ability to cast divine spells", " domain or mystery class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Welcome Pain",
      "Benefit" : " Whenever you would be reduced to 0 or fewer hit points because of an ongoing or repeating damage effect (such as bleed), you may make a last-ditch effort to shed the condition. If you succeed at a DC 25 Will save, you ignore the damage that would reduce you to 0 or fewer hit points that turn. The DC of each subsequent save made in this  manner increases by 1. In addition, spells or abilities that have the pain descriptor deal only half damage to you (if any).",
      "catagory" : ["General"],
      "prereq" : ["Whenever an ongoing", " or repeating", " damage effect would reduce you to 0 or fewer hit points", " make a Will save to ignore the damage"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Well-Prepared",
      "Benefit" : " Once per day, when confronted with a situation that calls for a particular mundane item of equipment, you may make a Sleight of Hand check with a DC of 10 plus the item’s cost in gold pieces to “happen” to have such an item on your person. For example, having a crowbar would be DC 12, whereas a flask of acid would be DC 20. The item must be something you can easily carry—if you are on foot and have only a backpack, for example, you could not have a large iron cauldron. You cannot have magical items using this feat, nor can you have specific items, such as the key to a particular door. If you are stripped of your equipment or possessions, you lose the benefits of this feat until you have at least a day to resupply and “acquire” new items. You must pay of these items normally.",
      "catagory" : ["General"],
      "prereq" : ["Halfling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Wicked Valor",
      "Benefit" : " When you regain hit points by resting, you heal double the normal amount of damage. This feat does not stack with items or effects that also affect the amount of damage you recover from while resting. This feat only functions with a full night’s rest; complete bed rest is not affected by this feat.",
      "catagory" : ["General"],
      "prereq" : ["Con 15", " Diehard", " Endurance", " tiefling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Wild Speech",
      "Benefit" : " When using wild shape to take the form in which you cannot speak (such as an animal), you are able to speak normally in any language you know. This allows you to cast spells with verbal components, speak command words, and activate spell completion and spell trigger items. However, it does not give you the ability to cast spells requiring somatic components unless you also have the Natural Spell feat, or cast spells with material components merged into your form.",
      "catagory" : ["General"],
      "prereq" : ["Wild shape class feature", " druid 6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Witch Knife",
      "Benefit" : " Each day, when you prepare your spells, you can select a masterwork or magical dagger, transforming it into a witch knife, which serves as an additional focus component for witch patron spells. Add +1 to the DC of all your patron spells.",
      "catagory" : ["General"],
      "prereq" : ["Witch class"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Word of Healing",
      "Benefit" : " You may use your lay on hands to heal another creature at a range of 30 feet as a standard action that does not provoke an attack of opportunity. You must be able to speak and have a free hand to use this ability. The target heals half the amount they would have healed if you had touched them, but gains the benefits of your mercies as normal.",
      "catagory" : ["General"],
      "prereq" : ["Lay on hands class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Worst Case Jinx",
      "Benefit" : " Beneficial variable effects on a jinxed target (such as aid, cure spells, false life, the variable ability damage cured by lesser restoration, and so on) always result in the minimum possible amount for the effect. For example, a 5th-level cleric casting cure serious wounds on the target only heals 8 hit points (the minimum for 3d8+5).",
      "catagory" : ["General"],
      "prereq" : ["Knowledge (arcana) 5 ranks", " Halfling Jinx trait."],
      "onGain" : function (player) {
        return player;
      }
    }
  ],
  "gritFeats" : [
    {
      "name" : "Deft Shootist Deed",
      "Benefit" : " As long as you have at least 1 grit point, you do not provoke attacks of opportunity when shooting or reloading a firearm.",
      "catagory" : ["General", " Grit"],
      "prereq" : ["Grit class feature or Amateur Gunslinger feat", " Dodge", " Mobility."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Extra Grit",
      "Benefit" : " You gain 2 extra grit points at the start of each day, and your maximum grit increases by 2.Normal: If you are a gunslinger, you gain your Wisdom modifier in grit points at the start of each day, which is also your maximum grit. If you have the Amateur Gunslinger feat, you gain 1 grit point at the start of each day, and your maximum grit is equal to your Wisdom modifier.Special: If you possess levels in the gunslinger class, you can take this feat multiple times.",
      "catagory" : ["General", " Grit"],
      "prereq" : ["Grit class feature or Amateur Gunslinger feat."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Leaping Shot Deed",
      "Benefit" : " You gain a +2 bonus on Acrobatics checks made to jump. As a full-round action, you can move up to your speed and make firearm attacks at your highest base attack bonus with each loaded firearm you are wielding. You can make these attacks at any point during your movement, and if you are wielding two firearms, you can make the attacks at different points during the movement. At the end of this movement, you fall prone. This deed costs 1 grit point to perform.",
      "catagory" : ["General", " Grit"],
      "prereq" : ["Dex 13", " Grit class feature or Amateur Gunslinger feat", " Dodge", " Mobility", " base attack bonus +4."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "No Name",
      "Benefit" : " You often rely on surprise and misdirection in your social dealings. You gain a +2 bonus on Bluff checks, and you can spend 1 grit point to gain a +10 bonus on Disguise checks for 10 minutes per your gunslinger level (minimum 10 minutes). This deed does not actually change your appearance, but rather allows you to hide your identity in other ways.",
      "catagory" : ["General", " Grit"],
      "prereq" : ["Grit class feature or Amateur Gunslinger feat", " Bluff 4 ranks."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ricochet Shot Deed",
      "Benefit" : " You can fire a shot at a wall or piece of solid terrain, and have it ricochet off. When you do, use the square immediately in front of the wall or piece of solid terrain to determine line of sight to a target, and this square is considered the new origin square of the attack. Use that square to determine the effects of cover, and your own square to determine the effects of concealment. You can make this shot as long as you have at least 1 grit point. When making this shot, you can spend 1 grit point to ignore the effects of all cover or concealment. You must choose to spend the grit point before you make the attack roll.",
      "catagory" : ["General", " Grit"],
      "prereq" : ["Grit class feature or Amateur Gunslinger feat", " Blind-Fight."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Secret Stash Deed",
      "Benefit" : " Spend 1 grit point while in combat to recover either 1 bullet and 1 dose of black powder or 1 alchemical cartridge from a hidden stash on your person that you had, until now, forgotten about. If the bullet and black powder or the alchemical cartridges are normal shot, you do not need to pay for the ammunition. If you want to recover any other kind of ammunition, you must pay for it with gold pieces from your character’s wealth. The grit cost of this deed cannot be decreased by the Signature Deed feat, the true grit class feature, or any other similar effect that reduces the number of grit points you spend to use a deed. You also gain a +4 bonus on any Sleight of Hand checks made while gambling.",
      "catagory" : ["General", " Grit"],
      "prereq" : ["Grit class feature or Amateur Gunslinger feat", " Sleight of Hand 1 rank."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Signature Deed",
      "Benefit" : " Pick a deed that you have access to and that you must spend grit to perform. You can perform this deed for 1 fewer grit point (minimum 0). If the amount of grit needed to perform the deed is reduced to 0, you can perform this deed for the normal action cost as long as you have at least 1 grit point.",
      "catagory" : ["General", " Grit"],
      "prereq" : ["Grit class feature", " gunslinger level 11th."],
      "onGain" : function (player) {
        return player;
      }
    }
  ],
  "itemCreationFeats" : [
    {
      "name" : "Brew Fleshcrafting Poison",
      "Benefit" : " You can create a fleshcrafting poison capable ofmimicking one monster ability. Brewing a poison takes 1 day. When youcreate a fleshcrafting poison, you set the caster level, which can beno higher than your own level. The base price of a temporaryfleshcrafting poison is its caster level × the CR of the creature usedin the fleshcrafting × 50 gp. To brew a poison, you must use up rawmaterials costing 1/2 this base price.",
      "catagory" : ["Item Creation"],
      "prereq" : ["Caster level 10th", " 5 or more ranks in Craft (alchemy)"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Brew Potion",
      "Benefit" : " You can create a potion of any 3rd-level or lower spell that you know and that targets one or more creatures or objects. Brewing a potion takes 2 hours if its base price is 250 gp or less, otherwise brewing a potion takes 1 day for each 1,000 gp in its base price. When you create a potion, you set the caster level, which must be sufficient to cast the spell in question and no higher than your own level. To brew a potion, you must use up raw materials costing one half this base price.",
      "catagory" : ["Item Creation"],
      "prereq" : ["Caster level 3rd"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Craft Construct",
      "Benefit" : " You can create any construct whose prerequisites you meet. The act of animating a construct takes one day for each 1,000 gp in its market price. To create a construct, you must use up raw materials costing half of its base price, plus the full cost of the basic body created for the construct. Each construct has a special section that summarizes its costs and other prerequisites. A newly created construct has average hit points for its Hit Dice.",
      "catagory" : ["Item Creation"],
      "prereq" : ["Caster level 5th", " Craft Magic Arms and Armor", " Craft Wondrous Item."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Craft Magic Arms and Armor",
      "Benefit" : " You can create magic weapons, armor, or shields. Enhancing a weapon, suit of armor, or shield takes 1 day for each 1,000 gp in the price of its magical features. To enhance a weapon, suit of armor, or shield, you must use up raw materials costing half of this total price.",
      "catagory" : ["Item Creation"],
      "prereq" : ["Caster level 5th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Craft Rod",
      "Benefit" : " You can create magic rods. Crafting a rod takes 1 day for each 1,000 gp in its base price. To craft a rod, you must use up raw materials costing half of its base price.",
      "catagory" : ["Item Creation"],
      "prereq" : ["Caster level 9th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Craft Staff",
      "Benefit" : " You can create any staff whose prerequisites you meet. Crafting a staff takes 1 day for each 1,000 gp in its base price. To craft a staff, you must use up raw materials costing half of its base price. A newly created staff has 10 charges.",
      "catagory" : ["Item Creation"],
      "prereq" : ["Caster level 11th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Craft Wand",
      "Benefit" : " You can create a wand of any 4th-level or lower spell that you know. Crafting a wand takes 1 day for each 1,000 gp in its base price. To craft a wand, you must use up raw materials costing half of this base price. A newly created wand has 50 charges.",
      "catagory" : ["Item Creation"],
      "prereq" : ["Caster level 5th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Craft Wondrous Item",
      "Benefit" : " You can create a wide variety of magic wondrous items. Crafting a wondrous item takes 1 day for each 1,000 gp in its price. To create a wondrous item, you must use up raw materials costing half of its base price.",
      "catagory" : ["Item Creation"],
      "prereq" : ["Caster level 3rd"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Forge Ring",
      "Benefit" : " You can create magic rings. Crafting a ring takes 1 day for each 1,000 gp in its base price. To craft a ring, you must use up raw materials costing half of the base price.",
      "catagory" : ["Item Creation"],
      "prereq" : ["Caster level 7th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Inscribe Magical Tattoo",
      "Benefit" : " You can create magical tattoos, magic items inked directly into the flesh of a willing or helpless creature. Both you and the recipient of the tattoo (if the recipient is not yourself) must be present during the entire tattooing process. Magic tattoos must be placed on a part of the body normally able to hold a magic item slot, but they do not count against or interfere with magic items worn on those slots. A single slot can only hold one magical tattoo (nonmagical tattoos and tattoos acquired from the tattooed sorcerer archetype do not count against this limit). Tattoos may be inscribed on the following slots: belt, body, chest, feet, hands, head, neck, shoulder, ring (up to two), or wrist. They cannot be inscribed on armor, eye, headband, or shield slots.",
      "catagory" : ["Item Creation"],
      "prereq" : ["Craft (calligraphy", " paintings", " or tattoos) 5 ranks", " caster level 5th."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Inscribe Rune",
      "Benefit" : " You can create runes. Inscribing a rune takes one day for each 1,000 gp in its base price. To inscribe a rune, you must use up raw materials costing half of its base price.Section 15: Copyright Notice - Pathfinder 5: Sins of the SaviorsPathfinder 5: Sins of the Saviors. Copyright  2007, Paizo Publishing LLC. Author: Steven S. Greer",
      "catagory" : ["Item Creation"],
      "prereq" : ["Caster level 3rd."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Scribe Scroll",
      "Benefit" : "You can create a scroll of any spell that you know. Scribing a scrolltakes 2 hours if its base price is 250 gp or less, otherwise scribing ascroll takes 1 day for each 1,000 gp in its base price. To scribe ascroll, you must use up raw materials costing half of this base price.",
      "catagory" : ["Item Creation"],
      "prereq" : ["Caster level 1st"],
      "onGain" : function (player) {
        return player;
      }
    }
  ],
  "metamagicFeats" : [
    {
      "name" : "Bouncing Spell",
      "Benefit" : " Whenever a bouncing spell targeting a single creature has no effect on its intended target (whether due to spell resistance or a successful saving throw) you may, as a swift action, redirect it to target another eligible creature within range. The redirected spell behaves in all ways as if its new target were the original target for the spell. Spells that affect a target in any way (including a lesser effect from a successful saving throw) may not be redirected in this manner.",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Burning Spell",
      "Benefit" : "You cause creatures to take extra damage when you affect them with a spell that has the acid or fire descriptor. The acid or fire effects of the affected spell adhere to the creature, causing more damage the next round. When a creature takes acid or fire damage from the affected spell, that creature takes damage equal to 2x the spell’s actual level at the start of its next turn. The damage is acid or fire, as determined by the spell’s descriptor. If a burning spell has both the fire and acid descriptor, the caster chooses what kind of damage is dealt by the burning spell effect.Level Increase: +2 (a burning spell uses up a slot two levels higher than the spell’s actual level.)",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Coaxing Spell",
      "Benefit" : " This feat only works with mind-affecting effects. A coaxing spell affects mindless oozes and vermin as if they weren't mindless, but has no effect on other creature types.",
      "catagory" : ["Metamagic"],
      "prereq" : ["Spell Focus (enchantment)", " Knowledge (dungeoneering) 6 ranks."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Concussive Spell",
      "Benefit" : "You cause creatures to be disoriented when you affect them with a spell that has the sonic descriptor. With sonic damage comes a concussive wave of energy that rattles creatures affected by the spell. A concussive spell causes creatures that take damage from a spell that has the sonic descriptor to take a –2 penalty on attack rolls, saving throws, skill checks, and ability checks for a number of rounds equal to the actual spell level of the spell. A concussive spell only affects spells with the sonic descriptor.Level Increase: +2 (a concussive spell uses up a spell slot two levels higher than the spell’s actual level.)",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Consecrate Spell",
      "Benefit" : " A consecrated spell is treated as a maximized spell against evil creatures and creatures with the evil subtype. Against all other creatures, this feat does not modify the spell in any way (for example, a consecrated fireball acts as a normal fireball against neutral or good creatures). This feat does not stack with Maximize Spell.",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dazing Spell",
      "Benefit" : " You can modify a spell to daze a creature damaged by the spell. When a creature takes damage from this spell, they become dazed for a number of rounds equal to the original level of the spell. If the spell allows a saving throw, a successful save negates the daze effect. If the spell does not allow a save, the target can make a Will save to negate the daze effect. If the spell effect also causes the creature to become dazed, the duration of this metamagic effect is added to the duration of the spell.",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Disruptive Spell",
      "Benefit" : " Targets affected by a disruptive spell must make concentration checks when using spells or spell-like abilities (DC equals the save DC of the disruptive spell plus the level of the spell being cast) for 1 round. Targets that avoid the spell’s effects avoid this feat’s effect as well.",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Echoing Spell",
      "Benefit" : "You have learned how to release most, but not all, of a spell’s potential when you cast it. When you cast an echoing spell, it does not disappear entirely from memory, and you can cast it one additional time during that day. No effect that allows you to reprepare or recast a spell can affect the echoed spell.",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ectoplasmic Spell",
      "Benefit" : " An ectoplasmic spell has full effect against incorporeal or ethereal creatures.",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Elemental Spell",
      "Benefit" : " Choose one energy type: acid, cold, electricity, or fire. You may replace a spell’s normal damage with that energy type or split the spell’s damage, so that half is of that energy type and half is of its normal type.",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Empower Spell",
      "Benefit" : " All variable, numeric effects of an empowered spell are increased by half including bonuses to those dice rolls.",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Enlarge Spell",
      "Benefit" : " You can alter a spell with a range of close, medium, or long to increase its range by 100%. An enlarged spell with a range of close now has a range of 50 ft. + 5 ft./level, while medium-range spells have a range of 200 ft. + 20 ft./level and long-range spells have a range of 800 ft. + 80 ft./level.Level Increase: +1 (an enlarged spell uses up a spell slot one level higher than the spell's actual level.)",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Extend Spell",
      "Benefit" : " An extended spell lasts twice as long as normal. A spell with a duration of concentration, instantaneous, or permanent is not affected by this feat.Level Increase: +1 (an extended spell uses up a spell slot one level higher than the spell's actual level.)",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Flaring Spell",
      "Benefit" : "You dazzle creatures when you affect them with a spell that has the fire, light, or electricity descriptor. The electricity, fire, or light effects of the affected spell create a flaring that dazzles creatures that take damage from the spell. A flare spell causes a creature that takes fire or electricity damage from the affected spell to become dazzled for a number of rounds equal to the actual level of the spell. A flaring spell only affects spells with a fire, light, or electricity descriptor.Level Increase: +1 (a flaring spell uses up a spell slot one level higher than the spell’s actual level.)",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Focused Spell",
      "Benefit" : " When casting a spell that affects or targets more than one creature, you can choose one target or creature within the spell effect. That creature’s saving throw DC to resist the spell is increased by +2. You must choose which target to focus the spell on before casting the spell.",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Heighten Spell",
      "Benefit" : " A heightened spell has a higher spell level than normal (up to a maximum of 9th level). Unlike other metamagic feats, Heighten Spell actually increases the effective level of the spell that it modifies. All effects dependent on spell level (such as saving throw DCs and ability to penetrate a lesser globe of invulnerability) are calculated according to the heightened level.Level Increase: The heightened spell is as difficult to prepare and cast as a spell of its effective level. ",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Intensified Spell",
      "Benefit" : " An intensified spell increases the maximum number of damage dice by 5 levels. You must actually have sufficient caster levels to surpass the maximum in order to benefit from this feat. No other variables of the spell are affected, and spells that inflict damage that is not modified by caster level are not affected by this feat.",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Jinxed Spell",
      "Benefit" : " Any creature that fails its saving throw against a jinxed spell also suffers the effects of your jinx. This feat has no effect on spells that do not allow a saving throw. If the spell affects an area or multiple creatures, you must select one creature to take the jinx, unless you have the Area Jinx feat; if you have the Area Jinx feat, choose a jinx burst area within the spell’s area or among its targets and apply the jinx to those in the burst that failed their save.Level Increase: +1 (a jinxed spell uses up a spell slot one level higher than the spell’s actual level.)",
      "catagory" : ["Metamagic"],
      "prereq" : ["Any two metamagic feats", " Halfling Jinx trait."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Lingering Spell",
      "Benefit" : " You may cause an instantaneous spell that affects an area to persist until the beginning of your next turn. Those already in the area suffer no additional harm, but other creatures or objects entering the area are subject to its effects. A lingering spell with a visual manifestation obscures vision, providing concealment (20% miss chance) beyond 5 feet and total concealment (50% miss chance) beyond 20 feet.",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Maximize Spell",
      "Benefit" : "All variable, numeric effects of a spell modified by this feat aremaximized. Saving throws and opposed rolls are not affected, nor arespells without random variables.Level Increase: +3 (a maximized spell uses up a spell slot",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Merciful Spell",
      "Benefit" : " You can alter spells that inflict damage to inflict nonlethal damage instead. Spells that inflict damage of a particular type (such as fire) inflict nonlethal damage of that same type.",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Persistent Spell",
      "Benefit" : " Whenever a creature targeted by a persistent spell or within its area succeeds on its saving throw against the spell, it must make another saving throw against the effect. If a creature fails this second saving throw, it suffers the full effects of the spell, as if it had failed its first saving throw.",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Piercing Spell",
      "Benefit" : "Your studies have helped you develop methods to overcome spell resistance. When you cast a piercing spell against a target with spell resistance, it treats the spell resistance of the target as 5 lower than its actual SR.Level Increase: +1 (a piercing spell uses up a spell slot one level higher than the spell's actual level.)",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Quicken Spell",
      "Benefit" : " Casting a quickened spell is a swift action. You can perform another action, even casting another spell, in the same round as you cast aquickened spell. A spell whose casting time is more than 1 round or 1 full-round action cannot be quickened.",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Reach Spell",
      "Benefit" : " You can alter a spell with a range of touch, close, or medium to increase its range to a higher range category, using the following order: touch, close, medium, and long.",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Rime Spell",
      "Benefit" : "Creatures damaged by your spells with the cold descriptor become entangled. The frost of your cold spell clings to the target, impeding it for a short time. A rime spell causes creatures that takes cold damage from the spell to become entangled for a number of rounds equal to the original level of the spell.",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Selective Spell",
      "Benefit" : " When casting a selective spell with an area effect and a duration of instantaneous, you can choose a number of targets in the area equal to the ability score modifier used to determine bonus spells of the same type (Charisma for bards, oracles, paladins, sorcerers, and summoners; Intelligence for witches and wizards; Wisdom for clerics, druids, inquisitors, and rangers). These targets are excluded from the effects of your spell.",
      "catagory" : ["Metamagic"],
      "prereq" : ["Spellcraft 10 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shadow Grasp",
      "Benefit" : " When you cast a spell with the darkness descriptor that affects an area, creatures in the area are entangled. If the spell allows a saving throw, a successful save negates the entangle effect. If the spell does not normally allow a save, a creature can make a Reflex save (DC = the spell’s DC if it had a saving throw) to negate the effect. If the spell allows spell resistance, failing to overcome a creature’s spell resistance means it is not entangled. An entangled creature remains so as long as it is in the area of the spell and for 1 round after it leaves. A creature that leaves and reenters the area must make a new saving throw to avoid becoming entangled. Creatures that succeed at a save to resist being entangled do not have to make additional saves if they stay within the darkened area. You are never impeded by the effects of your spells modified by this feat.Level Increase: +1 (a shadow grasp spell uses up a slot one level higher than the spell’s actual level.)",
      "catagory" : ["Metamagic"],
      "prereq" : ["Tenebrous Spell", " Umbral Spell."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sickening Spell",
      "Benefit" : " You can modify a spell to sicken a creature damaged by the spell. When a creature takes damage from this spell, they become sickened for a number of rounds equal to the original level of the spell. If the spell allows a saving throw, a successful save negates the sickening effect. If the spell does not allow a save, the target can make a Fortitude save to negate the sickening effect. If the spell effect also causes the creature to become sickened, the duration of this metamagic effect is added on to the duration of the spell.",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Silent Spell",
      "Benefit" : "A silent spell can be cast with no verbal components. Spells withoutverbal components are not affected.Level Increase: +1 (a silent spell uses up a spell slot",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Still Spell",
      "Benefit" : "A stilled spell can be cast with no somatic components. Spells withoutsomatic components are not affected.Level Increase: +1 (a stilled spell uses up a spell",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Thanatopic Spell",
      "Benefit" : " A thanatopic spell pierces defenses and immunities that protect against death effects, negative levels, and energy drain, affecting the target as if the protective barrier did not exist.",
      "catagory" : ["Metamagic"],
      "prereq" : ["Knowledge (religion) 6 ranks", " Spell Focus (necromancy)"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Tenebrous Spell",
      "Benefit" : " When you cast a tenebrous spell in darkness or dim light, the spell’s effective caster level and any associated save DCs are increased by 1. Any attempts at dispelling a tenebrous spell in darkness or dim light take a –2 penalty on the dispel check.",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Threatening Illusion",
      "Benefit" : "",
      "catagory" : ["Metamagic"],
      "prereq" : ["Spell Focus (illusion)", " gnome"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Threnodic Spell",
      "Benefit" : " This feat only works on mind-affecting spells. A threnodic spell affects undead creatures (even mindless undead) as if they weren't immune to mind-affecting effects, but has no effect on living creatures.",
      "catagory" : ["Metamagic"],
      "prereq" : ["Knowledge (religion) 6 ranks", " Spell Focus (necromancy)"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Thundering Spell",
      "Benefit" : " You can modify a spell to deafen a creature damaged by the spell. When a creature takes damage from this spell, it becomes deafened for a number of rounds equal to the original level of the spell. If the spell allows a saving throw, a successful save negates the deafening effect. If the spell does not allow a save, the target can make a Fortitude save to negate the deafening effect. If the spell effect also causes the creature to become deafened, the duration of this metamagic effect is added to the duration of the spell.",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Toppling Spell",
      "Benefit" : "Your spells with the force descriptor knock the affected creatures prone. The impact of your force spell is strong enough to knock the target prone. If the target takes damage, fails its saving throw, or is moved by your force spell, make a trip check against the target, using your caster level plus your casting ability score bonus (Wisdom for clerics, Intelligence for wizards, and so on). This does not provoke an attack of opportunity. If the check fails, the target cannot attempt to trip you or the force effect in response.",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Umbral Spell",
      "Benefit" : " An umbral spell gains the darkness descriptor. As long as the spell is in effect, the creature or object affected radiates darkness in a 10-foot radius, reducing illumination similar to the effects of the darkness spell. Nonmagical sources of light, such as torches or lanterns, do not increase the light level in this area. Magical light sources only increase the light level in an area affected by an umbral spell if they are of a higher level than the umbral spell’s unmodified spell level. This effect does not stack with itself or with any other effect that creates darkness.Level Increase: +2 (an umbral spell uses up a spell slot two levels higher than the spell’s actual level.)",
      "catagory" : ["Metamagic"],
      "prereq" : ["Tenebrous Spell"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Widen Spell",
      "Benefit" : "You can alter a burst, emanation, or spread-shaped spell toincrease its area. Any numeric measurements of the spell's areaincrease by 100%.Level Increase: +3 (a widened spell uses up a spell slot three levels",
      "catagory" : ["Metamagic"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    }
  ],
  "monsterFeats" : [
    {
      "name" : "Ability Focus",
      "Benefit" : "Choose one of the creature's special attacks. Add +2 to the DC for allsaving throws against the special attack on which the creature focuses.",
      "catagory" : ["Monster"],
      "prereq" : ["Special attack."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ankle Biter",
      "Benefit" : " If you are the target of a combat maneuver you can, as an immediate action, attempt to bite your opponent in addition to any attacks of opportunity or other consequences your opponent might incur from attacking you. This bonus natural attack does not provoke an attack of opportunity itself and deals base damage appropriate for a creature of your current size (usually 1d4 for Small creatures). If grappled or pinned, you can continue to make this additional bite attack each round as swift action on your turn. You gain a bonus on any attempt to break the grapple equal to the damage you dealt with your bite that round.",
      "catagory" : ["Combat", " Monster"],
      "prereq" : ["Goblin", " Escape Artist 1 rank."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Awesome Blow",
      "Benefit" : " As a standard action, the creature may perform an awesome blow combat maneuver. If the creature's maneuver succeeds against a corporeal opponent smaller than itself, its opponent takes damage (typically slam damage plus Strength bonus) and is knocked flying 10 feet in a direction of the attacking creature's choice and falls prone. The attacking creature can only push the opponent in a straight line, and the opponent can't move closer to the attacking creature than the square it started in. If an obstacle prevents the completion of the opponent's move, the opponent and the obstacle each take 1d6 points of damage, and the opponent is knocked prone in the space adjacent to theobstacle.",
      "catagory" : ["Combat", " Monster"],
      "prereq" : ["Str 25", " Power Attack", " Improved Bull Rush", " size Large or larger."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Battle Singer",
      "Benefit" : " When using bardic performance to inspire courage in allies, you can choose to sing in Goblin—allies who do not speak Goblin gain no benefits from this performance. Allied goblins who hear your battle songs become more energetic and brave, and thus add the bonus granted by your inspire courage ability to all saving throws as a morale bonus.",
      "catagory" : ["Monster"],
      "prereq" : ["Goblin", " bardic performance class feature."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Blasting Boulder",
      "Benefit" : " You can infuse rocks thrown as part of an attack action with volatile fire energies, adding one of the following effects to a thrown rock affected by your Smoking Boulder feat.",
      "catagory" : ["Monster"],
      "prereq" : ["Smoking Boulder", " BAB +13", " heat rock special attack."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Brain Eater",
      "Benefit" : " If you eat a portion of the brain of a creature with Intelligence 3 or higher, you gain a +2 insight bonus on all skill checks and Will saving throws for 1 hour. Eating a brain is a full-round action, and the target must be dead or helpless. If the target is living, you may attempt to eat its brain as a coup de grace attack on the target, but you gain the insight bonus only if your attempt results in the victim’s death.Section 15: Copyright Notice - Classic Monsters RevisitedClassic Monsters Revisited. Copyright 2008, Paizo Publishing, LLC; Authors: Wolfgang Baur, Jason Bulmahn, Joshua J. Frost, James Jacobs, Nicolas Logue, Mike McArtor, James L. Sutter, Greg A. Vaughan, Jeremy Walker.",
      "catagory" : ["Monster"],
      "prereq" : ["Ghoul", " Int 17"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Burn! Burn! Burn!",
      "Benefit" : " You deal an extra 1d4 points of fire damage when you attack with fire from a non-magical or alchemical source (such as with torches or alchemical fire) and gain a +4 competence bonus on Reflex saving throws made to avoid catching on fire or putting yourself out when on fire. Additional damage caused by this feat does not apply to magical attacks or to splash damage.",
      "catagory" : ["Monster"],
      "prereq" : ["Goblin", " Disable Device 1 rank."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Civilized Ghoulishness",
      "Benefit" : " Your appearance is such that, while pale-skinned and gaunt, you can pass as a living humanoid of your choice. You gain a +10 racial bonus on Disguise checks made to appear human, and your channel resistance increases by +2. Ghasts with this feat can activate or suppress their stench ability as a free action.Section 15: Copyright Notice - Classic Monsters RevisitedClassic Monsters Revisited. Copyright 2008, Paizo Publishing, LLC; Authors: Wolfgang Baur, Jason Bulmahn, Joshua J. Frost, James Jacobs, Nicolas Logue, Mike McArtor, James L. Sutter, Greg A. Vaughan, Jeremy Walker.",
      "catagory" : ["Monster"],
      "prereq" : ["Ghoul", " Cha 18"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Combat Distraction",
      "Benefit" : " As a full-round action, you can choose to do something that seems to serve no useful purpose. Example actions could include laughing at another creature’s misfortune, rooting in your pockets for a snack, bending over to pick up what looks like a weird bug, or trying to fly into the air by flapping your arms like a sea gull. Although you’re acting like a lunatic, your unpredictable actions are distracting. Any creature other than a goblin within 5 feet of you takes a –2 penalty on Perception checks and concentration checks for as long as you continue to be a distraction and remain in range. This penalty stacks with other goblins performing combat distractions, as long as you’re both adjacent to the distracted target.",
      "catagory" : ["Monster"],
      "prereq" : ["Goblin", " Acrobatics 1 rank", " Escape Artist 1 rank."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Craft Construct",
      "Benefit" : " You can create any construct whose prerequisites you meet. The act of animating a construct takes one day for each 1,000 gp in its market price. To create a construct, you must use up raw materials costing half of its base price, plus the full cost of the basic body created for the construct. Each construct has a special section that summarizes its costs and other prerequisites. A newly created construct has average hit points for its Hit Dice.",
      "catagory" : ["Item Creation", " Monster"],
      "prereq" : ["Caster level 5th", " Craft Magic Arms and Armor", " Craft Wondrous Item."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dog Killer-Horse Hunter",
      "Benefit" : " You gain a +2 morale bonus on all attack and damage rolls made against dogs and horses (including dog-like and horse-like targets such a nightmares or worgs). Additionally, you gain a +2 bonus on rolls to confirm critical hits against these foes.",
      "catagory" : ["Monster"],
      "prereq" : ["Goblin", " Handle Animal 1 rank."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Draconic Defender",
      "Benefit" : "",
      "catagory" : ["Monster"],
      "prereq" : ["Con 17", " Toughness"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Draconic Discipline",
      "Benefit" : "",
      "catagory" : ["Monster"],
      "prereq" : ["Wis 17", " base Will +10", " any lawful alignment", " dragon type"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Earthtouched",
      "Benefit" : " You have a distinguishing feature such as small stature, odd coloration, or crystalline growths on your skin that mark your sorcerous potential. You gain a +1 racial bonus to your caster level when casting sorcerer spells with the [earth] descriptor. For every 3 sorcerer levels you attain, you add a new spell known of a spell level you can cast. This spell must either be from the abjuration or divination schools or have the earth descriptor.",
      "catagory" : ["Monster"],
      "prereq" : ["Cha 15", " stone giant."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Empower Spell-Like Ability",
      "Benefit" : " Choose one of the creature's spell-like abilities, subject to the restrictions below. The creature can use that ability as an empowered spell-like ability three times per day (or less, if the ability is normally usable only once or twice per day).",
      "catagory" : ["Monster"],
      "prereq" : ["Spell-like ability at caster level 6th or higher."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Flyby Attack",
      "Benefit" : "When flying, the creature can take a move action and another standardaction at any point during the move. The creature cannot take a secondmove action during a round when it makes a flyby attack.",
      "catagory" : ["Monster"],
      "prereq" : ["Fly speed."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Hover",
      "Benefit" : " A creature with this feat can halt its movement while flying, allowing it to hover without needing to make a Fly skill check. ",
      "catagory" : ["Monster"],
      "prereq" : ["Fly speed."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Impaling Charge",
      "Benefit" : " When you hit an opponent with a gore attack as part of a charge, you may also start a grapple as a free action. You do not provoke an attack of opportunity. Do not add your size modifier (if positive) to the initial CMB check made to start the grapple. Your size modifier applies as normal on all subsequent checks.Section 15: Copyright Notice - Classic Monsters RevisitedClassic Monsters Revisited. Copyright 2008, Paizo Publishing, LLC; Authors: Wolfgang Baur, Jason Bulmahn, Joshua J. Frost, James Jacobs, Nicolas Logue, Mike McArtor, James L. Sutter, Greg A. Vaughan, Jeremy Walker.",
      "catagory" : ["Monster"],
      "prereq" : ["Gore attack", " powerful charge"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Improved Natural Armor",
      "Benefit" : " The creature's natural armor bonus increases by +1.",
      "catagory" : ["Monster"],
      "prereq" : ["Natural armor", " Con 13."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Improved Natural Attack",
      "Benefit" : " Choose one of the creature's natural attack forms (not an unarmed strike). The damage for this natural attack increases by one step on the following list, as if the creature's size had increased by one category. Damage dice increase as follows: 1d2, 1d3, 1d4, 1d6, 1d8, 2d6, 3d6, 4d6, 6d6, 8d6, 12d6.",
      "catagory" : ["Monster"],
      "prereq" : ["Natural weapon", " base attack bonus +4."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Gift of Sight",
      "Benefit" : "Sometimes trolls are granted limited powers of divination by their demon god.Prerequisites: Troll, patron demon. You can read the future by cutting open your abdomen and pulling out your entrails. This is a full-round action that deals 6d6 points of damage to you. This functions as the divination spell, using your Hit Dice as the caster level. You can perform this ability no more than once per day.Section 15: Copyright Notice - Classic Monsters RevisitedClassic Monsters Revisited. Copyright 2008, Paizo Publishing, LLC; Authors: Wolfgang Baur, Jason Bulmahn, Joshua J. Frost, James Jacobs, Nicolas Logue, Mike McArtor, James L. Sutter, Greg A. Vaughan, Jeremy Walker.",
      "catagory" : ["Monster"],
      "prereq" : ["Troll"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Lead from the Back",
      "Benefit" : " During any round in which you gain the benefit of cover or concealment against at least one opponent, and you are not threatened by any opponent, you can bark orders and encouragement to your allies as a standard action. Doing so grants all allies within 30 feet a +1 bonus on all weapon damage rolls for 1 round.",
      "catagory" : ["Combat", " Monster"],
      "prereq" : ["Goblin", " Intimidate 1 rank."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Letter Fury",
      "Benefit" : " If someone reads or writes in your presence (including casting spells like glyph of warding or symbol) you can, as an immediate action, choose to activate your rage class ability for 1 round. This round of rage does not count toward the total number of rounds which you can rage each day, but if you wish to continue your rage beyond that single round you must expend rounds from your daily rage allotment as normal. Once you use this feat you must wait at least 1 minute after you cease raging before you can use it again.",
      "catagory" : ["Monster"],
      "prereq" : ["Goblin", " rage class feature."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Minotaur's Charge",
      "Benefit" : " When you hit an opponent with a charge attack, you might also initiate a bull rush as a free action. This does not require you to move into your opponent’s square and does not provoke an attack of opportunity. If you successfully push your opponent 15 feet or more, he is also knocked prone.Section 15: Copyright Notice - Classic Monsters RevisitedClassic Monsters Revisited. Copyright 2008, Paizo Publishing, LLC; Authors: Wolfgang Baur, Jason Bulmahn, Joshua J. Frost, James Jacobs, Nicolas Logue, Mike McArtor, James L. Sutter, Greg A. Vaughan, Jeremy Walker.",
      "catagory" : ["Monster"],
      "prereq" : ["Str 13", " Improved Bull Rush", " powerful charge"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Multiattack",
      "Benefit" : " The creature's secondary attacks with natural weapons take only a –2 penalty.",
      "catagory" : ["Combat", " Monster"],
      "prereq" : ["Three or more natural attacks."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Multiweapon Fighting",
      "Benefit" : " Penalties for fighting with multiple weapons are reduced by –2 with the primary hand and by –6 with off hands.",
      "catagory" : ["Combat", " Monster"],
      "prereq" : ["Dex 13", " three or more hands."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Nightstalker",
      "Benefit" : " While you are in areas of shadowy illumination or natural darkness, you ignore all size penalties to Stealth checks and instead gain a +2 bonus to Stealth checks.",
      "catagory" : ["Monster"],
      "prereq" : ["Stealthy", " darkvision", " size Large or larger."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Noxious Bite",
      "Benefit" : "",
      "catagory" : ["Monster"],
      "prereq" : ["Acidic breath weapon", " bite attack"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Quick at Hand",
      "Benefit" : " You may use any item as an improvised melee or ranged weapon without penalty.Section 15: Copyright Notice - Classic Monsters RevisitedClassic Monsters Revisited. Copyright 2008, Paizo Publishing, LLC; Authors: Wolfgang Baur, Jason Bulmahn, Joshua J. Frost, James Jacobs, Nicolas Logue, Mike McArtor, James L. Sutter, Greg A. Vaughan, Jeremy Walker.",
      "catagory" : ["Monster"],
      "prereq" : ["Ogre"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Quicken Spell-Like Ability",
      "Benefit" : " Choose one of the creature's spell-like abilities, subject to the restrictions described in this feat. The creature can use the chosen spell-like ability as a quickened spell-like ability three times per day (or less, if the ability is normally usable only once or twice per day).",
      "catagory" : ["Monster"],
      "prereq" : ["Spell-like ability at CL 10th or higher."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Roll with It",
      "Benefit" : " If you are struck by a melee weapon you can try to convert some or all of that damage into movement that sends you off in an uncontrolled bouncing roll. To do so, you must make an Acrobatics check (DC = 5 + the damage dealt from the attack) as an immediate action. If you succeed in this check, you take no damage from the actual attack but instead convert that damage into movement with each point equating to 1 foot of movement.For example, if you would have taken 6 points of damage, you would convert that into 6 feet of movement. You immediately move in a straight line in a direction of your choice this number of feet (rounded up to the nearest 5-foot-square), halting if you reach a distance equal to your actual speed. If this movement would make you strike an object or creature of your size or larger, the movement immediately ends, you take 1d4 points of damage, and fall prone in that square. This involuntary movement provokes attacks of opportunity normally if you move through threatened squares, but does not provoke an attack of opportunity from the creature that struck you in the first place.",
      "catagory" : ["Combat", " Monster"],
      "prereq" : ["Goblin", " Acrobatics 1 rank."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Saddle Shrieker",
      "Benefit" : " You can choose to take a –1 penalty on all attack rolls and combat maneuver checks to grant your mount a +1 bonus on all attack rolls and damage rolls made with natural weapons. These effects affect you and your mount for 1 round. When your base attack bonus reaches +4, and every 4 points thereafter, this penalty increases by –1 and the bonus to your mount’s attack and damage increases by +1 to a maximum of +5. You must choose to use this feat before making an attack roll.",
      "catagory" : ["Combat", " Monster"],
      "prereq" : ["Goblin", " Ride 1 rank."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Scent of Fear",
      "Benefit" : " You can track by smell and automatically pinpoint the location of opponents by scent alone if they are within 30 feet. In addition, you gain a +2 morale bonus on attack rolls against shaken or frightened opponents, and you can detect them at twice the normal scent range (120 feet, pinpoint at 60 feet). You gain a +2 bonus on all Will saves as long as a shaken or frightened target is in range. You cannot be surprised by anyone who is shaken or frightened within range of your enhanced sense of smell.",
      "catagory" : ["Monster"],
      "prereq" : ["Scent ability", " any evil alignment"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Silent as Stone",
      "Benefit" : " You gain a +4 bonus to all Stealth checks in rocky environments and may use Stealth at no penalty while climbing. If you attack with your strands in the surprise round, you may automatically choke the victim and cover his mouth with a strand to quell any sound. If you hit with a strand in the surprise round, on your next turn make a Stealth check at –5 opposed by the Perception check of nearby creatures; if you succeed, you silently drag your opponent 10 feet toward you, and your target’s allies are unaware your target is missing (barring precautions or activities that would make this obvious, such as being tied together, your target carrying the only light source, your target speaking before the attack, and so on).",
      "catagory" : ["Monster"],
      "prereq" : ["Roper", " Stealthy"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Smoking Boulder",
      "Benefit" : " When you throw a rock as part of an attack action, you can cause the boulder to erupt into a 10-foot-radius spread of heavy smoke on a successful hit. The smoke lasts for 1d4 rounds.",
      "catagory" : ["Monster"],
      "prereq" : ["BAB +11", " heat rock special attack."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Snatch",
      "Benefit" : "",
      "catagory" : ["Monster"],
      "prereq" : ["Size Huge or larger."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sow Terror",
      "Benefit" : " Anytime you win an opposed Stealth check by 5 or more you might sow terror as a standard action. You do so by scraping your nails slightly on a solid surface, causing a board to creak ever so lightly, or rapping on a window pane. The victim cannot detect the source of the sound and dismisses it as the wind or some other mundane source, but the idea that something might be lurking nearby festers in the victim’s subconscious. The victim must roll a Will save (DC 10 + 1/2 your character level + your Charisma modifier) or become shaken for 1d4 rounds.",
      "catagory" : ["Monster"],
      "prereq" : ["Stealthy"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Stone Awareness",
      "Benefit" : " You gain tremorsense 15 feet when in contact with earth or stone, including worked stone, and gain all the benefits of the tremorsense universal monster ability.",
      "catagory" : ["Monster"],
      "prereq" : ["Wis 13", " Perception 10 ranks", " stone giant."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Stone Clinger",
      "Benefit" : " You gain a climb speed of 10 feet and all the benefits of having a climb speed (bonus to Climb checks, always able to take 10 on Climb checks, and so on). You may hang upside down indefinitely from the ceiling, and then fall on any creature passing below, dealing 2d6+6 crushing or piercing damage (your choice).",
      "catagory" : ["Monster"],
      "prereq" : ["Roper"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Stone Magic",
      "Benefit" : " In addition to the usual spell-like abilities of a stone giant elder, you gain the ability to use passwall, spike stones, statue, stoneskin, and wall of stone once per day as spell-like abilities (caster level 10th, the save DCs are Charisma-based).",
      "catagory" : ["Monster"],
      "prereq" : ["Stone giant elder (700 years or older)", " Cha 17."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Vandal",
      "Benefit" : " You treat unattended objects as if they were vulnerable to your sneak attack, but you only deal half as much damage as you would against an actual creature.For instance, if you rolled 12 extra damage from the sneak attack you would deal an extra 6 damage to the object. This only applies when attacking unattended objects.",
      "catagory" : ["Monster"],
      "prereq" : ["Goblin", " sneak attack class feature."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Warren Digger",
      "Benefit" : " You gain a burrow speed of 10 feet through earth, sand, or soil.",
      "catagory" : ["Monster"],
      "prereq" : ["Ghoul", " Str 17"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Wingover",
      "Benefit" : "Once each round, a creature with this feat can turn up to 180 degrees as a free action without making a Fly skill check. This free turn does not consume any additional movement from the creature.",
      "catagory" : ["Monster"],
      "prereq" : ["Fly speed."],
      "onGain" : function (player) {
        return player;
      }
    }
  ],
  "performanceFeats" : [
    {
      "name" : "Dramatic Display*",
      "Benefit" : "While wielding the weapon in which you have Weapon Focus, you can perform a bewildering show of prowess as a full-round action. Make an Intimidate check to demoralize all foes within 30 feet who can see your display. ",
      "catagory" : ["Combat", " Performance"],
      "prereq" : ["Dazzling Display"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Hero’s Display",
      "Benefit" : " While wielding the weapon in which you have Weapon Focus, you can perform a bewildering show of prowess as a full-round action. Make an Intimidate check to demoralize all foes within 30 feet who can see your display. ",
      "catagory" : ["Combat", " Performance"],
      "prereq" : ["Dazzling Display"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Masterful Display*",
      "Benefit" : "Choose the effects of any two performance feats you have. When you make a performance combat check, you gain the benefits of those two feats, but you only gain a +2 bonus on the performance combat check.",
      "catagory" : ["Combat", " Performance"],
      "prereq" : ["Dazzling Display", "any two performance feats"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Mocking Dance",
      "Benefit" : "When you spend a swift action to make a performance combat check, before making that check you can either move 5 feet without provoking attacks of opportunity, or you can move your speed and provoke attacks of opportunity. You cannot end this move in a space where you threaten an enemy. If you do move at least 5 feet, you gain a +2 bonus on the performance combat check.",
      "catagory" : ["Combat", " Performance"],
      "prereq" : ["Acrobatics 4 ranks or Perform (dance) 4 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Murderer’s Circle",
      "Benefit" : "When you spend a swift action to make a performance combat check after scoring a critical hit or performing a combat maneuver, and you are adjacent to the target of the critical hit or combat maneuver, you can move to any other space that is adjacent to the target without provoking attacks of opportunity. You must have a clear path to that space and the ability to reach it by spending a move action. If you end this move in any space other than the one where you started, you gain a +2 bonus on the performance combat check.",
      "catagory" : ["Combat", " Performance"],
      "prereq" : ["Dodge", "Acrobatics 4 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Savage Display*",
      "Benefit" : " While wielding the weapon in which you have Weapon Focus, you can perform a bewildering show of prowess as a full-round action. Make an Intimidate check to demoralize all foes within 30 feet who can see your display. ",
      "catagory" : ["Combat", " Performance"],
      "prereq" : ["Dazzling Display"],
      "onGain" : function (player) {
        return player;
      }
    }
  ],
  "racialFeats" : [
    {
      "name" : "Angel Wings",
      "Benefit" : " You gain a pair of gleaming feathered wings that grant a fly speed of 30 feet (average maneuverability) if wearing light armor or unencumbered, or 20 feet (poor maneuverability) with a medium or heavy load or medium or heavy armor. Fly is a class skill for you.",
      "catagory" : ["—"],
      "prereq" : ["Angelic Blood", " aasimar", " character level 10th."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Angelic Blood",
      "Benefit" : " You gain a +2 bonus on saving throws against effects with the evil descriptor and on Constitution checks to stabilize when you are reduced to negative hit points (but not dead). Furthermore, each time you take bleed or blood drain damage, each undead creature or creature with the evil subtype that is currently adjacent to you also takes 1 point of damage.",
      "catagory" : ["—"],
      "prereq" : ["Con 13", " aasimar."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Angelic Flesh",
      "Benefit" : " You take a –2 penalty on Disguise and Stealth checks but gain one of the following benefits, depending on the metallic affinity of your flesh (choose one).",
      "catagory" : ["—"],
      "prereq" : ["Angelic Blood", " aasimar"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Celestial Servant",
      "Benefit" : " Your animal companion, familiar, or mount gains the celestial template and becomes a magical beast, though you may still treat it as an animal when using Handle Animal, wild empathy, or any other spells or class abilities that specifically affect animals.",
      "catagory" : ["—"],
      "prereq" : ["Aasimar", " animal companion", " familiar", " or mount class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Channel Force",
      "Benefit" : " When you channel energy to deal damage, you may choose to affect only a single target within 30 feet. In addition to dealing damage, if that single target fails its saving throw, you may pull or push the target up to 5 feet for every 2d6 points of channel energy damage you are capable of dealing.",
      "catagory" : ["Channeling"],
      "prereq" : ["Aasimar", " channel energy 2d6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Channel Force, Greater",
      "Benefit" : " When using Improved Channel Force, you can affect all creatures in a 30-foot-radius burst.",
      "catagory" : ["Channeling"],
      "prereq" : ["Channel Force", " Improved Channel Force", " Aasimar", " channel energy 6d6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Channel Force, Improved",
      "Benefit" : " When using Channel Force, you can affect all creatures in a 60-foot line or a 30-foot cone-shaped burst. You must choose to either push or pull all creatures within the affected area that fail their saves.",
      "catagory" : ["Channeling"],
      "prereq" : ["Channel Force", " Aasimar", " channel energy 4d6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Heavenly Radiance",
      "Benefit" : " You gain one additional use per day of daylight. Choose one spell from the table below; by expending a use of daylight, you may use this spell as a spell-like ability. To select a spell, you must meet the minimum character level for its listing in the table. The save DC for this spell is Charisma-based.",
      "catagory" : ["—"],
      "prereq" : ["Aasimar", " daylight spell-like ability", " sufficiently high level (see description)"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Metallic Wings",
      "Benefit" : " You gain two wing attacks. These are secondary natural attacks that deal 1d4 points of slashing damage (or 1d3 if you are Small).",
      "catagory" : ["—"],
      "prereq" : ["Angelic Blood", " Angelic Flesh", " Angel Wings", " Aasimar", " character level 11th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Black Cat",
      "Benefit" : " Once per day as an immediate action, when you are hit by a melee attack, you can force the opponent who made the attack to reroll it with a –4 penalty. The opponent must take the result of the second attack roll. This is a supernatural ability.",
      "catagory" : ["—"],
      "prereq" : ["Catfolk"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Catfolk Exemplar",
      "Benefit" : " You can take the Aspect of the Beast feat even if you do not meet the normal prerequisites. Furthermore, your catlike nature manifests in one of the following ways. You choose the manifestation when you take this feat, and cannot change it later.",
      "catagory" : ["—"],
      "prereq" : ["Catfolk"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Claw Pounce",
      "Benefit" : " When you make a charge, you can make a full attack with your claws.",
      "catagory" : ["Combat"],
      "prereq" : ["Str 13", " Dex 15", " Nimble Striker", " bab +10", " catfolk", " cat's claws racial trait or Aspect of the Beast (claws of the beast manifestation)"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Feline Grace",
      "Benefit" : " You gain a +2 bonus to your CMD against bull rush, grapple, overrun, repositioning, and trip combat maneuvers.",
      "catagory" : ["—"],
      "prereq" : ["Dexterity 13", " catfolk"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Nimble Striker",
      "Benefit" : " You do not take a –2 penalty to AC when you use the Cleave feat, Lunge feat, or when you charge.",
      "catagory" : ["—"],
      "prereq" : ["Dex 13", " bab +1", " catfolk", " sprinter racial trait"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Mother's Gift",
      "Benefit" : " Your dark legacy manifests in one of the following ways. You choose the manifestation when you choose the feat, and once selected it cannot be changed.",
      "catagory" : ["—"],
      "prereq" : ["Changeling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Blood Drinker",
      "Benefit" : " Choose one humanoid subtype, such as “goblinoid” (this subtype cannot be “dhampir”). You have acquired a taste for the blood of creatures with this subtype. Whenever you drink fresh blood from such a creature, you gain 5 temporary hit points and a +1 bonus on checks and saves based on Constitution. The effects last 1 hour. If you feed multiple times, you continue to gain hit points to a maximum of 5 temporary hit points for every three Hit Dice you have, but the +1 bonus on Constitution-based skill checks and saving throws does not stack.",
      "catagory" : ["—"],
      "prereq" : ["Dhampir"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Blood Feaster",
      "Benefit" : " If you use your Blood Drinker feat to drain 4 or more points of Constitution from a living creature, you gain a +2 bonus on damage rolls and a +1 bonus on Strength-based skill checks. This bonus lasts for a number of rounds equal to 1/2 your Hit Dice.",
      "catagory" : ["—"],
      "prereq" : ["Blood Drinker", " bab +6", " dhampir"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Blood Salvage",
      "Benefit" : " You can use your Blood Drinker feat on a dead creature of the appropriate humanoid subtype. The creature must have died less than 6 hours beforehand.",
      "catagory" : ["—"],
      "prereq" : ["Blood Drinker", " dhampir"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Diverse Palate",
      "Benefit" : " Choose a humanoid subtype or the monstrous humanoid type. You may use your Blood Drinker feat on creatures of this subtype or type.",
      "catagory" : ["—"],
      "prereq" : ["Blood Drinker", " dhampir"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Natural Charmer",
      "Benefit" : " You can take 20 on any Charisma-based skills to charm, convince, persuade, or seduce humanoids whose attitude is at least friendly to you. Taking 20 still requires 20 times the normal time to perform the skill.",
      "catagory" : ["—"],
      "prereq" : ["Cha 17", " dhampir"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Drow Nobility",
      "Benefit" : " You may use detect magic as a spell-like ability at will, and add feather fall and levitate to the spell-like abilities that you may use once each per day. Your caster level is equal to your character level.",
      "catagory" : ["—"],
      "prereq" : ["Able to use drow spell-like abilities", " drow"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Drow Nobility, Greater",
      "Benefit" : " Your detect magic spell-like ability is now constant. You may use your dancing lights, deeper darkness, faerie fire, feather fall, and levitate spell-like abilities at will.",
      "catagory" : ["—"],
      "prereq" : ["Cha 13", " Drow Nobility", " Improved Drow Nobility", " able to use drow spell-like abilities", " drow"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Drow Nobility, Improved",
      "Benefit" : " You may use your dancing lights, faerie fire, feather fall, and levitate spell-like abilities twice per day. Your darkness spell-like ability instead becomes deeper darkness, which you may use twice per day.",
      "catagory" : ["—"],
      "prereq" : ["Cha 13", " Drow Nobility", " able to use drow spell-like abilities", " drow"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Noble Spell Resistance",
      "Benefit" : " Your spell resistance is equal to 11 + your character level.",
      "catagory" : ["—"],
      "prereq" : ["Cha 13", " Wis 13", " Greater Drow Nobility", " character level 13th", " drow"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shadow Caster",
      "Benefit" : " When you cast spells of the shadow subschool or spells with the darkness descriptor, you are considered two levels higher when determining the duration of those spells.",
      "catagory" : ["—"],
      "prereq" : ["CL 1", " drow"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Spider Step",
      "Benefit" : " You can cast spider climb once per day as a spell-like ability, using your character level as the caster level. Furthermore, you gain a +4 bonus on saving throws against the web special attacks of spiders and the effects of web and other similar spells (such as the web cloud spell).",
      "catagory" : ["—"],
      "prereq" : ["Character level 3rd", " drow"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Spider Summoner",
      "Benefit" : " When casting either a summon monster spell or a summon nature's ally spell, your options increase.Depending on the level of the spell, you can summon the spiders listed below.",
      "catagory" : ["—"],
      "prereq" : ["Ability to cast summon monster or summon nature’s ally spells", " drow"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Umbral Scion",
      "Benefit" : " Select one of the following: dispel magic, divine favor, or suggestion. You may use this spell once per day as a spell-like ability. Your caster level is equal to your character level.",
      "catagory" : ["—"],
      "prereq" : ["Cha 13", " Wis 13", " Drow Nobility", " Greater Drow Nobility", " Improved Drow Nobility", " able to use drow spell-like abilities", " drow"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Umbral Scion, Improved",
      "Benefit" : " You may use dispel magic, divine favor, and suggestion once per day as spell-like abilities. Your caster level is equal to your character level.",
      "catagory" : ["—"],
      "prereq" : ["Cha 13", " Wis 13", " Drow Nobility", " Greater Drow Nobility", " Improved Drow Nobility", " Umbral Scion", " able to use drow spell-like abilities", " drow"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Giant Steps",
      "Benefit" : " When your size increases to Large or larger, your base speed increases by 20 feet. This increase applies only if the effect that changed your size does not alter your speed.",
      "catagory" : ["—"],
      "prereq" : ["Duergar", " slow and steady racial trait."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Lingering Invisibility",
      "Benefit" : " When your invisibility ends, you gain concealment for 1 round per minute of duration the invisibility effect had remaining (minimum 1 round). This only occurs if the invisibility is from your racial spell-like ability or a spell you cast. Effects that negate invisibility negate this concealment.",
      "catagory" : ["—"],
      "prereq" : ["Duergar"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Brewmaster",
      "Benefit" : " You gain a +2 bonus on Craft (alchemy) and Profession (brewer) checks, and you add +1 to the DC of any ingested poison you create.",
      "catagory" : ["—"],
      "prereq" : ["Craft (alchemy) 1 rank", " Profession (brewer) 1 rank", " dwarf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Cleave Through",
      "Benefit" : " When using Cleave or Great Cleave, if your initial attack hits, you may take a single 5-foot step as a free action before making your additional attacks. If doing so places a creature within your threatened area, that creature becomes a legal target for your additional Cleave attack(s) as long as it meets all the other prerequisites.",
      "catagory" : ["Combat"],
      "prereq" : ["Str 13", " Cleave", " Power Attack", " bab +11", " dwarf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Cloven Helm",
      "Benefit" : " When wearing a helmet, you add +1 to your AC against critical hit confirmation rolls; this benefit stacks with Dented Helm. When you use Dented Helm to deflect a critical hit, you may apply all damage from the critical hit to your helmet before applying any damage to yourself. If you take no damage, any additional effects, such as critical feats or poison, are negated.",
      "catagory" : ["Combat"],
      "prereq" : ["Dented Helm", " Hard-Headed", " bab +11", " dwarf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dented Helm",
      "Benefit" : " When wearing a helmet, you add +1 to your AC against critical hit confirmation rolls. When a critical hit is confirmed against you, as an immediate action, you can apply half of the damage from the attack to your helmet rather than yourself, applying hardness as normal. If the damage destroys your helmet, any leftover damage is applied to you. After using this feat, you are staggered until the end of your next turn. You may not use this feat if your helmet has the broken condition or the attack ignores armor bonuses to AC.",
      "catagory" : ["Combat"],
      "prereq" : ["Hard-Headed", " bab +6", " dwarf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Giant Killer",
      "Benefit" : " This functions as Goblin Cleaver, but your additional attacks can be made against creatures one size category larger than you or smaller. In addition, any such attacks made against humanoids (giant) gain a +2 circumstance bonus on attack rolls.",
      "catagory" : ["Combat"],
      "prereq" : ["Str 13", " Cleave", " Goblin Cleaver", " Orc Hewer", " Power Attack", " Strike Back", " bab +11", " dwarf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Goblin Cleaver",
      "Benefit" : " When using Cleave or Great Cleave, if your initial attack hits, you may take your additional attacks against any creature smaller than you that you threaten; your targets need not be adjacent to one another. Additional attacks you make against humanoids (goblinoid) gain a +2 circumstance bonus on attack rolls.",
      "catagory" : ["Combat"],
      "prereq" : ["Str 13", " Cleave", " Power Attack", " dwarf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Hard-headed",
      "Benefit" : " You gain a +1 bonus on attack rolls and combat maneuver checks made using a helmet. You receive a +2 bonus on saves against spells and special abilities that cause you to become staggered or stunned.",
      "catagory" : ["Combat"],
      "prereq" : ["Bab +1", " dwarf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ledge Walker",
      "Benefit" : " You can move at full speed while using Acrobatics to balance on narrow surfaces, and you gain a +4 bonus on Climb checks to catch yourself or another creature while falling. You also gain a +4 bonus on saving throws against effects that would cause you to fall prone (such as earthquakes). This bonus does not apply to your CMD against bull rush or trip attacks.",
      "catagory" : ["—"],
      "prereq" : ["Dex 13", " dwarf", " mountaineer or stability racial trait"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Orc Hewer",
      "Benefit" : " This feat functions as Goblin Cleaver, but your additional attacks can be made against creatures your size or smaller. In addition, any such attacks that you make against humanoids (orc) gain a +2 circumstance bonus on attack rolls.",
      "catagory" : ["Combat"],
      "prereq" : [" Str 13", " Cleave", " Goblin Cleaver", " Power Attack", " dwarf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shatterspell",
      "Benefit" : " As a standard action, you can attempt to sunder an ongoing spell effect as if you had the spell sunder rage power. You may use this feat once per day, plus one additional time per day for every 5 points by which your base attack bonus exceeds +10.",
      "catagory" : ["Combat"],
      "prereq" : ["Disruptive", " Spellbreaker", " dwarf", " 10th level fighter"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Toxic Recovery",
      "Benefit" : " Whenever you succeed at a saving throw against poison, you heal 1 point of ability damage of the type dealt by the poison. Whenever you heal ability damage naturally or magically, you heal 1 additional point of ability damage. This feat has no effect on penalties to ability scores or ability drain.",
      "catagory" : ["—"],
      "prereq" : ["Dwarf", " hardy racial trait"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Attuned to the Wild",
      "Benefit" : " Select one type of terrain from the ranger class's favored terrain class feature (except urban). While you are in your selected terrain type, your natural healing rate (the amount of hit points and ability damage you heal from a full night's rest) doubles.",
      "catagory" : ["—"],
      "prereq" : ["Elf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Elven Battle Training",
      "Benefit" : " You have received special training with traditional elven weapons (longbows, composite longbows, longswords, rapiers, shortbows, composite shortbows, and any weapon with the word “elven” in its name). You receive a +2 bonus to your CMD against disarm and sunder maneuvers directed at one of these weapons you are wielding. In addition, if you are wielding one of these melee weapons, you may make an additional attack of opportunity each round (this bonus stacks with Combat Reflexes).",
      "catagory" : ["Combat"],
      "prereq" : ["Bab +1", " elf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Guardian of the Wild",
      "Benefit" : " When you are in a terrain type you have selected the Attuned to the Wild feat for, you gain a +2 dodge bonus to Armor Class. If you are in an area that qualifies as more than one kind of terrain, these bonuses do not stack; you receive the bonus for only one of the terrain types.",
      "catagory" : ["—"],
      "prereq" : ["Attuned to the Wild", " elf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Mage of the Wild",
      "Benefit" : " When you are in a terrain type you have selected the Attuned to the Wild feat for, you gain a +2 bonus on caster level checks, concentration checks, and, Knowledge (arcana) and Spellcraft checks. If you are in an area that qualifies as more than one kind of terrain, these bonuses do not stack; you receive the bonus for only one of the terrain types.",
      "catagory" : ["—"],
      "prereq" : ["Attuned to the Wild", " elf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Spirit of the Wild",
      "Benefit" : " When you are in a terrain type you have selected the Attuned to the Wild feat for, you gain a +4 bonus on Perception checks made to act in the surprise round of combat. If you act in the surprise round, you gain blindsense out to a range of 30 feet during the surprise round. If you are in an area that qualifies as more than one kind of terrain, these bonuses do not stack; you receive the bonus for only one terrain type.",
      "catagory" : ["—"],
      "prereq" : ["Attuned to the Wild", " Guardian of the Wild", " elf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dark Sight",
      "Benefit" : " You gain the ability to see up to 15 feet clearly in magical darkness, such as that created by the deeper darkness spell.",
      "catagory" : ["—"],
      "prereq" : ["Gloom Sight", " fetchling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dark Sight, Improved",
      "Benefit" : " You gain the see in darkness ability and lose the light sensitivity weakness, but gain the light blindness weakness.",
      "catagory" : ["—"],
      "prereq" : ["Dark Sight", " Gloom Sight", " fetchling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Gloom Sight",
      "Benefit" : " You gain darkvision 90 ft., but gain the light sensitivity weakness.",
      "catagory" : ["—"],
      "prereq" : ["Fetchling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Gloom Strike",
      "Benefit" : " When you are within an area of dim light or darkness, you gain a +1 bonus on attack rolls against enemies that are also within dim light or darkness.",
      "catagory" : ["Combat"],
      "prereq" : ["Blind-Fight", " fetchling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shadow Ghost",
      "Benefit" : " You gain the ability to use shadow walk an additional time each day.",
      "catagory" : ["—"],
      "prereq" : ["Fetchling", " shadow walk spell-like ability"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shadow Walker",
      "Benefit" : " You can expend one use of your shadow walk spell-like ability to use dimension door as a spell-like ability. Your start and end locations for this ability must be in dim light or darkness.",
      "catagory" : ["—"],
      "prereq" : ["Fetchling", " shadow walk spell-like ability"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Arcane School Spirit",
      "Benefit" : "",
      "catagory" : ["—"],
      "prereq" : ["Bluff 1 rank", " arcane school class feature", " gnome"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Bewildering Koan",
      "Benefit" : " As a swift action, spend 1 point from your ki pool and make a Bluff check by asking a creature one of the impossible questions you ponder when meditating.If the creature fails its check*, you choose whether it loses its next action or you gain a +2 bonus on all damage rolls you make against that creature for 1 round.",
      "catagory" : ["—"],
      "prereq" : ["Bluff 1 rank", " ki pool class feature", " gnome"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Casual Illusionist",
      "Benefit" : " As long as you have at least one spell-like ability unused from your gnome magic racial trait, you gain a +2 racial bonus on all Bluff, Disguise, and Sleight of Hand checks you make. At 10th level, these bonuses increase to +4.",
      "catagory" : ["—"],
      "prereq" : ["Gnome", " gnome magic racial trait"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Effortless Trickery",
      "Benefit" : " You can maintain concentration on one spell of the illusion school as a swift action. This has no effect on spells of other schools or on illusion spells with durations that don’t depend on your active concentration. While you may only maintain one spell as a swift action, you may take your move and standard actions to maintain other spells normally, if you wish.",
      "catagory" : ["—"],
      "prereq" : ["Gnome"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Extra Gnome Magic",
      "Benefit" : " You gain an additional three uses per day of your gnome spell-like abilities (dancing lights, ghost sound, prestidigitation). You can use these in any combination; for example, you can use dancing lights four times in one day (taking all three additional uses for the same spell), or you can cast ghost sound twice, prestidigitation twice, speak with animals twice, and dancing lights once. If you have a feat, trait, or other ability that changes your racial 0-level spell-like abilities to other 0-level spells, this feat applies to them instead.Paizo Peripheral ",
      "catagory" : ["—"],
      "prereq" : ["Cha 13", " gnome"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Expanded Resistance",
      "Benefit" : " Select one school of magic other than illusion. You gain a +2 racial bonus on saving throws against spells or effects from the selected school.",
      "catagory" : ["—"],
      "prereq" : ["Gnome", " illusion resistance racial trait"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Gnome Weapon Focus",
      "Benefit" : " You gain a +1 bonus on attack rolls with gnome weapons (weapons with “gnome” in the title).",
      "catagory" : ["Combat"],
      "prereq" : ["Bab +1", " gnome", " proficient with all martial weapons"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Great Hatred",
      "Benefit" : " You gain an additional +1 bonus on melee and thrown weapon attacks against targets of your hatred racial trait.",
      "catagory" : ["Combat"],
      "prereq" : ["Gnome", " hatred racial trait"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Tantrum",
      "Benefit" : "",
      "catagory" : ["Combat"],
      "prereq" : ["Bluff 1 rank", " rage class feature", " gnome"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Vast Hatred",
      "Benefit" : " Select two creature types (and subtypes where appropriate) from the list of potential favored enemies from the ranger class ability. Your +1 attack bonus from the hatred racial trait applies to creatures of the selected types (and subtypes).",
      "catagory" : ["Combat"],
      "prereq" : ["Gnome", " hatred racial trait"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ankle Biter",
      "Benefit" : " If you are the target of a combat maneuver you can, as an immediate action, attempt to bite your opponent in addition to any attacks of opportunity or other consequences your opponent might incur from attacking you. This bonus natural attack does not provoke an attack of opportunity itself and deals base damage appropriate for a creature of your current size (usually 1d4 for Small creatures). If grappled or pinned, you can continue to make this additional bite attack each round as swift action on your turn. You gain a bonus on any attempt to break the grapple equal to the damage you dealt with your bite that round.",
      "catagory" : ["Combat"],
      "prereq" : ["Goblin", " Escape Artist 1 rank"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Battle Singer",
      "Benefit" : " When using bardic performance to inspire courage in allies, you can choose to sing in Goblin—allies who do not speak Goblin gain no benefits from this performance. Allied goblins who hear your battle songs become more energetic and brave, and thus add the bonus granted by your inspire courage ability to all saving throws as a morale bonus.",
      "catagory" : ["—"],
      "prereq" : ["Goblin", " bardic performance class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Burn! Burn! Burn!",
      "Benefit" : " You deal an extra 1d4 points of fire damage when you attack with fire from an alchemical or non-magical source (such as with alchemical fire or torches) and gain a +4 competence bonus on Reflex saving throws made to avoid catching on fire or to put yourself out when on fire. Additional damage caused by this feat does not apply to magical attacks (such as an alchemist's bomb) or to splash damage.",
      "catagory" : ["—"],
      "prereq" : ["Goblin", " Disable Device 1 rank"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fire Hand",
      "Benefit" : " You can wield a torch as a weapon without taking the nonproficient penalty and gain a +1 bonus on attack rolls with melee weapons that deal fire damage.",
      "catagory" : ["Combat"],
      "prereq" : ["Goblin"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fire Tamer",
      "Benefit" : " You gain a +2 bonus on saves against spells with the fire descriptor. Additionally, your scars mark you as a talented fire tamer, granting you a +2 circumstance bonus on Diplomacy and Intimidate checks when dealing with other goblins.",
      "catagory" : ["—"],
      "prereq" : ["Goblin"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Flame Heart",
      "Benefit" : " You gain fire resistance 5. When casting spells with the fire descriptor or throwing alchemist bombs that deal fire damage, treat your caster level or alchemist level as if you were 1 level higher.",
      "catagory" : ["—"],
      "prereq" : ["Fire Tamer", " character level 5th", " goblin"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Goblin Gunslinger",
      "Benefit" : " You can wield Medium firearms without taking the penalty for an inappropriately sized weapon.",
      "catagory" : ["Combat"],
      "prereq" : ["Goblin"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Tangle Feet",
      "Benefit" : " When you successfully make an Acrobatics check to avoid provoking an attack of opportunity from a larger opponent when you move through its threatened area or its space, you can make that opponent lose its balance until the end of its next turn as a free action. While that creature’s balance is lost, if it attempts to move, it must make a successful DC 15 Acrobatics check or fall prone, wasting the move action. You can only affect one creature with this effect each round.",
      "catagory" : ["Combat"],
      "prereq" : ["Dodge", " Mobility", " Underfoot", " Goblin", " Small size or smaller"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Agile Tongue",
      "Benefit" : " You have a prehensile tongue with a range of 10 feet. You can pick up items weighing no more than 5 pounds, make Sleight of Hand checks, perform the steal or disarm combat maneuvers, or make melee touch attacks with your tongue.",
      "catagory" : ["—"],
      "prereq" : ["Grippli"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Discerning Eye",
      "Benefit" : " You receive a +2 racial bonus on saving throws against illusion spells and effects and a +2 bonus on Linguistics checks to detect forgeries. You can use the Linguistics skill to detect forgeries untrained.",
      "catagory" : ["—"],
      "prereq" : ["Elf or half-elf", " keen senses racial trait"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Elven Spirit",
      "Benefit" : " You possess the elven magic racial trait of the elves, granting you a +2 racial bonus on caster level checks made to overcome spell resistance. In addition, you receive a +2 racial bonus on Spellcraft checks made to identify the properties of magic items. Alternatively, you can instead gain any one racial trait that elves can exchange for the elven magic racial trait.",
      "catagory" : ["—"],
      "prereq" : ["Half-elf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Exile's Path",
      "Benefit" : " Once per day, when you fail a Will save against an enchantment spell or effect, you may reroll that saving throw, but must take the reroll result even if it's worse.",
      "catagory" : ["—"],
      "prereq" : ["Half-elf."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Half-Drow Paragon",
      "Benefit" : " You count as a drow for any effects that relate to race. Furthermore, the spell-like abilities granted to you by your drow magic racial trait count as drow spell-like abilities for the purposes of any feat prerequisites.",
      "catagory" : ["—"],
      "prereq" : ["You count as a drow for any effects that relate to race"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Human Spirit",
      "Benefit" : " You receive 1 bonus skill rank. Whenever you gain another Hit Die, you gain an additional skill rank. You cannot gain more than four skill ranks in this way.",
      "catagory" : ["—"],
      "prereq" : ["Half-elf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Multitalented Mastery",
      "Benefit" : " All of your classes are considered favored classes. You gain either +1 hit point or +1 skill point whenever you take a level in any class. Apply these bonuses retroactively for all class levels that have not yet gained one of these bonuses.",
      "catagory" : ["—"],
      "prereq" : ["Character level 5th", " half-elf", " multitalented racial trait"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Neither Elf Nor Human",
      "Benefit" : " You are not considered elven or human for the purpose of harmful spells or effects based on your type, like a bane weapon or a ranger's favored enemy class feature.",
      "catagory" : ["—"],
      "prereq" : ["Exile’s Path", " Seen and Unseen", " character level 11th", " half-elf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Seen and Unseen",
      "Benefit" : " You gain a +2 bonus on all saving throws against scrying or divination effects. Additionally, you gain a +2 bonus on all Stealth checks, and elves, half-elves, and humans take a –4 penalty on all efforts to track you through the Survival skill.",
      "catagory" : ["—"],
      "prereq" : ["Exile’s Path", " character level 5th", " half-elf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shared Manipulation",
      "Benefit" : " As a move action, you can grant all friendly creatures within 30 feet who can see or hear you a +2 bonus on Bluff or Intimidate checks (choose which skill to affect each time you use this ability) for a number of rounds equal to your Charisma modifier (minimum 1 round).",
      "catagory" : ["—"],
      "prereq" : ["Cha 13", " half-elf"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Adaptive Fortune",
      "Benefit" : " Increase the number of times per day you can use the adaptable luck racial trait by 1. Furthermore, when you use adaptable luck, increase the luck bonus for each type of use by 2.",
      "catagory" : ["—"],
      "prereq" : ["Fortunate One", " adaptable luck racial trait", " character level 10th", " halfling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Blundering Defense",
      "Benefit" : " Whenever you fight defensively or use the total defense action, allies gain a luck bonus to AC and CMD equal to 1/2 the dodge bonus you gain from the action you are taking. Allies only gain this bonus while they are adjacent to you.",
      "catagory" : ["Combat"],
      "prereq" : ["Cautious Fighter", " halfling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Cautious Fighter",
      "Benefit" : " When fighting defensively or using total defense, your dodge bonus to AC increases by 2.",
      "catagory" : ["Combat"],
      "prereq" : ["Halfling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Courageous Resolve",
      "Benefit" : " If you have the fearless racial trait, your racial bonus on saving throws against fear effects increases to +4. If you have the craven racial trait, you still take the –2 penalty on fear saves, but you can gain the benefit of morale bonuses on saving throws against fear effects.",
      "catagory" : ["—"],
      "prereq" : ["Craven racial trait or fearless racial trait", " halfling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Desperate Swing",
      "Benefit" : " Once per day, you can make a single melee attack while taking the total defense action. You take a –4 penalty on attack rolls when making this attack. You also gain a +4 bonus on critical confirmation rolls made while fighting defensively or making an attack of opportunity using this feat.",
      "catagory" : ["Combat"],
      "prereq" : ["Cautious Fighter", " bab +1", " halfling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fortunate One",
      "Benefit" : " The number of times per day you can use the adaptable luck racial trait increases by 1.",
      "catagory" : ["—"],
      "prereq" : ["Adaptable luck racial trait", " halfling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Halfling Slinger",
      "Benefit" : " You gain a +1 racial bonus on attack rolls made using a sling.",
      "catagory" : ["Combat"],
      "prereq" : ["Halfling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Improved Low Blow",
      "Benefit" : " Your bonus to confirm critical hits against opponents larger than yourself improves to +2. Furthermore, once per day, after you fail to hit with a critical hit confirmation roll, you can reroll the confirmation roll, but must take the new result even if it is worse.",
      "catagory" : ["Combat"],
      "prereq" : ["Bab +4", " halfling", " low-blow racial trait"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Lucky Halfling",
      "Benefit" : " Once per day, when one of your allies within 30 feet makes a saving throw, you may roll the same saving throw as if you were the one subject to the effect requiring it. You may use this ability after your ally has rolled, but before the GM declares if the roll was a success or failure. Your ally may choose to use your saving throw in place of his own.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["—"],
      "prereq" : ["Halfling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Lucky Healer",
      "Benefit" : " Spend a use of your adaptive luck racial trait to reroll the damage healed from a single magical healing effect (such as a spell with “cure” in the title or channel energy). You regain a number of hit points equal to the new roll or the original roll, whichever is greater. Other creatures healed by the effect do not gain this benefit.",
      "catagory" : ["—"],
      "prereq" : ["Adaptive luck racial trait", " halfling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Lucky Strike",
      "Benefit" : " Spend a use of your adaptive luck racial trait to reroll the damage from a single weapon attack. You deal damage equal to the new damage roll, or the original roll, whichever is greater.",
      "catagory" : ["Combat"],
      "prereq" : ["Bab +5", " adaptive luck racial trait", " halfling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Risky Striker",
      "Benefit" : " You can choose to take a –1 penalty to AC to gain a +2 bonus on melee damage rolls against creatures two or more size categories larger than you. When your base attack bonus reaches +4 and every four levels thereafter, the damage increases by 2. The bonus damage is multiplied in the case of a critical hit. You can only choose to use this feat when you declare that you are making an attack action or a full-attack action with a melee weapon. The effects last until your next turn.",
      "catagory" : ["Combat"],
      "prereq" : ["Bab +1", " halfling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sure and Fleet",
      "Benefit" : " You gain a +2 racial bonus on Acrobatics and Climb checks.",
      "catagory" : ["—"],
      "prereq" : ["Fleet of foot racial trait", " halfling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Surprise Strike",
      "Benefit" : " Once per day, when fighting defensively or making an attack of opportunity while taking the total defense action with the Desperate Swing feat, you take no penalty on the attack roll.",
      "catagory" : ["Combat"],
      "prereq" : ["Cautious Fighter", " Desperate Swing", " bab +6", " halfling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Uncanny Defense",
      "Benefit" : " While fighting defensively or taking the total defense action, you gain a bonus on your Reflex saving throws and to your CMD equal to 1/2 of the dodge bonus to AC you gained from taking that action.",
      "catagory" : ["Combat"],
      "prereq" : ["Cautious Fighter", " bab +3", " halfling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Beast Rider",
      "Benefit" : " Select one of the following creature types: elephant, pteranodon, rhinoceros, stegosaurus, or triceratops. Add this creature type to your list of possible animal companions or mounts. When summoning a creature of the selected type to serve as a mount or companion, treat your effective druid level as if it were two levels higher (to a maximum of your character level). If the creature is large enough for you to ride, it gains the combat training general purpose (see Handle Animal) at no cost.",
      "catagory" : ["—"],
      "prereq" : ["Animal companion or mount class feature", " character level 7th", " half-orc or orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Blood Vengance",
      "Benefit" : " Whenever one of your allies is reduced to negative hit points or killed, you may enter a state similar to but less powerful than a barbarian's rage as a free action on your next turn. If you have the rage class feature and are already raging, your morale bonuses to Strength and Constitution increase by +2 for the duration of your rage. If you do not have the rage class feature, or you have no more rage rounds left, this weaker rage gives you all the benefits and penalties of a barbarian's rage, except your morale bonus to Strength and Constitution is only +2. In either case, this state lasts for 4 rounds.",
      "catagory" : ["-"],
      "prereq" : ["Half-orc or orc", " nonlawful"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Destroyer's Blessing",
      "Benefit" : " When you are raging and you succeed at a sunder combat maneuver, you regain 1 round of rage. If the sunder attempt causes the object to gain the broken condition, you heal 1 hit point. You can only gain these benefits once per round.",
      "catagory" : ["Combat"],
      "prereq" : ["Half-orc or orc", " rage class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ferocious Resolve",
      "Benefit" : " You gain the ferocity universal monster ability, allowing you to continue fighting at negative hit points. When using this ability, you gain a +2 bonus on Intimidate checks.",
      "catagory" : ["-"],
      "prereq" : ["Con 13", " half-orc", " orc ferocity racial trait"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ferocious Summons",
      "Benefit" : " Creatures you summon gain the ferocity universal monster ability.",
      "catagory" : ["—"],
      "prereq" : ["Augment Summoning", " Spell Focus (conjuration)", " half-orc or orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ferocious Tenacity",
      "Benefit" : " Once per day when raging, if you are hit by an attack that would deal enough hit points of damage to kill you (negative hit points equal to your Constitution score), as an immediate action you may expend 1 or more rounds of rage to negate some of this damage and keep yourself alive. Each round of rage you spend reduces the attack's damage by 1 point, but cannot reduce the damage taken below 1 hit point.",
      "catagory" : ["Combat"],
      "prereq" : ["Ferocity racial trait", " half-orc or orc", " rage class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fire God's Blessing",
      "Benefit" : " When in combat, if you deal fire damage to an enemy, you heal 1 hit point. You can only benefit from this healing once per round. Attacks that cause a target to catch on fire heal you each round the target takes fire damage.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Section 15: Copyright Notice - Pathfinder Companion: Orcs of GolarionPathfinder Companion: Orcs of Golarion. Copyright 2010, Paizo Publishing, LLC; Authors: Steve Kenson, Rob McCreary, Richard Pett, Sean K Reynolds, and JD Wiker.",
      "catagory" : ["—"],
      "prereq" : ["Half-orc or orc", " worshiper of the Fire God"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Gore Fiend",
      "Benefit" : " When you are raging and you confirm a critical hit with a melee weapon or a critical hit is confirmed on you (whether by a melee weapon, spell, or ranged weapon), you regain 1 round of rage (up to your maximum for the day). You can only gain this benefit once per round.",
      "catagory" : ["—"],
      "prereq" : ["Half-orc or orc", " rage class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Horde Charge",
      "Benefit" : " When charging during the same round as an ally with this feat, you gain a +2 bonus on attack and damage rolls in addition to the normal bonus for charging. If you can make multiple attacks on a charge, this bonus only applies to the first attack.",
      "catagory" : ["Teamwork"],
      "prereq" : ["Bab +1", " half-orc or orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Resilient Brute",
      "Benefit" : " Once per day, when a creature confirms a critical hit against you, you may treat half the damage as nonlethal damage. You cannot use this ability if you are immune to nonlethal damage. When your base attack bonus reaches +10, you may use this ability an additional time per day.",
      "catagory" : ["—"],
      "prereq" : ["Half-orc or orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Surprise Follow-Through",
      "Benefit" : " When using Cleave or Great Cleave, the second foe you attack on your turn is denied its Dexterity bonus against you.",
      "catagory" : ["Combat"],
      "prereq" : ["Str 13", " Cleave", " Power Attack", " bab +1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Surprise Follow-Through, Improved",
      "Benefit" : " When using Great Cleave, each opponent you attack on your turn (other than the first) is denied his Dexterity bonus against you.",
      "catagory" : ["Combat"],
      "prereq" : ["Str 13", " Cleave", " Great Cleave", " Power Attack", " Surprise Follow Through", " bab +8"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sympathetic Rage",
      "Benefit" : " Whenever you are adjacent to an ally who is raging, you may choose to enter a similar but less powerful rage as a free action on your turn. This weaker rage gives you all the benefits and penalties of a barbarian's rage, except your morale bonus to Strength and Constitution is only +2. There is no limit to how long you can rage, as long as you remain adjacent to a raging ally (for example, you could take a 5-foot step away from one raging ally toward another raging ally and maintain your rage). As with a barbarian's rage, when this weaker rage ends, you are fatigued. You cannot use this feat if you are fatigued.",
      "catagory" : ["Combat"],
      "prereq" : ["Half-orc or orc", " nonlawful"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Tenacious Survivor",
      "Benefit" : " When you are killed by hit point damage, your soul lingers in your body for a number of rounds equal to your Constitution bonus. You are still dead, but a creature can make a DC 10 Heal check as a standard action to realize that you can still be saved. You can be healed by magic as if you were alive. If you are healed enough hit points that you would no longer be dead, you are alive again, but you gain one permanent negative level.",
      "catagory" : ["—"],
      "prereq" : ["Con 13", " Diehard", " Endurance", " half-orc or orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Thrill of the Kill",
      "Benefit" : " When you are raging and your attack reduces an enemy to negative hit points or kills it, you regain 1 round of rage. You may only use this feat if the fallen enemy had at least as many Hit Dice as you. You can only gain this benefit once per round.",
      "catagory" : ["—"],
      "prereq" : ["Half-orc or orc", " rage class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Deafening Explosion",
      "Benefit" : " You may reduce your bomb damage by one die to give it the ability to deafen the creature struck by it. The bomb must deal fire, force, or sonic damage. If a creature takes a direct hit from your bomb, it must make a saving throw against the bomb's DC or be deafened for 1 minute. This deafening is in addition to any other effects the bomb would normally have.",
      "catagory" : ["—"],
      "prereq" : ["Bomb class feature", " Hobgoblin"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Demoralizing Lash",
      "Benefit" : " To use this feat, you must use a whip (or another weapon in the flails fighter weapon group) to attack a foe demoralized by an Intimidate check. If the attack hits, you extend the duration the creature is shaken by 1 round. This feat has no effect on creatures whose shaken conditions are from sources other than Intimidate checks.",
      "catagory" : ["Combat"],
      "prereq" : ["Bab +1", " Intimidate 1 rank", " Hobgoblin"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Focusing Blow",
      "Benefit" : " An ally who also has this feat can deal damage to you in order to break an ongoing mind-affecting effect that allows a saving throw. The ally must cause at least 5 points of damage to you with an attack, spell, or other ability. You then reroll your saving throw, with a +1 bonus for every 5 additional points of damage the attack caused. If your save is successful, the mind-affecting effect ends. Only damage actually dealt counts for purposes of this feat; nonlethal damage and damage reduced or eliminated by damage reduction, resistances, and so on does not qualify.",
      "catagory" : ["Teamwork"],
      "prereq" : ["Hobgoblin Discipline", " hobgoblin"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Hobgoblin Discipline",
      "Benefit" : " While you are within 30 feet of at least two other hobgoblins, you gain a +1 morale bonus on saving throws.",
      "catagory" : ["—"],
      "prereq" : ["Bab +1", " Hobgoblin"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Taskmaster",
      "Benefit" : " As a standard action, you spur an ally, who must have fewer Hit Dice than yourself, to reckless effort. For 1 minute, the ally gains a +1 morale bonus on attack rolls, weapon damage rolls, and Will saves against mind-affecting effects. However, the ally also takes a –2 penalty to AC and on skill checks. To affect an unwilling ally, you must succeed at an Intimidate check with the same DC used to demoralize your ally.",
      "catagory" : ["Combat"],
      "prereq" : ["Demoralizing Lash", " Intimidate 5 ranks", " Hobgoblin"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Terrorizing Display",
      "Benefit" : "",
      "catagory" : ["Combat"],
      "prereq" : ["Dazzling Display", " Demoralizing Lash", " Taskmaster", " Weapon Focus", " Intimidate 10 ranks", " Hobgoblin", " proficiency with selected weapon"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Bestow Luck",
      "Benefit" : " You gain an extra use per day of your Defiant Luck ability. You can also use your Inexplicable Luck ability to grant an ally that can see and hear its benefit as an immediate action.",
      "catagory" : ["—"],
      "prereq" : ["Defiant Luck", " Inexplicable Luck", " human"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Critical Versatility",
      "Benefit" : " Once per day, you can spend 1 hour practicing maneuvers to gain one single critical feat that you meet the prerequisites for. You gain the benefits of the chosen critical feat until you choose to practice a different critical feat.",
      "catagory" : ["Combat"],
      "prereq" : ["Fighter 11", " human"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dauntless Destiny",
      "Benefit" : " You gain a +1 bonus on saving throws against effects with the emotion descriptor; this bonus stacks with those granted by Fearless Curiosity and Intimidating Confidence. In addition, once per day you may reroll a natural 1 on a saving throw or an attack roll. If your reroll results in a successful saving throw or attack roll, as a free action you can make an Intimidate check to demoralize the target of your attack or the creature that forced you to make a saving throw, as long as the creature is within 30 feet and can see and hear you. This effect does not apply on saving throws against traps or other objects. This does not stack with other effects that allow you to reroll a saving throw or an attack roll. You may only make one reroll.",
      "catagory" : ["—"],
      "prereq" : ["Cha 13", " Fearless Curiosity", " Intimidate 10 ranks", " human"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Defiant Luck",
      "Benefit" : " Once per day, after you roll a natural 1 on a saving throw or a critical hit is confirmed against you, you can either reroll that saving throw, or force the creature that confirmed the critical hit against you to reroll the critical confirmation roll. This does not stack with other effects that allow you to reroll a saving throw or an attack roll. You may only make one reroll.",
      "catagory" : ["—"],
      "prereq" : ["Human"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Eclectic",
      "Benefit" : "",
      "catagory" : ["—"],
      "prereq" : ["Human"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fast Learner",
      "Benefit" : " When you gain a level in a favored class, you gain both +1 hit point and +1 skill rank instead of choosing either one or the other benefit or you can choose an alternate class reward.",
      "catagory" : ["—"],
      "prereq" : ["Int 13", " human"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fearless Curiosity",
      "Benefit" : " You gain a +1 bonus on saving throws against effects with the emotion descriptor. In addition, for any round in which you begin your turn affected by a fear effect, you gain a new save at the beginning of your turn to reduce the severity of the fear effect, from panicked to frightened, frightened to shaken, and shaken to unaffected.",
      "catagory" : ["—"],
      "prereq" : ["Cha 13", " human"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Heroic Will",
      "Benefit" : " Once per day as a standard action, you may attempt a new saving throw against a harmful condition requiring a Will save that is affecting you. If you are dominated, controlled, or cannot take an action because of the effect against which you are trying to make a new saving throw, you can make this saving throw at the start of the turn as no action, but on a success, your turn ends. You cannot use this feat to remove instantaneous effects, effects that do not require a Will save, or effects that do not allow a saving throw.",
      "catagory" : ["—"],
      "prereq" : ["Iron Will", " base Will save +4", " human"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Huntmaster",
      "Benefit" : " If you have the animal companion class feature, pick one of the following types of animal companions that this feat affects: bird, dog, small cat, or horse. If you have the divine bond (mount) or mount class feature, this feat always affects horses. You gain a +2 bonus on Handle Animal and Knowledge (nature) checks with creatures of that type of animal. Furthermore, you are treated as one level higher when determining the abilities of your animal companion or mount, as long as it is of the chosen type.",
      "catagory" : ["—"],
      "prereq" : ["Handle Animal 1 rank; either the animal companion", " divine bond (mount)", " or mount class feature; human"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Improvisation",
      "Benefit" : " You gain a +2 bonus on all skill checks for skills you have no ranks in. Furthermore, you can use all trained skills untrained.",
      "catagory" : ["—"],
      "prereq" : ["Int 13", " Fast Learner", " human"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Improvisation, Improved",
      "Benefit" : " Your nonproficiency penalty with weapons, armor, and shields is halved. In addition, the bonus on all skill checks for skills you have no ranks in increases to +4 instead of +2.",
      "catagory" : ["—"],
      "prereq" : ["Int 13", " Fast Learner", " Improvisation", " human"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Inexplicable Luck",
      "Benefit" : " Once per day, as a free action before a roll is made, you gain a +8 bonus on any single d20 roll. You can also use this ability after the roll is made, but if you do, this bonus is reduced to +4.",
      "catagory" : ["—"],
      "prereq" : ["Defiant Luck", " human"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Intimidating Confidence",
      "Benefit" : " You gain a +1 bonus on saving throws against effects with the emotion descriptor; this bonus stacks with the bonus granted by Fearless Curiosity. When you confirm a critical hit, as a free action you can make an Intimidate check to demoralize one creature you threaten. If you have the Dazzling Display feat, you can make Intimidate checks to demoralize all creatures you threaten instead. You gain a +2 bonus on this check if your weapon has a ×3 critical modifier, or +4 if it has a ×4 critical modifier.",
      "catagory" : ["—"],
      "prereq" : ["Cha 13", " Fearless Curiosity", " Intimidate 5 ranks", " human"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Martial Mastery",
      "Benefit" : " Each combat feat you have that applies to a specific weapon (e.g., Weapon Focus) can be used with all weapons in the same weapon group.",
      "catagory" : ["Combat"],
      "prereq" : ["Martial Versatility", " fighter 16", " human"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Martial Versatility",
      "Benefit" : " Choose one combat feat you know that applies to a specific weapon (e.g., Weapon Focus). You can use that feat with any weapon within the same weapon group.",
      "catagory" : ["Combat"],
      "prereq" : ["Fighter 4", " human"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Racial Heritage",
      "Benefit" : " Choose another humanoid race. You count as both human and that race for any effects related to race. For example, if you choose dwarf, you are considered both a human and a dwarf for the purpose of taking traits, feats, how spells and magic items affect you, and so on.Section 15: Copyright Notice - Advanced Player's GuideAdvanced Player's Guide. Copyright 2010, Paizo Publishing, LLC; Author: Jason Bulmahn.",
      "catagory" : ["—"],
      "prereq" : ["Human"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Surge of Success",
      "Benefit" : " When you confirm a critical hit or roll a natural 20 on a saving throw, you gain a +2 circumstance bonus on a single attack roll, saving throw, skill check, or ability check of your choice before the end of your next turn. You must choose to use this bonus before you make the attack roll, saving throw, skill check, or ability check.",
      "catagory" : ["—"],
      "prereq" : ["Human"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Blazing Aura",
      "Benefit" : " When you use Scorching Weapons, on your turn as a free action, you may create an aura of heat that lasts for 1 round. This aura deals 1d6 points of fire damage to any creature that begins its turn adjacent to you.",
      "catagory" : ["Combat"],
      "prereq" : ["Inner Flame", " Scorching Weapons", " character level 13th", " Ifrit"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Blistering Feint",
      "Benefit" : " You gain a +2 bonus on feint checks made while wielding a weapon that deals fire damage. Anytime you successfully feint a creature while using such a weapon, you may deal its fire damage to the enemy.",
      "catagory" : ["Combat"],
      "prereq" : ["Combat Expertise", " Improved Feint", " Ifrit"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Elemental Jaunt",
      "Benefit" : " Once per day, you can cast plane shift as a spell-like ability with a caster level equal to your level to transport yourself and willing targets to an elemental plane that is appropriate to your race (ifrits to the Plane of Fire, oreads to the Plane of Earth, sylphs to the Plane of Air, and undines to the Plane of Water). While on that plane, you (but not anyone transported with you) are treated as though under the effect of the spell planar adaptation.",
      "catagory" : ["Character level 15th", " Ifrit", " Oread", " Sylph", " or Undine"],
      "prereq" : ["Use plane shift once per day to travel to your ancestors' elemental plane"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Firesight",
      "Benefit" : " You can see through fire and smoke without penalty, ignoring any cover or concealment bonuses from fire and smoke. This does not allow you to see anything you could not otherwise see (for example, invisible creatures are still invisible). You are immune to the dazzled condition.",
      "catagory" : ["—"],
      "prereq" : ["Ifrit"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Inner Flame",
      "Benefit" : " Your bonus on saves against fire attacks and spells with the fire descriptor or light descriptor increases to +4. When you use Scorching Weapons, the affected weapons deal an additional 1d6 points of fire damage instead of 1, and when you are grappling, you deal this damage to your grappling opponent on your turn.",
      "catagory" : ["Combat"],
      "prereq" : ["Scorching Weapons", " character level 7th", " Ifrit"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Scorching Weapons",
      "Benefit" : " You gain a +2 bonus on saving throws against fire attacks and spells with the fire descriptor or light descriptor. As a swift action, you can make up to two held manufactured metallic weapons become red-hot for 1 round, dealing 1 additional point of fire damage with a successful hit. This does not stack with other effects that add fire damage to weapons, such as the flaming weapon special ability.",
      "catagory" : ["Combat"],
      "prereq" : ["Ifrit"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fox Shape",
      "Benefit" : " You can take the form of a fox whose appearance is static and cannot be changed each time you assume this form. Your bite attack’s damage is reduced to 1d3 points of damage on a hit, but you gain a +10 racial bonus on Disguise checks made to appear as a fox. Changing from kitsune to fox shape is a standard action. This ability otherwise functions as beast shape II, and your ability scores change accordingly.",
      "catagory" : ["—"],
      "prereq" : ["Cha 13", " bab +3", " kitsune"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Magical Tail",
      "Benefit" : " You gain a new spell-like ability, each usable twice per day, from the following list, in order: disguise self, charm person, misdirection, invisibility, suggestion, displacement, confusion, dominate person. For example, the first time you select this feat, you gain disguise self 2/day; the second time you select this feat, you gain charm person 2/day. Your caster level for these spells is equal to your Hit Dice. The DCs for these abilities are Charisma-based.",
      "catagory" : ["—"],
      "prereq" : ["Kitsune"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Realistic Likeness",
      "Benefit" : " You can precisely mimic the physical features of any individual you have encountered. When you use your racial change shape ability, you can attempt to take the form of an individual, granting you a +10 circumstance bonus on Disguise checks made to fool others with your impersonation.",
      "catagory" : ["—"],
      "prereq" : ["Kitsune"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Swift Kitsune Shapechanger",
      "Benefit" : " You can assume human or kitsune form as a swift action. If you have the Fox Shape feat, you can assume fox form as a swift action as well.",
      "catagory" : ["—"],
      "prereq" : ["Dex 13", " bab +6", " kitsune"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Vulpine Pounce",
      "Benefit" : " When you change shape into your kitsune form and use the charge action in the same round, you can make a full attack against your opponent.",
      "catagory" : ["Combat"],
      "prereq" : ["Swift Kitsune Shapechanger", " bab +10", " kitsune"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Draconic Aspect",
      "Benefit" : " Your scales take on the color and some of the resistances of one of the chromatic dragons. Choose one of the following chromatic dragon types: black (acid), blue (electricity), green (acid), red (fire), or white (cold). Your scales take on the color of that dragon, and you gain resistance 5 to the dragon color's corresponding energy type.",
      "catagory" : ["—"],
      "prereq" : ["Kobold"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Draconic Breath",
      "Benefit" : " You gain a +2 bonus against sleep and paralysis effects. You gain a breath weapon that is determined by your scale coloration by either the Draconic Aspect feat or the dragon-scaled racial trait. Using a breath weapon is a standard action that does not provoke attacks of opportunity. You can use your breath weapon once per day. Creatures within the area of your breath weapon who succeed at a Reflex saving throw (DC 10 + your character level + your Constitution modifier) take only half damage.",
      "catagory" : ["—"],
      "prereq" : ["Draconic Aspect", " kobold"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Draconic Glide",
      "Benefit" : " You gain a +2 bonus against sleep and paralysis effects. You grow a pair of wings that you can use to fall and glide at a safe pace. You can make a DC 15 Fly check to fall safely from any height without taking falling damage, as if using feather fall. When falling safely, you may make an additional DC 15 Fly check to glide, moving 5 feet laterally for every 20 feet you fall.",
      "catagory" : ["—"],
      "prereq" : ["Draconic Aspect", " kobold"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Draconic Paragon",
      "Benefit" : " You gain an additional +2 bonus against sleep and paralysis effects. You can use your breath weapon twice per day and your breath weapon damage increases to 4d6 points of energy damage. Your wings from the Draconic Glide feat grow stronger, granting you a fly speed of 20 feet (average maneuverability).",
      "catagory" : ["—"],
      "prereq" : ["Draconic Aspect", " either Draconic Breath or Draconic Glide", " character level 10th", " kobold"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Kobold Ambusher",
      "Benefit" : " You take no penalty on Stealth checks when you move up to your full speed. You can use the run or charge action and remain hidden, taking a –10 penalty on the check to do so.",
      "catagory" : ["Combat"],
      "prereq" : ["Stealth 4 ranks", " kobold"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Kobold Sniper",
      "Benefit" : " When you are sniping, you only take a –10 penalty on your Stealth checks to stay hidden.",
      "catagory" : ["Combat"],
      "prereq" : ["Stealth 1 rank", " kobold"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Tail Terror",
      "Benefit" : " You can make a tail slap attack with your tail. This is a secondary natural attack that deals 1d4 points of bludgeoning damage. Furthermore, you can augment your tail slap attack with a kobold tail attachment. For the purpose of weapon feats, you are considered proficient with all kobold tail attachments.",
      "catagory" : ["Combat"],
      "prereq" : ["Bab +1", " kobold"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sea Hunter",
      "Benefit" : " When you make a successful melee attack against a swimming target, as a free action you can attempt to knock the target off balance. Treat this as a trip combat maneuver. If you succeed, the target is considered off balance (see Table: Combat Adjustments Underwater) until it recovers its balance, usually by making a Swim check on its turn. This feat has no effect on creatures with a swim speed, those using magic such as freedom of movement, and creatures that can't be tripped.",
      "catagory" : ["Combat"],
      "prereq" : ["Combat Expertise", " merfolk"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Spit Venom",
      "Benefit" : " As a full-round action, you can spit poison up to 10 feet as a ranged touch attack. If you hit, the target must make a successful Fortitude save or be blinded for 1d6 rounds. The DC of this save is equal to 10 + 1/2 your total Hit Dice + your Constitution modifier. You can use this ability once per day plus one additional time per day for every three Hit Dice you have.",
      "catagory" : ["Combat"],
      "prereq" : ["Nagaji"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Beast Rider",
      "Benefit" : " Select one of the following creature types: elephant, pteranodon, rhinoceros, stegosaurus, or triceratops. Add this creature type to your list of possible animal companions or mounts. When summoning a creature of the selected type to serve as a mount or companion, treat your effective druid level as if it were two levels higher (to a maximum of your character level). If the creature is large enough for you to ride, it gains the combat training general purpose (see Handle Animal) at no cost.",
      "catagory" : ["—"],
      "prereq" : ["Animal companion or mount class feature", " character level 7th", " half-orc or orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Blood Vengance",
      "Benefit" : " Whenever one of your allies is reduced to negative hit points or killed, you may enter a state similar to but less powerful than a barbarian's rage as a free action on your next turn. If you have the rage class feature and are already raging, your morale bonuses to Strength and Constitution increase by +2 for the duration of your rage. If you do not have the rage class feature, or you have no more rage rounds left, this weaker rage gives you all the benefits and penalties of a barbarian's rage, except your morale bonus to Strength and Constitution is only +2. In either case, this state lasts for 4 rounds.",
      "catagory" : ["—"],
      "prereq" : ["Half-orc or orc", " nonlawful"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Born Alone",
      "Benefit" : " Whenever you kill or knock unconscious an opponent with a melee attack, you gain temporary hit points equal to your Constitution bonus (minimum 1) until your next turn. These temporary hit points do not stack. You do not gain this bonus if the opponent is helpless or has less than half your Hit Dice.",
      "catagory" : ["—"],
      "prereq" : ["Orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Bullying Blow",
      "Benefit" : " As a standard action, you may make a melee attack with a –2 penalty on the attack roll. If the attack damages your opponent, you may make an Intimidate check to demoralize that opponent as a free action.",
      "catagory" : ["Combat"],
      "prereq" : ["Intimidate 1 rank", " orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Destroyer's Blessing",
      "Benefit" : " When you are raging and you succeed at a sunder combat maneuver, you regain 1 round of rage. If the sunder attempt causes the object to gain the broken condition, you heal 1 hit point. You can only gain these benefits once per round.",
      "catagory" : ["Combat"],
      "prereq" : ["Half-orc or orc", " rage class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ferocious Action",
      "Benefit" : " When you fall to 0 hit points or fewer, you lose 2 hit points each round, but you are not staggered. If you are in a rage (such as that caused by the barbarian rage class feature), you instead only lose 1 hit point per round.",
      "catagory" : ["—"],
      "prereq" : ["Ferocity racial trait", " orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ferocious Resolve",
      "Benefit" : " You gain the ferocity universal monster ability, allowing you to continue fighting at negative hit points. When using this ability, you gain a +2 bonus on Intimidate checks.",
      "catagory" : ["—"],
      "prereq" : ["Con 13", " half-orc", " orc ferocity racial trait"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ferocious Tenacity",
      "Benefit" : " Once per day when raging, if you are hit by an attack that would deal enough hit points of damage to kill you (negative hit points equal to your Constitution score), as an immediate action you may expend 1 or more rounds of rage to negate some of this damage and keep yourself alive. Each round of rage you spend reduces the attack's damage by 1 point, but cannot reduce the damage taken below 1 hit point.",
      "catagory" : ["Combat"],
      "prereq" : ["Ferocity racial trait", " half-orc or orc", " rage class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fire God's Blessing",
      "Benefit" : " When in combat, if you deal fire damage to an enemy, you heal 1 hit point. You can only benefit from this healing once per round. Attacks that cause a target to catch on fire heal you each round the target takes fire damage.Paizo Peripheral  This content is from material published by Paizo Publishing, LLC, but is not part of the  Pathfinder Core Rules. Section 15: Copyright Notice - Pathfinder Companion: Orcs of GolarionPathfinder Companion: Orcs of Golarion. Copyright 2010, Paizo Publishing, LLC; Authors: Steve Kenson, Rob McCreary, Richard Pett, Sean K Reynolds, and JD Wiker.",
      "catagory" : ["—"],
      "prereq" : ["Half-orc or orc", " worshiper of the Fire God"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Foment the Blood",
      "Benefit" : " When you channel energy, instead of creating its normal effect, you can give orcs a bonus on weapon damage and critical hit confirmation rolls until your next turn. This bonus is equal to the number of dice your channeled energy normally heals or harms. Your channel has its normal effect on other creatures in the area.",
      "catagory" : ["Channeling"],
      "prereq" : ["Channel energy class feature", " orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Gore Fiend",
      "Benefit" : " When you are raging and you confirm a critical hit with a melee weapon or a critical hit is confirmed on you (whether by a melee weapon, spell, or ranged weapon), you regain 1 round of rage (up to your maximum for the day). You can only gain this benefit once per round.",
      "catagory" : ["—"],
      "prereq" : ["Half-orc or orc", " rage class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Grudge Fighter",
      "Benefit" : " You gain a +1 morale bonus on attack and damage rolls made against any creature that attacked you in the current combat.",
      "catagory" : ["Combat"],
      "prereq" : ["Orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Horde Charge",
      "Benefit" : " When charging during the same round as an ally with this feat, you gain a +2 bonus on attack and damage rolls in addition to the normal bonus for charging. If you can make multiple attacks on a charge, this bonus only applies to the first attack.",
      "catagory" : ["Teamwork "],
      "prereq" : ["Bab +1", " half-orc or orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Orc Weapon Expertise",
      "Benefit" : " When you take this feat, choose one of the benefits below. Whenever you wield a weapon that has “orc” in its name, you gain the benefit you chose so long as you are actually proficient with that weapon. ",
      "catagory" : ["Combat"],
      "prereq" : ["Bab +1", " orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Resilient Brute",
      "Benefit" : " Once per day, when a creature confirms a critical hit against you, you may treat half the damage as nonlethal damage. You cannot use this ability if you are immune to nonlethal damage. When your base attack bonus reaches +10, you may use this ability an additional time per day.",
      "catagory" : ["—"],
      "prereq" : ["Half-orc or orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Resolute Rager",
      "Benefit" : " While raging, when under the effect of a fear effect that allows a saving throw, you can make a new saving throw against that fear effect at the start of each of your turns before acting. If you make the new save, the fear effect ends.",
      "catagory" : ["—"],
      "prereq" : ["Orc", " rage class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Reverse-Feint",
      "Benefit" : " As a move action, you can leave a gap in your defenses for one adjacent opponent to use. If the opponent attacks you on its next turn, it gains a +4 bonus on its attack roll. Whether or not the opponent successfully hits, you may attack it as an immediate action with a single melee attack, gaining a +2 bonus on your attack roll.",
      "catagory" : ["Combat"],
      "prereq" : ["Toughness", " bab +1", " orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Surprise Follow-Through",
      "Benefit" : " When using Cleave or Great Cleave, the second foe you attack on your turn is denied its Dexterity bonus against you.",
      "catagory" : ["Combat"],
      "prereq" : ["Str 13", " Cleave", " Power Attack", " bab +1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Surprise Follow-Through, Improved",
      "Benefit" : " When using Great Cleave, each opponent you attack on your turn (other than the first) is denied his Dexterity bonus against you.",
      "catagory" : ["Combat"],
      "prereq" : ["Str 13", " Cleave", " Great Cleave", " Power Attack", " Surprise Follow Through", " bab +8"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sympathetic Rage",
      "Benefit" : " Whenever you are adjacent to an ally who is raging, you may choose to enter a similar but less powerful rage as a free action on your turn. This weaker rage gives you all the benefits and penalties of a barbarian's rage, except your morale bonus to Strength and Constitution is only +2. There is no limit to how long you can rage, as long as you remain adjacent to a raging ally (for example, you could take a 5-foot step away from one raging ally toward another raging ally and maintain your rage). As with a barbarian's rage, when this weaker rage ends, you are fatigued. You cannot use this feat if you are fatigued.",
      "catagory" : ["Combat"],
      "prereq" : ["Half-orc or orc", " nonlawful"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Tenacious Survivor",
      "Benefit" : " When you are killed by hit point damage, your soul lingers in your body for a number of rounds equal to your Constitution bonus. You are still dead, but a creature can make a DC 10 Heal check as a standard action to realize that you can still be saved. You can be healed by magic as if you were alive. If you are healed enough hit points that you would no longer be dead, you are alive again, but you gain one permanent negative level.",
      "catagory" : ["—"],
      "prereq" : ["Con 13", " Diehard", " Endurance", " half-orc or orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Thrill of the Kill",
      "Benefit" : " When you are raging and your attack reduces an enemy to negative hit points or kills it, you regain 1 round of rage. You may only use this feat if the fallen enemy had at least as many Hit Dice as you. You can only gain this benefit once per round.",
      "catagory" : ["—"],
      "prereq" : ["Half-orc or orc", " rage class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Trap Wrecker",
      "Benefit" : " You can attempt to disarm a trap by striking it with a melee weapon instead of making a Disable Device check. As a full-round action, make a melee attack against an Armor Class equal to the trap's Disable Device DC. If you miss, the trap activates. If you hit, roll damage. If this damage is at least half the trap's Disable Device DC, you disable the trap. If this damage is less than half the trap's Disable Device DC, the trap activates. You can only attempt this on non-magical traps. You must be able to reach some part of the trap with your attack in order to use this feat. At the GM's discretion, some traps may not be susceptible to this feat.",
      "catagory" : ["—"],
      "prereq" : ["Power Attack", " Disable Device 1 rank", " orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dwarf Blooded",
      "Benefit" : " Your dwarven heritage manifests in two ways. First, your speed is never modified by armor or encumbrance, as the dwarf slow and steady racial trait. Second, you gain the stonecunning dwarf racial trait.",
      "catagory" : ["—"],
      "prereq" : ["Oread"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Echoes of Stone",
      "Benefit" : " You gain a +4 racial bonus on Perception checks underground, and on Survival checks to avoid becoming lost in caverns and rocky areas.",
      "catagory" : ["—"],
      "prereq" : ["Oread"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Elemental Jaunt",
      "Benefit" : " Once per day, you can cast plane shift as a spell-like ability with a caster level equal to your level to transport yourself and willing targets to an elemental plane that is appropriate to your race (ifrits to the Plane of Fire, oreads to the Plane of Earth, sylphs to the Plane of Air, and undines to the Plane of Water). While on that plane, you (but not anyone transported with you) are treated as though under the effect of the spell planar adaptation.",
      "catagory" : ["—"],
      "prereq" : ["Character level 15th", " Ifrit", " Oread", " Sylph", " or Undine"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Murmurs of Earth",
      "Benefit" : " You gain a limited form of tremorsense. As a move action, you become aware of all creatures within 15 feet that are in contact with the ground at that moment.",
      "catagory" : ["—"],
      "prereq" : ["Echoes of Stone", " character level 9th", " oread"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Oread Burrower",
      "Benefit" : " You gain a burrow speed equal to 1/2 your base speed. You can burrow through sand, dirt, clay, gravel, or similar materials, but not solid stone. You do not leave a hole behind, nor is your passage marked on the surface.",
      "catagory" : ["—"],
      "prereq" : ["Stony Step", " character level 9th", " oread"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Oread Earth Glider",
      "Benefit" : " You gain the earth glide universal monster ability and can use it to travel at your full base speed through sand, dirt, clay, gravel, or similar materials. If protected against fire damage, you can even burrow through lava. You can burrow through solid stone at 1/2 your base speed.",
      "catagory" : ["—"],
      "prereq" : ["Oread Burrower", " Stony Step", " character level 13th", " oread"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Stony Step",
      "Benefit" : " Whenever you move, you may move through 5 feet of earth- or stone-based difficult terrain (rubble, stone stairs, and so on) each round as if it were normal terrain.",
      "catagory" : ["—"],
      "prereq" : ["Oread"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Burrowing Teeth",
      "Benefit" : " You gain a burrow speed equal to 1/2 your base speed. You can burrow through sand, dirt, clay, gravel, or similar materials, but not solid stone. You do not leave a hole behind, nor is your passage marked on the surface.",
      "catagory" : ["—"],
      "prereq" : ["Sharpclaw", " Tunnel Rat", " ratfolk"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sharpclaw",
      "Benefit" : " You gain two claw attacks. These are primary natural attacks that deal 1d4 points of damage.",
      "catagory" : ["Combat"],
      "prereq" : ["Ratfolk"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Tunnel Rat",
      "Benefit" : " You count as one size smaller than normal for the purpose of squeezing.",
      "catagory" : ["—"],
      "prereq" : ["Ratfolk", " swarming racial trait"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Life's Blood",
      "Benefit" : " At will as a full-round action, you may perform a special bloodletting ritual through which you sacrifice some of your own vitality to heal another creature. When using this feat, you take 1d4 points of damage and apply your blood to the wounds of a living creature, healing it for a number of hit points equal to the amount of damage you took from the ritual. This is a supernatural ability. Only you can perform this bloodletting. A creature cannot be healed by this ability more than once per day.",
      "catagory" : ["—"],
      "prereq" : ["Samsaran"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Stretched Wings",
      "Benefit" : " Your strix racial fly speed increases to 60 feet (average). You ignore the wing-clipped trait's Fly check requirement to fly upward.",
      "catagory" : ["—"],
      "prereq" : ["Str 13", " Skill Focus (Fly)", " strix", " wing-clipped racial trait"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Extra Elemental Assault",
      "Benefit" : " Your elemental assault ability lasts an additional 2 rounds per day.",
      "catagory" : ["—"],
      "prereq" : ["Suli"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Incremental Elemental Assault",
      "Benefit" : "",
      "catagory" : ["—"],
      "prereq" : ["Suli"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Stoic Pose",
      "Benefit" : " By spending 5 rounds finding a suitable location, you can hold yourself so still that you appear to be a Small object such as a pile of rocks. This allows you to make a Stealth check without cover or concealment, as long as you do not move or take any other actions.",
      "catagory" : ["—"],
      "prereq" : ["Svirfneblin"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Airy Step",
      "Benefit" : " You gain a +2 bonus on saving throws against effects with the air or electricity descriptors and effects that deal electricity damage. You may ignore the first 30 feet of any fall when determining falling damage.",
      "catagory" : ["—"],
      "prereq" : ["Sylph"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Cloud Gazer",
      "Benefit" : " You can see through fog, mist, and clouds, without penalty, ignoring any cover or concealment bonuses from such effects. If the effect is created by magic, this feat instead triples the distance you can see without penalty.",
      "catagory" : ["—"],
      "prereq" : ["Sylph"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Elemental Jaunt",
      "Benefit" : " Once per day, you can cast plane shift as a spell-like ability with a caster level equal to your level to transport yourself and willing targets to an elemental plane that is appropriate to your race (ifrits to the Plane of Fire, oreads to the Plane of Earth, sylphs to the Plane of Air, and undines to the Plane of Water). While on that plane, you (but not anyone transported with you) are treated as though under the effect of the spell planar adaptation.",
      "catagory" : ["Character level 15th", " Ifrit", " Oread", " Sylph", " or Undine"],
      "prereq" : ["You can plane shift to the elemental plane of your ancestors"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Inner Breath",
      "Benefit" : " You no longer need to breathe. You are immune to effects that require breathing (such as inhaled poison). This does not give you immunity to cloud or gas attacks that do not require breathing, such as cloudkill.",
      "catagory" : ["—"],
      "prereq" : ["Character level 11th", " sylph"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Wings of Air",
      "Benefit" : " Your bonus on saves against effects with the air or electricity descriptors and effects that deal electricity damage increases to +4. In addition, you gain a supernatural fly speed equal to your base speed (good maneuverability). You may only fly with this ability when wearing light armor or no armor.",
      "catagory" : ["—"],
      "prereq" : ["Airy Step", " character level 9th", " sylph"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Blood Beak",
      "Benefit" : " Increase the damage of your beak attack to 1d6. Furthermore, when you confirm a critical hit with your beak attack, you also deal 1 point of bleed damage.",
      "catagory" : ["Combat"],
      "prereq" : ["Bab +5", " natural weapon racial trait", " tengu"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Carrion Feeder",
      "Benefit" : " You gain a +2 racial bonus on saving throws against diseases and ingested poisons (but not other poisons). You receive a +2 bonus on Survival skill checks to find food for yourself (and only yourself ).",
      "catagory" : ["—"],
      "prereq" : ["Tengu"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Long-Nose Form",
      "Benefit" : " Once per day, you can assume the form of a human whose nose is the length of your beak. This spell-like ability functions as alter self with a caster level equal to your level. While in this form you gain the scent ability and a +2 bonus to your Strength score. Because your long nose in this form clearly indicates you are not fully human, you do not gain the normal bonus to Disguise checks for using a polymorph effect (however, you could possibly explain the nose as an unfortunate curse or deformity, or hide it with an item such as a plague doctor's mask).",
      "catagory" : ["—"],
      "prereq" : ["Character level 3rd", " tengu"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Scavenger's Eye",
      "Benefit" : " You gain a +2 bonus on Appraise checks. You may determine the most valuable item in a hoard as a standard action and gain an additional +2 bonus on the Appraise check to do so. In addition, if you fail an Appraise check by 5 or more, you treat the check as if you had failed by less than 5.",
      "catagory" : ["—"],
      "prereq" : ["Tengu"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Tengu Raven Form",
      "Benefit" : " Once per day, you can take the form of a Large black bird resembling a raven, granting you a fly speed of 60 feet (good maneuverability), a +4 size bonus to your Strength, a –2 penalty to your Dexterity, and a +4 natural armor bonus. This spell-like ability otherwise functions as beast shape II with a caster level equal to your level.",
      "catagory" : ["—"],
      "prereq" : ["Tengu Wings", " character level 7th", " tengu"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Tengu Wings",
      "Benefit" : " Once per day, you can sprout a pair of giant black crow's wings, granting you a fly speed of 30 feet (average maneuverability). This spell-like ability otherwise functions as beast shape I (though you do not gain any other benefits of that spell) with a caster level equal to your level.",
      "catagory" : ["—"],
      "prereq" : ["Character level 5th", " tengu"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ancestral Scorn",
      "Benefit" : " Whenever you successfully demoralize an outsider of the evil subtype with an Intimidate check, it becomes sickened for 1 round in addition to being affected by the normal effects of being demoralized. If you beat the DC by 5 or more, the creature is nauseated for 1 round instead.",
      "catagory" : ["—"],
      "prereq" : ["Intimidate 5 ranks", " tiefling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Armor of the Pit",
      "Benefit" : " You gain a +2 natural armor bonus.",
      "catagory" : ["—"],
      "prereq" : ["Tiefling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Banner of Doom",
      "Benefit" : " As long your banner is clearly visible, all enemies within 60 feet take a –2 penalty on saving throws against fear. This penalty does not stack with other effects that provide enemies with penalties on saving throws against fear.",
      "catagory" : ["Combat"],
      "prereq" : ["Bab +8", " banner class feature", " tiefling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Blinding Sneak Attack",
      "Benefit" : " When you successfully deal sneak attack damage to a foe while you are within an area of magical darkness, you temporarily blind your opponent for 1 round. A successful Fortitude save (DC 10 + the amount of sneak attack damage dealt) negates this effect.",
      "catagory" : ["Combat"],
      "prereq" : ["Bab +5", " darkness spell-like ability", " sneak attack class feature", " tiefling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Expanded Fiendish Resistance",
      "Benefit" : " Pick one of the following energy types that you do not already have resistance to: acid, cold, electricity, or fire. You gain resistance 5 to that energy type.",
      "catagory" : ["—"],
      "prereq" : ["Tiefling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fiendish Darkness",
      "Benefit" : " You can use darkness three times per day as a spell-like ability.",
      "catagory" : ["—"],
      "prereq" : ["Darkness spell-like ability", " tiefling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fiendish Facade",
      "Benefit" : " You gain a +5 racial bonus on Disguise checks when attempting to impersonate a particular race. You must select the race you are able to impersonate when you select this feat, and thereafter you cannot change the race you have chosen. That race must be Medium size.",
      "catagory" : ["—"],
      "prereq" : ["Must be taken at 1st level", " tiefling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fiendish Resilience",
      "Benefit" : " Choose one of the following energy types that you have resistance to: cold, electricity, or fire. Anytime you make a Reflex saving throw against an attack that deals the selected type of energy damage and is subject to your evasion class feature, you gain a +4 competence bonus on the save.",
      "catagory" : ["—"],
      "prereq" : ["Dex 13", " evasion class feature", " tiefling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fiend Sight",
      "Benefit" : " You gain low-light vision and your darkvision improves to 120 ft.",
      "catagory" : ["—"],
      "prereq" : ["Darkvision 60 ft.", " tiefling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Fury of the Tainted",
      "Benefit" : " While raging, you gain a +4 competence bonus on saving throws made against spells and effects with the [good] descriptor.",
      "catagory" : ["Combat"],
      "prereq" : ["Cha 13", " rage class feature", " tiefling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Grasping Tail",
      "Benefit" : " You can use your tail to grab stowed items. While you cannot wield weapons with your tail, you can use it to retrieve small, stowed objects carried on your person as a swift action.",
      "catagory" : ["—"],
      "prereq" : ["Tiefling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Improved Fiendish Darkness",
      "Benefit" : " You gain a +2 bonus to your effective caster level when using your darkness spell-like ability. In addition, whenever you cast a spell with the [evil] descriptor that targets another creature, you can spend a swift action to apply the effects of your darkness spell-like ability to the spell cast, with the darkness effect centered on the spell’s target. Using the darkness spell-like ability in this way expends all three uses of it for the day, and it cannot be used if fewer than three uses of it remain for that day.",
      "catagory" : ["—"],
      "prereq" : ["Fiendish Darkness", " darkness spell-like ability", " caster level 3rd", " tiefling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Improved Fury of the Tainted",
      "Benefit" : " While raging, you gain spell resistance equal to 10 + your class level against spells with the [good] descriptor.",
      "catagory" : ["Combat"],
      "prereq" : ["Cha 13", " Fury of the Tainted", " bab +8", " rage class feature", " tiefling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Monstrous Mask",
      "Benefit" : " You get a +5 racial bonus on Intimidate checks made against all creatures of the humanoid type.",
      "catagory" : ["—"],
      "prereq" : ["Tiefling", " must be taken at 1st level"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Terrifying Mask",
      "Benefit" : " Anytime you can make a Sense Motive check to get a hunch or detect whether someone is trustworthy or not, you can choose to instead make an Intimidate check at a –2 penalty. This ability only works on creatures of the humanoid type.",
      "catagory" : ["—"],
      "prereq" : ["Cha 13", " Monstrous Mask", " tiefling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Wicked Valor",
      "Benefit" : " When you regain hit points by resting, you heal double the normal amount of damage. This feat does not stack with items or effects that also affect the amount of damage you recover from while resting. This feat only functions with a full night’s rest; complete bed rest is not affected by this feat.",
      "catagory" : ["—"],
      "prereq" : ["Con 15", " Diehard", " Endurance", " tiefling"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Aquatic Ancestry",
      "Benefit" : " You gain the amphibious special quality. Your swim speed increases by +10 feet.",
      "catagory" : ["—"],
      "prereq" : ["Undine"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Elemental Jaunt",
      "Benefit" : " Once per day, you can cast plane shift as a spell-like ability with a caster level equal to your level to transport yourself and willing targets to an elemental plane that is appropriate to your race (ifrits to the Plane of Fire, oreads to the Plane of Earth, sylphs to the Plane of Air, and undines to the Plane of Water). While on that plane, you (but not anyone transported with you) are treated as though under the effect of the spell planar adaptation.",
      "catagory" : ["—"],
      "prereq" : ["Character level 15th", " Ifrit", " Oread", " Sylph", " or Undine"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Hydraulic Maneuver",
      "Benefit" : " You may use hydraulic push to attempt a bull rush, disarm, dirty trick (blind or dazzle, or trip combat maneuver. Each time you use hydraulic push, you must decide which of the allowed combat maneuvers you want to perform. You may use this feat with your hydraulic push racial spell-like ability, your class-granted use of hydraulic push, or any hydraulic push spells you cast, but not with magic items or other external sources that use that spell.",
      "catagory" : ["—"],
      "prereq" : ["Hydraulic push spell-like ability", " undine"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Steam Caster",
      "Benefit" : " You may increase the casting time of a fire spell to a full-round action, infusing it with elemental power (spells with a casting time of 1 full-round action or longer do not have an increased casting time). The spell is treated as if it had the water descriptor. All fire effects of the altered spell instead manifest as superheated steam. The altered spell works normally underwater without requiring a caster level check. Unlike fire, the steam cannot ignite objects or set creatures on fire. As the spell still deals fire damage, fire resistance or immunity still applies to the spell's effects.",
      "catagory" : ["—"],
      "prereq" : ["Undine"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Triton Portal",
      "Benefit" : " Once per day, you may expend your racial hydraulic push ability to instead cast summon nature's ally III as a spell-like ability with a caster level equal to your character level. This use of the ability can only summon a Small water elemental or 1d3 dolphins. Using this ability is a full-round action.",
      "catagory" : ["—"],
      "prereq" : ["Character level 5th", " hydraulic push spell-like ability", " undine"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Water Skinned",
      "Benefit" : " As a standard action, you can extinguish a small non-magical fire with a touch, affecting anything up to the size of a large campfire. This ability does not affect fires with a total area greater than 5 square feet. Touching the fire in this way does not harm you.",
      "catagory" : ["—"],
      "prereq" : ["Undine"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Tree Hanger",
      "Benefit" : " You gain a +2 bonus to your CMD against all trip attacks. If your square has a branch or other sturdy large object that you could hang from, as a swift action you may make a DC 15 Acrobatics check to jump upward and use your tail to hang from that object. While hanging, you can't be tripped, you ignore the effects of difficult terrain in your square, and you gain a +2 bonus to your CMD against bull rush, drag, and reposition attacks. If you leave that square (including if you are moved against your will), you lose your grip on the object and are no longer hanging. While hanging, you cannot use your tail for anything else.",
      "catagory" : ["Combat"],
      "prereq" : ["Acrobatics 1 rank", " vanara"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Sleep Venom",
      "Benefit" : " As a swift action, you may alter the effects of your venom so the target falls unconscious. This changes the initial and secondary effect of your venom to the following: initial effect staggered for 1d4 rounds; secondary effect unconsciousness for 1 minute. You must make the decision to alter your venom before you apply it to a weapon.",
      "catagory" : ["—"],
      "prereq" : ["Vishkanya"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shadowy Dash",
      "Benefit" : " Whenever you are in an area of dim light or darkness, you can move at full speed using Stealth without taking the normal –5 penalty for doing so.",
      "catagory" : ["—"],
      "prereq" : ["Wayang"],
      "onGain" : function (player) {
        return player;
      }
    }
  ],
  "styleFeats" : [
    {
      "name" : "Archon Style",
      "Benefit" : "While using this style, as a standard action, you can actively protect adjacent allies from a single opponent that you are currently adjacent to. This grants any adjacent allies a +2 dodge bonus to AC against that opponent's next melee attack (as long as that attack comes before the beginning of your next turn), but causes you to take a –2 penalty to AC against that opponent until your next turn. The dodge bonus persists even if your allies move away from you, but still only applies against attacks made by the opponent that you designated upon first using this ability.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Combat Expertise", " Improved Unarmed Strike", " BAB +2 or monk 2"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Archon Diversion",
      "Benefit" : " The penalty to AC for using Archon Style to grant nearby allies a bonus to AC against a single opponent decreases to –1, and you can spend a move action instead of a standard action to use this ability.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Archon Style", " Combat Expertise", " Improved Unarmed Strike", " BAB +4 or monk 4"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Archon Justice",
      "Benefit" : " You no longer take a penalty to AC for using Archon Style to grant nearby allies a bonus to AC against a single opponent, and you can spend a swift action instead of a move action to use this ability.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Archon Diversion", " Archon Style", " Combat Expertise", " Improved Unarmed Strike", " BAB +8 or monk 7"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Boar Style",
      "Benefit" : " You can deal bludgeoning damage or slashing damage with your unarmed strikes—changing damage type is a free action. While using this style, once per round when you hit a single foe with two or more unarmed strikes, you can tear flesh. When you do, you deal 2d6 bleed damage with the attack.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Improved Unarmed Strike", " Intimidate 3 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Boar Ferocity",
      "Benefit" : " You add piercing damage to the damage types you can deal with your unarmed strikes. Further, you gain a +2 bonus on Intimidate checks to demoralize opponents. While using Boar Style, whenever you tear an opponent’s flesh, you can spend a free action to make an Intimidate check to demoralize that opponent.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Boar Style", " Intimidate 6 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Boar Shred",
      "Benefit" : "The wounds you inflict with your unarmed strikes bleed, giving you renewed vigor.Prerequisites: Improved Unarmed Strike, Boar Ferocity, Boar Style, Intimidate 9 ranks. You can make an Intimidate check to demoralize an opponent as a move action. While using Boar Style, whenever you tear an opponent’s flesh, once per round at the start of that opponent’s turn he takes 1d6 bleed damage. The bleed damage dealt while using Boar Style persist even if you later switch to a different style.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Boar Ferocity", " Intimidate 9 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Crane Style",
      "Benefit" : " You take only a –2 penalty on attack rolls for fighting defensively. While using this style and fighting defensively or using the total defense action, you gain an additional +1dodge bonus to your Armor Class.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Dodge", " Improved Unarmed Strike", " base attack bonus +2 or monk level 1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Crane Wing",
      "Benefit" : " Once per round while using Crane Style, when you have at least one hand free and are either fighting defensively or using the total defense action, you can deflect one melee weapon attack that would normally hit you. You expend no action to deflect the attack, but you must be aware of it and not flat-footed. An attack so deflected deals no damage to you.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Crane Style", " base attack bonus +5 or monk level 5"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Crane Riposte",
      "Benefit" : " You take only a –1 penalty on attack rolls for fighting defensively. Whenever you use Crane Wing to deflect an opponent’s attack, you can make an attack of opportunity against that opponent after the attack is deflected.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Crane Wing", " base attack bonus +8 or monk level 7"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Djinni Style",
      "Benefit" : " You gain one additional Elemental Fist attempt per day. While you are in this style you must use Elemental Fist to deal electricity damage and you gain a bonus on electricity damage rolls equal to your Wisdom bonus. Further, while you are using this style and have remaining Elemental Fist attempts, you also gain a +2 dodge bonus to Armor Class against attacks of opportunity. A condition that makes you lose your Dexterity bonus to AC also makes you lose this dodge bonus.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Con 13", " Wis 15", " Elemental Fist", " base attack bonus +9 or monk level 5th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Djinni Spirit",
      "Benefit" : " You gain one additional Elemental Fist attempt per day. While using Djinni Style, you gain electricity resistance equal to your base attack bonus or monk level, whichever is higher. While denied your Dexterity bonus to AC you are also denied this resistance. Creatures that take electricity damage from your Elemental Fist attack must succeed at a Fortitude save (DC 10 + 1/2 your character level + your Wis modifier) or be deafened for 1d4 rounds. Those who take damage from your Djinni Spin are deafened, even on a successful saving throw.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Con 15", " Djinni Style", " base attack bonus +11 or monk level 9th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Djinni Spin",
      "Benefit" : " While using Djinni Style, as a standard action you can spend two Elemental Fist attempts to surround yourself with a whirlwind of electrified air. Creatures adjacent to you take your unarmed strike damage plus the electricity damage from your Elemental Fist and are deafened for 1d4 rounds. A successful Fortitude save (DC 10 + 1/2 your character level + your Wis modifier) reduces the damage by half and prevents a target from being deafened.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Wis 17", " Djinni Spirit", " base attack bonus +13 or monk level 11th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dragon Style",
      "Benefit" : " While using this style, you gain a +2 bonus on saving throws against sleep effects, paralysis effects, and stunning effects. You ignore difficult terrain when you charge, run, or withdraw. You can also charge through squares that contain allies. Further, you can add 1-1/2 times your Strength bonus on the damage roll for your first unarmed strike on a given round.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Str 15", " Improved Unarmed Strike", " Acrobatics 3 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dragon Ferocity",
      "Benefit" : " While using Dragon Style, you gain a bonus on unarmed strike damage rolls equal to half your Strength bonus. When you score a critical hit or a successful Stunning Fist attempt against an opponent while using this style, that opponent is also shaken for a number of rounds equal to 1d4 + your Strength bonus.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Dragon Style", " Stunning Fist", " Acrobatics 5 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Dragon Roar",
      "Benefit" : " You gain one additional Stunning Fist attempt per day. While using Dragon Style, as a standard action you can expend two Stunning Fist attempts to unleash a concussive roar in a 15-foot cone. Creatures caught in the cone take your unarmed strike damage and become shaken for 1d4 rounds. A successful Will save (DC 10 + 1/2 your character level + your Wis modifier) reduces the damage by half and prevents a target from being shaken.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Dragon Style", " Acrobatics 8 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Earth Child Style",
      "Benefit" : "Your martial training makes you a dangerous and elusive target for giants. Prerequisites: Wis 13, dwarf or gnome, defensive training racial trait, Improved Unarmed Strike, Acrobatics 3 ranks.  While using this style, your defensive training dodge bonus to AC increases to +6. Further, against creatures of the giant subtype, you can add your Wisdom bonus on your unarmed strike damage rolls.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Wis 13", " Improved Unarmed Strike", " Acrobatics 3 ranks", " defensive training racial trait", " dwarf or gnome"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Earth Child Topple",
      "Benefit" : " You can trip a creature of the giant subtype of up to Huge size. While using Earth Child Style, you add your Wisdom bonus on combat maneuver checks made to trip a creature of the giant subtype, as well as on attack rolls to confirm a critical hit against such a creature.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Earth Child Style", " Improved Trip", " Acrobatics 6 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Earth Child Binder",
      "Benefit" : " You can trip a creature of the giant subtype no matter its size. While you are using Earth Child Style, when a prone creature of the giant subtype stands up and provokes an attack of opportunity from you, if you make an unarmed strike, you can declare you are making a Stunning Fist attempt after the attack hits. You gain a +4 bonus to the DC of any Stunning Fist effect you deliver in this way.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Earth Child Topple", " Greater Trip", " Stunning Fist", " Acrobatics 9 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Efreeti Style",
      "Benefit" : " You gain one additional Elemental Fist attempt per day. While using this style and Elemental Fist to deal fire damage, you gain a bonus on fire damage rolls equal to your Wisdom bonus. Further, if your Elemental Fist melee attack misses while you are using it to deal fire damage, you still deal 1d6 points of fire damage to your target.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Con 13", " Wis 15", " Elemental Fist", " Improved Unarmed Strike", " base attack bonus +9 or monk level 5th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Efreeti Stance",
      "Benefit" : " You gain one additional Elemental Fist attempt per day. While using Efreeti Style, you gain fire resistance equal to your base attack bonus or your monk level plus any base attack bonus gained from levels in classes other than monk, whichever is higher. While denied your Dexterity bonus to AC you are also denied this resistance. Creatures that take fire damage from your Elemental Fist attack must succeed at a Reflex save (DC 10 + 1/2 your character level + your Wis modifier) or catch on fire.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Con 15", " Efreeti Style", " base attack bonus +11 or monk level 9th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Efreeti Touch",
      "Benefit" : " While using Efreeti Style, as a standard action, you can spend two Elemental Fist attempts to unleash a 15-foot cone-shaped burst of flame. Creatures caught in the cone take your unarmed strike damage plus the fire damage from your Elemental Fist and catch on fire. A successful Reflex save (DC 10 + 1/2 your character level + your Wis modifier) reduces the damage by half and prevents a target from catching on fire.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Wis 17", " Efreeti Stance", " base attack bonus +13 or monk level 11th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Janni Style",
      "Benefit" : " While using this style, you take only a –1 penalty to AC for charging. Further, opponents that flank you gain only a +1 bonus on attack rolls against you.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Acrobatics 3 ranks", " Perform (dance) 3 ranks", " Improved Unarmed Strike"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Janni Tempest",
      "Benefit" : " While you are using the Janni Style feat, whenever you make an unarmed attack and hit an opponent, you gain a +4 bonus on checks made to bull rush or trip that opponent, as long as the combat maneuver is your next attack by the end of your turn. You do not provoke an attack of opportunity from the target of the maneuver.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Janni Style", " Acrobatics 5 ranks", " Perform (dance) 5 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Janni Rush",
      "Benefit" : " While using Janni Style, you are always considered to have a running start when jumping. Further, if you jump as part of a charge and make an unarmed strike against the designated opponent, a hit allows you to roll the unarmed strike’s damage dice twice and add the results together before adding modifiers (such as from Strength) or extra dice (such as precision-based damage or dice from weapon abilities). The extra damage dice are not multiplied on a successful critical hit.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Janni Tempest", " Acrobatics 8 ranks", " Perform (dance) 8 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Kirin Style",
      "Benefit" : " While using this style, you can spend a swift action to make a Knowledge check to identify a single creature (DC 15 + the creature’s CR for this purpose). If you succeed at the check, while using this style, you gain a +2 bonus on saving throws against that creature’s attacks, as well as a +2 dodge bonus to AC against that creature’s attacks of opportunity. These bonuses last for as long as you use this style. If you cease combat with the creature during this time and resume it later, you can attempt the check again.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Improved Unarmed Strike", " Knowledge (arcana) 6 ranks", " Knowledge (dungeoneering", " local", " nature", " planes", " or religion) 1 rank"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Kirin Strike",
      "Benefit" : " You gain a +2 insight bonus on Knowledge checks made to identify creatures, including the one Kirin Style allows. While using Kirin Style against a creature you have identified using that feat, as a swift action after you have hit a creature with a melee or ranged attack, you can add twice your Intelligence modifier in damage (minimum 2).Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Int 13", " Kirin Style", " Knowledge (arcana) 9 ranks", " Knowledge (dungeoneering", " local", " nature", " planes", " or religion) 3 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Kirin Path",
      "Benefit" : " Whenever you make a Knowledge check to identify a creature, even when using Kirin Style, you can take 10 even if stress and distractions would normally prevent you from doing so. While using Kirin Style against a creature you have identified using that feat, if the creature ends its turn within your threatened area, you can spend a use of your attacks of opportunity that round to move up to 5 feet times your Intelligence modifier (minimum 1). You must end your move in a square threatened by the creature. This move does not provoke attacks of opportunity.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Kirin Strike", " Knowledge (arcana) 12 ranks", " Knowledge (dungeoneering", " local", " nature", " planes", " or religion) 5 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Mantis Style",
      "Benefit" : " You gain one additional Stunning Fist attempt per day. While using this style, you gain a +2 bonus to the DC of effects you deliver with your Stunning Fist.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Stunning Fist", " Heal 3 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Mantis Wisdom",
      "Benefit" : " Treat half your levels in classes other than monk as monk levels for determining effects you can apply to a target of your Stunning Fist per the Stunning Fist monk class feature. You can also use a standard action and a successful melee touch attack to remove any Stunning Fist effect you have applied to a target.While using Mantis Style, you gain a +2 bonus on unarmed attack rolls with which you are using Stunning Fist attempts.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Mantis Style", " Heal 6 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Mantis Torment",
      "Benefit" : " You gain one additional Stunning Fist attempt per day. While using Mantis Style, you make an unarmed attack that expends two daily attempts of your Stunning Fist. If you hit, your opponent must succeed at a saving throw against your Stunning Fist or become dazzled and staggered with crippling pain until the start of your next turn, and at that point the opponent becomes fatigued.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Mantis Wisdom", " Heal 9 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Marid Style",
      "Benefit" : " You gain one additional Elemental Fist attempt per day. While using this style and Elemental Fist to deal cold damage, you gain a bonus on cold damage rolls equal to your Wisdom modifier, and your reach with your unarmed strike increases by 5 feet.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Con 13", " Wis 15", " Elemental Fist", " Improved Unarmed Strike", " base attack bonus +9 or Monk level 5th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Marid Spirit",
      "Benefit" : " You gain one additional Elemental Fist attempt per day. While using Marid Style, you gain cold resistance equal to your base attack bonus, or monk level plus base attack bonus gained from levels in classes other than monk, whichever is higher. While denied your Dexterity bonus to AC you are also denied this resistance. Creatures that take cold damage from your Elemental Fist attack must succeed at a Fortitude save (DC 10 + 1/2 your character level + your Wis modifier) or become entangled in ice for 1d4 rounds. The ice has hit points equal to three times your base attack bonus or monk level, whichever is higher, and a break DC of 15 + your base attack bonus or monk level, whichever is higher. Destroying or breaking the ice ends the entangled condition.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Con 15", " Marid Style", " base attack bonus +11 or monk level 9th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Marid Coldsnap",
      "Benefit" : " While using Marid Style, as a standard action, you can spend two Elemental Fist attempts to unleash a 30-foot line of frigid water. Creatures caught in the line take your unarmed strike damage plus the cold damage from your Elemental Fist attack and are entangled in ice as per the Marid Spirit feat. A successful Reflex save (DC 10 + 1/2 your character level + your Wis modifier) reduces the damage by half and prevents a target from becoming entangled.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Wis 17", " Marid Spirit", " base attack bonus +13 or monk level 11th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Monkey Style",
      "Benefit" : " You add your Wisdom bonus on Acrobatics checks. While using this style, you take no penalty on melee attack rolls or to AC while prone. Further, you can crawl and stand up from lying prone without provoking attacks of opportunity, and you can stand up as a swift action if you succeed at a DC 20 Acrobatics check.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Wis 13", " Acrobatics 5 ranks", " Climb 5 ranks", " Improved Unarmed Strike"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Monkey Moves",
      "Benefit" : " While using Monkey Style, you gain a Wisdom bonus on Climb checks. You can also can climb and crawl at half your speed; you can take a 5-foot step by jumping, crawling, or climbing; and you retain your Dexterity bonus to AC while climbing. Further, while using Monkey Style, when you use your unarmed strike to hit an opponent twice or more on your turn, you can spend a swift action to take a 5-foot step even if you have moved this round.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Monkey Style", " Acrobatics 8 ranks", " Climb 8 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Monkey Shine",
      "Benefit" : " While using Monkey Style, if you successfully deliver a Stunning Fist attempt, in addition to the normal effect of Stunning Fist, you can spend a free action to enter a square adjacent to you that is within your opponent’s space. This movement does not provoke attacks of opportunity. While you are in your opponent’s space, you gain a +4 dodge bonus to AC and a +4 bonus on melee attack rolls against that opponent. If otherwise unhindered, the opponent can move away from you, but if he does, he provokes an attack of opportunity from you even if his choice of movement does not normally do so.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Monkey Moves", " Stunning Fist", " Acrobatics 11 ranks", " Climb 11 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Panther Style",
      "Benefit" : " While using this style, when an opponent makes an attack of opportunity against you for moving through a threatened square, you can spend a swift action to make a retaliatory unarmed strike attack against that opponent. Your attack is resolved after the triggering attack of opportunity.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Wis 13", " Combat Reflexes", " Improved Unarmed Strike"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Panther Claw",
      "Benefit" : " While using Panther Style, you can spend a free action, instead of spending a swift action, to make a retaliatory unarmed strike. You can make a number of retaliatory unarmed strikes on your turn equal to your Wisdom modifier.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Wis 15", " Panther Style"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Panther Parry",
      "Benefit" : " While using Panther Style, your retaliatory unarmed strikes are resolved before the triggering attacks. If your retaliatory unarmed strike deals damage to an opponent, that opponent takes a –2 penalty on attack and damage rolls with the triggering attack of opportunity.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Panther Claw"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shaitan Style",
      "Benefit" : " You gain one additional Elemental Fist attempt per day. While using the Shaitan Style and Elemental Fist feats to deal acid damage, you gain a bonus on acid damage rolls equal to your Wisdom bonus. Further, if your Elemental Fist melee attack misses while you are using it to deal acid damage, you still deal 1d6 points of acid damage to your target.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Con 13", " Wis 15", " Elemental Fist", " base attack bonus +9 or monk level 5th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shaitan Skin",
      "Benefit" : " You gain one additional Elemental Fist attempt per day. While using the Shaitan Style feat, you gain acid resistance equal to your base attack bonus, or your monk level plus BAB gained from levels in classes other than monk, whichever is higher. While denied your Dexterity bonus to AC you are also denied this resistance. Creatures that take acid damage from your Elemental Fist attack must succeed at a Reflex save (DC 10 + 1/2 your character level + your Wis modifier) or be staggered for 1 round.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Con 15", " Shaitan Style", " base attack bonus +11 or monk level 9th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shaitan Earthblast",
      "Benefit" : " While using the Shaitan Style feat, as a standard action, you can spend two Elemental Fist attempts to unleash a 20-foot column of acid that has a 5-foot radius and erupts from a point of origin within 30 feet of you. Creatures caught in the column take your unarmed strike damage plus the acid damage from your Elemental Fist and are staggered for 1 round. A successful Reflex save (DC 10 + 1/2 your character level + your Wis modifier) reduces the damage by half and prevents a target from being staggeredSection 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Wis 17", " Shaitan Skin", " base attack bonus +13 or monk level 11th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Snake Style",
      "Benefit" : " You gain a +2 bonus on Sense Motive checks, and you can deal piercing damage with your unarmed strikes. While using the Snake Style feat, when an opponent targets you with a melee or ranged attack, you can spend an immediate action to make a Sense Motive check. You can use the result as your AC or touch AC against that attack. You must be aware of the attack and not flat-footed.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Improved Unarmed Strike", " Acrobatics 1 rank", " Sense Motive 3 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Snake Sidewind",
      "Benefit" : " You gain a +4 bonus to CMD against trip combat maneuvers and on Acrobatics checks and saving throws to avoid being knocked prone. While using the Snake Style feat, whenever you score a critical threat with your unarmed strike, you can make a Sense Motive check in place of the attack roll to confirm the critical hit. Whenever you score a critical hit with your unarmed strike, you can spend an immediate action to take a 5-foot step even if you have otherwise moved this round.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Snake Style", " Acrobatics 3 ranks", " Sense Motive 6 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Snake Fang",
      "Benefit" : " While using the Snake Style feat, when an opponent’s attack misses you, you can make an unarmed strike against that opponent as an attack of opportunity. If this attack of opportunity hits, you can spend an immediate action to make another unarmed strike against the same opponent.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Combat Reflexes", " Snake Sidewind", " Snake Style", " Acrobatics 6 ranks", " Sense Motive 9 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Snapping Turtle Style",
      "Benefit" : " While using the Snapping Turtle Style feat with at least one hand free, you gain a +1 shield bonus to AC.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Improved Unarmed Strike", " base attack bonus +1 or monk level 1st"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Snapping Turtle Clutch",
      "Benefit" : " While you are using the Snapping Turtle Style feat, the shield bonus the style grants to your AC applies to your CMD and touch AC. Whenever an opponent misses you with a melee attack while you are using the Snapping Turtle Style feat, you can use an immediate action to attempt a grapple combat maneuver against that opponent, but with a –2 penalty.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Improved Grapple", " Snapping Turtle Style", " base attack bonus +3 or monk level 3rd"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Snapping Turtle Shell",
      "Benefit" : " While you are using the Snapping Turtle Style feat, the shield bonus the style grants to your AC increases to +2, and your enemies take a –4 penalty on critical confirmation rolls against you.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Snapping Turtle Clutch", " base attack bonus +5 or monk level 5th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Tiger Style",
      "Benefit" : " While using this style, you gain a +2 bonus to your CMD against bull rush, overrun, and trip maneuvers. You can also deal slashing damage with your unarmed strikes. Whenever you score a critical hit with your slashing unarmed strike, your opponent also takes 1d4 points of bleed damage at the start of his next two turns.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Improved Unarmed Strike", " base attack bonus +3 or monk level 3rd"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Tiger Claws",
      "Benefit" : " While you are using the Tiger Style feat and have both hands free, you can use a full-round action to make a single unarmed strike with both hands. Use your highest base attack bonus, rolling unarmed strike damage for each hand separately and multiplying both if you score a critical hit. If you use Power Attack in conjunction with this attack, can add half your Strength bonus to one of the damage rolls. If you hit, you can attempt a bull rush maneuver with a +2 bonus on the combat maneuver check. This bull rush attempt provokes no attack of opportunity from your opponent, but you cannot move with that opponent if your bull rush is successful.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Tiger Style", " base attack bonus +6 or monk level 5th"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Tiger Pounce",
      "Benefit" : " While using the Tiger Style feat, you can apply the penalty from Power Attack to your AC instead of attack rolls. Additionally, once per round as a swift action, you can move up to half your speed closer to a target you hit with an unarmed strike or made a successful combat maneuver against on this turn or your last turn.Section 15: Copyright Notice - Pathfinder Roleplaying Game Ultimate CombatPathfinder Roleplaying Game Ultimate Combat. © 2011, Paizo Publishing, LLC; Authors: Jason Bulmahn, Tim Hitchcock, Colin McComb, Rob McCreary, Jason Nelson, Stephen Radney-MacFarland, Sean K Reynolds, Owen K.C. Stephens, and Russ Taylor.",
      "catagory" : ["Combat", " Style"],
      "prereq" : ["Power Attack", " Tiger Claws", " base attack bonus +9 or monk level 8th"],
      "onGain" : function (player) {
        return player;
      }
    }
  ],
  "teamworkFeats" : [
    {
      "name" : "Allied Spellcaster",
      "Benefit" : " Whenever you are adjacent to an ally who also has this feat, you receive a +2 competence bonus on level checks made to overcome spell resistance. If your ally has the same spell prepared (or known with a slot available if they are spontaneous spellcasters), this bonus increases to +4 and you receive a +1 bonus to the caster level for all level-dependent variables, such as duration, range, and effect.",
      "catagory" : ["Teamwork"],
      "prereq" : ["Caster level 1st"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Amplified Rage",
      "Benefit" : " Whenever you are raging and adjacent to a raging ally who also has this feat or flanking the same opponent as a raging ally with this feat, your morale bonuses to Strength and Constitution increase by +4. This feat does not stack with itself (you only gain this bonus from one qualifying ally, regardless of how many are adjacent to you).",
      "catagory" : ["Teamwork"],
      "prereq" : ["Half-orc or orc", " rage class feature"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Back to Back",
      "Benefit" : " While you are flanked and adjacent to an ally with this feat, you receive a +2 circumstance bonus to AC against attacks from opponents flanking you.",
      "catagory" : ["Teamwork"],
      "prereq" : ["Perception 3 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Improved Back to Back ",
      "Benefit" : "While you are adjacent to an ally who is flanked and also has this feat, you can spend a swift action to gain a +2 bonus to AC against all flankers until the start of your next turn.",
      "catagory" : ["Teamwork"],
      "prereq" : ["Back to Back", "Perception 5 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Broken Wing Gambit",
      "Benefit" : "You feign weakness, making yourself a tempting and distracting target.Prerequisite: Bluff 5 ranks. Whenever you make a melee attack and hit your opponent, you can use a free action to grant that opponent a +2 bonus on attack and damage rolls against you until the end of your next turn or until your opponent attacks you, whichever happens first. If that opponent attacks you with this bonus, it provokes attacks of opportunity from your allies who have this feat.",
      "catagory" : ["Combat", " Teamwork"],
      "prereq" : ["Bluff 5 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Brutal Grappler",
      "Benefit" : " Prerequisites: Half-orc or orc.  When you and an ally with this feat have grappled the same creature, you may attempt to damage the opponent on your turn (whether you were the one who first initiated the grapple or were assisting your ally in doing so). You and the ally are treated as aiding each other in the grapple (+2 bonus on your grapple combat maneuver) as long as you both decide to maintain the grapple. Normal: When multiple creatures grapple one target, the creature that first initiates the grapple is the only one that makes a check to damage a grappled opponent, with a +2 bonus for each creature that assists the grapple using the Aid Another action.",
      "catagory" : ["Combat", " Teamwork"],
      "prereq" : ["Half-orc or orc"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Cavalry Formation",
      "Benefit" : "You are skilled at riding in close formation with your mounted allies without impeding your effectiveness on the battlefield.Prerequisite: Mounted Combat. You and your mount can overlap the space of mounts whose riders have this feat, although no more than two creatures can share any one square. Further, you can charge through a space containing an allied mount if that mount’s rider has this feat, although the space from which you make your charge attack must comply with this feat’s other benefit or be unoccupied.",
      "catagory" : ["Combat", " Teamwork"],
      "prereq" : ["Mounted Combat"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Combat Medic",
      "Benefit" : "You know the urgency of treating wounds in the heat of battle, applying first aid to your allies with such speed that you assure no one gets left behind.Prerequisite: Heal 5 ranks. Whenever you use Heal to provide first aid, treat caltrop wounds, or treat poison on an ally who also has this feat, you provoke no attacks of opportunity, and can take 10 on the check.",
      "catagory" : ["Teamwork"],
      "prereq" : ["Heal 5 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Coordinated Charge",
      "Benefit" : "You are an expert at leading your allies into the fray.Prerequisites: You have at least two other teamwork feats, base attack bonus +10. When an ally with this feat charges a creature that is no further away from you than your speed, you can, as an immediate action, charge that creature. You must be able to follow all of the normal charge rules.",
      "catagory" : ["Combat", " Teamwork"],
      "prereq" : ["At least two other teamwork feats", " base attack bonus +10"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Coordinated Defense",
      "Benefit" : "You are adept at working with allies to avoid being tripped, grappled, and subjected to other maneuvers. Whenever you are adjacent to an ally who also has this feat, you receive a +2 competence bonus to your Combat Maneuver Defense. This bonus increases to +4 if the creature attempting the maneuver is larger than both you and your ally.",
      "catagory" : ["Combat", " Teamwork"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Coordinated Maneuvers",
      "Benefit" : "You are skilled at working with your allies to perform dangerous combat maneuvers. Whenever you are adjacent to an ally who also has this feat, you receive a +2 competence bonus on all combat maneuver checks. This bonus increases to +4 when attempting to break free from a grapple.",
      "catagory" : ["Combat", " Teamwork"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Duck and Cover",
      "Benefit" : "Your allies assist you in avoiding certain attacks. Whenever you are adjacent to an ally who also has this feat, and both of you are required to make a reflex saving throw against a spell or effect, you may take the result of your die roll or that of your ally (your modifiers still apply to the roll, regardless of which result you take). If you take your ally’s result, you are knocked prone (or staggered on your next turn, if you are already prone or cannot be knocked prone). In addition, you receive a +2 cover bonus to your AC against ranged attacks as long as your ally is wielding a shield.",
      "catagory" : ["Teamwork"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Enfilading Fire",
      "Benefit" : " You receive a +2 bonus on ranged attacks made against a foe flanked by 1 or more allies with this feat.",
      "catagory" : ["Teamwork"],
      "prereq" : ["Point-Blank Shot", " Precise Shot", " 1 other teamwork feat"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Ensemble",
      "Benefit" : " When you are performing, allies within 20 feet who also have this feat can aid you with your Perform checks (including those made as part of bardic performance) as if they were aiding another as an immediate action. The allies make their aid another rolls before you make your check. No more than four allies can grant you a bonus with aid another. Allies aiding you do not need to use the same category of the Perform skill that you are using in order to aid you.",
      "catagory" : ["Teamwork"],
      "prereq" : ["Perform 5 ranks"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Escape Route",
      "Benefit" : " An ally who also has this feat provokes no attacks of opportunity for moving through squares adjacent to you or within your space.",
      "catagory" : ["Teamwork"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Feint Partner",
      "Benefit" : " Whenever an ally who also has this feat successfully feints an opponent, that opponent also loses his Dexterity bonus to AC against the next attack you make against him before the end of the feinting ally’s next turn.",
      "catagory" : ["Combat", " Teamwork"],
      "prereq" : ["Bluff 1 rank"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Improved Feint Partner",
      "Benefit" : " Whenever an ally who also has this feat successfully feints against an opponent, that opponent provokes an attack of opportunity from you.",
      "catagory" : ["Combat", " Teamwork"],
      "prereq" : ["Combat Reflexes", " Feint Partner", " base attack bonus +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Lookout",
      "Benefit" : "Your allies help you avoid being surprised. Whenever you are adjacent to an ally who also has this feat, you may act in the surprise round as long as your ally would normally be able to act in the surprise round. If you would normally be denied the ability to act in the surprise round, your initiative is equal to your initiative roll or the roll of your ally –1, whichever is lower. If both you and your ally would be able to act in the surprise round without the aid of this feat, you may take both a standard and a move action (or a full-round action) during the surprise round.",
      "catagory" : ["Combat", " Teamwork"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Outflank",
      "Benefit" : " Whenever you and an ally who also has this feat are flanking the same creature, your flanking bonus on attack rolls increases to +4. In addition, whenever you score a critical hit against the flanked creature, it provokes an attack of opportunity from your ally.",
      "catagory" : ["Combat", " Teamwork"],
      "prereq" : ["Base attack bonus +4."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Pack Attack",
      "Benefit" : " When you are adjacent to an ally with this feat, the first time you melee attack an opponent, you can spend an immediate action to take a 5-foot step, even if you have otherwise moved this round.",
      "catagory" : ["Teamwork"],
      "prereq" : ["Base attack bonus +1"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Paired Opportunists",
      "Benefit" : " Whenever you are adjacent to an ally who also has this feat, you receive a +4 circumstance bonus on attacks of opportunity against creatures that you both threaten. Enemies that provoke attacks of opportunity from your ally also provoke attacks of opportunity from you so long as you threaten them (even if the situation or an ability would normally deny you the attack of opportunity). This does not allow you to take more than one attack of opportunity against a creature for a given action.",
      "catagory" : ["Combat", " Teamwork"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Precise Strike",
      "Benefit" : " Whenever you and an ally who also has this feat are flanking the same the creature, you deal an additional 1d6 points of precision damage with each successful melee attack. This bonus damage stacks with other sources of precision damage, such as sneak attack. This bonus damage is not multiplied on a critical hit.",
      "catagory" : ["Combat", " Teamwork"],
      "prereq" : ["Dex 13", " base attack bonus +1."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Seize the Moment",
      "Benefit" : " When an ally who also has this feat confirms a critical hit against an opponent that you also threaten, you can make an attack of opportunity against that opponent.",
      "catagory" : ["Teamwork"],
      "prereq" : ["Combat Reflexes", " Improved Critical"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shake It Off",
      "Benefit" : "You support your allies and help them recover from crippling effects. When you are adjacent to one or more allies who also have this feat, you gain a +1 bonus on saving throws per such ally (maximum +4).",
      "catagory" : ["Teamwork"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shield Wall",
      "Benefit" : " Whenever you are wielding a shield and are adjacent to an ally wielding a shield who also has this feat, the AC bonus from your shield increases, depending on the shield wielded by your ally.If your ally is wielding a buckler or a light shield, your shield bonus increases by +1.If your ally is wielding a heavy shield or a tower shield, your shield bonus increases by +2.You keep these bonuses even if your ally loses his shield bonus due to making a shield bash attack.If an adjacent ally with this feat uses a tower shield to grant total cover, you also benefit if an attack targeting you passes through the edge of the shield.",
      "catagory" : ["Combat", " Teamwork"],
      "prereq" : ["Shield Proficiency."],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Shielded Caster",
      "Benefit" : "Your allies cover you while you cast complicated spells. Whenever you are adjacent to an ally who also has this feat, you receive a +4 competence bonus on concentration checks.If your ally is wielding a buckler or a light shield, this bonus increases by +1.If your ally is wielding a heavy shield or a tower shield, this bonus increases by +2.Finally, if an enemy threatening you and your ally has the Disruptive feat, or another ability that increases the DC of concentration checks, the amount of the increase is halved.",
      "catagory" : ["Teamwork"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Stealth Synergy",
      "Benefit" : "Working closely with an ally, you are able to move like twin shadows. While you can see one or more allies who also have this feat, whenever you and your allies make a Stealth check, you all take the highest roll and add all your modifiers to Stealth.",
      "catagory" : ["Teamwork"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Swap Places",
      "Benefit" : "You are skilled at changing places with your ally during a chaotic melee. Whenever you are adjacent to an ally ",
      "catagory" : ["Combat", " Teamwork"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Tandem Trip",
      "Benefit" : "You know how to work together to trip your foes. Whenever you attempt a trip combat maneuver against an enemy threatened by an ally with this feat, you roll twice and take the better result.",
      "catagory" : ["Teamwork"],
      "prereq" : ["—"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Target of Opportunity",
      "Benefit" : " When an ally who also has this feat makes a ranged attack and hits an opponent within 30 feet of you, you can spend an immediate action to make a single ranged attack against that opponent. Your ranged weapon must be in hand, loaded, and ready to be fired or thrown for you to make the ranged attack.",
      "catagory" : ["Teamwork"],
      "prereq" : ["Point-Blank Shot", " base attack bonus +6"],
      "onGain" : function (player) {
        return player;
      }
    },
    {
      "name" : "Team Pickpocketing",
      "Benefit" : " Whenever an ally with this feat succeeds a Bluff check to feint an opponent, if you are adjacent to that creature, you can spend an immediate action to make a Sleight of Hand check to pickpocket that opponent and gain a +4 bonus on that attempt.",
      "catagory" : ["Teamwork"],
      "prereq" : ["Bluff 1 rank", " Sleight of Hand 1 rank"],
      "onGain" : function (player) {
        return player;
      }
    }
  ]
};