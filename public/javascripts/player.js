exports.getPlayer = function () {
  var player = {
    "attributes" : {
      "Str" : 10,
      "Dex" : 10,
      "Con" : 10,
      "Int" : 10,
      "Wis" : 10,
      "Cha" : 10
    },
    "attributeMod" : {},
    "skills" : {
      "acrobatics" : 0,
      "appraise" : 0,
      "bluff" : 0,
      "climb" : 0,
      "craft" : {},
      "diplomacy" : 0,
      "disable device" : 0,
      "disguise": 0,
      "escape artist" : 0,
      "fly" : 0,
      "handle animal" : 0,
      "heal" : 0,
      "intimidate" : 0,
      "knowledge" : {},
      "linguistics" : 0,
      "perception" : 0,
      "perform" : {},
      "profession" : {},
      "ride" : 0,
      "sense motive" : 0,
      "sleight of hand" : 0,
      "spellcraft" : 0,
      "stealth" : 0,
      "survival" : 0,
      "swim" : 0,
      "use magic device" : 0
    },
    "skillMod" : {
      "acrobatics" : 0,
      "appraise" : 0,
      "bluff" : 0,
      "climb" : 0,
      "craft" : {},
      "diplomacy" : 0,
      "disable device" : 0,
      "disguise": 0,
      "escape artist" : 0,
      "fly" : 0,
      "handle animal" : 0,
      "heal" : 0,
      "intimidate" : 0,
      "knowledge" : {},
      "linguistics" : 0,
      "perception" : 0,
      "perform" : {},
      "profession" : {},
      "ride" : 0,
      "sense motive" : 0,
      "sleight of hand" : 0,
      "spellcraft" : 0,
      "stealth" : 0,
      "survival" : 0,
      "swim" : 0,
      "use magic device" : 0
    },
    "lv" : 0,
    "classSkills" : {},
    "feats" : {},
    "classLevels" : {},
    "race" : "",
    "size" : "",
    "equipment" : {},
    "equiped load out" : {},
    "alignment" : "",
    "languages" : [],
    "description" : "",
    "spell list" : {},
    "familiar" : {},
    "animal companion" : {},
    "BAB": 0,
    "Will" : 0,
    "Fort" : 0,
    "Ref" : 0,
    "hitPoints" : 0,
    "skillPoints" : 0,
    "to_do" : [],
    "saveNotes" : {},
    "combatNotes" : {},
    "generalNotes" : {},
    "armorCheckMod" : 0,
    "armorMaxDexMod" : 0,
    "ACMod" : {},
    "initiative" : 0,
    "AtkMod" : {},
    "DamMod" : {},
    "DR" : {},
    "onLv" : {}
  };
  return player;
};
exports.lvUp = function (playerIn, className, classBuild) {
  var fun, classType;
  var player = playerIn;
  console.log(player);
  player.lv++;
  if (player.classLevels[className] === undefined) {
    player.classLevels[className] = {
      "className" : className,
      "lv" : 1,
      "classBuild" : classBuild
    };
  } else {
    player.classLevels[className].lv = player.classLevels[className].lv + 1;
  }
  if (player.classLevels[className].lv === 1) {
    for (fun in player.classLevels[className].classBuild.classFeatures.one) {
      player.classLevels[className].classBuild.classFeatures.one[fun].call(this, player);
    }
  } else if (player.classLevels[className].lv === 2) {
    for (fun in player.classLevels[className].classBuild.classFeatures.two) {
      player.classLevels[className].classBuild.classFeatures.two[fun].call(player);
    }
  } else if (player.classLevels[className].lv === 3) {
    for (fun in player.classLevels[className].classBuild.classFeatures.three) {
      player.classLevels[className].classBuild.classFeatures.three[fun].call(player);
    }
  } else if (player.classLevels[className].lv === 4) {
    for (fun in player.classLevels[className].classBuild.classFeatures.four) {
      player.classLevels[className].classBuild.classFeatures.four[fun].call(player);
    }
  } else if (player.classLevels[className].lv === 5) {
    for (fun in player.classLevels[className].classBuild.classFeatures.five) {
      player.classLevels[className].classBuild.classFeatures.five[fun].call(player);
    }
  } else if (player.classLevels[className].lv === 6) {
    for (fun in player.classLevels[className].classBuild.classFeatures.six) {
      player.classLevels[className].classBuild.classFeatures.six[fun].call(player);
    }
  } else if (player.classLevels[className].lv === 7) {
    for (fun in player.classLevels[className].classBuild.classFeatures.senven) {
      player.classLevels[className].classBuild.classFeatures.senven[fun].call(player);
    }
  } else if (player.classLevels[className].lv === 8) {
    for (fun in player.classLevels[className].classBuild.classFeatures.eight) {
      player.classLevels[className].classBuild.classFeatures.eight[fun].call(player);
    }
  } else if (player.classLevels[className].lv === 9) {
    for (fun in player.classLevels[className].classBuild.classFeatures.nine) {
      player.classLevels[className].classBuild.classFeatures.nine[fun].call(player);
    }
  } else if (player.classLevels[className].lv === 10) {
    for (fun in player.classLevels[className].classBuild.classFeatures.ten) {
      player.classLevels[className].classBuild.classFeatures.ten[fun].call(player);
    }
  } else if (player.classLevels[className].lv === 11) {
    for (fun in player.classLevels[className].classBuild.classFeatures.eleven) {
      player.classLevels[className].classBuild.classFeatures.eleven[fun].call(player);
    }
  } else if (player.classLevels[className].lv === 12) {
    for (fun in player.classLevels[className].classBuild.classFeatures.twelve) {
      player.classLevels[className].classBuild.classFeatures.twelve[fun].call(player);
    }
  } else if (player.classLevels[className].lv === 13) {
    for (fun in player.classLevels[className].classBuild.classFeatures.thirteen) {
      player.classLevels[className].classBuild.classFeatures.thirteen[fun].call(player);
    }
  } else if (player.classLevels[className].lv === 14) {
    for (fun in player.classLevels[className].classBuild.classFeatures.fourteen) {
      player.classLevels[className].classBuild.classFeatures.fourteen[fun].call(player);
    }
  } else if (player.classLevels[className].lv === 15) {
    for (fun in player.classLevels[className].classBuild.classFeatures.fifthteen) {
      player.classLevels[className].classBuild.classFeatures.fifthteen[fun].call(player);
    }
  } else if (player.classLevels[className].lv === 16) {
    for (fun in player.classLevels[className].classBuild.classFeatures.sixteen) {
      player.classLevels[className].classBuild.classFeatures.sixteen[fun].call(player);
    }
  } else if (player.classLevels[className].lv === 17) {
    for (fun in player.classLevels[className].classBuild.classFeatures.seventeen) {
      player.classLevels[className].classBuild.classFeatures.seventeen[fun].call(player);
    }
  } else if (player.classLevels[className].lv === 18) {
    for (fun in player.classLevels[className].classBuild.classFeatures.eighteen) {
      player.classLevels[className].classBuild.classFeatures.eighteen[fun].call(player);
    }
  } else if (player.classLevels[className].lv === 19) {
    for (fun in player.classLevels[className].classBuild.classFeatures.nineteen) {
      player.classLevels[className].classBuild.classFeatures.nineteen[fun].call(player);
    }
  } else if (player.classLevels[className].lv === 20) {
    for (fun in player.classLevels[className].classBuild.classFeatures.twenty) {
      player.classLevels[className].classBuild.classFeatures.twenty[fun].call(player);
    }
  }
  player.BAB = 0;
  player.Will = 0;
  player.Fort = 0;
  player.Ref = 0;
  player.hitPoints = 0;
  player.skillPoints = 0;

  for (classType in player.classLevels) {
    player.BAB += player.classLevels[classType].classBuild.BAB(player.classLevels[classType].lv);
    player.Will += player.classLevels[classType].classBuild.WILL(player.classLevels[classType].lv);
    player.Fort += player.classLevels[classType].classBuild.FORT(player.classLevels[classType].lv);
    player.Ref += player.classLevels[classType].classBuild.REF(player.classLevels[classType].lv);
    player.skillPoints += player.classLevels[classType].classBuild.skillPerLv(player.classLevels[classType].lv) + (Math.floor((player.attributes.Int - 10) / 2) * classType.lv);
    if (player.hitPoints === 0) {
      player.hitPoints = player.classLevels[classType].classBuild.hitDie;
    } else if ((player.classLevels[classType].lv % 2) === 0) {
      player.hitPoints += ((player.classLevels[classType].classBuild.hitDie + 1) * ((player.classLevels[classType].lv - 2) / 2));
      player.hitPoints += (Math.floor(player.classLevels[classType].classBuild/2));
      player.hitPoints += Math.floor((player.Con - 10) / 2) * player.classLevels[classType].lv;
    } else {
      player.hitPoints += ((player.classLevels[classType].classBuild.hitDie + 1) * ((player.classLevels[classType].lv - 1) / 2));
      player.hitPoints += Math.floor((player.Con - 10) / 2) * player.classLevels[classType].lv;
    }
  }
  for (fun in player.onLv) {
    player.onLvplayer.onLv[fun].call(player, player.lv);
  }
  return player;
};
exports.applyRace = function (player, raceBuild, raceName) {
  var fun;
  player.race = raceName;
  for (fun in raceBuild) {
    player = raceBuild[fun].call(player);
  }
  return player;
};