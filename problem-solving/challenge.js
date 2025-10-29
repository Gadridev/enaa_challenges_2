// Défi 1 
function countWays(n) {
  if (n <= 1) {
    return 1;
  }
  return countWays(n - 1) + countWays(n - 2);
}
const n = 4;
// Défi 2 
function FizzBuzz(n){
    if (n % 3 === 0 && n % 5 === 0) {
        console.log("TechLead");
    } else if (n % 3 === 0) {
        console.log("Tech");
    } else if (n % 5 === 0) {
         console.log("Lead");
    } else {
        console.log(n);
    }
}
//Défi 3
function removeDuplicates(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}
//défi 4 :
function removeNegativeNumbers(arr) {
  let positiveArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      positiveArr.push(arr[i]);
    } else break;
  }
  return positiveArr.reduce((a, b) => a + b, 0);
}
// defi 5 : 
const arr = [1, 2, 3];
function inverseTable(array) {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
  return array;
}
const newArray = [...arr];
const reversedArray = inverseTable(arr);
const concatenatedArray = newArray.concat(reversedArray);
console.log(concatenatedArray);

// Défi 6 
const voiels = ["a", "e", "i", "o", "u"];
function countVowels(str) {
  const lowerString = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < lowerString.length; i++) {
    if (voiels.includes(lowerString[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("development"));
// Defi 7 verfication the palindrome
function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  } 
  return true;
}
// defi 8:
function frequenceString(string) {
  const frequency = {};
  for (let str of string) {
    frequency[str] = (frequency[str] || 0) + 1;
  }
  return frequency;
}
console.log(frequenceString("programming"));
// defi 9
const parking = [1, 1, 0, 0, 1, 0, 1];
function countAvailableSpots(parkingLot) {
  let count = 0;
  for (let i = 0; i < parkingLot.length; i++) {
    if (parkingLot[i] === 0) {
      return "Place disponible à l'indice :" + i;
    }
  }
}
console.log(countAvailableSpots(parking));


// Défi 10
function findMissingNumber(arr, N) {
  const expectedSum = (N * (N + 1)) / 2;
  console.log(expectedSum);
  const actualSum = arr.reduce((a, b) => a + b, 0);
  console.log(actualSum)
  return expectedSum - actualSum;
}
console.log(findMissingNumber([1, 2, 3, 5], 5));