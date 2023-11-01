var rnum = 0;
var timer = 60;
var score = 0;
var lvl = 1;
function makebubble() {
  var c = "";
  for (var i = 1; i <= 161; i++) {
    c += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  document.querySelector(".p-bottom").innerHTML = c;
  document.querySelector("#lvl").textContent = lvl;
  let numb = document.querySelectorAll(".bubble").length;
  if (score >= 100 && score < 200) {
    for (let i = 0; i < numb; i++) {
      document.querySelectorAll(".bubble")[i].style.animation =
        "bub .5s alternate infinite";
    }
  } else if (score >= 200
    ) {
    for (let i = 0; i < numb; i++) {
      document.querySelectorAll(".bubble")[i].style.animation =
        "bub1 .5s linear infinite";
    }
  }
}

function runtimer() {
  const t = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#tval").textContent = timer;
    } else {
      clearInterval(t);
      document.querySelector(".p-bottom").style.display = "none";
      document.querySelector("#scr").textContent = score;
      document.querySelector(".finalClass").style.visibility = "visible";
    }
  }, 1000);
}

function increaseLevel(timerValue, aname) {
  lvl = lvl + 1;
  setTimeout(() => {
    document.querySelector(".level").style.display = "none";
    document.querySelector(".p-bottom").style.display = "flex";

    document.querySelector("#lvl").textContent = lvl;
    timer = timerValue;
  }, 3000);
  document.querySelector(".p-bottom").style.display = "none";
  document.querySelector(".level").style.display = "flex";
  document.querySelector("#pl").textContent = lvl;
}

function increaseScore() {
  score += 10;
  document.querySelector("#sval").textContent = score;
  if (score == 100) {
    increaseLevel(60, "bub");
  } else if (score == 200) {
    increaseLevel(60, "bub1");
  }
}
function getNewHit() {
  rnum = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = rnum;
}
document
  .querySelector(".p-bottom")
  .addEventListener("click", function (details) {
    var num = Number(details.target.textContent);
    if (rnum == num) {
      increaseScore();
      makebubble();
      getNewHit();
      document.querySelector("#tval").style.animation = "none";
    } else {
      timer = timer - 10;
      document.querySelector("#tval").textContent = timer;
      document.querySelector("#tval").style.animation = "tanm .5s alternate 2";
    }
  });

runtimer();
makebubble();
getNewHit();
