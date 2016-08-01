function f(n){
    var total = 0;
    if(n > 0 && Number.isInteger(n)){
        for (var i = 1; i <= n; i++){
            total += i;
        }
        return total;
    }else{
        return false;
    }
};