window.onload = function () {
    var text;
    var res = 0;
    var turned_on = [];

    function readTextFile(file) {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    text = rawFile.responseText;
                }
            }
        }
        rawFile.send(null);
    }

    function isExist(main_arr, current_coordinates) {
        var k = false;
        main_arr.forEach(function (item, i, arr) {
            if (item.toString() == current_coordinates.toString()) {
                k = true;
            }
        });
        return k;
    }




    //console.log(returnGoodNumber("2x3x4"));

    readTextFile("http://localhost/problem/js/input.txt");

    var arr = text.split("\n");

    //console.log(arr);

    arr.forEach(function (str) {
        var line = str.split(" ");

        if (line[0] == "turn") {

            if (line[1] == "on") {
                var start0 = +line[2].split(",")[0];
                var start1 = +line[2].split(",")[1];
                var end0 = +line[4].split(",")[0];
                var end1 = +line[4].split(",")[1];
                
                console.log(start0);
                console.log(start1);
                console.log(end0);
                console.log(end1);

                for (var i = start0; i <= end0; i++) {
                    for (var j = start1; j <= end1; j++) {
                        console.log("here");
                        if (!isExist(turned_on, [i, j])) {
                            turned_on.push([i, j]);
                        }
                    }
                }

            } else if (line[1] == "off") {
                var start0 = +line[2].split(",")[0];
                var start1 = +line[2].split(",")[1];
                var end0 = +line[4].split(",")[0];
                var end1 = +line[4].split(",")[1];
                
                /*for (var i = start0; i <= end0; i++) {
                    for (var j = start1; j <= end1; j++) {
                        if (isExist(turned_on, [i, j])) {
                            //console.log([i, j]);
                            
                            for (var u = 0; u < turned_on.length; u++) {
                                if (turned_on[u].toString() === [i, j].toString()) {
                                    console.log("io");
                                    turned_on.splice(u, 1);
                                }
                            }
                        }
                    }
                }*/
            }
        } else if (line[0] == "toggle") {
            //console.log("TOGGLE");
        }
    });

    console.log(turned_on);

    //console.log(arr);

};





 
