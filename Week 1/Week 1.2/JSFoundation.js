//Ouput 

    console.log("Namaste !!!");

// Variables

    var a = 1;          //var & let can change the values after declaring
    a = 2;
    console.log(a);

    const b = 1;        //we cannot change the value of const after declaring
    //b = 2;              //this line will give error
    console.log(b);

    let firstname = "aditya";
    let age = 20;
    let isMarried = false;

    console.log("This person is " + firstname + " his age is " + age);

// if-else 

    if(isMarried){
        consolg.log(firstname + " is married");
    }
    else{
        console.log(firstname + " is not married");
    }

// Loops

    //for-loop

    let sum = 0;
    for(let i=1;i<=1000;i++){
        sum += i;
    }
    console.log("The sum is : " + sum);

//Arrays

    //Assignment 1
    let numbers = [0,1,2,3,4,5,6,7,8,9,10];
    console.log("The even numbers are : ");
    for(let i=0;i<numbers.length;i++){
        if(numbers[i] % 2== 0){
            console.log(numbers[i]);
        }
    }

    //Assignment 2
    let max = -1;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i] > max){
            max = numbers[i];
        }
    }
    console.log("The biggest number in an array is : " + max);

// Objects

const user1 = {
    firstname : "Aditya",
    gender : "male"
}

console.log(user1["firstname"]);

//Object's Array

    const users = [{
        name: "Aditya",
        gender: "male",
        metadata: {                     //nested objects
            age: 20,
            address: "Latur"
        }
    },
    {
        name : "Gaurav",
        gender : "male",
        metadata: {
            age: 14,
            address: "Latur"
        }
    },
    {
        name : "Vedashree",
        gender : "female",
        metadata: {
            age: 21,
            address: "Pune"
        }
    }]

    //Assignment 3
    
    for(let i=0;i<users.length;i++){
        if(users[i]["gender"] == "male"){           //users["gender"] is same as users.gender
            console.log(users[i]["name"]);
        }
    }

//function 

    //Assigment 4
    function findsum(a,b,fnToCall){
        // do operations on input variables and return an output
        let result = a + b;
        fnToCall(result);
    }

    function displayresult(result){
        console.log("The sum is : " + result);
    }

    function displaypassiveresult(result){
        console.log("Sum of numbers is : " + result);
    }

    const ans = findsum(1,2,displaypassiveresult);

