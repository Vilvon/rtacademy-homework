
let getSign = (num = '0') => num > 0 ? "+" : num < 0 ? "-" : "";

let sign = getSign( 0 );
console.log( sign );