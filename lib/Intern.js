const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school || "No school provided";
        this.setRole("Intern");
        this.setUnique("")
    }
}

Intern.prototype.getSchool = function(){
    return this.school;
}

module.exports = Intern;