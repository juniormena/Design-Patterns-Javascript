let repo ={
    tasks:{},
    commands:[],
    get: function (id) {
        return{
            name:'new tak from db'
        }
    },

    save: function(task){
        repo.tasks[task.id] = task;
        console.log('Saving ' + task.name + ' to the db');
    },

    replay: function(){
        for(let i = 0; i< repo.commands.length; i++){
            let command = repo.commands[i];
            repo.excuteNoLog(command.name, command.obj);
        }
    }
}

repo.excuteNoLog = function(name){
    let args = Array.prototype.slice.call(arguments,1);

    if(repo[name]){
        return repo[name].apply(repo, args);
    }
}

repo.excute = function(name){
    let args = Array.prototype.slice.call(arguments,1);

    repo.commands.push({
        name:name,
        obj:args[0]
    });

   if(repo[name]){
       return repo[name].apply(repo, args);
   }
   return false; 
}

repo.excute('save', {
    id:1,
    name:'Task 1',
    completed:false
});

repo.excute('save', {
    id:2,
    name:'Task 2',
    completed:false
});

repo.excute('save', {
    id:3,
    name:'Task 3',
    completed:false
});

repo.excute('save', {
    id:4,
    name:'Task 4 ',
    completed:false
})

console.log(repo.tasks);
repo.tasks = {};

console.log(repo.tasks);

repo.replay();

console.log(repo.tasks);