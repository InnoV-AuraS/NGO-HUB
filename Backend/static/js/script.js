let lastScrollY = window.scrollY;
const navbar = document.getElementById("navbar");
const dashboard = document.getElementById("dashboard");
const hamburger = document.getElementById("hamburger");
let dashboardVisible = false; // Track dashboard state

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down, hide navbar & dashboard
        navbar.classList.add("hidden-navbar");
        if (dashboardVisible) {
            dashboard.classList.remove("active"); // Move left
        }
    } else {
        // Scrolling up, show navbar & dashboard (if open)
        navbar.classList.remove("hidden-navbar");
        if (dashboardVisible) {
            dashboard.classList.add("active");
        }
    }
    lastScrollY = window.scrollY;
});

hamburger.addEventListener("click", () => {
    dashboardVisible = !dashboardVisible;

    if (dashboardVisible) {
        dashboard.classList.add("active");  // Slide in
    } else {
        dashboard.classList.remove("active"); // Slide out
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
}