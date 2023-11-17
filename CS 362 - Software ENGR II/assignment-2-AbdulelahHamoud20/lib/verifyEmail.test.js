const verifyEmail = require ("./verifyEmail")


test('should return true for a simple email address', () => {
  const result = verifyEmail('example@email.com');
  expect(result).toBe(true);
});

test('should return true for an email address with a common special character', () => {
  const result = verifyEmail('example.email@email.com');
  expect(result).toBe(true);
});

test('should return true for an email address with a number', () => {
    const result = verifyEmail('example2023@email1.com');
    expect(result).toBe(true);
  });


// This is for false unit test -----------------------------------------

test('should return false for an email address with a long domain', () => {
  const result = verifyEmail('example@email.longdomain');
  expect(result).toBe(false);
});

test('should return false for an email address with a $ sign', () => {
    const result = verifyEmail('example@email$.com');
    expect(result).toBe(false);
  });

  // Boundry cases ----------------------------------------------

  test('it should return false when email is undefined', () => {
    expect(verifyEmail(undefined)).toBe(false);
  });
  
  test('it should return false when email is null', () => {
    expect(verifyEmail(null)).toBe(false);
  });
  
  test('it should return false when email is not a string', () => {
    expect(verifyEmail(123)).toBe(false);
  });
  
  
 
  
  