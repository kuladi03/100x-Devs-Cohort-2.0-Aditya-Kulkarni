// create an map function which teakes the function as a input in javascript
function transform (array , multiplier){
    for(let i = 0 ; i < array.length ; i++){
        array[i] *= multiplier
    }
    return array
}

array = [1,2,3,4,5]

const ans = transform(array,2)
console.log(ans)