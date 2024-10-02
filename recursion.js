function sumOfdigits(num) {
    // Base case: when the number is a single digit
    if (num>0) {
        return num + sumOfdigits(num-1);
        // 5+4+3+2+1+0
    }else{
        return num;

    }
}
var res = sumOfdigits(5);
console.log(res);
