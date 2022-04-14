const request = require ("request");

const fetchBreedDescription = function(breedName) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
request(url, (error, response,body) => {
  if (error) {
    console.log(error);
    return;
  }
  const data = JSON.parse(body);
  if (data[0]) {
    console.log(data[0].description);
  } else {
    console.log("breed not found");
  }
});
};

//API Key '89f438d3-c889-4e90-aee3-ead8f0ee00eb'
/////

module.exports = {fetcher}