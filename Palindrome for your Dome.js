/**
 * Created by chris_000 on 06/08/2016.
 */
function palindrome(string) {
    function backwards() {
        var o = [];
        for (var i = 0, len = string.length; i <= len; i++)
            o.push(string.charAt(len - i));
        return o.join('');
    }

    console.log(string.replace(/\W/g, "").toLowerCase() + " " + backwards(string).replace(/\W/g, "").toLowerCase());
    return string.replace(/\W/g, "").toLowerCase() === backwards(string).replace(/\W/g, "").toLowerCase();
}

palindrome("Amore, Roma");
palindrome("A man, a plan, a canal: Panama");
palindrome("No 'x' in 'Nixon'");
palindrome("Abba Zabba, you're my only friend");