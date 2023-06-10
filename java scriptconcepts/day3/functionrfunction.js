function sample(){

 return function(a,b){
 return a+b
}
     }//function returning function
    console.log(sample()(125,890))
/*function sample1(option){
    console.log("sample logic")
    if (option==1)
    return function(a,b){
    return a-b}
    else
     return function(a,b){
     return a+b
     
    }
       
    
}  
 console.log(sample1(1)(90,78))
    */
    