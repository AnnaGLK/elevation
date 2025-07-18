// Nullish Coalescing Exercise

// In a high tech company they are given an array of their Employees , the HR Staff needs to find which employees have null or undefined data.
// Using the Nullish Coalescing Operator print out the names of the employees that having missing data.

let employeesArr = [
  { name: "Joey", id: 1, age: 26 },
  { name: "Lily", id: null, age: 24 },
  { name: "Alice", id: 7, age: null },
  { name: "Sam", id: 8, age: 24 },
  { name: "Ray", id: null, age: null },
];

// let missingData = employeesArr.filter(e => e.id == null || e.age == null).map(e => e.name);
let missingData = employeesArr
  .filter((emp) => (emp.id ?? false) === false || (emp.age ?? false) === false)
  .map((emp) => emp.name);

console.log(missingData);
