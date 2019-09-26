// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const chai = require('chai');
const assert = chai.assert;

describe('#fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);
      console.log(desc);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";

      // compare returned description
      assert.isTrue(expectedDesc === desc);

      done();
    });
  });

  it('should return string "Search failed." if given invalid breed name', (done) => {
    fetchBreedDescription('Griffin', (err, desc) => {
      assert.equal(err.message, 'Search failed.');
      done();
    });
  });
});
