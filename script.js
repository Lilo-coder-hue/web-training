let studentName = "Layan";
let course = "Web Development";
let week = 5;

console.log("Student Name: " + studentName);
console.log("Course: " + course);
console.log("Training Week: " + week);
function welcomeStudent(name) {
    console.log("Welcome " + name);
}

welcomeStudent(studentName);
let skills = ["HTML", "CSS", "JavaScript"];

console.log("My Skills:");

for (let i = 0; i < skills.length; i++) {
    console.log(skills[i]);
}let student = {
    name: "Layan",
    course: "Web Development",
    week: 5
};

console.log("Student Information:");
console.log("Name: " + student.name);
console.log("Course: " + student.course);
console.log("Week: " + student.week);
let score = 85;

if (score >= 60) {
    console.log("Result: Pass");
} else {
    console.log("Result: Fail");
}console.log("Loop Example:");

for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
}