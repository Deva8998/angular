// setTimeout(function(){
//     console.log("printing codee")
// },8000)


function delayedProcess(input) {
    console.log("function Started and process started")
 return new Promise(function(resolve,reject) {
    setTimeout(function(){
        if(input=="badinput")
          reject("A bad input")
        else
         resolve("Hello")
    }, 3000)  //this part of code is asynchronous
  });
}
result = delayedProcess("badinput")
//console.log(result)
result.then (
    function(data) {console.log(data, " is processed and received")},
    function(error) {console.log(error )}
)
console.log("other lines of code")