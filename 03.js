window.onload = function () {
    var text;
    var res = 0;
    var tmp;

    var visited_arr = [[0, 0]];
    var current1 = [0, 0];
    var current2 = [0, 0];

    /*visited_arr.push("apple");
    console.log(visited_arr);*/

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

    readTextFile("http://localhost/problem/js/input.txt");

    function notExist(main_arr, current_coordinates) {
        //console.log(current_coordinates);
        var k = true;

        main_arr.forEach(function (item, i, arr) {
            if (item.toString() == current_coordinates.toString()) {
                k = false;
            }
        });
        return k;
    }



    //console.log(text.length);

    for (var k = 0; k <= text.length; k++) {

        l = text[k - 1];

        if (k % 2 == 0) {
            if (l === "v") {
                current1 = [current1[0], current1[1] + 1];
                if (notExist(visited_arr, current1)) {
                    visited_arr.push(current1);
                }
            } else if (l === "^") {
                current1 = [current1[0], current1[1] - 1];
                if (notExist(visited_arr, current1)) {
                    visited_arr.push(current1);
                }
            } else if (l === "<") {
                current1 = [current1[0] - 1, current1[1]];
                if (notExist(visited_arr, current1)) {
                    visited_arr.push(current1);
                }
            } else if (l === ">") {
                current1 = [current1[0] + 1, current1[1]];
                if (notExist(visited_arr, current1)) {
                    visited_arr.push(current1);
                }
            }
        } else if (k % 2 != 0) {
            if (l === "v") {
                current2 = [current2[0], current2[1] + 1];
                if (notExist(visited_arr, current2)) {
                    visited_arr.push(current2);
                }
            } else if (l === "^") {
                current2 = [current2[0], current2[1] - 1];
                if (notExist(visited_arr, current2)) {
                    visited_arr.push(current2);
                }
            } else if (l === "<") {
                current2 = [current2[0] - 1, current2[1]];
                if (notExist(visited_arr, current2)) {
                    visited_arr.push(current2);
                }
            } else if (l === ">") {
                current2 = [current2[0] + 1, current2[1]];
                if (notExist(visited_arr, current2)) {
                    visited_arr.push(current2);
                }
            }
        }
    }

    console.log(visited_arr.length);

};





 
