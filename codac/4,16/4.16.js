function constractHtml(str) {
  let div = document.createElement("div");
  div.className = "answer";
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  p2.className = "answer-res";
  p1.className = "head-answer";
  p1.innerHTML = "Разница между датами";
  div.append(p1);
  div.append(p2);
  p2.innerHTML =
    'Разница между <b class = "input-date">' +
    document
      .getElementById("op1")
      .value.split("-")
      .join(".")
      .replace("T", " ") +
    '</b> и <b class = "input-date">' +
    document
      .getElementById("op2")
      .value.split("-")
      .join(".")
      .replace("T", " ") +
    "</b > составляет <p>" +
    str +
    "</p>";
  document.body.append(div);
}

function constractString(resss) {
  let countTrueElement = 0;
  let res = "";

  if (resss.day[2]) {
    res += resss.day[0].toString() + " " + resss.day[1] + ", ";
    countTrueElement++;
  }

  if (resss.hours[2]) {
    res += resss.hours[0].toString() + " " + resss.hours[1] + ", ";
    countTrueElement++;
  }

  if (resss.minutes[2]) {
    res += resss.minutes[0].toString() + " " + resss.minutes[1] + ", ";
    countTrueElement++;
  }

  if (resss.seconds[2]) {
    res += resss.seconds[0].toString() + " " + resss.seconds[1] + ", ";
    countTrueElement++;
  }

  if (countTrueElement >= 2) {
    if (resss.seconds[2]) {
      res = res.replace(
        ", " + resss.seconds[0].toString() + " " + resss.seconds[1] + ", ",
        " и " + resss.seconds[0].toString() + " " + resss.seconds[1]
      );
    } else if (resss.minutes[2]) {
      res = res.replace(
        ", " + resss.minutes[0].toString() + " " + resss.minutes[1] + ", ",
        " и " + resss.minutes[0].toString() + " " + resss.minutes[1]
      );
    } else {
      res = res.replace(
        ", " + resss.hours[0].toString() + " " + resss.hours[1] + ", ",
        " и " + resss.hours[0].toString() + " " + resss.hours[1]
      );
    }
  }
  return res;
}

function getRes(time) {
  let buffchar;
  let res = {
    day: [0, "дней", false],
    hours: [0, "часов", false],
    minutes: [0, "минут", false],
    seconds: [0, "секунд", false],
  };

  res.day[0] = parseInt(time / 86400000);
  time -= res.day[0] * 86400000;
  res.day[2] = !!res.day[0];

  res.hours[0] = parseInt(time / 3600000);
  time -= res.hours[0] * 3600000;
  res.hours[2] = !!res.hours[0];

  res.minutes[0] = parseInt(time / 60000);
  time -= res.minutes[0] * 60000;
  res.minutes[2] = !!res.minutes[0];

  res.seconds[0] = parseInt(time / 1000);
  res.seconds[2] = !!res.seconds[0];

  if (res.day[2]) {
    buffchar = res.day[0].toString();
    if (
      parseInt(buffchar.substring(buffchar.length - 2, buffchar.length)) > 10 &&
      parseInt(buffchar.substring(buffchar.length - 2, buffchar.length)) < 20
    ) {
      res.day[1] = "деней";
    } else if (buffchar[buffchar.length - 1] == 1) {
      res.day[1] = "день";
    } else if (
      parseInt(buffchar[buffchar.length - 1]) >= 2 &&
      parseInt(buffchar[buffchar.length - 1]) <= 4
    ) {
      res.day[1] = "дня";
    } else {
      res.day[1] = "дней";
    }
  }
  if (res.hours[2]) {
    buffchar = res.hours[0].toString();
    if (
      parseInt(buffchar.substring(buffchar.length - 2, buffchar.length)) > 10 &&
      parseInt(buffchar.substring(buffchar.length - 2, buffchar.length)) < 20
    ) {
      res.hours[1] = "часов";
    } else if (buffchar[buffchar.length - 1] == 1) {
      res.hours[1] = "час";
    } else if (
      parseInt(buffchar[buffchar.length - 1]) >= 2 &&
      parseInt(buffchar[buffchar.length - 1]) <= 4
    ) {
      res.hours[1] = "часа";
    } else {
      res.hours[1] = "часов";
    }
  }
  if (res.minutes[2]) {
    buffchar = res.minutes[0].toString();
    if (
      parseInt(buffchar.substring(buffchar.length - 2, buffchar.length)) > 10 &&
      parseInt(buffchar.substring(buffchar.length - 2, buffchar.length)) < 20
    ) {
      res.minutes[1] = "минут";
    } else if (buffchar[buffchar.length - 1] == 1) {
      res.minutes[1] = "минута";
    } else if (
      parseInt(buffchar[buffchar.length - 1]) >= 2 &&
      parseInt(buffchar[buffchar.length - 1]) <= 4
    ) {
      res.minutes[1] = "минуты";
    } else {
      res.minutes[1] = "минут";
    }
  }
  if (res.seconds[2]) {
    buffchar = res.seconds[0].toString();

    if (
      parseInt(buffchar.substring(buffchar.length - 2, buffchar.length)) > 10 &&
      parseInt(buffchar.substring(buffchar.length - 2, buffchar.length)) < 20
    ) {
      res.seconds[1] = "секунд";
    } else if (buffchar[buffchar.length - 1] == 1) {
      res.seconds[1] = "секунда";
    } else if (
      parseInt(buffchar[buffchar.length - 1]) >= 2 &&
      parseInt(buffchar[buffchar.length - 1]) <= 4
    ) {
      res.seconds[1] = "секунды";
    } else {
      res.seconds[1] = "секунд";
    }
  }

  return res;
}

function calculate() {
  let op1 = new Date(document.getElementById("op1").value);
  let op2 = new Date(document.getElementById("op2").value);

  op1.getSeconds;
  let op3 = new Date(Math.abs(op1.getTime() - op2.getTime()));
  return op3.getTime();
}

document.getElementById("bt").onclick = () => {
  let regpaternDate =
    /[0-9]{4}([- ._])[0-9]{2}\1[0-9]{2}(?:[\W\w][0-9]{2}:[0-9]{2}(?:\:[0-9]{2})?)?/;
  let b = true;

  if (!regpaternDate.test(document.getElementById("op1").value.toString())) {
    document.getElementById("op1").style.borderColor = "#ff0000";
    b = false;
  }
  if (!regpaternDate.test(document.getElementById("op2").value.toString())) {
    document.getElementById("op2").style.borderColor = "#ff0000";
    b = false;
  }
  if (document.getElementById("op2").value.toString()==document.getElementById("op1").value.toString()) {
    document.getElementById("op2").style.borderColor = "#ff0000";
    b = false;
        document.getElementById("op1").style.borderColor = "#ff0000";
    b = false;
  }



  if (b) {
    constractHtml(constractString(getRes(calculate())));
  }
};

//test

//animation
document.getElementById("op2").onchange = () =>
{
  document.getElementById("op2").style.borderColor = "#000";
}
document.getElementById("op1").onchange = () =>
{
  document.getElementById("op1").style.borderColor = "#000";
}


document.getElementById("bt").onpointerdown = () => {
  document.getElementById("bt").style.background = "rgb(94,117,168)";
  document.getElementById("bt").style.background =
    "linear-gradient(180deg, rgba(94,117,168,1) 0%, rgba(134,167,240,1) 44%)";
};
document.getElementById("bt").onpointerup = () =>
  (document.getElementById("bt").style.background = "#86a7f0");
