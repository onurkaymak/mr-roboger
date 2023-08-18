// Business Logic

function askMrRoboger(userNum) {
    const inputArr = [];

    for (let i = 0; i <= userNum; i += 1) {
        let strNum = [i].toString();
        inputArr.push(strNum);
    }

    inputArr.forEach(function (strNum, index) {
        if (strNum.includes('1')) {
            strNum = "Beep";
            strNum.replace(strNum, "Beep");
            inputArr.splice(index, 1, "Beep");
        }
    })
    console.log(inputArr);
};


askMrRoboger(5);
