
/*this forEach method executes a function once for each item in the array*/

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

forEach(days, (result) => {
    console.log(result);
});






