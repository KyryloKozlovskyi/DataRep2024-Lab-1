// 3
// 3.a Create an array of strings.
let Tasks = ["task1", "task2", "task3", "task4", "task5"]; // Array of strings

// 3.b Create an addTask function.
function addTask(task) { // Recieves a string (task) and adds it to the array. Returnes the length of the array.
    Tasks.push(task); // Adds string (task) to the array
    console.log(task + " - added to the array") // Indicates the incertion
    return Tasks.length; // Returns length of the array
}

// addTask() call
console.log(addTask("Cool task") + " - number of tasks")

// 3.c Create a listAllTasks function.
function listAllTasks() { // Iterates over the array. Prints each value to the console.
    console.log("Tasks:")
    Tasks.forEach(element => { // Iterates over the array
        console.log(element); // Prints array item
    });
}

// listAllTasks() call
listAllTasks()

// 3.d Create a deleteTask function.
function deleteTask(task) { // Recieves string as a parameter. Removes the string form the array. Returns the length of the array.
    let elementIndex = -1; // Stores index of the array
    Tasks.forEach(element => { // Iterates over the array
        elementIndex += 1
        if (element == task) { // If value found, deletes it.
            removedTask = Tasks.splice(elementIndex, 1) // Stores the deleted value
            console.log(removedTask + " - deleted") // Prints deleted value to the console
        }
    })
    if ((elementIndex + 1) == Tasks.length) { // If value not fount
        console.log(task + "- not found!"); // prints "not found"
    }
    return Tasks.length // Returns length of the array
}
//deleteTask() call
console.log(deleteTask("Cool task") + " - length of the array")
