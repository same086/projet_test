const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

let i = 0;
let images = ["pic10spa.jpg", "pic5spa.jpg", "pic8spa.jpg", "pic6spa.jpg", "pic2spa.jpg", "pic7spa.jpg"];
let time= 2000;
function changeImg() {
    document.getElementsByClassName(".slide") = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;

    }
    setTimeout("changeImg()", time);

}
    window.onload = changeImg;



