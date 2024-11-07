


document.addEventListener('DOMContentLoaded', function () {
    let button = document.querySelector(".loginBtn");
    let username = document.querySelector(".username-input");
    let password = document.querySelector(".password-input");

    button.addEventListener('click', function () {
      if (username.value === "admin" && password.value === "admin") {
        window.location.href = './currencyConverter2.html';
      } else {
        alert("Login Failed");
      }
    });
  });