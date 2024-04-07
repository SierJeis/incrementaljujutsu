function loop(){
   interval1 = setInterval(() => {
        document.querySelector(".health").innerHTML = "HP: " + Math.round(health*10)/10 + "/" + (healthmax+5*con);
        document.querySelector(".class").innerHTML = "Class: " + Class;
        document.querySelector(".str").innerHTML = "Physical Strength: " + physical;
        document.querySelector(".ce").innerHTML = "Cursed Energy: " + Math.round(ce*10)/10 +"/" + Math.round(cemax*10)/10;
        document.querySelector(".con").innerHTML = "Constitution: " + con;
        document.querySelector(".dmg").innerHTML = "DMG: " + (dmg+1*physical);
        document.querySelector(".xptext").innerHTML = "XP: " + xp + "/" + xpreq;
        document.querySelector(".timer").innerHTML = timerone + "/5";
        document.querySelector(".fill").style.width = studenthp * 10 + '%';
        if(timerone >= 5) {
            timerone = 0;
            clearInterval(interval2);
            spawnsum();
        }
        if(studenthp <= 0) {
            studenthp = 10;
            width = 0;
            xp += 1;
            clearInterval(interval3);
            clearInterval(interval5);
            document.querySelector(".student").style.display = 'none';
            document.querySelector(".attacks").style.display = 'none';
            document.querySelector(".timer").style.display = 'flex';
            timerone = 0;
            timer()
        }
        if(xp >= xpreq) {
            xp = 0;
            statpoint += 1;
        }
        if(statpoint >= 1) {
            document.querySelector(".addstr").style.display = 'inline';
            document.querySelector(".addce").style.display = 'inline';
            document.querySelector(".addcon").style.display = 'inline';
        } else {
            document.querySelector(".addstr").style.display = 'none';
            document.querySelector(".addce").style.display = 'none';
            document.querySelector(".addcon").style.display = 'none';
        }
        if(health <= 0){
            diefunc();
        }
        if(ce > cemax) {
            ce = cemax;
        }
    }, 10);
};

function hploss(){
    interval5 = setInterval(() => {
        if(width >= 100){
            width = 0;
            health -= 1;
        }
    }, 10);
}

function regenfunc(){
    regeninterval = setInterval(() => {
        if(health < (healthmax+5*con)) {
            health += regenrate;
        }
    }, 2000);
}

function ceregen(){
    ceinterval = setInterval(() => {
        if(ce < cemax) {
            ce += ceregenrate;
        }
    }, 2000);
}

window.onload = loop();