let repo = require('./module');
let Task = require('./constructor');
let repoFactory = require('./factory');
let repoFactory2 = require('./factory2');

let task = repo.get(1);

console.log('getting this', task);

let task1 = new Task(repoFactory2.task2.get(25));
console.log(task1)