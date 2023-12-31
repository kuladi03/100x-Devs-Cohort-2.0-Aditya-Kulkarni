// array is given , return array having each value multiplied by 2
// Input : [1,2,3,4,5]
// Output : [2,4,6,8,10]


// Normal Method

let array = [1,2,3,4,5]

for(let i = 0 ; i < 5 ; i++){
    array[i] *= 2
}

console.log(array)

//Using Function

function transform(i){
    return i*2
}

for(let i = 0 ; i < 5 ; i++){
    array[i] = transform(array[i])
}

console.log(array)

// Using Map 

const ans = array.map(transform)
console.log(ans)

// antoher way without using transform function

const ans1 = array.map((i) => {
    return i*2
})

console.log(ans1)