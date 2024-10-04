const isPalindrome = function(x){
    return x === +x.toString().split("").reverse().join("");
}

const res = isPalindrome(55);
console.log(res);