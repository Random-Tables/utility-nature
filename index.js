const index = require("./index.json");
const fauna = require("./fauna.json");
const flora = require("./flora.json");
const geography = require("./geography.json");
const weather = require("./weather.json");

module.exports = {
  ...index,
  tableData: {
    fauna,
    flora,
    geography,
    weather,
  },
};
