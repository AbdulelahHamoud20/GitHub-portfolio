const verifyPassword = require ("./verifyPassword")

// testing the 8 chars requirement--------------------------------------------------
const _containsAtLeast8Chars = require("./verifyPassword")
 
test("Should return true if it contain 8 characters and more ", function (){
    const ValidPass8char = 'Password1234@'
   
    const result = verifyPassword(ValidPass8char)
   
    expect (result.length).toBe(true)  
  }) 

  test("should return false if its shorther than 8 chars", function(){
    const InvalidPass8Chars = "Pass12@"
   
    const result = verifyPassword(InvalidPass8Chars)
   
    expect(result.length).toBe(false)
}) 


//Lowercase Password ----------------------------------------------------------------
test ('Return true if it contains at least one lowercase char', function(){

    const validpasseordLowercase ='Password1234@'
   
    const result = verifyPassword(validpasseordLowercase)
   
    expect(result.lowercase).toBe(true) 
})
test('return false it does not contain at least one lowercase char', function(){
    const invalidpassLowerChar = "PASSWORD1234@"
   
    const result = verifyPassword(invalidpassLowerChar)
   
    expect(result.lowercase).toBe(false)
})


  // Uppercase test ------------------------------------------------------------------
  test("Return true for a password if password contain at least one uppercase letter",function() {

    const validpasswordUppercase = 'Password1234@'
   
    const result = verifyPassword(validpasswordUppercase)
   
    expect(result.uppercase).toBe(true)
} )

test("return false if it does not contain uppercase char", function(){

    const InvalidPassUppercase = "password1234@"
   
    const result = verifyPassword(InvalidPassUppercase)
   
    expect(result.uppercase).toBe(false)

})


// contains a degit ---------------------------------------------------------------
test("Return true if it contains at least one number", function(){

    const validPasswordNum = 'Password1234@'
   
    const result = verifyPassword(validPasswordNum)
   
    expect(result.digit).toBe (true)


})

test("return false if it does not contain a difit", function(){ 
    
    const InvalidPassNum = 'Passworddd@'
    
    const result = verifyPassword(InvalidPassNum)
    
    expect(result.digit).toBe(false)
})

//Contains a symbol -------------------------------------------------------------

test("return true if password contains a symbol", function(){
    
    const ValidpassSym = "Password1234@"

    const result = verifyPassword(ValidpassSym)

    expect(result.symbol).toBe(true)
})

test("return false if password does not contain a symbol", function(){
    const InvalidPassSym ='Password1234'
  
    const result = verifyPassword(InvalidPassSym)
  
    expect(result.symbol).toBe(false)
})
 
  // Empty string -------------------------------------------------------------------

  it('should return { pass: false } if password is empty string', () => {
    const result = verifyPassword('');
    expect(result).toEqual({ pass: false });
  });

//   test('it should throw an error when its an empty string', function(){
    
//     const invalidEmptyStr = ""

//     expect(function(){
//        const result = verifyPassword(invalidEmptyStr)
//     }).toThrow (false)


//   })


  