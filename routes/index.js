exports.index = function (req, res) {
  var info = require('../package.json');
  res.render('index', info);
};
exports.newCharAttributeSelector = function (req, res) {
  var playerFile = require('../public/javascripts/player.js');
  req.session.character = playerFile.getPlayer();
  res.render('newCharAttributeSelector', {});
};
exports.newCharClassSelector = function (req, res) {
  var classes = require('../public/javascripts/classV2.js');
  var race = require('../public/javascripts/race.js');
  var playerFile = require('../public/javascripts/player.js');
  var replace;
  var raceIn = req.body.Race;
  var raceBuild = race.races[raceIn].defaultBuild;
  for (replace in req.body) {
    if (replace !== "Race") {
      raceBuild = race.races[raceIn].altTraits[replace](raceBuild, req.body[replace]);
    }
  }
  req.session.character = playerFile.applyRace(req.session.character, raceBuild, req.body.Race);
  res.render('newCharClassSelector', classes.implementedClasses());
};
exports.newCharRaceSelector = function (req, res) {
  var race = require('../public/javascripts/race.js');
  req.session.character.attributes.Str = req.body.Str;
  req.session.character.attributes.Dex = req.body.Dex;
  req.session.character.attributes.Con = req.body.Con;
  req.session.character.attributes.Int = req.body.Int;
  req.session.character.attributes.Wis = req.body.Wis;
  req.session.character.attributes.Cha = req.body.Cha;
  res.render('newCharRaceSelector', race.implementedRaces());
};
exports.charSheet = function (req, res) {
  var classes = require('../public/javascripts/classV2.js');
  var playerFile = require('../public/javascripts/player.js');
  var classIn = req.body.playerClass;
  var archetypeIn = req.body.archetype;
  var classObj = classes.classes[classIn].defaultBuild;
  if (archetypeIn !== "None") {
    classObj = classes.classes[classIn].Archetype[archetypeIn](classObj);
  }
  req.session.character = playerFile.lvUp(req.session.character, classIn, classObj);
  req.session.character =  playerFile.attributeCalc(req.session.character);
  res.render("charSheet", req.session.character);
};
exports.submitDiscription = function (req, res) {
  req.session.character.description.name = req.body.name;
  req.session.character.description.player = req.body.player;
  req.session.character.description.age = req.body.age;
  req.session.character.description.height = req.body.height;
  req.session.character.description.weight = req.body.weight;
  req.session.character.description.deity = req.body.deity;
  req.session.character.description.alignment = req.body.alignment;

  res.render("charSheet", req.session.character);
};
exports.updateAttributeMod = function (req, res) {
  var att = req.body.attribute;
  var val = req.body.value;
  var type = req.body.type;
  var playerFile = require('../public/javascripts/player.js');

  req.session.character.attributeMod.push({
    "Attribute" : att,
    "value" : val,
    "type" : type
  });
  req.session.character =  playerFile.attributeCalc(req.session.character);
  res.render("charSheet", req.session.character);
};
exports.removeAttributeMod = function (req, res) {
  var i;
  var input = req.body.remove.split(':');
  var playerFile = require('../public/javascripts/player.js');

  for (i = 0; i < req.session.character.attributeMod.length; i++) {
    if (req.session.character.attributeMod[i].Attribute === input[0] && req.session.character.attributeMod[i].value === input[1] && req.session.character.attributeMod[i].type === input[2]) {
      req.session.character.attributeMod.splice(i, 1);
    }
  }
  req.session.character =  playerFile.attributeCalc(req.session.character);
  res.render("charSheet", req.session.character);
};
exports.updateSkills = function (req, res) {
  req.session.character.skills.acrobatics = req.body.acrobaticsRanks;
  req.session.character.skills.appraise = req.body.appraiseRanks;
  req.session.character.skills.bluff = req.body.bluffRanks;
  req.session.character.skills.climb = req.body.climbRanks;
  req.session.character.skills.craft = req.body.craftRanks;
  req.session.character.skills.diplomacy = req.body.diplomacyRanks;
  req.session.character.skills.disable_device = req.body.disable_deviceRanks;
  req.session.character.skills.disguise = req.body.disguiseRanks;
  req.session.character.skills.escape_artist = req.body.escape_artistRanks;
  req.session.character.skills.fly = req.body.flyRanks;
  req.session.character.skills.handle_animal = req.body.handle_animalRanks;
  req.session.character.skills.heal = req.body.healRanks;
  req.session.character.skills.intimidate = req.body.intimidateRanks;
  req.session.character.skills.kn_Arcana = req.body.kn_ArcanaRanks;
  req.session.character.skills.kn_Dungeoneering = req.body.kn_DungeoneeringRanks;
  req.session.character.skills.kn_Engineering = req.body.kn_EngineeringRanks;
  req.session.character.skills.kn_Geography = req.body.kn_GeographyRanks;
  req.session.character.skills.kn_History = req.body.kn_HistoryRanks;
  req.session.character.skills.kn_Local = req.body.kn_LocalRanks;
  req.session.character.skills.kn_Nature = req.body.kn_NatureRanks;
  req.session.character.skills.kn_Nobility = req.body.kn_NobilityRanks;
  req.session.character.skills.kn_Planes = req.body.kn_PlanesRanks;
  req.session.character.skills.kn_Religion = req.body.kn_ReligionRanks;
  req.session.character.skills.linguistics = req.body.linguisticsRanks;
  req.session.character.skills.perception = req.body.perceptionRanks;
  req.session.character.skills.perform_Act = req.body.perform_ActRanks;
  req.session.character.skills.perform_Comedy = req.body.perform_ComedyRanks;
  req.session.character.skills.perform_Dance = req.body.perform_DanceRanks;
  req.session.character.skills.perform_Keyboard = req.body.perform_KeyboardRanks;
  req.session.character.skills.perform_Oratory = req.body.perform_OratoryRanks;
  req.session.character.skills.perform_Percussion = req.body.perform_PercussionRanks;
  req.session.character.skills.perform_String = req.body.perform_StringRanks;
  req.session.character.skills.perform_Wind = req.body.perform_WindRanks;
  req.session.character.skills.perform_Sing = req.body.perform_SingRanks;
  req.session.character.skills.profession = req.body.professionRanks;
  req.session.character.skills.ride = req.body.rideRanks;
  req.session.character.skills.sense_motive = req.body.sense_motiveRanks;
  req.session.character.skills.sleight_of_hand = req.body.sleight_of_handRanks;
  req.session.character.skills.spellcraft = req.body.spellcraftRanks;
  req.session.character.skills.stealth = req.body.stealthRanks;
  req.session.character.skills.survival = req.body.survivalRanks;
  req.session.character.skills.swim = req.body.swimRanks;
  req.session.character.skills.use_magic_device = req.body.use_magic_deviceRanks;

  res.render("charSheet", req.session.character);
};
exports.addSkillMod = function (req, res) {
  var skill = req.body.skill;
  var value = req.body.value;
  var type = req.body.type;

  req.session.character.skillMod.push({
    "Skill" : skill,
    "value" : value,
    "type" : type
  });
  res.render("charSheet", req.session.character);
};
exports.removeSkillMod = function (req, res) {
  var i;
  var input = req.body.remove.split(':');
  console.log(input);
  for (i = 0; i < req.session.character.skillMod.length; i++) {
    if (req.session.character.skillMod[i].Skill === input[0] && req.session.character.skillMod[i].value === input[1] && req.session.character.skillMod[i].type === input[2]) {
      req.session.character.skillMod.splice(i, 1);
    }
  }
  res.render("charSheet", req.session.character);
};
exports.submitAtk = function (req, res) {
  req.session.character.attacks.push({
    "name": req.body.atkName,
    "attack": req.body.attack,
    "damage": req.body.damage,
    "critRange": req.body.critRange,
    "critMulti": req.body.critMulti
  });
  res.render("charSheet", req.session.character);
};
exports.removeAtk = function (req, res) {
  var name = req.body.toRemove;
  var i;
  for(i = 0; i < req.session.character.attacks.length; i++){
    if(req.session.character.attacks[i].name === name){
      req.session.character.attacks.splice(i, 1);
    }
  }
  res.render("charSheet", req.session.character);
};
exports.addAC = function (req, res) {
  var total = 10 + parseInt(req.body.armor) + parseInt(req.body.sheild) + parseInt(req.body.dex) + parseInt(req.body.sizeMod) + parseInt(req.body.dodge) + parseInt(req.body.natural) + parseInt(req.body.deflect) + parseInt(req.body.misc);

  req.session.character.ACList.push({
    "name" : req.body.name,
    "total" : total,
    "armor" : req.body.armor,
    "sheild" : req.body.sheild,
    "dex" : req.body.dex,
    "size" : req.body.sizeMod,
    "dodge" : req.body.dodge,
    "natural" : req.body.natural,
    "deflect" : req.body.deflect,
    "misc" : req.body.misc
  });

  res.render("charSheet", req.session.character);
};