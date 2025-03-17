const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click",()=>{
    const dashboard = document.getElementById("dashboard");
    if(dashboard.style.display == "none"){
        dashboard.style.display = "block";
    }
    else{
        dashboard.style.display = "none";
    }
});

const signup = document.getElementById("signup");
signup.addEventListener("click",()=>{
    const menu = document.getElementById("login_menu");
    if(menu.style.display == "none"){
        menu.style.display = "block";
    }
    else{
        menu.style.display = "none";
    }
});

const login = document.getElementById("login");
login.addEventListener("click",()=>{
    window.open("../Login/login.html","_self");
});

const messages = document.getElementById("messages");
messages.addEventListener("click",()=>{
    window.open("../Messages/messages.html","_self");
});

if(sessionStorage.getItem('logged') === null){
    sessionStorage.setItem('logged', false );
    sessionStorage.setItem('fetched', false);
}

if(sessionStorage.getItem('picture_url') !== null){
    document.getElementById('dashboard').querySelector('img').src = sessionStorage.getItem('picture_url');
    document.getElementById('name').innerHTML = sessionStorage.getItem('name');
    document.getElementById('location').innerHTML = sessionStorage.getItem('location');
}