const Task = require("./task");

const notificationService = function(){
    let message = "notifying";
    this.update = function(task){
        console.log(message +' '+ task.user + ' for task ' + task.name);
    }
}

const loggingService = function(){
    let message = "logging";
    this.update = function(task){
        console.log(message +' '+ task.user + ' for task ' + task.name);
    }
}

const auditingService = function(){
   
    let message = "Auditing";
    
    this.update = function(task){
        console.log(message +' '+ task.user + ' for task ' + task.name);
    }
}

const mediator = (function(){
    let channels = {};
    let subscribe = function(channel,context,func){
        if(!mediator.channels[channel]){
            mediator.channels[channel] = [];
        }
        mediator.channels[channel].push({
            context,
            func
        });
    };

    let publish = function(channel){
        if(!this.channels[channel]){
            return false;
        }

        let args = Array.prototype.slice.call(arguments,1);

        for(let i=0; i< mediator.channels[channel].length; i++){
            let sub = mediator.channels[channel][i];
            sub.func.apply(sub.context,args);
        }
    }

    return{
        channels:{},
        subscribe,
        publish
    }
}());


const task1 = new Task({name:'create a demo for constructors', user:'John'});

const not = new notificationService();
const ls = new loggingService();
const audit = new auditingService();

mediator.subscribe('complete', not, not.update);
mediator.subscribe('complete', ls, ls.update);
mediator.subscribe('complete', audit, audit.update);

task1.complete = function(){
    mediator.publish('complete',this);
    Task.prototype.complete.call(this);
}

task1.complete();
task1.save(); 