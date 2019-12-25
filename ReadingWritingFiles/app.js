var fs = require('fs');

// var readFile = fs.readFileSync('thisFile.txt', 'utf8');

// console.log(readFile);
// fs.writeFileSync('writeMe.txt', readFile);
fs.mkdir('stuf',function() {
    fs.readFile('readMe.txt','utf8',function(err,data) {
        fs.writeFile('./stuf/writeMe.txt', data,function(err,data) {
            // if(err) console.log('error', err);
        });
    });
});