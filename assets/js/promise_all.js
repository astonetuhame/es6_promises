let procall = function (returnData, message) {
    return function (resolve, reject) {
        setTimeout(() => {
            console.log(`The ${message} promise has resolved`);
            resolve(returnData);
        }, returnData * 100);

    }
};


let p1 = new Promise(procall(10, "first"));
let p2 = new Promise(procall(15, "second"));
let p3 = new Promise(procall(20, "third"));
let p4 = new Promise(function (resolve, reject) {
    reject("The 4th promise has rejected");
});

var total = 0;
Promise.all([p1, p2, p3, p4]).then((result) => {
    for (let i in result) { total += result[i]; }
    console.log(`Results: ${result}`);
    console.log(`Total: ${total}`);
}).catch((error) => {
    console.log(`Error: ${error}`)
});
