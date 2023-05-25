function variable(){
let a=20
console.log("Outer range a is :",a)
    {
    
     //var a=25
    
    // var a=25 //error local scope is already declared
console.log("Inside block range a is:",a)
    
}
 console.log("2nd Outer Range a is:",a)
}
    variable()
    //console.log(a)