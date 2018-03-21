var app = require('express')();

app.get('/', function(req, res){
    res.render('<h2> app running with pm2 </h2>');
});

app.listen(3000, ()=> {
    console.log('app started on port 3000');
});