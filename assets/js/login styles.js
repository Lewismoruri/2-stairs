const login = document.getElementById("login");
const loginButton = document.getElementById("submit");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = login.username.value;
    const password = login.password.value;

    if (username === "" && password === "") {
        alert("Successful login");
        location.reload();
    }else {
        loginErrorMsg.style.opacity = 1;
    }
})
