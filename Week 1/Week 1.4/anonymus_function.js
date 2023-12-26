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

var ans = SumOfSomething(2,3,function (n){          // Here instead of passing the name of function we are passing the whole function's body here , this is called anonymus function 
    return n * n * n;
});
console.log(ans);