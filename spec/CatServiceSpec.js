var rewire = require('rewire'),
    CatService = rewire('../src/CatService');

describe('CatService', function () {
  var service = new CatService(),
      // ネコモック
      Cat = function (name) {
        this.name = name;
        this.weight = 5;
        this.eat = function(food){};
      },
      // 食い物モック
      Food = function(weight) {
        this.weight = weight;
      };
  // モック注入！
  CatService.__set__('Cat', Cat);
  CatService.__set__('Food', Food);

  describe('.checkin()', function () {
    beforeEach(function() {
      // 検査ごとにserviceを初期化
      service = new CatService();
    });

    it('別名のネコを2匹泊めたらcatsには２匹いるべし', function () {
      service.checkin(new Cat('Tama'));
      service.checkin(new Cat('Mike'));
      expect(Object.keys(service.cats).length).toBe(2);
    });

    it('同名のネコのお泊まりは残念ながら受け付けぬべし', function () {
      service.checkin(new Cat('Mike'));
      service.checkin(new Cat('Mike'));
      expect(Object.keys(service.cats).length).toBe(1);
    });
  });

  describe('.checkout()', function() {
    // あえてbeforeEachせずに直上の状態を引き継いでみる

    it('指定したネコを返却すべし', function() {
      var returnedCat;
      service.checkin(new Cat('Tama'));
      returnedCat = service.checkout('Tama');
      // Mikeだけが残ってるはず
      expect(Object.keys(service.cats).length).toBe(1);
      expect(Object.keys(service.cats)[0]).toBe('Mike');
      // Tamaが返却されるはず
      expect(returnedCat.name).toBe('Tama');
    })
  });

  describe('.feed()', function () {
    beforeEach(function() {
      service = new CatService();
    });

    it('Cat.eatメソッドが呼ばれるべし', function () {
      var mike = new Cat('Mike');
      spyOn(mike, 'eat');
      service.checkin(mike);
      service.feed('Mike', new Food(3));
      expect(mike.eat).toHaveBeenCalled();
    });
  });

  describe('.yield()', function () {
    it('新しいネコを生成すべし', function () {
      expect(service.yield('Mike') instanceof Cat).toBeTruthy();
    });
  });
});