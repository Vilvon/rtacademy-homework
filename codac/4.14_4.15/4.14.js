function calculat() {
  let op1 = document.getElementById("op1");
  let op2 = document.getElementById("op2");
  let res = document.getElementById("res1");
  let oper = document.getElementById("oppp");
  let res1 = true;

  if (/^\d+\.?\d+$/gm.test(op1.value)) {
    op1.style.borderColor = "#000";
  } else {
    op1.style.borderColor = "#ff0000";
    res1 = false;
  }

  if (/^\d+\.?\d+$/gm.test(op2.value)) {
    op2.style.borderColor = "#000";
  } else {
    op2.style.borderColor = "#ff0000";
    res1 = false;
  }

  if (res1) {
    op1 = parseFloat(op1.value);
    op2 = parseFloat(op2.value);
    switch (oper.value) {
      case "+":
        res.value = op1 + op2;
        break;
      case "-":
        res.value = op1 - op2;
        break;
      case "*":
        res.value = op1 * op2;
        break;
      case "/":
        res.value = op1 / op2;
        break;
      case "%":
        res.value = op1 - op2;
        break;
      case "**":
        res.value = op1 ** op2;
        break;
        s;
      case "not-oper":
        {
          oper.style.borderColor = "#ff0000";
        }
        break;
    }
  } else {
    oper.value == "not-oper" ? (oper.style.borderColor = "#ff0000") : true;
  }
}

document.getElementById("oppp").onchange = () =>
  (document.getElementById("oppp").style.border = "0.01em solid #000000");
document.getElementById("bt1").onclick = calculat;
