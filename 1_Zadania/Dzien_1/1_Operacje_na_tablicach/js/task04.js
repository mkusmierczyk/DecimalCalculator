function randomize(param1, param2, callback) {
    if (typeof callback !== "function") {
        throw new Error("blad");
    }
    let result = Math.floor(Math.random() * (param2 - param1)) + param1;
    callback(result);
}
randomize(6, 8,function (par) {
    console.log(par);
});