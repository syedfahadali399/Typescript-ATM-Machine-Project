import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your 4 Digit Pin Code",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select Option",
            type: "list",
            choices: ["Withdraw", "Check Balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "Withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Your Amount",
                type: "number"
            }
        ]);
        if (amountAnswer.amount > 0 && amountAnswer.amount < 10000) {
            console.log(`Your Remaining Balance is ${myBalance -= amountAnswer.amount}`);
        }
        else if (amountAnswer.amount > 10000) {
            console.log("Insufficent Balance");
        }
        // let totalamount = myBalance > amountAnswer.amount
        // console.log(`Insufficent Balance ${totalamount}`);
        // let totalnewamount = myBalance -= amountAnswer.amount
        // console.log(`Your Remaining Balance is: ${totalnewamount}`);
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect Pin Code");
}
