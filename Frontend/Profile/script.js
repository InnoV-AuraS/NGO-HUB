function setData(){
    document.getElementById('pic').querySelector('img').src = sessionStorage.getItem('picture_url');
    document.getElementById('name').querySelector('p').innerHTML = sessionStorage.getItem('name');
    document.getElementById('location').querySelector('p').innerHTML = sessionStorage.getItem('location');
    document.getElementById('type').querySelector('p').innerHTML = sessionStorage.getItem('type');
    document.getElementById('about').querySelector('p').innerHTML = sessionStorage.getItem('about');
    document.getElementById('phone').innerHTML = sessionStorage.getItem('phone');
    document.getElementById('email').innerHTML = sessionStorage.getItem('email');
}

if(sessionStorage.getItem('picture_url') !== null){
    setData();
}