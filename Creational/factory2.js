let repoFactory = function(){
    let repos = this;
    let repoList = [{name:'task', source:'./taskRepo'}, {name:'task2', source:'./taskRepo'}];

    repoList.forEach((repo)=>{
        repos[repo.name] = require(repo.source)();
    })
}

module.exports = new repoFactory;