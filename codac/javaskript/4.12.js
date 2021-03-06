let csvFileContent = `
Kyiv,50.4334,30.5166,Ukraine,2709000
Kharkiv,50.0000,36.2500,Ukraine,1461000
Dnipro,48.4800,35.0000,Ukraine,1050000
Odesa,46.4900,30.7100,Ukraine,991000
Donets’k,48.0000,37.8300,Ukraine,988000
L’viv,49.8350,24.0300,Ukraine,803880
Zaporizhzhya,47.8573,35.1768,Ukraine,788000
Kryvyy Rih,47.9283,33.3450,Ukraine,652380
Mykolayiv,46.9677,31.9843,Ukraine,510840
`;

/*
function parseCSV(csvFileContent) {
  let csvFileContentArray = csvFileContent.split("\n");
  let csvFileContentArrayArray = [];

  let res;
  let j = 0;
  for (let i = 0; i < csvFileContentArray.length; i++) {
    if (csvFileContentArray[i]) {
      buferarr = csvFileContentArray[i].split(",");
      csvFileContentArrayArray.push({
        city: buferarr[0],
        latitude: buferarr[1],
        longitude: buferarr[2],
        country: buferarr[3],
        population: buferarr[4],
      });

    }
  }
  return csvFileContentArrayArray;
}

*/
function parseCSV(csvFileContent) {
  let res = [];

  csvFileContent
    .split("\n")
    .filter((element) => element)
    .forEach((element) => {
      buferarr = element.split(",");
      res.push({
        city: buferarr[0],
        latitude: buferarr[1],
        longitude: buferarr[2],
        country: buferarr[3],
        population: buferarr[4],
      });
    });

  return res;
}

//parseCSV(csvFileContent).forEach((element) => console.log(element));

const parseCSV1 = (fileContents) =>
  fileContents
    .split("\n")
    .filter((line) => !!line)
    .map((line) => line.split(","))
    .map((item) => {
      return {
        city: item[0].toString(),
        latitude: parseFloat(item[1]),
        longitude: parseFloat(item[2]),
        country: item[3].toString(),
        population: parseInt(item[4]),
      };
    });

const parseCSV2 = (fileContents) =>
  fileContents.split("\n").filter((line) => !!line).map((line) => line.split(","));

console.log( parseCSV2(csvFileContent));
