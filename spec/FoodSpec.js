var Food = require('../src/Food');

describe('Food constructor', function() {
  it('ちくわのweightは1であるべし', function() {
    expect(new Food('chikuwa').weight).toBe(1);
  });
  it('魚のweightは2であるべし', function() {
    expect(new Food('fish').weight).toBe(2);
  });
  it('ビーフのweightは3であるべし', function() {
    expect(new Food('beef').weight).toBe(3);
  });
  it('未設定なFoodのweightは0であるべし', function() {
    expect(new Food('Daikon').weight).toBe(0);
  });
});