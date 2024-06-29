// a. Print odd numbers in an array

var odd = arr => arr.filter(num => num % 2 === 1);

var arr = [2, 3, 4, 5, 6, 7];
console.log(odd(arr));

// Output is [3, 5, 7]



// b. Convert all the strings to title caps in a string array

var convertTitleCase = arr => arr.map(str => str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));

var arr = ["this is a string", "convert to title case", "multiple words here"];
console.log(convertTitleCase(arr));

// Output is [ 'This Is A String','Convert To Title Case','Multiple Words Here' ]



// c. Sum of all numbers in an array

var sum = (arr) => arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

var arr = [1,2,3,4,5,6,7,8,9,10];
console.log(sum(arr));

// Output is 55



// d. Return all the prime numbers in an array

var isPrime = num => {
    if (num <= 1) 
        return false; 

    for (let i = 2; i <= Math.sqrt(num); i++) { 
        if (num % i === 0) 
            return false; 
    }
    return true; 
};

var primeNumbersInArray = arr => {
    return arr.filter(isPrime);
};

var arr = [500, 501, 502, 503, 504, 505, 506, 507, 508, 509];
console.log(primeNumbersInArray(arr));

// Output is [503, 509]



// e. Return all the palindromes in an array

var palindrome = arr => arr.filter(num => num.toString() === num.toString().split('').reverse().join(''));

var num = [121, 345, 787, 12321, 456, 808, 678];
console.log(palindrome(num));

// Output is [ 121, 787, 12321, 808 ]