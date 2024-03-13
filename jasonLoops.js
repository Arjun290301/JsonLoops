var personalData={
    "name":"Arjun",
    "age":22,
    "emai":"sasisaravanan76@gmail.com",
    "number":9399883838,
}
var educationalQualification={
    "degree":"Bachelor of Technology in Computer Science and Engineering",
    "college":"Sri Venkateswara University",
    "yearOfPassing":2022,
}
console.log("Using for loop:");
var keys = Object.keys(personalData);
for (var i = 0; i < keys.length; i++) {
  var key = keys[i];
  console.log(`${key}: ${personalData[key]}`);
}
console.log("Using for in loop:");
for (var key in educationalQualification) {
    console.log(`${key}: ${educationalQualification[key]}`);
  }

  console.log("Using for of loop with Object.entries():");
for (let [key, value] of Object.entries(personalData)) {
  console.log(`${key}: ${value}`);
}