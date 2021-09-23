function tt(cityName = "") {
  cityName = cityName.toLowerCase();
  cityName1 = cityName[0].toUpperCase();
  cityName2 = cityName.substring(1);
  return cityName1 + cityName2.toLowerCase();
}

function tt1(cityName = "") {
  cityName = cityName.toLowerCase()
  cityName = cityName.replace(cityName[0], cityName[0].toUpperCase());
  return cityName;
}

function tt2(cityName = "") {
  cityName = cityName.toUpperCase();
  cityName = cityName.replace(
          cityName.substring(1),
          cityName.substring(1).toLowerCase()
        );
  return cityName;
}


//let cityName = "киїВ";
// ще варіанти: "лЬвів", "одеСА", "хАРКіВ"
// ваш код пишіть тут
/* cityName = cityName.toLowerCase();
      cityName1 = cityName[0].toUpperCase();
      cityName2 = cityName.substring(1);
      cityName = cityName1 + cityName2.toLowerCase();*/

console.log(tt("киїВ"));
console.log(tt1("киїВ"));
console.log(tt2("киїВ"));

console.log(tt("лЬвів"));
console.log(tt1("лЬвів"));
console.log(tt2("лЬвів"));

console.log(tt("одеСА"));
console.log(tt1("одеСА"));
console.log(tt2("одеСА"));

console.log(tt("хАРКіВ"));
console.log(tt1("хАРКіВ"));
console.log(tt2("хАРКіВ"));