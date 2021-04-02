// Reverse the provided string
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

// 1. Reverse a String With Built-In Functions

// function reverseString(str) {
//     // // Step 1. Use the split() method to return a new array
//     // let splitString = str.split("");

//     // // Step 2. Use the reverse() method to reverse the new created array
//     // let reverseArray = splitString.reverse()

//     // // Step 3. Use the join() method to join all elements of the array into a string
//     // let joinArray = reverseArray.join("");

//     // //Step 4. Return the reversed string
//     // return joinArray

//     // chaining the three methods together
//     return str.split("").reverse().join("");
// }

// //2. Reverse a String With a Decrementing For Loop
// function reverseString(str) {
//     // Step 1. Create an empty string that will host the new created string
//     let newString = "";

//     // Step 2. Create the FOR loop
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     /* Here hello's length equals 5
//             For each iteration: i = str.length - 1 and newString = newString + str[i]
//             First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
//             Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
//             Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
//             Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
//             Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
//         End of the FOR Loop*/

//     // Step 3. Return the reversed string
//     return newString
// }

// 3. Reverse a String With Recursion
function reverseString(str) {
    if (str === "")
        return "";
    else
        return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("hello"))

module.exports = reverseString



