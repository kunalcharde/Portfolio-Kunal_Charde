
let seemorebtn = document.getElementById("seemorebtn");
let cureentItem = 4;
function toogle() {
  let seemorebtn = document.getElementById("seemorebtn");
  if (seemorebtn.value === "seemore") {
    let work = [...document.querySelectorAll(".work")];
    for (var i = cureentItem; i < cureentItem + 4; i++) {
      work[i].style.display = "inline-block";
    }
    cureentItem += 4;
    seemorebtn.innerHTML = "Minimize";
    document.getElementById("seemorebtn").value = "minimize";
  } 
  else {
    let work = [...document.querySelectorAll(".work")];
    for (var i = 4; i < cureentItem; i++) {
      work[i].style.display = "none";
    }
    seemorebtn.innerHTML = "See More";
    cureentItem = 4;
    document.getElementById("seemorebtn").value = "seemore";
  }
}