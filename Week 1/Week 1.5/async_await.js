function new_async_function(){
    let promise = new Promise(function(resolve){
        setTimeout(function() {
            resolve("Hello World!");
        }, 3000 )
    })
    return promise;
}

async function main(){
    let value = await new_async_function();
    console.log("hi there1"); // Hello World! after 2 seconds</s>
}

main();

console.log("After main")