#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let looptype = true;
while (looptype) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "userToDo",
            message: chalk.underline.yellow("what do you want to add in your todo"),
        },
        {
            type: "confirm",
            name: "addmore",
            message: chalk.underline.red("Do you want to add more todo?"),
            default: false
        },
    ]);
    const { userToDo, addmore } = answers;
    // console.log(answers);
    looptype = addmore;
    if (userToDo) {
        todos.push(userToDo);
    }
    else {
        console.log(`Kindly add valid input`);
    }
}
;
console.log(todos);
console.log("\n");
if (todos.length > 0) {
    console.log(chalk.underline.green(`Your todo list:`));
    todos.forEach((todo) => {
        console.log(chalk.underline.cyanBright(todo));
    });
}
else {
    console.log(`not found todos`);
}
