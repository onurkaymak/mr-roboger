// Utility Logic
function wordConverter(inputArr) {
    const convertedArr = inputArr.map(function (strNum) {
        if (strNum.includes('1')) {
            return "Beep"

        }
        else if (strNum.includes('2')) {
            return "Boop"
        }
        return strNum
    })
    return convertedArr;
};


// Business Logic

function askMrRoboger(userNum) {
    const inputArr = [];

    for (let i = 0; i <= userNum; i += 1) {
        let strNum = [i].toString();
        inputArr.push(strNum);
    }

    const result = wordConverter(inputArr);
    console.log(result)
};



askMrRoboger(5);
