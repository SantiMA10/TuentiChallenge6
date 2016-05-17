fs = require('fs');

fs.readFile(__dirname + process.argv[2], 'utf8', function (err, file) {
    if (err) {
        return console.log(err);
    }
    fs.writeFile(__dirname + "/solution.txt", "");
    var lines = file.split("\n");
    console.log(lines);
    var comands = [];
    for(var line in lines){
        comands.push(line.replace("-", ""));
    }

    fs.readFile(__dirname + process.argv[3], 'utf8', function (err, input) {
        if (err) {
            return console.log(err);
        }
        var inputs = input.split("-");
        for(var c in comands){
            var actual = "";
            for(var i in inputs){
                actual += i;

            }
            console.log(actual + " = " + c);
        }

    });

});