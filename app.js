var express = require("express");
var app = express();

app.listen(8080,()=>{
	console.info("Server started at: " + new Date());
})

/*
The path that you provide to the express.static function is relative to the directory from where you launch your node process. If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve.
*/
app.use(express.static('public/src/main'));