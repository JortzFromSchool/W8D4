const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
    if (numsLeft > 0){
        rl.question("Input a number:", answer => {
            const val = parseInt(answer);
            newSum = sum + val;
            console.log(newSum);
            debugger;
            addNumbers(newSum, numsLeft-1, completionCallback);
        });
    };
    
    if (numsLeft === 0) {
        completionCallback(sum);
        rl.close();
    };
};

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));