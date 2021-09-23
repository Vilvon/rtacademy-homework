function cityNameCapitalized(cityName = "") {
    cityName = cityName.toLowerCase();
    cityName1 = cityName[0].toUpperCase();
    cityName2 = cityName.substring(1);
    return cityName1 + cityName2.toLowerCase();
  }

  console.log(cityNameCapitalized('Нью-Йорк'))
  console.log(cityNameCapitalized('Лос-Анджелес'))
  console.log(cityNameCapitalized('Ріо-де-Жанейро'))
  console.log(cityNameCapitalized('Франкфурт-на-Майні'))
  console.log(cityNameCapitalized('Сен-Сатюрнен-лез-Апт'))


console.log(cityNameCapitalized('стОКГольМ'))