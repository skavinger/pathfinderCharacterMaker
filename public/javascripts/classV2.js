var player;
exports.implementedClasses = function () {
  var implementedClasses = {
    "classes" : [
      {
        "ClassName" : "Fighter",
        "Archetypes" : [
          {"archetypeName" : "Archer"},
          {"archetypeName" : "Armor Master"}
        ]
      }
    ]
  };
  return implementedClasses;
};
exports.classes = {
  "Fighter" : {
    "defaultBuild" : {
      "BAB" : function (lv) {
        return lv;
      },
      "REF" : function (lv) {
        return (Math.floor(lv / 3));
      },
      "FORT" : function (lv) {
        return (Math.floor(lv / 2) + 2);
      },
      "WILL" : function (lv) {
        return (Math.floor(lv / 3));
      },
      "skillPerLv" : function (lv) {
        return 2 * lv;
      },
      "hitDie" : function () {
        return 10;
      },
      "classFeatures" : {
        "one" : {
          "feat" : function (player) {
            player.to_do.push("addFighterFeat");
          },
          "classSkills" : function (player) {
            player.classSkills.climb = 1;
            player.classSkills.craft = 1;
            player.classSkills.handelAnimal = 1;
            player.classSkills.intimidate = 1;
            player.classSkills.kn_Dungeoneering = 1;
            player.classSkills.kn_Engineering = 1;
            player.classSkills.profession = 1;
            player.classSkills.ride = 1;
            player.classSkills.survival = 1;
            player.classSkills.swim = 1;
          },
          "weaponProficiency" : function (player) {
            player.feats.push({
              "name" : "Simple Weapon Proficiency",
              "Benefit" : " You make attack rolls with simple weapons without penalty.",
              "catagory" : ["Combat"],
              "prereq" : ["—"]
            });
            player.feats.push({
              "name" : "Martial Weapon Proficiency",
              "Benefit" : " You make attack rolls with the selected weapon normally (without the non-proficient penalty).",
              "catagory" : ["Combat"],
              "prereq" : ["—"]
            });
          },
          "armorProficiency" : function (player) {
            player.feats.push({
              "name" : "Armor Proficiency, Light",
              "Benefit" : "When you wear light armor, the armor check penalty for that armor applies only to Dexterity- and Strength-based skill checks.",
              "catagory" : ["Combat"],
              "prereq" : ["—"]
            });
            player.feats.push({
              "name" : "Armor Proficiency, Medium",
              "Benefit" : "When you wear medium armor, the armor check penalty for that armor applies only to Dexterity- and Strength-based skill checks.",
              "catagory" : ["Combat"],
              "prereq" : ["Armor Proficiency, Light"]
            });
            player.feats.push({
              "name" : "Armor Proficiency, Heavy",
              "Benefit" : "When you wear heavy armor, the armor check penalty for that armor applies only to Dexterity- and Strength-based skill checks.",
              "catagory" : ["Combat"],
              "prereq" : ["Armor Proficiency, Medium"]
            });
          }
        },
        "two" : {
          "feat" : function (player) {
            player.to_do.push("addFighterFeat");
          },
          "bravery" : function (player) {
            player.saveNotes.Bravery = "+1 bonus on Will saves against fear";
          }
        },
        "three" : {
          "armorTraining" : function (player) {
            player.armorCheckMod = player.armorCheckMod + 1;
            player.armorMaxDexMod = player.armorMaxDexMod + 1;
          }
        },
        "four" : {
          "feat" : function (player) {
            player.to_do.push("addFighterFeat");
          }
        },
        "five" : {
          "weaponsTraining" : function (player) {
            player.AtkMod.push({
              "name" : "Weapon Training (Ex)",
              "type" : "misc",
              "value" : 1
            });
            player.DamMod.push({
              "name" : "Weapon Training (Ex)",
              "type" : "misc",
              "value" : 1
            });
          }
        },
        "six" : {
          "feat" : function (player) {
            player.to_do.push("addFighterFeat");
          },
          "bravery" : function (player) {
            player.saveNotes.Bravery = "+2 bonus on Will saves against fear";
          }
        },
        "seven" : {
          "armorTraining" : function (player) {
            player.armorCheckMod = player.armorCheckMod + 1;
            player.armorMaxDexMod = player.armorMaxDexMod + 1;
          }
        },
        "eight" : {
          "feat" : function (player) {
            player.to_do.push("addFighterFeat");
          }
        },
        "nine" : {
          "weaponsTraining" : function (player) {
            player.AtkMod.push({
              "name" : "Weapon Training (Ex)",
              "type" : "misc",
              "value" : 2
            });
            player.DamMod.push({
              "name" : "Weapon Training (Ex)",
              "type" : "misc",
              "value" : 2
            });
          }
        },
        "ten" : {
          "feat" : function (player) {
            player.to_do.push("addFighterFeat");
          },
          "bravery" : function (player) {
            player.saveNotes.Bravery = "+3 bonus on Will saves against fear";
          }
        },
        "eleven" : {
          "armorTraining" : function (player) {
            player.armorCheckMod = player.armorCheckMod + 1;
            player.armorMaxDexMod = player.armorMaxDexMod + 1;
          }
        },
        "twelve" : {
          "feat" : function (player) {
            player.to_do.push("addFighterFeat");
          }
        },
        "thirteen" : {
          "weaponsTraining" : function (player) {
            player.AtkMod.push({
              "name" : "Weapon Training (Ex)",
              "type" : "misc",
              "value" : 3
            });
            player.DamMod.push({
              "name" : "Weapon Training (Ex)",
              "type" : "misc",
              "value" : 3
            });
          }
        },
        "fourteen" : {
          "feat" : function (player) {
            player.to_do.push("addFighterFeat");
          },
          "bravery" : function (player) {
            player.saveNotes.Bravery = "+4 bonus on Will saves against fear";
          }
        },
        "fifthteen" : {
          "armorTraining" : function (player) {
            player.armorCheckMod = player.armorCheckMod + 1;
            player.armorMaxDexMod = player.armorMaxDexMod + 1;
          }
        },
        "sixteen" : {
          "feat" : function (player) {
            player.to_do.push("addFighterFeat");
          }
        },
        "seventeen" : {
          "weaponsTraining" : function (player) {
            player.AtkMod.push({
              "name" : "Weapon Training (Ex)",
              "type" : "misc",
              "value" : 4
            });
            player.DamMod.push({
              "name" : "Weapon Training (Ex)",
              "type" : "misc",
              "value" : 4
            });
          }
        },
        "eighteen" : {
          "feat" : function (player) {
            player.to_do.push("addFighterFeat");
          },
          "bravery" : function (player) {
            player.saveNotes.Bravery = "+5 bonus on Will saves against fear";
          }
        },
        "nineteen" : {
          "armorTraining" : function (player) {
            player.armorCheckMod = player.armorCheckMod + 1;
            player.armorMaxDexMod = player.armorMaxDexMod + 1;
          },
          "armorMastery" : function (player) {
            player.DR["Armor Mastery (Ex)"] = {
              "value" : 5,
              "weakness" : "-",
              "requirement" : "Armor or Shield"
            };
          }
        },
        "twenty" : {
          "feat" : function (player) {
            player.to_do.push("addFighterFeat");
          },
          "weaponMastery" : function (player) {
            player.combatNotes.push({
              "name":"Weapon Mastery (Ex)", 
              "description" :"Auto confirm critical hits and increase critical multipier by 1"
            });
          }
        }
      }
    },
    "Archetype" : {
      "Archer" : function (fighterBuild) {
        delete fighterBuild.classFeatures.two.bravery;
        delete fighterBuild.classFeatures.six.bravery;
        delete fighterBuild.classFeatures.ten.bravery;
        delete fighterBuild.classFeatures.fourteen.bravery;
        delete fighterBuild.classFeatures.eighteen.bravery;

        fighterBuild.classFeatures.two.hawkeye = function (player) {
          player.combatNotes.push({
            "name": "Hawkeye (Ex)",
            "description" : "the range increment for any bow he uses increases by 5 feet"
          });
          player.skillMod.push({
            "Skill" : "perception",
            "value" : 1,
            "type" : "compitance"
          });
        };
        fighterBuild.classFeatures.six.hawkeye = function (player) {
          for(i = 0; i < combatNotes.length; i++){
            if (combatNotes[i].name === "Hawkeye (Ex)") {
              combatNotes[i].description =  "the range increment for any bow he uses increases by 10 feet";
            };
          }
          player.skillMod.push({
            "Skill" : "perception",
            "value" : 1,
            "type" : "compitance"
          });
        };
        fighterBuild.classFeatures.ten.hawkeye = function (player) {
          for(i = 0; i < combatNotes.length; i++){
            if (combatNotes[i].name === "Hawkeye (Ex)") {
              combatNotes[i].description =  "the range increment for any bow he uses increases by 15 feet";
            };
          }
          player.skillMod.push({
            "Skill" : "perception",
            "value" : 1,
            "type" : "compitance"
          });
        };
        fighterBuild.classFeatures.fourteen.hawkeye = function (player) {
          for(i = 0; i < combatNotes.length; i++){
            if (combatNotes[i].name === "Hawkeye (Ex)") {
              combatNotes[i].description =  "the range increment for any bow he uses increases by 20 feet";
            };
          }
          player.skillMod.push({
            "Skill" : "perception",
            "value" : 1,
            "type" : "compitance"
          });
        };
        fighterBuild.classFeatures.eighteen.hawkeye = function (player) {
          for(i = 0; i < combatNotes.length; i++){
            if (combatNotes[i].name === "Hawkeye (Ex)") {
              combatNotes[i].description =  "the range increment for any bow he uses increases by 25 feet";
            };
          }
          player.skillMod.push({
            "Skill" : "perception",
            "value" : 1,
            "type" : "compitance"
          });
        };

        delete fighterBuild.classFeatures.three.armorTraining;
        delete fighterBuild.classFeatures.seven.armorTraining;
        delete fighterBuild.classFeatures.eleven.armorTraining;
        delete fighterBuild.classFeatures.fifthteen.armorTraining;
        delete fighterBuild.classFeatures.nineteen.armorTraining;

        fighterBuild.classFeatures.three.trickShot = function (player) {
          player.combatNotes.push({
            "name" : "Trick Shot (Ex)", 
            "description" : "choose 1 :disarm, feint, or sunder. He can perform this action with a bow against any target within 30 feet, with a –4 penalty to his CMB"
          });
        };
        fighterBuild.classFeatures.seven.trickShot = function (player) {
          for(i = 0; i < combatNotes.length; i++){
            if (combatNotes[i].name === "Trick Shot (Ex)") {
              combatNotes[i].description =  "choose 2 :disarm, feint, or sunder. He can perform this action with a bow against any target within 30 feet, with a –4 penalty to his CMB";
            };
          }
        };
        fighterBuild.classFeatures.eleven.trickShot = function (player) {
          for(i = 0; i < combatNotes.length; i++){
            if (combatNotes[i].name === "Trick Shot (Ex)") {
              combatNotes[i].description =  "choose 3 :disarm, feint, sunderbull rush, grapple, or trip. A target grappled by an arrow can break free by destroying the archer’s arrow (hardness 5, hit points 1, break DC 13) or with an Escape Artist or CMB check (against the archer’s CMD –4). He can perform this action with a bow against any target within 30 feet, with a –4 penalty to his CMB";
            };
          }
        };
        fighterBuild.classFeatures.fifthteen.trickShot = function (player) {
          for(i = 0; i < combatNotes.length; i++){
            if (combatNotes[i].name === "Trick Shot (Ex)") {
              combatNotes[i].description =  "choose 4 :disarm, feint, sunderbull rush, grapple, or trip. A target grappled by an arrow can break free by destroying the archer’s arrow (hardness 5, hit points 1, break DC 13) or with an Escape Artist or CMB check (against the archer’s CMD –4). He can perform this action with a bow against any target within 30 feet, with a –4 penalty to his CMB";
            };
          }
        };
        fighterBuild.classFeatures.nineteen.trickShot = function (player) {
          for(i = 0; i < combatNotes.length; i++){
            if (combatNotes[i].name === "Trick Shot (Ex)") {
              combatNotes[i].description =  "choose 5 :disarm, feint, sunderbull rush, grapple, or trip. A target grappled by an arrow can break free by destroying the archer’s arrow (hardness 5, hit points 1, break DC 13) or with an Escape Artist or CMB check (against the archer’s CMD –4). He can perform this action with a bow against any target within 30 feet, with a –4 penalty to his CMB";
            };
          }
        };
        delete fighterBuild.classFeatures.five.weaponsTraining;

        fighterBuild.classFeatures.five.expertArcher = function (player) {
          player.AtkMod.push({
            "name" : "Expert Archer (Ex)",
            "type" : "misc",
            "value" : 1,
            "requirement" : "Bow"
          });
          player.DamMod.push({
            "name" : "Expert Archer (Ex)",
            "type" : "misc",
            "value" : 1,
            "requirement" : "Bow"
          });
        };
        fighterBuild.classFeatures.nine.expertArcher = function (player) {
          player.AtkMod.push({
            "name" : "Expert Archer (Ex)",
            "type" : "misc",
            "value" : 2,
            "requirement" : "Bow"
          });
          player.DamMod.push({
            "name" : "Expert Archer (Ex)",
            "type" : "misc",
            "value" : 2,
            "requirement" : "Bow"
          });
        };
        fighterBuild.classFeatures.thirteen.expertArcher = function (player) {
          player.AtkMod.push({
            "nmae" : "Expert Archer (Ex)",
            "type" : "misc",
            "value" : 3,
            "requirement" : "Bow"
          });
          player.DamMod.push({
            "name" : "Expert Archer (Ex)",
            "type" : "misc",
            "value" : 3,
            "requirement" : "Bow"
          });
        };
        fighterBuild.classFeatures.seventeen.expertArcher = function (player) {
          player.AtkMod.push({
            "name" : "Expert Archer (Ex)",
            "type" : "misc",
            "value" : 4,
            "requirement" : "Bow"
          });
          player.DamMod.push({
            "name" : "Expert Archer (Ex)",
            "type" : "misc",
            "value" : 4,
            "requirement" : "Bow"
          });
        };

        delete fighterBuild.classFeatures.nine.weaponsTraining;

        fighterBuild.classFeatures.nine.safeShot = function (player) {
          player.combatNotes.push({
            "name" : "Safe Shot (Ex)" ,
            "description" : "an archer does not provoke attacks of opportunity when making ranged attacks with a bow"
          });
        };

        delete fighterBuild.classFeatures.thirteen.weaponsTraining;

        fighterBuild.classFeatures.thirteen.evasiveArcher = function (player) {
          player.ACMod["Evasive Archer (Ex)"] = {
            "type" : "dodge",
            "value" : 2,
            "requirement" : "vs ranged"
          };
        };
        fighterBuild.classFeatures.seventeen.evasiveArcher = function (player) {
          player.ACMod["Evasive Archer (Ex)"] = {
            "type" : "dodge",
            "value" : 2,
            "requirement" : "vs ranged"
          };
        };

        delete fighterBuild.classFeatures.seventeen.weaponsTraining;

        fighterBuild.classFeatures.seventeen.volley = function (player) {
          player.combatNotes.push({
            "name" : "Volley (Ex)", 
            "description" : "as a full-round action, an archer can make a single bow attack at his highest base attack bonus against any number of creatures in a 15-foot radius burst, making separate attack and damage rolls for each creature."
          });
        };

        delete fighterBuild.classFeatures.nineteen.armorMastery;

        fighterBuild.classFeatures.nineteen.rangedDefense = function (player) {
          player.DR["Ranged Defense (Ex)"] = {
            "value" : 5,
            "weakness" : "-",
            "requirement" : "vs Ranged"
          };
          player.combatNotes.push({
            "name" : "Ranged Defense (Ex)",
            "description" : "as an immediate action, he can catch an arrow fired at him and shoot it any target he chooses, as if he had the Snatch Arrows feat."
          });
        };

        fighterBuild.classFeatures.twenty.weaponMastery = function (player) {
          player.combatNotes.push({
            "name" : "Weapon Mastery (Ex)",
            "description" : "Auto confirm critical hits and increase critical multipier by 1 with bows"
          });
        };
        return fighterBuild;
      },
      "Armor Master" : function (fighterBuild) {

        delete fighterBuild.classFeatures.two.bravery;
        delete fighterBuild.classFeatures.six.bravery;
        delete fighterBuild.classFeatures.ten.bravery;
        delete fighterBuild.classFeatures.fourteen.bravery;
        delete fighterBuild.classFeatures.eighteen.bravery;

        fighterBuild.classFeatures.two.deflectiveShield  = function (player) {
          player.ACMod["Deflective Shield (Ex)"] = {
            "value" : 1,
            "type" : "misc"
          };
        };
        fighterBuild.classFeatures.six.deflectiveShield = function (player) {
          player.ACMod["Deflective Shield (Ex)"] = {
            "value" : 2,
            "type" : "misc"
          };
        };
        fighterBuild.classFeatures.ten.deflectiveShield = function (player) {
          player.ACMod["Deflective Shield (Ex)"] = {
            "value" : 3,
            "type" : "misc"
          };
        };
        fighterBuild.classFeatures.fourteen.deflectiveShield = function (player) {
          player.ACMod["Deflective Shield (Ex)"] = {
            "value" : 4,
            "type" : "misc"
          };
        };
        fighterBuild.classFeatures.eighteen.deflectiveShield = function (player) {
          player.ACMod["Deflective Shield (Ex)"] = {
            "value" : 5,
            "type" : "misc"
          };
        };
        delete fighterBuild.classFeatures.five.weaponsTraining;
        delete fighterBuild.classFeatures.thirteen.weaponsTraining;
        delete fighterBuild.classFeatures.nineteen.armorMastery;

        fighterBuild.classFeatures.five.armoredDefense = function (player) {
          player.DR["Armored Defense (Ex)[light]"] = {
            "value" : 1,
            "weakness" : "-",
            "requirement" : "Light Armor"
          };
          player.DR["Armored Defense (Ex)[medium]"] = {
            "value" : 2,
            "weakness" : "-",
            "requirement" : "Medium Armor"
          };
          player.DR["Armored Defense (Ex)[heavy]"] = {
            "value" : 3,
            "weakness" : "-",
            "requirement" : "Heavy Armor"
          };
        };
        fighterBuild.classFeatures.ninetee.armoredDefense = function (player) {
          player.DR["Armored Defense (Ex)[light]"] = {
            "value" : 4,
            "weakness" : "-",
            "requirement" : "Light Armor"
          };
          player.DR["Armored Defense (Ex)[medium]"] = {
            "value" : 8,
            "weakness" : "-",
            "requirement" : "Medium Armor"
          };
          player.DR["Armored Defense (Ex)[heavy]"] = {
            "value" : 12,
            "weakness" : "-",
            "requirement" : "Heavy Armor"
          };
        };

        delete fighterBuild.classFeatures.nine.weaponsTraining;
        delete fighterBuild.classFeatures.seventeen.weaponsTraining;

        fighterBuild.classFeatures.nine.fortification = function (player) {
          player.combatNotes.push({
            "name" : "Fortification (Ex)",
            "description" : "25% chance to negate critical hits and sneak attacks"
          });
        };

        fighterBuild.classFeatures.thirteen.fortification = function (player) {
          for(i = 0; i < combatNotes.length; i++){
            if (combatNotes[i].name === "Fortification (Ex)") {
              combatNotes[i].description =  "50% chance to negate critical hits and sneak attacks";
            };
          }
        };

        delete fighterBuild.classFeatures.twenty.weaponMastery;

        fighterBuild.classFeatures.twenty.indestructible = function (player) {
          player.combatNotes.push({
            "name" : "Indestructible (Ex)",
            "description" : "complete immunity to critical hits and sneak attacks while he is wearing armor. In addition, unless his armor has the fragile armor quality, it cannot be sundered while he is wearing it."
          });
        };
        return fighterBuild;
      },
      "Brawler" : function () {
        delete fighterBuild.classFeatures.three.armorTraining;
        delete fighterBuild.classFeatures.seven.armorTraining;
        delete fighterBuild.classFeatures.eleven.armorTraining;
        delete fighterBuild.classFeatures.fifthteen.armorTraining;
        delete fighterBuild.classFeatures.nineteen.armorTraining;
        delete fighterBuild.classFeatures.five.weaponsTraining;
        delete fighterBuild.classFeatures.nine.weaponsTraining;
        delete fighterBuild.classFeatures.thirteen.weaponsTraining;
        delete fighterBuild.classFeatures.seventeen.weaponsTraining;
        delete fighterBuild.classFeatures.nineteen.armorMastery;
        delete fighterBuild.classFeatures.twenty.weaponMastery;
      },
      "Buckler Duelist" : function () {
        delete fighterBuild.classFeatures.two.bravery;
        delete fighterBuild.classFeatures.six.bravery;
        delete fighterBuild.classFeatures.ten.bravery;
        delete fighterBuild.classFeatures.fourteen.bravery;
        delete fighterBuild.classFeatures.eighteen.bravery;
        delete fighterBuild.classFeatures.three.armorTraining;
        delete fighterBuild.classFeatures.seven.armorTraining;
        delete fighterBuild.classFeatures.eleven.armorTraining;
        delete fighterBuild.classFeatures.five.weaponsTraining;
      },
      "Cad" : function () {

      },
      "Corsair" : function () {

      },
      "Crossbowman" : function () {

      },
      "Dervish of Dawn" : function () {

      },
      "Dragoon" : function () {

      },
      "Free Hand Fighter" : function () {

      },
      "Gladiator" : function () {

      },
      "Lore Warden" : function () {

      },
      "Mobile Fighter" : function () {

      },
      "Phalanx Soldier" : function () {

      },
      "Polearm Master" : function () {

      },
      "Roughrider" : function () {

      },
      "Savage Warrior" : function () {

      },
      "Shielded Fighter" : function () {

      },
      "Swordlord" : function () {

      },
      "Tactician" : function () {

      },
      "Thunderstriker" : function () {

      },
      "Tower Shield Specialist" : function () {

      },
      "Trench Fighter" : function () {

      },
      "Two-Handed Fighter" : function () {

      },
      "Two-Weapon Warrior" : function () {

      },
      "Unarmed Fighter" : function () {

      },
      "Unbreakable" : function () {

      },
      "Viking" : function () {

      },
      "Weapon Bearer Squire" : function () {

      },
      "Weapon Master" : function () {

      }
    }
  }
};