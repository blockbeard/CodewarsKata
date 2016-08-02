function order(words) {
    var orderedWordsArray;
    words = words.split(" ");
    orderedWordsArray = words.sort(function (a, b) {
        return a.match(/[1-9]/) - b.match(/[1-9]/);
    });

    return orderedWordsArray.join(" ");

}
