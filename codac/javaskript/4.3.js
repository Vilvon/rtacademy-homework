let a = 10,
  b = 20;

// ваш код пишіть тут var1
a = a.toString();
b = b.toString();

//console.log(a, b);

a = a.length.toString() + "$" + a + "::";
b = b.length.toString() + "$" + b + "::";

//console.log(a, b);

b = b + a.substring(a.indexOf("::") - parseInt(a), a.indexOf("::"));
a = a + b.substring(b.indexOf("::") - parseInt(b), b.indexOf("::"));

//console.log(a, b);

b = b.replace(b.substring(0, b.indexOf("::") + 2), "");
a = a.replace(a.substring(0, a.indexOf("::") + 2), "");
console.log("-------------answer----------------");
console.log(a, b); // => 20, 10*/
// ваш код пишіть тут var2
let a1 = 10,
  b1 = 20;

a1 += b1;
b1 = a1 - b1;
a1 = a1 - b1;

console.log("-------------answer1----------------");
console.log(a1, b1); // => 20, 10*/