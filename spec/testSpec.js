describe('テストことはじめ', function() {
  function add(x, y) { return x + y; }
  it('足し算テスト', function() {
    expect(add(1,2)).toBe(3);
  });
});