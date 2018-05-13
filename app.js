const N = 3;
const M = 4;
var arr = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function gen(array) {
    for (var i = 0; i < M; i++) {
        array[i] = [];
        for (var j = 0; j < N; j++) {
            array[i][j] = getRandomInt(9);
        }
    }
}

function print(array) {
    var output = "";
    for (var i = 0; i < M; i++) {
        for (var j = 0; j < N; j++) {
            output += "| " + array[i][j] + " |  ";
        }
        output += "\n";
    }
    console.log(output);
}

function get(array) {
    var l = 0;
    var r = 0;

    while (l < M) {
        if (r > 0 && l < (M - 1)) {
            let q = l;
            let w = r;
            while (w >= 0 && q < M) {
                console.log(array[q][w]);
                w--;
                q++;
            }
        } else {
            console.log(array[l][r]);
        }

        //DON'T TOUCH!!!!
        if (r == (N - 1)) l++;
        if (r != (N - 1)) r++;
    }
}

gen(arr);
print(arr);
get(arr);