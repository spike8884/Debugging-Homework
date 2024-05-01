var a = 10;
var b = 20;
//regular function
function addTwo(param1, param2){
    return param1 + param2;
}
//console.log addTwo function with variables
console.log(addTwo(a,b))
//arrow function
const addTwoArrow = (param1, param2) =>{
    return param1 + param2;
}
//console.log addTwoArrow function with variables
console.log(addTwoArrow(a,b))
function diff(param2, param1){
    return param2 - param1;
}
console.log(diff(b,a))

const diff =  (param2, param1)=>{
    return param2 - param1;
}
console.log(diff(b,a));

function multiply(param1, param2){
    return param1 * param2;
}
console.log(multiply(a,b))

const multiply = (param1, param2)=>{
    return param1 * param2;
}
console.log(multiply(a,b));

function divide(param1, param2){
    return param1 / param2;
}
console.log(divide(a,b))

const divide = (param1, param2) =>{
    return param1 / param2;
}
console.log(divide(a,b));