person={
sno:1,
name:"murali",
city:"chennai"
}
list=[32,34,54,]
person.skills=["java","c++","python"]
list["sno"]=34
list["name"]="deva"
for(let x in person)
    console.log(x,"=>",person[x])

    console.log(Object.keys(person))
    console.log(Object.keys(list))
    for(let x in list)
    console.log(x,list[x])
