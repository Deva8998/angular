function student(sno,name){
    this.sno=sno
    this.name=name
    console.log(this)
}
student.prototype.display=function(){
    console.log("sno:",this.sno,"Name:",this.name)
}


obj1 =new Student(1, "sooda") //separate scope for Student is created
obj2 = new Student(2, "Harry")

obj1.display()
obj2.display()