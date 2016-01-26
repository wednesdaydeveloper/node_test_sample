var Food = function(name) {
  this.weight = 0;
  switch(name) {
    case 'chikuwa':
      this.weight = 1;
      break;
    case 'fish':
      this.weight = 2;
      break;
    case 'beef':
      this.weight = 3;
  }
};

module.exports = Food;