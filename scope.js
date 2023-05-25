function sample(){
    console.log(this.sample.store)
}
sample()
a=30
sample.store={sno:1,name:"nugtes"}
sample()