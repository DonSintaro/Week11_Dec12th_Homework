const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
var Prompt = require('prompt-list');
const util = require("util");
const fs = require("fs");


const writeFileAsync = util.promisify(fs.writeFile);
// const readFileAsync = util.promisify(fs.readFile);


var again = true;
var onlyOne = false;
var placeInManager = [];
var placeInEngineer = [];
var placeInIntern = [];



// function templateIn(){}
do {
promptStart()
inquirer
.prompt([{
    type: "list",
    name: "doAgain",
    message: "Another employee?: ",
    choices: ["Yes","No"]
    }])
.then(function({doAgain}){
    if (doAgain == "No"){
        again = false;
    }         
})
}
while (again == true)
console.log(placeIn);

function promptStart(){
    inquirer
        .prompt([{
            message: "Define characteristics of employee. \n Name: ",
            name: "name"
            }
            ,{
            message: "Please enter employee Email: ",
            name: "email"
            }
            ,{
            message: "Please enter employee ID: ",
            name: "id"
            }
        ])
        
        .then(function({name,email,id}){
            inquirer
                .prompt([{
                    type: "list",
                    name: "role",
                    message: "Please define role of employee as follows: ",
                    choices: ["Manager", "Engineer", "Intern"]
                    }])
                .then(function({role}){

                    switch(role){
                        case "Manager": 
                            promptManager(name,email,id);
                            break;
                        case "Engineer":
                            promptEngineer(name,email,id);
                            break;
                        case "Intern":
                            promptIntern(name,email,id);
                            break;
                    }
        }
        )})
}

function promptManager(name,email,id){
    let OfficeT = "Office Number: ";
    inquirer
        .prompt([{
            message: "Please enter office number: ",
            name: "unique"
        }])
        .then(function({unique}){
            if (onlyOne == true){
                console.log("There can only be one manager per team! Employee not added.\n")
            }
            else{
                placeInManager.push(new Manager(name,email,id,unique))
            }

           
        })
}

function promptEngineer(name,email,id){
    let GitHubT = "GitHub: ";
    inquirer
        .prompt([{
            message: "Please enter gitHub username: ",
            name: "unique"
        }])
        .then(function({unique}){
            
                placeInEngineer.push(JSON.stringify(htmlTemplate));
                console.log(placeInEngineer);

        })

}

function promptIntern(name,email,id){
    let schoolT = "School: ";
    inquirer
        .prompt([{
            message: "Please enter school source: ",
            name: "unique"
        }])
        .then(function({unique}){
           

                placeInIntern.push();
                

        })

}

function templateLit(name,role,id,email,uniqueRole,unique){ return `<div class="employeeCard">
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
</div>

`
}