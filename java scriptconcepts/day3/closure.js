function outer(b){
    state=1
    function inner(){
        console.log(state,"state is accessable in innerfunction")
        innerstate=1
        console.log(innerstate,"with in innerfunction")
        state++;
        innerstate++

    }
    console.log(state ,"accessed within outer")
    //inner()  --- Working version
    //console.log(innerstate, "accessed within outer") //not possible
    return inner
}

result=outer("King")
console.log(result)
result()
result()
result()
//outer.inner()