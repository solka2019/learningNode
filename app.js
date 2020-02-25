const fs = require("fs");
// const files = fs.readdirSync ('./');
// console.log(files);

fs.readdir('./', function(err, files) {
if (err) 
console.log('Error', err);
else console.log('Result', files);
});
// function callback: we check if temos um error ou um result(files) - always prefer asyncronous method!

