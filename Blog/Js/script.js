const bmi1 = document.getElementById("bmi-1");
const bmi2 = document.getElementById("bmi-2");
const bmi3 = document.getElementById("bmi-3");

const bmii1 = document.getElementById("bmii-1");
const bmii2 = document.getElementById("bmii-2");
const bmii3 = document.getElementById("bmii-3");

let play = true;
let active = 1;

bm.onmouseover = (event) => {
  if (event.target.className == "big-menu-iteam-title") {
    switch (event.target.id) {
      case "bmit-1":
        bmi1.className += " hover";
        play = false;
        unsetActive(active);
        break;
      case "bmit-2":
        bmi2.className += " hover";
        play = false;
        unsetActive(active);

        break;
      case "bmit-3":
        bmi3.className += " hover";
        play = false;
        unsetActive(active);
        break;
    }
  }
};

bm.onmouseout = (event) => {
  if (event.target.className == "big-menu-iteam-title") {
    if (
      event.relatedTarget.className !== "btmi-title" &&
      event.relatedTarget.className !== "btmi-rm" &&
      event.relatedTarget.className !== "bm-progess-bar-nav"
    ) {
      switch (event.target.id) {
        case "bmit-1":
          bmi1.className = bmi1.className.replace(/hover/gi, "").trim();
          play = true;
          setActive(active);
          break;
        case "bmit-2":
          bmi2.className = bmi2.className.replace(/hover/gi, "").trim();
          play = true;
          setActive(active);
          break;
        case "bmit-3":
          bmi3.className = bmi3.className.replace(/hover/gi, "").trim();
          play = true;
          setActive(active);
          break;
      }
    }
  }
};

function startProgresBar() {
  const el = document.getElementById("bm-progess-bar");
  el.style.opacity = 0;
  el.style.width = 0;
  el.style.opacity = 1;
  // повторить с интервалом 2 секунды
  let timerId = setInterval(() => {
    // console.log(parseFloat(el.style.width));
    if (play) {
      el.style.width = (parseFloat(el.style.width) + 0.1).toString() + "em";
    }
    if (el.style.width == "30em") {
      clearInterval(timerId);
      startProgresBar();
      nextActive();
    }
  }, 25);
}

function setActive(id) {
  const el = document.getElementById("bmi-" + id);
  el.className += " active";
}

function unsetActive(id) {
  const el = document.getElementById("bmi-" + id);
  el.className = el.className.replace(/active/gi, "").trim();
}

function nextActive() {
  unsetActive(active);
  if (active == 3) {
    active = 1;
  } else {
    active++;
  }

  setActive(active);
}

startProgresBar();
