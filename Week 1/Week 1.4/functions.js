function findsum(a,b){
    let ans = 0;
    for(let i = a ; i <= b ; i++){
        ans += i;
    }
    return ans;
}

console.log(findsum(0,100));
console.log(findsum(0,1000));