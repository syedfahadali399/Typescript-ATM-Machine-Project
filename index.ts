#! /usr/bin/env node

import inquirer from "inquirer";

let totalBalance = 10000;
let pinNumber = 1234;

let pinEntered = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter Your 4 Digit Pin Code",
            type: "number"
        }
    ]
)

if (pinEntered.pin === pinNumber) {

    console.log("Correct Pin Code");

    let atmQuestion = await inquirer.prompt(
        [
            {
                name: "accountType",
                message: "Please Select Account Type",
                type: "list",
                choices: ["Current Account", "Saving Account"]
            },
            {
                name: "transMethod",
                message: "Select Your Transcation Method",
                type: "list",
                choices: ["Cash Withdrawal", "Fast Cash"]

            }
        ]
    )

    console.log(atmQuestion);

    if(atmQuestion.transMethod === "Cash Withdrawal") {
        let cashwithdrawAmount = await inquirer.prompt(
            [
                {
                    name: "withdrawal",
                    message: "Enter Your Amount To Withdraw",
                    type: "number"
                }
            ]
        )

        if (totalBalance >= cashwithdrawAmount.withdrawal) {

            totalBalance -= cashwithdrawAmount.withdrawal
            console.log(`Your Balance is ${totalBalance}`);
            
        } else {
            console.log("Insufficent Balance");   
        }
        
    } else {
        let fastcashAmount = await inquirer.prompt(
            [
                {
                    name: "fastCash",
                    message: "Select The Amount You Want To Withdraw",
                    type: "list",
                    choices: ["1000", "3000", "5000"]
                }
            ]
        )   

        if(totalBalance >= fastcashAmount.fastCash){

            totalBalance -= fastcashAmount.fastCash
            console.log(`Your Total Balance Is ${totalBalance}`);        
        } else {
            console.log("Insufficient Balance");          
        }
    }   
}
