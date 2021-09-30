const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askIfGreaterThan(el1, el2, callback){
    rl.question(`Is ${el1} greater than ${el2}?`, answer => {
        if (answer === "yes"){
            callback(true);
        } else {
            callback(false);
        };
    });
};

// askIfGreaterThan(3, 4, (answer) => console.log(answer));

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
    if (i < arr.length-1) {
        askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
            if (isGreaterThan) {
                const temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                madeAnySwaps = true;
            };
            innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
        } );
    };
    if (i === (arr.length - 1)){
        outerBubbleSortLoop(madeAnySwaps);
    };
};

// innerBubbleSortLoop([2,3,7,4,1], 0, false, () => console.log("in outer sort loop."));

function absurdBubbleSort(arr, sortCompletionCallback){
    function outerBubbleSortLoop(madeAnySwaps) {
        if(madeAnySwaps === true) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        } else {
            sortCompletionCallback(arr);
        };
    };

   outerBubbleSortLoop(true);
};

absurdBubbleSort([3, 2, 1], function(arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    rl.close();
  });