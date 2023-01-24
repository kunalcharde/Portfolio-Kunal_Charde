var options = {
    strings: ['Kunal Charde', 'UI Desiner', 'Web Developer',],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
};
var typed = new Typed('.typing', options);

// ----
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

//------
let seemorebtn = document.querySelector('#seemorebtn')
let cureentItem = 4;
seemorebtn.onclick = () => {
    console.log("object")
    let work = [...document.querySelectorAll('.work')];
    console.log(work)
    for (var i = cureentItem; i < cureentItem + 4; i++) {
        work[i].style.display = "inline-block"
    }
    cureentItem += 4;
    if (cureentItem >= work.length) {
        seemorebtn.style.display = "none";
    }
    
}