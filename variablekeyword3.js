function variable(){
    var a=20
    console.log("Outer range a is :",a)
    {
     // var a=25
     let a=25
     console.log("Inside block range a is:",a)
  }
    console.log("2nd Outer Range a is:",a)
    
    
}
 variable()