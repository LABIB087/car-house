alert("This webpage is not Responsive");
var bar = document.getElementById('bar');
var menu = document.getElementById('nav-bar');
bar.addEventListener("click", () => {
    if (menu.className === 'nav') {
        menu.classList.remove('nav');
        bar.innerHTML = '&#10006';
    } else {
        menu.classList.add('nav');
        bar.innerHTML = '&#9776';

    }
});

var imges = ["logo1.jpg", "logo2.jpg", "logo3.jpg", "logo4.jpg", "logo5.jpg"];
var tag = document.getElementById('img');
var count = 0;

function next() {
    count++;
    if (count >= imges.length) {
        count = 0;
        tag.src = imges[count];
    } else {
        tag.src = imges[count];
    }
}

function pri() {
    count--;
    if (count < 0) {
        count = imges.length - 1;
        tag.src = imges[count];
    } else {
        tag.src = imges[count];
    }
}

function sms(){
    alert('Not have any');
}
