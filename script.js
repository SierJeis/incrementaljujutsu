let Class = 'Student Sorcerer';
let timerone = 0;
let physical = 0;
let ce = 10;
let cemax = 10;
let con = 1;
let dmg = 1;
let health = 10;
let healthmax = 5;
let width = 1;
let studenthp = 10;
let studentmaxhp = 10;
let xp = 0;
let xpreq = 10;
let statpoint = 0;
let regenrate = 0.1;
let ceregenrate = 0.3

const sorcererbtn = document.getElementById('sorcererbtn');
const cursebtn = document.getElementById('cursebtn');
const townbtn = document.getElementById('townbtn');
const forestbtn = document.getElementById('forestbtn');
const punchbtn = document.getElementById('punchbtn');
const addstrbtn = document.getElementById('addstr');
const addcebtn = document.getElementById('addce');
const addconbtn = document.getElementById('addcon');
const returnbtn = document.getElementById('returnbtn');
const trybtn = document.getElementById('trybtn');
const optionsbtn = document.getElementById('optionsbtn');

function switchsorcerer(){
    Class = 'Student Sorcerer';
    document.querySelector('.menu').style.display = 'none';
    document.querySelector('.main').style.display = 'inline';
    document.querySelector(".inventory").style.display = 'inline';
    document.querySelector(".areaselection").style.display = 'flex';
    regenfunc();
    ceregen();
}

function timer(){
    interval2 = setInterval(() => {
        timerone += 1;
    }, 1000);
}

function switchoption(){
    document.querySelector(".menu").style.display = 'none';
    document.querySelector(".main").style.display = 'none';
    document.querySelector(".forest").style.display = 'none';
    document.querySelector(".inventory").style.display = 'none';
    document.querySelector(".returnbtn").style.display = 'inline';
    document.querySelector(".attacks").style.display = 'none';
    document.querySelector('.optionsmenu').style.display = 'inline';
    clearInterval(interval2);
    clearInterval(interval3);
}

function switchforest(){
    document.querySelector(".menu").style.display = 'none';
    document.querySelector(".main").style.display = 'none';
    document.querySelector(".forest").style.display = 'inline';
    document.querySelector(".inventory").style.display = 'inline';
    document.querySelector(".timer").style.display = 'flex';
    document.querySelector(".returnbtn").style.display = 'inline';
    timer();
}

function forestreturn(){
    document.querySelector(".menu").style.display = 'none';
    document.querySelector(".main").style.display = 'inline';
    document.querySelector(".forest").style.display = 'none';
    document.querySelector(".inventory").style.display = 'inline';
    document.querySelector(".attacks").style.display = 'none';
    document.querySelector(".student").style.display = 'none';
    document.querySelector(".returnbtn").style.display = 'none';
    document.querySelector('.optionsmenu').style.display = 'none';
    clearInterval(interval2);
    clearInterval(interval3);
}

function switchcurse(){
    Class = 'Curse';
}

function spawnsum(){
    document.querySelector(".timer").style.display = 'none';
    document.querySelector(".student").style.display = 'inline';
    document.querySelector(".attacks").style.display = 'flex';
    width = 0;
    hploss()
    interval3 = setInterval(() => {
        width++;
        document.querySelector(".fill2").style.width = width + '%';
    }, 30);
}

function punchatk(){
    document.querySelector("#punchbtn").disabled = true;
    studenthp -= (dmg+1*physical);
    interval4 = setTimeout(() => {
        document.querySelector("#punchbtn").disabled = false;
    }, 1000);
}

function diefunc(){
    document.querySelector(".main").style.display = 'none';
    document.querySelector(".menu").style.display = 'none';
    document.querySelector(".forest").style.display = 'none';
    document.querySelector(".death").style.visibility = 'visible';
    document.querySelector(".attacks").style.display = 'none';
    document.querySelector(".inventory").style.display = 'none';
    health = 0;
    width = 0;
    clearInterval(regeninterval);
    clearInterval(interval5);
    clearInterval(interval3);
    resetstats();
}

function tryagain(){
    document.querySelector(".death").style.visibility = 'hidden';
    document.querySelector(".menu").style.display = 'inline';
    document.querySelector(".student").style.display = 'none';
    health = 10;
}

function resetstats(){
    physical = 0;
    ce = 10;
    cemax = 10;
    con = 1;
    xp = 0;
    xpreq = 10;
    statpoint = 0;
    dmg = 1;
}

function addstr(){
    physical += 1;
    statpoint -= 1;
}

function addce(){
    cemax += 5;
    statpoint -= 1;
}

function addcon(){
    con += 1;
    statpoint -= 1;
}

sorcererbtn.addEventListener("click", switchsorcerer);
forestbtn.addEventListener("click", switchforest);
punchbtn.addEventListener("click", punchatk);
addstrbtn.addEventListener("click", addstr);
addcebtn.addEventListener("click", addce);
addconbtn.addEventListener("click", addcon);
returnbtn.addEventListener("click", forestreturn);
trybtn.addEventListener("click", tryagain)
optionsbtn.addEventListener("click", switchoption)