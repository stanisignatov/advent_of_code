window.onload = function () {
    var text;
    var res = 0;

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

    /*function isContainThreeVowels(string) {
        var count = 0;
        var vowels = ["a", "e", "i", "o", "u"];
        for (var i = 0; i < string.length; i++) {
            for (var j = 0; j < vowels.length; j++) {
                if (string[i] == vowels[j])
                    count++;
            }
        }
        return count >= 3 ? true : false;
    }

    function isContainDoubledLetter(string) {
        for (var i = 0; i < string.length - 1; i++) {
            if (string[i] == string[i + 1])
                return true;
        }
        return false;
    }

    function isContainBadSubstrings(string) {
        var bads = ["ab", "cd", "pq", "xy"];
        for (var i = 0; i < string.length; i++) {
            for (var j = 0; j < bads.length; j++) {
                if (string[i] + string[i + 1] == bads[j])
                    return true;
            }
        }
        return false;
    }*/

    function isContainThreeInRow(string) {
        for (var i = 0; i < string.length - 2; i++) {
            if (string[i] == string[i + 2])
                return true;
        }
        return false;
    }

    function isContainTwoInRow(string) {
        for (var i = 0; i < string.length - 3; i++) {
            for (var j = i + 2; j < string.length - 1; j++) {
                if (string[i] + string[i + 1] == string[j] + string[j + 1])
                    return true;
            }
        }
        return false;
    }


    console.log(isContainTwoInRow("axvbnghjhkliopbdscshkkhkhkdvv"));

    //console.log(returnGoodNumber("2x3x4"));

    readTextFile("http://localhost/problem/js/input.txt");

    var arr = text.split("\n");

    //console.log(arr);

    arr.forEach(function (str) {
        if (isContainThreeInRow(str) && isContainTwoInRow(str)) {
            res++;
        }
        // console.log(str);
    });

    console.log(res);

};





 
