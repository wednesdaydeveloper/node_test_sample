var Cat = require('./Cat');
var Food = require('./Food');

function CatService() {
  this.cats = {};
}

// お泊まりサービスをやっています
CatService.prototype.checkin = function (cat) {
  this.cats[cat.name] = cat;
};
CatService.prototype.checkout = function (name) {
  var cat = this.cats[name];
  delete this.cats[name];
  return cat;
};

// 依頼された猫に指定の餌をあげるサービスです
CatService.prototype.feed = function (name, foodName) {
  this.cats[name].eat(new Food(foodName));
};

// 猫を産んでお客様に差し上げるサービスです
CatService.prototype.yield = function (name) {
  return new Cat(name);
};

module.exports = CatService;