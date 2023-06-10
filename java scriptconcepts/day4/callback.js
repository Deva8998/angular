function definition(fun){
    console.log("first 20% of the logic")
    fun ("Data set 1")
    console.log("another 20% of the logic")
    fun ("Data set 2")
    console.log("we are done")
}

definition(
    function(Data){
        console.log("caller logic")
        console.log(Data," is processed by the caller")
    }
)