function isPrime(num){
    if (num <= 1 || num % 1 !== 0)return "false";
    for (let i = 2; i < num ; i++){
        if (num % i === 0 )return "false";
        else return "true";
    }
}

console.log(isPrime(19))