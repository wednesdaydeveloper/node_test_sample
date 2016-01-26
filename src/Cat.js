var Cat = function (name) {
  this.name = name ? name : 'Tama';
  this.weight = 5;
};
Cat.prototype.eat = function (food) {
  this.weight += food.weight;
};
module.exports = Cat;