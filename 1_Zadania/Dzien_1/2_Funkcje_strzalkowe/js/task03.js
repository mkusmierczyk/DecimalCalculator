const runInterval = (n = 8) => {

    let i = 1;
    const interval = setInterval(() => {
        console.log("Hello");
        i++;
        if (i > n) {
            clearInterval(interval);
        }
    }, 500);

};
runInterval(2);
