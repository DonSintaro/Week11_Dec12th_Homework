class Employee{
    constructor(name, id, email){
        this.name = name || "No name provided";
        this.id = id || "No ID provided";
        this.email = email || "No email provided";
        this.role = "Employee";
        this.uniqueRole = "None Yet";
    }
}

Employee.prototype.getName = function(){
    console.log(this.name);
    return this.name;
}

Employee.prototype.getId = function(){
    console.log(this.id);
    return this.id;
}

Employee.prototype.getEmail = function(){
    console.log(this.email);
    return this.email;
}

Employee.prototype.getRole = function(){
    console.log(this.role);
    return this.role;
}

Employee.prototype.setRole = function(newRole){
    this.role = newRole;
}
Employee.prototype.setUnique = function(newUnique){
    this.uniqueRole = newUnique;
}

Employee.prototype.getTemplate = function(){
    return `<div class="employeeCard">
    <div class="cardHead">
        <h2 id="name">
            ${name}
        </h2>
        <h3 id="role">
            ${role}
        </h3>
    </div>
    <div class="cardBody">
        <p><b>ID: </b><span id="ID">${id}</span ></p>
        <p><b>Email: </b><span  id="email">${email}</span></p>
        <p><b>${uniqueRole} </b><span id="officeNum">${unique}</span></p>
    </div>
    </div>`
}

module.exports = Employee;