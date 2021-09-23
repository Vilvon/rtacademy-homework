/**
 * 
 * @param {Number} minNum 
 * @param {Number} maxNum 
 * @returns 
 */
let getRandomInt = (minNum, maxNum) =>
  Math.round((Math.random() * 10 ** 16) % (maxNum - minNum)) + minNum;

//console.log(getRandomInt(10, 11));
let tt
for (let i = 0; i < 10000; i++) {
  tt = getRandomInt(-100, 100);
  (tt == 100)?console.log(tt):null;
}

getRandomInt()