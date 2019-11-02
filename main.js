// Generator functions

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// events
generateEl.addEventListener('click', () => {    
    resultEl.innerText = generatePassword();
});

function generatePassword() {
    const length = +lengthEl.value;
    const lower = lowercaseEl.checked;
    const upper = uppercaseEl.checked;
    const number = numbersEl.checked;
    const symbol = symbolsEl.checked;



    let result = '';

    const typesCount = lower + upper + number + symbol;
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(type => Object.values(type)[0]);
    if (typesCount) {
        for (let i = 0; i < length; i++) {
            try {
                let random = Math.floor(Math.random() * typesCount);
                let randomKey = Object.keys(typesArr[random])[0];
                result += randomFunc[randomKey]();
            } catch(error) {
                console.log(error);
            }
            
        }
    }

    return result;
}

// generate password

function getRandomLower() {
    return String.fromCharCode(
        Math.floor(Math.random() * 26) + 97
    );
}

function getRandomUpper() {
    return String.fromCharCode(
        Math.floor(Math.random() * 26) + 65
    );
}

function getRandomNumber() {
    return String.fromCharCode(
        Math.floor(Math.random() * 10) + 48
    );
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());