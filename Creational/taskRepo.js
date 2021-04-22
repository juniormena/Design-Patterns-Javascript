let taskRepo = function(){
    let db = {};

    let get = function(id){
        console.log('Getting task ' + id)
    }

    return{
        get
    }
}

module.exports = taskRepo;