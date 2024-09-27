// 2.d
// Multiplies numbers in the array. Outputs results to the console.
function returnMult() {
    const ages = [25, 31, 42, 77]; // Values to multiply
    const newAges = ages.map(multiplyUnder70) // Map
    console.log("Results: " + newAges); // Output to console
}

// Multiplies values < 70 by 2
let multiplyUnder70 = (num) => {
    if(num < 70){
        return num * 2;
    }
    else return num;
}

returnMult(); // Function call

