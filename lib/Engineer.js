const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github || "No GitHub provided";
        this.setRole("Engineer");
        this.setUnique("")
    }
}

Engineer.prototype.getGithub = function(){
    return this.github;
}



module.exports = Engineer;