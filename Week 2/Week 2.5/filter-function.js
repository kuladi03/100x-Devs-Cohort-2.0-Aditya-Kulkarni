// return the even values from the array

const array = [1,2,3,4,5]
const filtered_array = []

for(let i = 0 ; i < array.length ; i++){
    if(array[i] % 2 == 0){
        filtered_array.push(array[i])
    }
}

console.log(filtered_array)

// using filter function . Here we will create an filter function which will help us to identify our desired result

function iseven(i) {
    if(i % 2 == 0){
        return true
    }
    return false
}

for(let i = 0 ; i < array.length ; i++){
    if(iseven(array[i])){
        filtered_array.push(array[i])
    }
}

console.log(filtered_array)