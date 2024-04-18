#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // dollars
let mypin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "Q1",
        message: "Enter your pin",
        type: "number",
    }
]);
if (pinAnswer.Q1 === mypin) {
    console.log("correct pin code !!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "checkbalance", "fastcash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`${"your remaining balance is: "}` + `${myBalance}`);
        }
        else if (amountAns.amount > myBalance) {
            console.log("INSUFFICIENT BALANCE.");
        }
    }
    if (operationAns.operation === "fastcash") {
        let fastcashAns = await inquirer.prompt([
            {
                name: "opration",
                message: "please select option",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"]
            }
        ]);
        myBalance -= fastcashAns.opration;
        console.log("your remaining balance is: " + myBalance);
    }
    if (operationAns.operation === "checkbalance") {
        console.log(`${"your balance is:"}` + `${myBalance}`);
    }
}
else {
    console.log("incorrect pin code");
}
