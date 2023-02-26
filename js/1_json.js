// JSON = javascript object notation
// converts single quotes into double quotes
// converts objecy keys and values into string except the numbers.

let myself = {
    name : "rahat",
    age : 22,
    profession: 'student'
};
let myselfJson = JSON.stringify(myself);
console.log(myself); 
console.log(myselfJson);

// { name: 'rahat', age: 22, profession: 'student' } JS console
// {"name":"rahat","age":22,"profession":"student"} JSON
let cr = {
    name: "minul",
    id : 31,
    job : ["freelancer","wordpress pro", "G.O.A.T Cr"],
    likes : "bbw"
};

console.log(cr);
// get JSON string from cr
let crJSON = JSON.stringify(cr);
console.log(crJSON);
// get the original object from JSON
let crObj = JSON.parse(crJSON);
console.log(crObj);

console.log(typeof crJSON, typeof crObj);
// two most import JSON functions
// JSON.stringigy() : converts JS elements into JSON string
// JSON.parse(): retrieves the original JS element from JSON String