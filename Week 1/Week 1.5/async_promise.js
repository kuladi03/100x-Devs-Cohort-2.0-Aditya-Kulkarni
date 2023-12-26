function async_promise(){
    let p = new Promise(function (resolve){
        setTimeout(resolve , 2000)
    });
    return p;
}

const value = async_promise()
value.then(function(){
    console.log('Promise is resolved');
})