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