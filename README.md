nodejs.org
pra checar a ultima versao no node, bate somente o nome node.
em Docs, tem a lista de modules que existem no node.
console e buffer sao objects, global objects. O resto eh modules...
mais useful: 
file system(fs), http, os (operating system), path , process, query strings, stream
Ex: path module
    - parse method: 
    path.parse(path)

    Pra usar este module path:
    coloca no file:
    const path = require('path');
        Isso quer dizer que :
        eu call the module using "require function", get the result (path) que eh um object,e store it in a constant - const

    Vai para o file.js

    Se eu colocar o nome somente do module, node assume que eh um built in module. Se for a file, tem que colocar ./ antes do nome do module.

    /* load the built in module and store it in a 
const path.
This is an object with lots of useful methods. We 
will use parse method.*/

const path = require("path");
var pathObj = path.parse(__filename);
console.log(pathObj);

o resultado vai ser:

Sol@SOL-PC ~/Desktop/learningNode
$ node app.js
{
  root: 'C:\\',
  dir: 'C:\\Users\\Sol\\Desktop\\learningNode',
  base: 'app.js',
  ext: '.js',
  name: 'app'
}


/* this is an argument in the wrapper module
function. __filename. 
According to the Node.js documentation, 
Before a module's code is executed, 
Node.js will wrap it with a function wrapper 
that looks like the following: 
(function(exports, require, module, __filename, __dirname) {
     // Module code actually lives in here }); 
     By doing this, Node.js achieves a few things:
t keeps top-level variables (defined with var, const or let) 
scoped to the module rather than the global object.
It helps to provide some global-looking variables 
that are actually specific to the module, such as:
The module and exports objects
 that the implementor can use to export values from the module.
The convenience variables __filename and __dirname, 
containing the module's absolute filename and directory path.*/

Using another module: operational system:os

const os = require("os");
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
<!-- console.log(totalMemory);
console.log(freeMemory ); -->
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

Resultado em $node app.js vai ser:

Sol@SOL-PC ~/Desktop/learningNode
$ node app.js
17101348864
8196935680

Sol@SOL-PC ~/Desktop/learningNode
$ node app.js
17101348864
8289652736
Total Memory: 17101348864
Free Memory: 8289652736

PRA SABER ALL THE FILES EM MEU FOLDER, POSSO USAR FS MODULE

const fs = require("fs");
const files = fs.readdirSync ('./');
console.log(files);

RETORNA:

Sol@SOL-PC ~/Desktop/learningNode
$ node app.js
[ 'app.js', 'readme.md' ]


Synchronous vs Asynchronous

Synchronous and asynchronous are two big words that seem intimidating but are quite simple. Synchronous simply means that all events are occurring in a certain time order that can be predicted. A certain event would always follow another and they can’t be interchanged. Asynchronous is the opposite of synchronous. In asynchronous processes, there is no time order. Certain events can, and often do, interchange. An excellent synchronous example is music. Each participating instrument needs to be in rhythm with the others or else the music won’t sound right. For asynchronous, a good example would be traffic. Vehicles move at different rates of speed and it is common for one to move past another.



Read more: Difference Between Synchronous and Asynchronous | Difference Between http://www.differencebetween.net/language/difference-between-synchronous-and-asynchronous/#ixzz6EzpG2h00


const fs = require("fs");
// const files = fs.readdirSync ('./');
// console.log(files);

fs.readdir('./', function(err, files) {
if (err) 
console.log('Error', err);
else console.log('Result', files);
});
// function callback: we check if temos um error ou um result(files) - always prefer asyncronous method!

o RESULTADO VAI SER:
Sol@SOL-PC ~/Desktop/learningNode
$ $ node app.js

Sol@SOL-PC ~/Desktop/learningNode
$ node app.js
Result [ 'app.js', 'readme.md' ]

-------------------------------------
EVENTS

