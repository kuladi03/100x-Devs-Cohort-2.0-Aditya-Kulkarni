function sum(n){
    var sum = 0;

    for(let i = 0 ; i <=  n ; i++){
        sum += i;
    }
    return sum;
}

function getsum(){
    console.log(sum(100));
}

setTimeout(getsum , 1000);      // By default this setTimeout makes this function Asynchronous

console.log("Namaste !");