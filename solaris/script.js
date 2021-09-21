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

// this block will print in loop 
console.log("hello peter");
let arr = ["welcome to this website", "buy me a cyber truck"]
let wordnum = 0;
let lettercount = 0;
let writer = document.getElementById('tiping');
let cursor = document.getElementById('cursor');
print();
function print() {
    if(lettercount < arr[wordnum].length) {
        writer.textContent += arr[wordnum].charAt(lettercount);
        lettercount++;
        setTimeout(print,200);
    }
    else setTimeout(erase, 2000);
}

function erase() {
    if(lettercount > 0) {
        writer.textContent = arr[wordnum].substring(0, lettercount-1)
        lettercount--;
        setTimeout(erase, 80);
    }
    else {
        wordnum++;
        if(wordnum >= arr.length) wordnum = 0 ;
        setTimeout(print, 1234);
    }
}


let che = document.getElementById('body');
let progress = document.getElementById('progress');
var containerHeight;
window.onscroll = ()=> {
    // console.log(che.offsetHeight);      // isko container ke poori height width  pahile se pata hai
    containerHeight = che.offsetHeight - window.innerHeight;
    containerPos = che.getBoundingClientRect();
    diff = containerHeight - containerPos.top;
    progressPercent = diff/containerHeight *100;
    width = Math.floor(progressPercent-100);
    (width == 100) ? progress.style.backgroundColor = "#1F51FF" : progress.style.backgroundColor = "#00ff00";
    progress.style.width = width + "%";
}



