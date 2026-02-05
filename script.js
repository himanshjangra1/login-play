let email = document.querySelector("#gmail");
let pass = document.querySelector("#pass");
let submit = document.querySelector(".submit");

let emailId = "abc";
let password = "1234";

submit.addEventListener("click", () => {
    let mail = email.value;
    let secure = pass.value;

    if (mail === emailId && secure === password) {
        console.log("welcome!");
        location.href = "../tic-tac-toe/index.html";
    } else {
        console.log("enter correct id and password!");
    }
});
