function changeText() {
    document.getElementById("message").innerHTML =
        "تم تغيير النص باستخدام JavaScript DOM";

    document.getElementById("title").style.color = "blue";
}function validateForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let result = document.getElementById("result");

    if (name === "" || email === "") {
        result.innerHTML = "يرجى تعبئة جميع البيانات";
        result.style.color = "red";
    } else {
        result.innerHTML = "مرحباً " + name + "، تم إرسال بياناتك بنجاح";
        result.style.color = "green";
    }
}