window.onload = function () {
    var text;
    var res = 0;
    var tmp;

    var keyword = "bgvyzdsv";



    for (var i = 1000000; i < 2000000; i++) {
        if (CryptoJS.MD5("bgvyzdsv" + i).toString().substring(0, 6) === "000000") {
            console.log(i);
        } else {
        }
    }
    
    console.log("END");

};





 
