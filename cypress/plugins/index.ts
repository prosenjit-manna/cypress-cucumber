import { updateGoogleSheetCell } from "./google-service";

const cucumber = require('cypress-cucumber-preprocessor').default;
module.exports = (on, config) => {

  on('file:preprocessor', cucumber());
};