function duplicateEncode(word) {
    word = word.toLowerCase();
    var result = "";
    for (var i = 0; i < word.length; i++) {
        var count = 0;
        for (var n = 0; n < word.length; n++) {
            console.log(word.charAt(n));
            if (word.charAt(i) == word.charAt(n)) {
                count++
            }
        }
        if (count === 1) {
            result = result.concat("(");
        } else {
            result = result.concat(")");
        }
    }
    return result;
}