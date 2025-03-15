function setData(){
    document.getElementById('pic').querySelector('img').src = sessionStorage.getItem('picture_url');
    document.getElementById('name').querySelector('p').innerHTML = sessionStorage.getItem('name');
    document.getElementById('locaion').querySelector('p').innerHTML = sessionStorage.getItem('location');
}

function fetchData() {
    console.log("got called");
    const url = 'http://127.0.0.1:8000/fetch_data/';
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        sessionStorage.setItem('picture_url', data.picture_url);
        sessionStorage.setItem('name', JSON.stringify(data.name));
        sessionStorage.setItem('location', JSON.stringify(data.location));
        sessionStorage.setItem('type', JSON.stringify(data.type));
        sessionStorage.setItem('about', JSON.stringify(data.about));
        sessionStorage.setItem('phone', JSON.stringify(data.phone));
        sessionStorage.setItem('email', JSON.stringify(data.email));
        setData();
      })
      .catch(error => console.error('Error fetching data:',error));
}

const form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    fetch('http://127.0.0.1:8000/login_form_handler/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
        if(data.message === 'success'){
            console.log("you have successfully logged in");
            sessionStorage.setItem('logged', true);
            fetchData();
        }
        else{
            console.log("you login attempt failed");
        }
    })
    .catch((error) => console.error(error));
});