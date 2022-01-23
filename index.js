const csv = require("csv-parser");
const fs = require("fs");
const inputs = [];
//Parse the csv file using csv parser
fs.createReadStream("input_countries.csv")
  .pipe(csv())
  .on("data", (data) => inputs.push(data));

const header = ["country,year,population"];
const Canada = [];
const US = [];
//Separate the data for Canada and United States into their respective array
inputs.forEach((input) => {
  if (input.country === "Canada")
    Canada.push(${input.country},${input.year},${input.population});
  if (input.country === "United States")
    US.push(${input.country},${input.year},${input.population});
});
//Write the data of Canada into canada.txt
fs.writeFile("canada.txt", header.concat(Canada).join("\n"), (err) => {
  if (err) {
    console.log("Error writing to canada.txt file", err);
  } else {
    console.log(saved as canada.txt);
  }
});
//Write the data of United States into usa.txt
fs.writeFile("usa.txt", header.concat(US).join("\n"), (err) => {
  if (err) {
    console.log("Error writing to usa.txt file", err);
  } else {
    console.log(saved as usa.txt);
  }
});