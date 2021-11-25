console.log("hello peter");

// ------------------------------------this part is for the toggle button-------------------------------------
let a = document.getElementById('menulist');
let b = document.getElementById('toggle');
a.style.maxHeight = "0px";

function toggle() {
    if (a.style.maxHeight == "0px") {
        a.style.maxHeight = "500px";
        b.innerHTML = "&#9747;";
    } else {
        a.style.maxHeight = "0px";
        b.innerHTML = "&#9776;";

    }
}


//  this block is to toggle theme of the page
let lights = document.querySelector(".lights");
lights.addEventListener('click', ()=>{
    let state = document.querySelector('.state');
    let txtclr = document.querySelector(':root');

    if(state.innerHTML == 'off'){ 
        // to enable dark mode

        state.innerHTML = 'on';
        txtclr.style.setProperty('--navColor', '#161616');
        txtclr.style.setProperty('--containerColor','#242424');
        txtclr.style.setProperty('--textclr', '#f5deb3');
        txtclr.style.setProperty('--mobnavcol', '#000000');
        
    }else if(state.innerHTML == 'on'){ 
        // to enable light mode

        state.innerHTML='off'
        txtclr.style.setProperty('--navColor', '#928aff');
        txtclr.style.setProperty('--containerColor','#ffffff');
        txtclr.style.setProperty('--textclr', '#000000');
        txtclr.style.setProperty('--mobnavcol', '#928aff');
    }
})




//------------------------------------------this part is for the progress indicator----------------------------
let che = document.getElementById('container');
let progress = document.getElementById('progress');
var containerHeight;
window.onscroll = () => {
    // console.log(che.offsetHeight);      // isko container ke poori height width  pahile se pata hai
    containerHeight = che.offsetHeight - window.innerHeight;
    containerPos = che.getBoundingClientRect();
    diff = containerHeight - containerPos.top;
    progressPercent = diff / containerHeight * 100;
    width = Math.floor(progressPercent - 100);
    (width == 100) ? progress.style.backgroundColor = "#1F51FF" : progress.style.backgroundColor = "#00ff00";
    progress.style.width = width + "%";
}



//----------------------------------this is for typing effect on the website---------------------------------
let arr = ["welcome to this website", "buy me a cyber truck"]
let wordnum = 0;
let lettercount = 0;
let writer = document.getElementById('tiping');
let cursor = document.getElementById('cursor');
print();
function print() {
    if (lettercount < arr[wordnum].length) {
        writer.textContent += arr[wordnum].charAt(lettercount);
        lettercount++;
        setTimeout(print, 200);
    }
    else setTimeout(erase, 2000);
}

function erase() {
    if (lettercount > 0) {
        writer.textContent = arr[wordnum].substring(0, lettercount - 1)
        lettercount--;
        setTimeout(erase, 80);
    } else {
        wordnum++;
        if (wordnum >= arr.length) wordnum = 0;
        setTimeout(print, 1234);
    }
}



// let mouse = document.getElementById('mouse');
// let m1 = getComputedStyle(mouse);S
// console.log(m1);
// console.log(JSON.parse(m1));

