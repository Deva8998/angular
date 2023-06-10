function libfun(fun){

    var dataitems =["python program", "Java program", "c# program"]
    
   fun(dataitems[Math.round(Math.random()*2)])
    
    }
    
    
    
    
    class DataHolder{
    
    constructor (data){
    this.data = data
    
    }
    
    show(){
    
    console.log("Data-->", this.data)

      }
    
    ChangeData(){
    
    /*libfun(function(value){
    
                    this.data = value
    
                }.bind(this))*/
    
    libfun((value)=>{
    
    this.data = value
 
    }) 
  
   }
  
    } 
    obj = new DataHolder("Javascript program")  
    obj.show()  
    obj.ChangeData()
     obj.show()