const request = require('request');
const apiLink = "https://api.thecatapi.com/v1/";
let breedSearch = "breeds/search/?q=";
let breedReq = process.argv[2];

request(apiLink + breedSearch + breedReq, (err, response, body) => {
  let cat = JSON.parse(body);
  if (err) {
    throw err;
  }

  try {
    if (!cat.length) {
      throw new Error('Search failed.');
    }
    console.log(cat[0].description);
  } catch (error) {
    console.log(error.message);
  } finally {
    setTimeout(() => {
      console.log("Search finished.");
    }, 1000);
  }
});
