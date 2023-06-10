function giveMeWhatIask(input){
    var fruits = ["Apple","Banana","Papaya","Gauva","Orange"]
    var vegetables= ["Carrot","Potato","Onion","Chilli","Beans"]

    return new Promise(function(reslove,reject){
    setTimeout(function(){
     if(input=="fruits")
         reslove(fruits[Math.round(Math.random()*5)])
     else if(input=="vegetables")
        reslove(vegetables[Math.round(Math.random()*5)])
     else
        reject ("only fruits or vegetables as input please")
    },2000)
    })
}
async function callerlogic(){
    try{
        var result=await giveMeWhatIask("fruits")

        console.log("received",result)
        console.log("follow up logic")
    }


catch(e){
    console.log(e)
 }
}
callerlogic()