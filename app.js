
/**
 * Module dependencies.
 */

var express = require('express'),
  routes = require('./routes'),
  http = require('http'),
  path = require('path'),
  dust = require('dustjs-linkedin'),
  helper = require('dustjs-helpers'),
  con = require('consolidate');


var app = express();

app.engine('dust', con.dust);

// all environments

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'dust');
app.use(express.favicon());
app.use(express.cookieParser());
app.use(express.session({secret: '4-8-15-16-23-42'}));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.post('/newChar/classSelect', routes.newCharClassSelector);
app.post('/newChar/raceSelect', routes.newCharRaceSelector);
app.get('/newChar/attributeSet', routes.newCharAttributeSelector);
app.post('/charSheet', routes.charSheet);
app.post('/submitDiscription', routes.submitDiscription);
app.post('/updateAttributeMod', routes.updateAttributeMod);
app.post('/removeAttributeMod', routes.removeAttributeMod);
app.post('/updateSkills', routes.updateSkills);
app.post('/addSkillMod', routes.addSkillMod);
app.post('/removeSkillMod', routes.removeSkillMod);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
