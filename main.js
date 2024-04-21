import inquirer from "inquirer";
let answer = await inquirer.prompt({
    name: "q1",
    message: "what is your name",
    type: "input"
});
console.log('hello ${answer.q1} how are you');
