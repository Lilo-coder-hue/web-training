// حلقة for
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// حلقة while
let count = 1;

while (count <= 3) {
    console.log("العدد: " + count);
    count++;
}
function greet(name) {
    return "مرحباً " + name;
}

console.log(greet("Lay"));
let studentName = "Lay";
let score = 85;

function checkResult(score) {
    if (score >= 60) {
        return "ناجح";
    } else {
        return "راسب";
    }
}

console.log("اسم المتدربة: " + studentName);
console.log("الدرجة: " + score);
console.log("النتيجة: " + checkResult(score));