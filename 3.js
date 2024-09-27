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