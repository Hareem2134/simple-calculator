#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your First Number", type: "number", name: "firstNumber" },
  { message: "Enter your Second Number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operator to perform operations",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Multiplication", "Division"],
  },
]);
// conditional statement
if (answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Substraction"){
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);    
}
else{
    console.log("Please select valid operator");
} 
console.log("THE END");
