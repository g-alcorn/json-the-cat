const request = require('request');
const apiLink = "https://api.thecatapi.com/v1/breeds/search/?q=";


const fetchBreedDescription = function(breedName, callback) {
  request(apiLink + breedName, (err, response, body) => {
    let parsed = JSON.parse(body);
    
    if (err) {
      callback(err, null);
    } else {
      if (!parsed.length) {
        setTimeout(() => {
          console.log("Program closing now.");
        }, 1000);
        callback(new Error("Search failed."), null);
      } else {
        let cat = parsed[0].description;
        setTimeout(() => {
          console.log("Program closing now.");
        }, 1000);
        callback(null, cat);
      }
    }
  });
};

module.exports = { fetchBreedDescription };