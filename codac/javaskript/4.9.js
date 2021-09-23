
cityName = ["ріо-де-жанейро","лос-cнджелес","cью-cорк","cранкфурт-на-cайні","cен-cатюрнен-лез-апт"]

function capitalize(cityName = "") {
  function cityNameCapitalized(cityName = "") {
    cityName = cityName.toLowerCase();
    cityName1 = cityName[0].toUpperCase();
    cityName2 = cityName.substring(1);
    return cityName1 + cityName2.toLowerCase();
  }

  let cityNameArray = cityName.split("-");
  cityNameArray[0] = cityNameCapitalized(cityNameArray[0]);
  cityNameArray[cityNameArray.length-1] = cityNameCapitalized(cityNameArray[cityNameArray.length-1]);
  for (let i = 1; i < cityNameArray.length-1; i++) {
    if (cityNameArray[i].length > 3) {
      cityNameArray[i] = cityNameCapitalized(cityNameArray[i]);
    }
  }
  return cityNameArray.join("-");
}

cityName.forEach(city => console.log(capitalize(city)));
