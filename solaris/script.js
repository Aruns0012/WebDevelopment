console.log("hello peter");
let toggle = document.getElementById('toggle');
let nav = document.getElementById('navbar');
let flag = false;
toggle.addEventListener('click', () => {
    if (!flag) {
        nav.classList.remove('navbar')
        nav.classList.add('colgate');
        flag = true;
    } else {
        nav.classList.remove('colgate');
        nav.classList.add('navbar');
        flag = false;
    }
})
setInterval(() => {
    if (window.outerWidth >= 740) {
        nav.classList.remove('colgate');
        nav.classList.add('navbar')
    }
}, 500)

// this block of code is responsible for typing the text in the page
let ch = 'Welcome To This Website'
let typeSc = document.getElementById('tiping-box');
let i = 0;
typScreen = document.getElementById('tiping');


check();
function check() {
    typScreen.innerHTML = "";
    let hes = setInterval(printer, 170);
    
    
    function printer() {    // ye ek baar me ek letter print karta hai           
                    if (i >= ch.length) {
                        typScreen.innerHTML = '';
                        i = 0;
                        clearInterval(hes);
                        check();
                    } else if (i < ch.length) {
                        typScreen.innerHTML += ch[i];
                        i++;
                    }
                }
}


