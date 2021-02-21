var express=require('express'); 
var app=express();
var path=require('path');


app.use(express.static(path.join(__dirname,'public')));  //using use method we can set a folder or file that can be access direct by url that is it becomes static serving i.e available so for any file in public we dont geet to specific path
// after this if you run and type 'localhost:3000 or localhost:3000/index.html' you will directly get index.html rendered on browser


/*
app.use('/public',express.static(path.join(__dirname,'public')));  //whenever we type url with /public/filename.html it will show up file requried if not speficied it will through error
*/
app.set('port',3000);
var server=app.listen(app.get('port'),function(){
    console.log("Listening to port "+server.address().port);
});

