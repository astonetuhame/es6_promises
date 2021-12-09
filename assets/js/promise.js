function pro(x, y) {
    return new Promise(function (resolve, reject) {
        console.log("Please wait....");
        var p = x + y;
        setTimeout(() => {
            if (p) {
                resolve(`Result is ${p}`);

            } else {
                reject("Wrong input");
            }
        }, 4000);
    });
}

pro(10, 20).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
