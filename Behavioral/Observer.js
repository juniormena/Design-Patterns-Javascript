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

class ObserverList{
    obsserverList = [];

    add(obj){
        return this.obsserverList.push(obj);
    }

    get(index){
        if(index>-1 && index< this.obsserverList.length){
            return this.obsserverList[index];
        }
    }

    count(){
        return this.obsserverList.length;
    }

    removeAt(index){
        this.obsserverList.splice(index,1);
    }

    indexOf(obj,startIndex){
        let i = startIndex;

        while(i<this.obsserverList.length){
            if(this.obsserverList[i]===obj){
                return i;
            }
            i++;
        }

        return -1;
    }

}
const ObservableTask = function(data){
    Task.call(this,data);
    this.observers = new ObserverList();
}

ObservableTask.prototype.addObserver = function(observer){
    this.observers.add(observer);
}

ObservableTask.prototype.notify = function(context){
    let observerCount = this.observers.count();
    for(let i =0; i< observerCount; i++){
        this.observers.get(i)(context);
    } 
}

ObservableTask.prototype.save = function(){
    this.notify(this);
    Task.prototype.save.call(this);
}

ObservableTask.prototype.removeObserver = function(observer){
    this.observers.removeAt(this.observers.indexOf(observer,0));
}



const task1 = new ObservableTask({name:'create a demo for constructors', user:'John'});

const not = new notificationService();
const ls = new loggingService();
const audit = new auditingService();


task1.addObserver(not.update);
task1.addObserver(ls.update);
task1.addObserver(audit.update);




task1.save();

task1.removeObserver(audit.update);
task1.save();