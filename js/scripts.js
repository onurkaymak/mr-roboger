// Utility Logic
function wordConverter(inputArr) {
    const convertedArr = inputArr.map(function (strNum) {
        strNum.match(/\z/)
        // const test = strNum.split('');
        // console.log(test)
        // console.log(strNum)
        // const testedArr = test.map(function (singleNum) {
        //     if (singleNum = '3') {
        //         return "Won't you be my neightbor?"
        //     }
        //     return singleNum
        // })
        // console.log(testedArr)


        // if (strNum.includes('1')) {
        //     return "Beep"

        // }
        // // else if (strNum.includes('2')) {
        // //     return "Boop"
        // // }
        // else if (strNum.includes('3')) {
        //     return "Won't you be my neighbor?"
        // }
        // return strNum
    })
    // return convertedArr;
};


// Business Logic

function askMrRoboger(userNum) {
    const inputArr = [];

    for (let i = 0; i <= userNum; i += 1) {
        let strNum = [i].toString();
        inputArr.push(strNum);
    }

    const result = wordConverter(inputArr);
    // console.log(result)
};



askMrRoboger(15);
