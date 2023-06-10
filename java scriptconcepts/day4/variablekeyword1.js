a=20
function printer(){
var a=25 //function scope variable(if we use var to declare variable then we can scope this variable within that function)
console.log("a is:",a)
a=30
}
printer()
console.log("Global a is:",a)