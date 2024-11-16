
document.addEventListener('DOMContentLoaded', ()=>{
    let form = document.getElementById('login-form-id');
    let username = document.getElementById('username-input-id');
    let password = document.getElementById('password-input-id');
    let loadingGif = document.getElementById('loading-gif-id');

    let loadingPage = document.querySelector('body') ;

    form.addEventListener('submit', (event)=>{
        event.preventDefault() ;

        if (username.value === "admin" && password.value === "admin"){
            loadingPage.classList.add('loading-gif-page');
            loadingGif.style.display = "block";
            setTimeout(() => {
                loadingGif.classList.remove('loading-gif-page');
                window.location.href = '../home-page/index.html';
            }, 2000);
            
        }
        else{
            alert("Login-failed");
        }
    } )
})