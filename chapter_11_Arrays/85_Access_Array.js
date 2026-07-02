// Accessing & Modifying
let statuses = ["pass", "fail", "skip"];
console.log(statuses[0]);
console.log(statuses[2]);

console.log(statuses.at(-1));
console.log(statuses.at(-2));
console.log(statuses.at(-3));
// console.log(statuses.at(-4)); undefined

// Modify
statuses[1] = "blocked";
console.log(statuses);

console.log(statuses.length);
console.log(statuses[statuses.length - 1]); // last element
console.log(statuses.at(-1)); // last element