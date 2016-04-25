fs = require('fs');

fs.readFile(__dirname + process.argv[2], 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    fs.writeFile(__dirname + "/solution.txt", "");
    data.split("\n").forEach(function (value, index, data) {
        if (index != 0 && index != data.length - 1) {
            var result = 0;

            if (value != 0){
                result = 1
                for(var i = 4; i < value; i+=2){
                    result++;
                }
            }
            

            fs.appendFile(__dirname + "/solution.txt", "Case #" + index + ": " + result + "\n");

        }
    });
});



