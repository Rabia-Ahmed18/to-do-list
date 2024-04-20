#! bin/usr/env node
import inquirer from"inquirer";

let todos=[]
let condition=true;

while(condition)
{
    let addtask = await inquirer.prompt(
        [
            {
                name:"todo",
                message:"What do you want to add to your todo list?",
                type:"input"
            },
            {
                name:"addmore",
                message:"Do you want to add more to your to do list?",
                type:"confirm",
                default:"fasle",
            }
        ]
    );

todos.push(addtask.todo);
condition = addtask.addmore;
console.log(todos)
}