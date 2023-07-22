



let counts1 = setInterval(updated1);
let upto1 = 0;
function updated1() {
    let count1 = document.getElementById("firstId");
    count1.textContent = ++upto1;
    if (upto1 === 60) {
        clearInterval(counts1);
    }
}



let counts2 = setInterval(updated2);
let upto2 = 0;
function updated2() {
    let count2 = document.getElementById("secondId");
    count2.textContent = ++upto2;
    if (upto2 === 60) {
        clearInterval(counts2);
    }
}




let counts3 = setInterval(updated3);
let upto3 = 0;
function updated3() {
    let count3 = document.getElementById("thirdId");
    count3.textContent= ++upto3;
    if (upto3 === 60) {
        clearInterval(counts3);
    }
}




let counts4 = setInterval(updated4);
let upto4 = 0;
function updated4() {
    let count4 = document.getElementById("fourthId");
    count4.textContent = ++upto4;
    if (upto4 === 60) {
        clearInterval(counts4);
    }
}




let counts5 = setInterval(updated5);
let upto5 = 0;
function updated5() {
    let count5 = document.getElementById("fifthId");
    count5.textContent = ++upto5;
    if (upto5 === 60) {
        clearInterval(counts5);
    }
}




let counts6 = setInterval(updated6);
let upto6 = 0;
function updated6() {
    let count6 = document.getElementById("sixId");
    count6.innerHTML = ++upto6;
    if (upto6 === 30) {
        clearInterval(counts6);
    }
}




let counts7 = setInterval(updated7);
let upto7 = 0;
function updated7() {
    let count7 = document.getElementById("seventhId");
    count7.textContent = ++upto7;
    if (upto7 === 60) {
        clearInterval(counts7);
    }
}




let counts8 = setInterval(updated8);
let upto8 = 0;
function updated8() {
    let count8 = document.getElementById("eightId");
    count8.innerHTML = ++upto8;
    if (upto8 === 18) {
        clearInterval(counts8);
    }
}




let counts9 = setInterval(updated9);
let upto9 = 0;
function updated9() {
    let count9 = document.getElementById("ninethId");
    count9.innerHTML = ++upto9;
    if (upto9 === 18) {
        clearInterval(counts9);
    }
}



let counts10 = setInterval(updated10);
let upto10 = 0;
function updated10() {
    let count10 = document.getElementById("tenthId");
    count10.innerHTML = ++upto10;
    if (upto10 === 18) {
        clearInterval(counts10);
    }
}


anime({
    targets: 'svg path',
    d: [
      
      { value: 'M804,437C804,619.53,582.03,721,399.5,721S301,625.53,301,443S216.97,60,399.5,60S804,254.47,804,437Z' },
      { value: 'M771,436C753,627,582.03,721,399.5,721S139,646.53,139,464S405.47,78,588,78S788.126,254.275,771,436Z' },
      { value: 'M804,437C804,619.53,582.03,721,399.5,721S69,573.03,69,390.5S216.97,60,399.5,60S804,254.47,804,437Z' },
    ],
    easing: 'linear',
    duration: 10000,
    loop: true
  });