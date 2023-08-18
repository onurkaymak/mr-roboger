// Business Logic

function askMrRoboger(userNum) {
    const inputArr = [];

    for (let i = 0; i <= 10; i += 1) {
        if ([i].includes(1)) {
            i = "Beep";
        }
        inputArr.push(i);
    }
    console.log(inputArr);
};


askMrRoboger(10);
