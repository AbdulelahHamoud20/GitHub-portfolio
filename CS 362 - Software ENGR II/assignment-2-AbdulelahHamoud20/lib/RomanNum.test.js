const convertToRomanNumeral = require ("./RomanNum")
test('converts 1 to I', () => {
    expect(convertToRomanNumeral(1)).toBe('I');
  });

  test('converts 2 to II', () => {
    expect(convertToRomanNumeral(2)).toBe('II');
  });

  test('converts 3 to III', () => {
    expect(convertToRomanNumeral(3)).toBe('III');
  });

  test('converts 4 to IIII', () => {
    expect(convertToRomanNumeral(4)).toBe('IIII');
  });

  test('converts 5 to V', () => {
    expect(convertToRomanNumeral(5)).toBe('V');
  });

  test("convert 10 to X", function(){
    expect(convertToRomanNumeral(10)).toBe('X')
  })

  test("convert 50 to L", function(){
    expect(convertToRomanNumeral(50)).toBe('L')
  })
  test("convert 100 to C", function(){
    expect(convertToRomanNumeral(100)).toBe('C')
  })
  test("convert 10000 to M", function(){
    expect(convertToRomanNumeral(1000)).toBe('M')
  })
  test("convert 10 to X", function(){
    expect(convertToRomanNumeral(10)).toBe('X')
  })

  test("Return Invalid input, the number must be between 1 and 3999 if the number is out of range", function(){
    expect(convertToRomanNumeral(4000)).toBe(' Invalid input, the number must be between 1 and 3999')
  })
  test("should return" , function(){
    expect(convertToRomanNumeral(4).tobe(""))
  })




  