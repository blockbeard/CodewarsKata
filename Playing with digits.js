function digPow(n, p) {
    var arr = [],
        k;
    for (var i = 0; i < n.toString().split("").length; i++) {
        arr.push(Math.pow(n.toString().split("")[i], p + i));
    }

    k = (arr.reduce(function (a, b) {
        return a + b;
    }) / n);
    if (Number.isInteger(k)) {
        return k;
    } else {
        return -1;
    }
}

digPow(89, 1);