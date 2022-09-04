const notifier=require('node-notifier')


class Notifier{
    constructor(name){
        this.name=name
    }
    apply(compiler){
        compiler.hooks.done.tap('notification',(stats)=>{
            let time=((stats.endTime-stats.startTime)/1000).toFixed(2)
            notifier.notify({
                title:"my notification",
                message:`my name is ${this.name} \nand webpack is done in ${time} .`
            })
        })
    }
}

module.exports=Notifier;