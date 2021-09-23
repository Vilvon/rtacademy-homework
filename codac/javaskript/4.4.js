let num = 10;
// ще варіанти: -1, 0, 1
// ваш код пишіть тут

if (num > 0) {
  resultSign = "+";
} else if (num < 0) {
  resultSign = "-";
} else {
  resultSign = "0";
}

resultSign1 = num > 0 ? "+" : num < 0 ? "-" : "0";

switch (true) {
  case num > 0:
    resultSignSwich = "+";
    break;
  case num < 0:
    resultSignSwich = "-";
    break;
  default:
    resultSignSwich = "0";
}

console.log(num, resultSign, resultSign1, resultSignSwich);
