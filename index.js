////////////////////////////////////////////////////////////// isPrime

const isPrime = (num) => {

    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;

    return num !== 1 && num !== 0;
};
////////////////////////////////////////////////////////////// factorial

const factorial = function myFactorial(num) {
    return num ? num * myFactorial(num - 1) : 1;
};
/////////////////////////////////////////////////////////////// fib

const fib = function fibonacci(num) {
    return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
};

/////////////////////////////////////////////////////////////// isSorted

const isAscending = (array) => array.every((a, i) => i === 0 || a >= array[i - 1]);
const isSorted = (array) => isAscending(array) || false;

///////////////////////////////////////////////////////////////// reverse

const reverse = (str) => str.split("").reverse().join("");

////////////////////////////////////////////////////////////////// indexOf

const indexOf = (arr, elem) => arr.indexOf(elem);

////////////////////////////////////////////////////////////////// isPalindrom

const isPolindrom = (str) => {
    const reverseStr = str.toUpperCase().split('').reverse().join('').replace(/\s/g, '');
    if (str.toUpperCase().replace(/\s/g, '') === reverseStr) {
        return true;
    } return false;
};

//////////////////////////////////////////////////////////////////// missing

const missing = (arr) => {
    let missingArray = [];

    for(let i = Math.min(...arr); i < Math.max(...arr); i++) {
        if (arr.indexOf(i.toString()) === -1) {
            missingArray.push(i);
        }
    }

    return missingArray;
};

//////////////////////////////////////////////////////////////////// isBalanced

const isBalanced = (str) => {
    let arrOpenSymbols = [];
    let result = false;
    let countOpenSymbols;

    if (str.length > 0) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '{' || str[i] === '[' || str[i] === '(') {
                arrOpenSymbols.push(str[i]);
            } else {
                countOpenSymbols = arrOpenSymbols.length;
                if ((str[i] === '}' && arrOpenSymbols[(countOpenSymbols-1)] === '{') ||
                    (str[i] === ']' && arrOpenSymbols[(countOpenSymbols-1)] === '[') ||
                    (str[i] === ')' && arrOpenSymbols[(countOpenSymbols-1)] === '(')
                ) {
                    arrOpenSymbols.pop();
                }
            }
        }

        if (arrOpenSymbols.length) {
            result = false;
        } else {
            result = true;
        }
    }

    return result;
};

