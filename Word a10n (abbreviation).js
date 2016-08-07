/**
 * Created by chris_000 on 07/08/2016.
 */
function abbreviate(string) {
    var array = string.split(" "),
        abbreviatedArray = [];
    function doTheThing(word) {
        if (word.charAt(word.length - 1) !== ",") {
            return word.charAt(0) + (word.length - 2) + word.charAt(word.length - 1);
        }else{
            return word.charAt(0) + (word.length - 3) + word.charAt(word.length - 2) + word.charAt(word.length - 1);
        }
    }

    for (var i = 0; i < array.length; i++){
        if (array[i].includes("-")){
            var tempTemp = array[i].split("-");
            var tempArray = [];
            for (var n = 0; n < tempTemp.length; n++){
                if (tempTemp[n].length <= 3){
                    tempArray.push(tempTemp[n]);
                }else{
                    tempArray.push(doTheThing(tempTemp[n]));
                }
            }
            abbreviatedArray.push(tempArray.join("-"));

        }else if (array[i].length <= 3) {
            abbreviatedArray.push(array[i]);
        }else{
            abbreviatedArray.push(doTheThing(array[i]));
        }
    }
    console.log(abbreviatedArray.join(" "));
    return abbreviatedArray.join(" ");
}

abbreviate("All young men whom listerine has saved from halitosis-breath");