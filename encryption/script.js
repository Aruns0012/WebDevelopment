
let etext = document.querySelector('.encrypText');
// console.log(etext);
let checkB = document.querySelector('.checkerB')
let dptButton = document.querySelector('.decrypt');
let findb = document.querySelector('.findB');
let outputB = document.querySelector('.outbox');


let txtval;
let procededB = false;
let converterB = false;
function liveBinconverter(event) {
    let input_text = event.target.value;
    let txtArr = [];

    for (let i = 0; i < input_text.length; i++) {
        let binVal = '0000';
        binVal = ('0000' + input_text.charCodeAt(i).toString(2)).slice(-8);
        txtArr.push(binVal);
    }

    txtva = txtArr.join(" ");
    // console.log(txtva);
    // console.log(typeof(txtva));
}

function checkerB() {
    converterB = true;
    txtval = txtva.split(/(\s+)/);
    txtval = txtval.filter((e) => {
        return e != " ";
    })
    setTimeout(() => {
        console.log('converted successfully');
    }, 500);


}

function finderB() {

    if (procededB == true) {
        // let outbox = document.querySelector('.outbox');
        vals = txtval.toString(" ");
        vals = vals.replace(/,/g, ' ');
        let message = vals.split(' ').map(b => parseInt(b, 2)).map(num => String.fromCharCode(num)).join('');
        console.log(message);
        outputB.innerHTML = message;
    } else {
        console.log('please decrypt it first');
    }

}

function decrypter() {
    if (converterB == true) {
        procededB = true
        let operationArr = [];
        for (let i = 0; i < txtval.length; i++) {
            let a = txtval[i];
            let b = Array.from(a);
            let j = 2;
            let k = 5;
            b[j] == '0' ? b[j] = '1' : b[j] = '0';
            b[k] == '0' ? b[k] = '1' : b[k] = '0';
            a = b.toString();
            a = a.replace(/,/g, '')
            txtval[i] = a;
        }
        setTimeout(() => {
            console.log('password Decrypted');
        }, 500);
    } else {
        console.log('please convert it first');
    }


}

etext.addEventListener('input', liveBinconverter);
checkB.addEventListener('click', checkerB)
dptButton.addEventListener('click', decrypter);
findb.addEventListener('click', finderB);

// let clearity = document.querySelector('.clear');
// clearity.addEventListener('click', ()=>{
//     output.innerHTML = "";
// })