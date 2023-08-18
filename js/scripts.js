// Utility Logic
function wordConverter(inputArr) {
    const convertedArr = inputArr.map(function (strNum) {
        if (strNum.includes('3')) {
            return "Won't you be my neighbor?"
        }
        else if (strNum.includes('2')) {
            return "Boop"
        }
        else if (strNum.includes('1')) {
            return "Beep"
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
};

askMrRoboger(40);


// UI Logic

window.addEventListener("load", function () {
    const form = document.getElementById('form');
    const formInput = document.getElementsByClassName('form-input')[0];
    const formInputLabel = document.getElementById('input-label');

    formInput.addEventListener('input', function () {
        formInputLabel.innerText = formInput.value;
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
    });
});