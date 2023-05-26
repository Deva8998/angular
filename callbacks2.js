function sendMeWhatIWant(arr,fun){
    let items =["so","one","four","trust","simple","poverty","activity"]

for(let x in arr){
    if(arr[x]>=0 && arr[x]<=8)
     fun(items[arr[x]])
    else
     fun("invalid")
 }
}
sendMeWhatIWant([3,5,7,10,8],function(data){
    console.log("got......",data)
})