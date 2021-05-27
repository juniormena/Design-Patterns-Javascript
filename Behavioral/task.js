const Task = function(data){
    this.name = data.name;
    this.user =data.user;
    this.completed = data.completed;
}

Task.prototype.complete = function(){
    console.log('completing task: '  + this.name);
    this.completed =true;
}

Task.prototype.save = function(){
    console.log('Saving task: ' + this.name);
}


module.exports =Task;