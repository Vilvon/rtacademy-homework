function chek() {
  let res = true;

  let el = document.getElementById("title-form");
  console.log(el.value);
  if (el.value == "") {
    el.style.borderColor = "#ff0000";
    res = false;
  }
  el = document.getElementById("textPost");
  if (el.value == "") {
    el.style.borderColor = "#ff0000";
    res = false;
  }

  el = document.getElementById("timePost");
  if (el.value == "") {
    el.style.borderColor = "#ff0000";
    res = false;
  }

  el = document.getElementById("choice-category-inp");
  if (el.value == "") {
    el.style.borderColor = "#ff0000";
    res = false;
  }

  return res;
}

document.getElementById("send-post").onmouseup = () => {
  if (chek()) {
    console.log("Well done");

    let div = document.createElement("div");
  } else {
    console.log("We in a");
  }
};

var dtt = document.getElementById("timePost");
dtt.onfocus = function (event) {
  this.type = "datetime-local";
  this.style.backgroundColor = "#fff";
  this.focus();
};
dtt.onblur = function (event) {
  console.log(this.value);
  if (this.value == "") {
    this.type = "text";
  }
};

document.getElementById("choice-foto").onchange = () =>
{
  let img = document.getElementById("choice-foto").value;
  console.log(img);

  img = 'file:///' + img;

  let div = document.createElement('div');
  div.style.backgroundImage =  img;

  let img1 = document.createElement('img')
  img1.src = img;
  img1.alt = 1;

  document.getElementById("choice-foto").after(img1);

}




document.getElementById("title-form").onchange = () => {
  document.getElementById("title-form").style.borderColor = "#e0e2e6";
};

document.getElementById("textPost").onchange = () => {
  document.getElementById("textPost").style.borderColor = "#e0e2e6";
};
document.getElementById("timePost").onchange = () => {
  document.getElementById("timePost").style.borderColor = "#e0e2e6";
};
document.getElementById("choice-category-inp").onchange = () => {
  document.getElementById("choice-category-inp").style.borderColor = "#e0e2e6";
};
