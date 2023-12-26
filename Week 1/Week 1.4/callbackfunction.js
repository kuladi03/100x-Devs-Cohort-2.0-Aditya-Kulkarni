function square(n){
    return n * n;
}

function cube(n){
    return n * n * n;
}

function SumOfSomething(a , b , call_function){         // Here we are calling the function , this is called as function callback
    var v1 = call_function(a);
    var v2 = call_function(b);

    return v1 + v2;
}

var ans = SumOfSomething(2,3,cube);
console.log(ans);