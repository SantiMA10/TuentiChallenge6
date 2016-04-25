fs = require('fs');

fs.readFile(__dirname + process.argv[2], 'utf8', function (err, corpus) {
    if (err) {
        return console.log(err);
    }
    fs.writeFile(__dirname + "/solution.txt", "");
    var words = corpus.split(" ");

    fs.readFile(__dirname + process.argv[3], 'utf8', function (err, input) {
        if (err) {
            return console.log(err);
        }
        var counts = {};

        input.split("\n").forEach(function(value, index, array){
            if(index != 0 && index != array.length - 1 ){
                counts = {};
                var start = value.split(" ")[0],
                    end   = value.split(" ")[1];

                for(var i = start - 1; i < end; i++){
                    var actual = 0;

                    if(counts[words[i]]){
                        actual = counts[words[i]];
                    }

                    counts[words[i]] = actual + 1;
                }

                var sortable = [];
                for (var count in counts){
                    sortable.push([count, counts[count]]);

                }

                sortable.sort(function (a, b) {
                    return a[1] - b[1];
                });

                var solution = "";
                for(var i = sortable.length - 1; i > sortable.length -4; i--){
                    solution += sortable[i][0] + " " +sortable[i][1];
                    if(i != sortable.length -3){
                        solution += ",";
                    }
                }

                fs.appendFile(__dirname + "/solution.txt", "Case #" + index + ": " + solution  + "\n");
            }
        });

    });


});