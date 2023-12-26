// Push()

const initialarray = [1,2,3];
initialarray.push(2);
console.log(initialarray);

// pop()

initialarray.pop();
console.log(initialarray);

// pop from front 

initialarray.shift();
console.log(initialarray);

// push at front 

initialarray.unshift(0);
console.log(initialarray);

// Merging of arrays

const secondarray = [4,5,6];
console.log(initialarray.concat(secondarray));

// anothedarray.er way 

for(let i = 0 ; i < secondarray.length ; i++){
    initialarray.push(secondarray[i]);
}
console.log(initialarray);

// Iterate over an array using foreach

function logstring(str){
    console.log(str);
}

initialarray.forEach(logstring);

