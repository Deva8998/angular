person ={sno:1,name:"ravi",city:"vellore"}
candidate = person //pass by reference
candidate.skill=["c","java","angular"]
console.log(person)
console.log(candidate)
mumber={...person,city:"vellore",
intrest:["singing","playing","cricket"]}
