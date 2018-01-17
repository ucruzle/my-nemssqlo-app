var app = require('./config/app_config');
var ui5Router = require('./ui5/ui5Router'); 

app.get('/', function(req, res){
    res.end('Bem-vindo a API NEMSSQLO (Node, Express, MS SQL, OpenUI5) stack sample app');
});

app.use('/ui5/', ui5Router.getRouter()); // adds the routes for ui5