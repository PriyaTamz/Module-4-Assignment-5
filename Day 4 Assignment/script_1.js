// a. Print odd numbers in an array

var odd = function(arr){

    var temp = [];
    for(var i = 0; i < arr.length; i++){
      // Check if the number is odd
      if(arr[i] % 2 === 1){
        temp.push(arr[i]);
      } 
    }
    return temp;
  }
        
  
var num = [2,3,4,5,6,7];
console.log(odd(num));  
  
// Output is [3, 5, 7]



// b. Convert all the strings to title caps in a string array

var convertTitleCase = function(arr){

    for(var i = 0; i < arr.length; i++){
        var words = arr[i].split(' ');

        for(var j = 0; j < words.length; j++){
            words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1);
        }
        arr[i] = words.join(' ');
    }
    return arr;
}

var arr = ["this is a string", "convert to title case", "multiple words here"];
console.log(convertTitleCase(arr));

// Output is [ 'This Is A String','Convert To Title Case','Multiple Words Here' ]



// c. Sum of all numbers in an array

var sum = function(arr){

    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

var arr = [1,2,3,4,5,6,7,8,9,10];
console.log(sum(arr)); 

// Output is 55



// d. Return all the prime numbers in an array

var isPrime = function(num) {

    if (num <= 1) 
        return false; 

    for (var i = 2; i <= Math.sqrt(num); i++) { 
      if (num % i === 0) 
        return false; 
    }
    return true; 
  }
  
var primeNumbersInArray = function(arr) {
    var primes = [];
    for (var i = 0; i < arr.length; i++) {
      if (isPrime(arr[i])) {
        primes.push(arr[i]);
      }
    }
    return primes;
  }
  
var arr = [500, 501, 502, 503, 504, 505, 506, 507, 508, 509];
console.log(primeNumbersInArray(arr));
  
// Output is [503, 509]



// e. Return all the palindromes in an array

var palindrome = function(arr) {

    var temp = [];
    
    for(var i = 0; i < arr.length; i++){

      var str = arr[i].toString();
      var reversedStr = str.split('').reverse().join('');

      if(str === reversedStr) {
        temp.push(arr[i]);
      }
    }
    
    return temp;
  }
  
var num = [121, 345, 787, 12321, 456, 808, 678];
console.log(palindrome(num));

// Output is [ 121, 787, 12321, 808 ]



// f. Return median of two sorted arrays of the same size

var findMedianSortedArrays = function(nums1, nums2){

    var len = nums1.length;
    var mergedArray = [];
    var i = 0, j = 0;

    while (i < len && j < len){

        if (nums1[i] < nums2[j]){
            mergedArray.push(nums1[i]);
            i++;
        } else {
            mergedArray.push(nums2[j]);
            j++;
        }
    }

    while (i < len) {
        mergedArray.push(nums1[i]);
        i++;
    }

    while (j < len) {
        mergedArray.push(nums2[j]);
        j++;
    }

    var midIndex = len - 1;
    var median = (mergedArray[midIndex] + mergedArray[midIndex + 1]) / 2;

    return median;
};

var nums1 = [1, 3, 5];
var nums2 = [2, 4, 6];
console.log(findMedianSortedArrays(nums1, nums2)); 

// Output is 3.5



// g. Remove duplicates from an array

var removeDuplicates = function(arr) {

    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

var num = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(num));

// Output is [1,2,3,4,5]



// h. Rotate an array by k times

var rotate = function(arr, d, n){
    
    var temp = new Array(n);
    d = d % n;
    var k = 0;

    for (var i = d; i < n; i++) {
        temp[k] = arr[i];
        k++;
    }

    for (var i = 0; i < d; i++) {
        temp[k] = arr[i];
        k++;
    }

    return temp;
};

var arr = [1, 2, 3, 4, 5, 6, 7];
var n = arr.length;
var d = 2;
var rotatedArr = rotate(arr, d, n);
console.log(rotatedArr); 

// Output is [ 3, 4, 5, 6, 7, 1, 2 ]