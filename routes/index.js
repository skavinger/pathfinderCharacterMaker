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
exports.toDoPage = function (req, res) {
  var classes = require('../public/javascripts/classV2.js');
  var playerFile = require('../public/javascripts/player.js');
  var classIn = req.body.playerClass;
  var archetypeIn = req.body.archetype;
  var classObj = classes.classes[classIn].defaultBuild;
  if (archetypeIn !== "None") {
    classObj = classes.classes[classIn].Archetype[archetypeIn](classObj);
  }
  req.session.character = playerFile.lvUp(req.session.character, classIn, classObj);
  res.render("toDoPage", req.session.character);
};