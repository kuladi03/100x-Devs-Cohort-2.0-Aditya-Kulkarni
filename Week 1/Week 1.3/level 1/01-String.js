// To calculate length of string 

function getLength(str){
    console.log("String is : " + str);
    console.log("Length of string : " , str.length);
}
getLength("Aditya Kulkarni");

// To calculate Index of the Word

function findIndexOf(str , target){
    console.log("The string is : " , str);
    console.log("Index is : " ,str.indexOf(target));
}
findIndexOf("Aditya Dattatrya Kulkarni","Kulkarni")

// To calculate the last index of an string 

function lastindexOf(str,target){
    console.log("The string is : " , str);
    console.log("Last index is : " , str.lastIndexOf(target));
}
lastindexOf("Namaste , Aditya Aditya", "Aditya");

// To slice the string

function getslice(str,start,end){
    console.log("The string is : " , str);
    console.log("The sliced string is : " , str.slice(start , end));
}
getslice("Hello World" ,0 ,5);

// TO replace the string 

function getreplacement(str,target,replacement){
    console.log("The string is : " , str);
    console.log("The string after rpelacement is : " , str.replace(target,replacement));
}
getreplacement("I love coding in JavaScript" ,"JavaScript" ,"Python");

// To split the string basis on given input

function getsplit(str,seprator){
    console.log("The string is : " , str);
    console.log("The splitted string is : " , str.split(seprator));
}
getsplit("My name is Aditya Kulkarni"," ");

// To trim the string 

function gettrim(str){
    console.log("The original String is : ",str);
    console.log("The trimmed string is : " , str.trim());
}
gettrim("                 Aditya Kulkarni                    ");

// To do UpperCase

function getUpper(str){
    console.log("The main string is :" , str);
    console.log("The Upper value is : ",str.toUpperCase());
}
getUpper("aditya kulkarni");

// TO do Lowercase

function getLower(str){
    console.log("The main string is :" , str);
    console.log("The Lower value is : ",str.toLowerCase());
}
getLower("Aditya KULKARNI");