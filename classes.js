class student{
    constructor(sno,name){
        this.sno=sno
        this.name=name
    }

display(){
    console.log("sno:",sno,"Name:",name)
 }
}
obj =new student(12,"harry")
obj =new student(13,"hendry")
obj.display()
obj.display()