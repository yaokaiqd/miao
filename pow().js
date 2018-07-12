var myPow = function(x, n) {
    if(n > 0) {
        var a = x
        if (n == 1) {
            return a
        }
        if (n % 2 == 0) {
            a = myPow(x, n / 2) ** 2
            return a
        }
        if (n % 2 != 0) {
            a = (myPow(x,Math.floor(n / 2)) ** 2) * x
        return a
        }  
    }
    if (n == 0) {
        return 1
    }
    if (n < 0){
        var a = 1 / x
        if (Math.abs(n) == 1) {
            return a
        }
        if (Math.abs(n) % 2 == 0) {
            a = myPow(1 / x,Math.abs(n) / 2) ** 2
            return a
        }
        if (Math.abs(n) % 2 != 0) {
            a = (myPow(1 / x,Math.floor((Math.abs(n) / 2) ** 2)))* (1 / x)
            return a
        }        
    }
}