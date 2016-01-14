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

    function min(arr) {
        var k = +arr[0];
        var index = 0;
        arr.forEach(function (item, i, arr) {
            if (+item < k) {
                k = +item;
                index = i;
            }
        });
        return index;
    }




    function returnGoodNumber(size) {
        var temp = size.split("x");
        var t = [temp[0] * temp[1], temp[0] * temp[2], temp[1] * temp[2]];
        var t_mod = [
            [temp[0], temp[1]],
            [temp[0], temp[2]],
            [temp[1], temp[2]]
            ];

        //return 2 * temp[0] * temp[1] + 2 * temp[0] * temp[2] + 2 * temp[1] * temp[2] + min(t);
        //console.log(+t_mod[min(t)][0]);
        return (temp[0] * temp[1] * temp[2]) + (2 * (+t_mod[min(t)][0] + +t_mod[min(t)][1]));


    }

    //console.log(returnGoodNumber("2x3x4"));

    readTextFile("http://localhost/problem/js/input.txt");

    var arr = text.split("\n");

    //console.log(arr);

    arr.map(function (box) {
        res += returnGoodNumber(box);
    });

    console.log(res);

};





 
