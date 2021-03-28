let  Task = function (name){ 
    this.name = name;
    this.completed = false;
};

Task.prototype.makeComplete = function(){
    console.log('Completing task: ' + this.name);
        this.completed = true;
};

Task.prototype.save = function(){
    console.log('Saving task: ' + this.name);
};

let task1 = new Task('Create a demo constructor');
let task2 = new Task('Create a demo module');
let task3 = new Task('Create a demo singlenton');
let task4 = new Task('Create a demo prototypes');

task1.makeComplete();
task2.save();
task3.save();
task4.save();