// Exercise 1
// What is the complexity of the following code? 
// O(n)

const getBalance = function (bankOperations) {
  let balance = 0 //O(1)
  for (let op of bankOperations) { //O(n)
    balance += op//O(1)
   }
   return balance//O(1)
}
    
getBalance([-27, -43, -2400, -700, 15000, 58])

// Exercise 2
// What is the time complexity of the following code?  
// O(log n)

const printSome = function (complaints) {
  for (let i = 1; i < complaints.length; i = i * 2) // O(log n)
    console.log(complaints[i].text);//O(1)
}

// Exercise 3
// What is the complexity of the getHyp function? 
//O(1)

const allSides = [
  { a: 3, b: 4 },
  { a: 15, b: 21 },
  { a: 41, b: 8 },
  { a: 12, b: 6 }
]
    
const getHype = function (sides) {
  let a = sides.a//O(1)
  let b = sides.b//O(1)
  let sumOfSquares = a * a + b * b//O(1)
  return Math.sqrt(sumOfSquares)//O(1)
}

const relevantSides = allSides.filter(s => s.a % 3 == 0)//O(n)
for (let sides of relevantSides) {//O(n)
  console.log(getHype(sides))
}



// Exercise 4
// Take this one slowly. What is the complexity of the getDistributions function? 
// O(n^2) or O(nm)

const studentAnswers = {
  brBlds: {
    1: "a",
    2: "a",
    3: "c"
  },
  dvOna: {
    1: "a",
    2: "c",
    3: "c"
  },
  nmPrz: {
    1: "a",
    2: "b",
    3: "a"
  }
}//O(1)
const studentGithubs = ["brBlds", "dvOna", "nmPrz"]//O(1)
    
const distributions = {//O(1)
  1: {},
  2: {},
  3: {}
}
    
const getDistributions = function (studentAnswers) {
  studentGithubs.forEach(sg => {//O(n)
    let answers = studentAnswers[sg] //O(1)
    
    Object.keys(answers).forEach(questionNumber => {//O(n)
      let letterAnswer = answers[questionNumber]//O(1)
    
      distributions[questionNumber][letterAnswer] ?//O(1)
        distributions[questionNumber][letterAnswer]++ ://O(1)
        distributions[questionNumber][letterAnswer] = 1//O(1)
    })
  })
    
  return distributions//O(1)
}
    
getDistributions(studentAnswers)



// Exercise 5
// What is the complexity of the emailManager function?
//O(n)

const sendEmails = (email, recepients) => recepients.forEach(r => r.sendEmail(email)) //O(n)+O(n)
    
const emailManager = function () {
  let email = generateEmail()//O(1)
    
  $.get('/recepients', function (recepients) {//O(n)
      sendEmails(email, recepients)
  })
}
    


// Exercise 6

// Earlier in this lesson, we saw a solution to the findDuplicates(arr) function that ran in O( n2 ), which is pretty awful.
// Write a different implementation of findDuplicates(arr) that runs in O( n ).
// It should print "there is a duplicate" if there are any duplicates in the array arr
// Click here to reveal a hint.
// The questions below are a little more challenging
const findDuplicates = function (arr) {
  const seen = new Set();

  for (let item of arr) {
    if (seen.has(item)) {
      console.log("There is a duplicate:", item);
      return; // Optional: exit early if only one duplicate is needed
    }
    seen.add(item);
  }

  console.log("No duplicates found.");
};

// Exercise 7
// You are given the following spreadsheet data about your employees:

//     _id     |name   |age    |salary
//     --------------------------------
//     ax01    |Ray    |28     |1300
//     qs84    |Lucius |31     |840
//     bg33    |Taylor |18     |2700
// 
// In reality, you have 320,000 employees, and you need to be able to find the salary of any employee very fast.

// You need to decide how you're going to store this data, such that the function findEmployeeSalary(employeeID) runs in O( 1 ) - constant time.

// Then, of course, write the findEmployeeSalary(employeeID) function.

const employees = [
  { _id: "ax01", name: "Ray", age: 28, salary: 1300 },
  { _id: "qs84", name: "Lucius", age: 31, salary: 840 },
  { _id: "bg33", name: "Taylor", age: 18, salary: 2700 }
  // ... up to 320,000 entries
]

const employeeSalaries = employees.reduce((acc, emp) => {//O(n)
  acc[emp._id] = emp.salary;//O(1)
  return acc;//O(1)
}, {});

const findEmployeeSalary = function(employeeID) {
  return employeeSalaries[employeeID];//O(1)
};

console.log(findEmployeeSalary("qs84")); // 840
console.log(findEmployeeSalary("bg33")); // 2700



// Exercise 8
// Earlier in this lesson we discussed what a binary search is and how we can use it to find something in a sorted array in O( log(n) ) time.

// Using the visuals and explanations from earlier, write a findIndex(numbers, num)function that finds the index of num in the given numbers array in O( log(n) ).

// Use the following sorted array to determine what the index of the number 2630 is - you should find it to be 86:

let numbers = [24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427, 442, 444, 469, 480, 572, 624, 627, 665, 680, 694, 743, 768, 790, 794, 852, 896, 919, 942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272, 1273, 1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667, 1667, 1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198, 2215, 2260, 2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554, 2557, 2580, 2630, 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932, 2962, 2984, 2987]

const findIndex = function(numbers, num) {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);//O( log(n) )

    if (numbers[mid] === num) {
      return mid; // Found the number  //O(1)
    } else if (numbers[mid] < num) {
      left = mid + 1; // Search the right half //O(1)
    } else {
      right = mid - 1; // Search the left half //O(1)
    }
  }

  return -1; // if Not found
};

console.log(findIndex(numbers,2630));



// Exercise 9
// O( 1 ) - green
// O( log(n) ) - yellow
// O( n ) - blue
// O( n2 ) - red