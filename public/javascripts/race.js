exports.implementedRaces = function () {
  var implementedRaces = {
    "races" : [
      {
        "Name" : "Human",
        "altTraits" : [
          {
            "replaces" : "Attribute",
            "options" : [
              {
                "replaces" : "Attribute",
                "Name" : "Str"
              },
              {
                "replaces" : "Attribute",
                "Name" : "Dex"
              },
              {
                "replaces" : "Attribute",
                "Name" : "Con"
              },
              {
                "replaces" : "Attribute",
                "Name" : "Int"
              },
              {
                "replaces" : "Attribute",
                "Name" : "Wis"
              },
              {
                "replaces" : "Attribute",
                "Name" : "Cha"
              }
            ]
          }
        ]
      },
      {
        "Name" : "Half-Orc"
      },
      {
        "Name" : "Half-Elf"
      }
    ]
  };
  return implementedRaces;
};

exports.races = {
  "Human" : {
    "defaultBuild" : {
      "Size" : function (player) {
        player.size = "Meddium";
      },
      "Speed" : function (player) {
        player.speed.ground = 30;
      },
      "language" : function (player) {
        player.languages.push("Common");
      },
      "feat" : function (player) {
        player.to_do.push("addFeat");
      },
      "skills" : function (player) {
        player.onLv.humanSkills = function (player, lv) {
          player.skillPoints = player.skillPoints + lv;
        };
      }
    },
    "altTraits" : {
      "Attribute" : function (build, Attribute) {
        if (Attribute === "Str") {
          build.attribute = function (player) {
            player.attributeMod.Human = {
              "Attribute" : "Str",
              "value" : 2
            };
            return player;
          };
        } else if (Attribute === "Dex") {
          build.attribute = function (player) {
            player.attributeMod.Human = {
              "Attribute" : "Dex",
              "value" : 2
            };
            return player;
          };
        } else if (Attribute === "Con") {
          build.attribute = function (player) {
            player.attributeMod.Human = {
              "Attribute" : "Con",
              "value" : 2
            };
            return player;
          };
        } else if (Attribute === "Int") {
          build.attribute = function (player) {
            player.attributeMod.Human = {
              "Attribute" : "Int",
              "value" : 2
            };
            return player;
          };
        } else if (Attribute === "Wis") {
          build.attribute = function (player) {
            player.attributeMod.Human = {
              "Attribute" : "Wis",
              "value" : 2
            };
            return player;
          };
        } else if (Attribute === "Cha") {
          build.attribute = function (player) {
            player.attributeMod.Human = {
              "Attribute" : "Cha",
              "value" : 2
            };
            return player;
          };
        }
      }
    }
  },
  "Half-Orc" : {
    "defaultBuild" : {
      "AttributeMod" : function (player, Attribute) {
        if (Attribute === "Str") {
          player.AttributeMod.HalfOrc = {
            "Attribute" : "Str",
            "value" : 2
          };
        } else if (Attribute === "Dex") {
          player.AttributeMod.HalfOrc = {
            "Attribute" : "Dex",
            "value" : 2
          };
        } else if (Attribute === "Con") {
          player.AttributeMod.HalfOrc = {
            "Attribute" : "Con",
            "value" : 2
          };
        } else if (Attribute === "Int") {
          player.AttributeMod.HalfOrc = {
            "Attribute" : "Int",
            "value" : 2
          };
        } else if (Attribute === "Wis") {
          player.AttributeMod.HalfOrc = {
            "Attribute" : "Wis",
            "value" : 2
          };
        } else if (Attribute === "Cha") {
          player.AttributeMod.HalfOrc = {
            "Attribute" : "Cha",
            "value" : 2
          };
        }
      },
      "Size" : function (player) {
        player.size = "Meddium";
      },
      "Speed" : function (player) {
        player.speed.ground = 30;
      },
      "language" : function (player) {
        player.languages.push("Common");
        player.languages.push("Orc");
      },
      "Intimidating" : function (player) {
        player.skillMods.intimidate = player.skillMods.intimidate + 2;
      },
      "OrcFerocity" : function (player) {
        player.combatNotes["Orc Ferocity"] = "Once per day, when a half-orc is brought below 0 hit points but not killed, he can fight on for 1 more round as if disabled. At the end of his next turn, unless brought to above 0 hit points, he immediately falls unconscious and begins dying.";
      },
      "WeaponFamiliarity" : function (player) {
        player.feats["Martial Weapon Proficiency(Greataxes)"] =  {
          "Benefit" : " You make attack rolls with the selected weapon normally (without the non-proficient penalty).",
          "catagory" : ["Combat"],
          "prereq" : ["—"]
        };
        player.feats["Martial Weapon Proficiency(Falchions)"] =  {
          "Benefit" : " You make attack rolls with the selected weapon normally (without the non-proficient penalty).",
          "catagory" : ["Combat"],
          "prereq" : ["—"]
        };
        player.feats["Martial Weapon Proficiency(Orc Weapons)"] =  {
          "Benefit" : " You make attack rolls with the selected weapon normally (without the non-proficient penalty).",
          "catagory" : ["Combat"],
          "prereq" : ["—"]
        };
      },
      "Darkvision" : function (player) {
        player.generalNotes.Darkvision = "Half-orcs can see in the dark up to 60 feet.";
      },
      "OrcBlood" : function (player) {
        player.generalNotes["Orc Blood"] = "Half-orcs count as both humans and orcs for any effect related to race.";
      }
    }
  },
  "Half-Elf" : {
    "defaultBuild" : {
      "AttributeMod" : function (player, Attribute) {
        if (Attribute === "Str") {
          player.AttributeMod.HalfElf = {
            "Attribute" : "Str",
            "value" : 2
          };
        } else if (Attribute === "Dex") {
          player.AttributeMod.HalfElf = {
            "Attribute" : "Dex",
            "value" : 2
          };
        } else if (Attribute === "Con") {
          player.AttributeMod.HalfElf = {
            "Attribute" : "Con",
            "value" : 2
          };
        } else if (Attribute === "Int") {
          player.AttributeMod.HalfElf = {
            "Attribute" : "Int",
            "value" : 2
          };
        } else if (Attribute === "Wis") {
          player.AttributeMod.HalfElf = {
            "Attribute" : "Wis",
            "value" : 2
          };
        } else if (Attribute === "Cha") {
          player.AttributeMod.HalfElf = {
            "Attribute" : "Cha",
            "value" : 2
          };
        }
      },
      "Size" : function (player) {
        player.size = "Meddium";
      },
      "Speed" : function (player) {
        player.speed.ground = 30;
      },
      "language" : function (player) {
        player.languages.push("Common");
        player.languages.push("Elven");
      },
      "ElvenImmunities" : function (player) {
        player.saveNotes["Elven Immunities"] = "Half-elves are immune to magic sleep effects and gain a +2 racial saving throw bonus against enchantment spells and effects.";
      },
      "Adaptability" : function (player) {
        player.todo.push("addSkillFocusFeat");
      },
      "KeenSenses" : function (player) {
        player.skillMods.perception += 2;
      },
      "LowLightVision" : function (player) {
        player.generalNotes["Low-Light Vision"] = "Half-elves can see twice as far as humans in conditions of dim light.";
      },
      "ElfBlood" : function (player) {
        player.generalNotes["Elf Blood"] = "Half-elves count as both elves and humans for any effect related to race";
      }
    }
  }
};