"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let todos = [];
let condition = true;
while (condition) {
    let addtask = await inquirer_1.default.prompt([
        {
            name: "todo",
            message: "What do you want to add to your todo list?",
            type: "input"
        },
        {
            name: "addmore",
            message: "Do you want to add more to your to do list?",
            type: "confirm",
            default: "fasle",
        }
    ]);
    todos.push(addtask.todo);
    condition = addtask.addmore;
    console.log(todos);
}
