// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

// Test #1 
it ("Write a simple calc problem", function(){
  cy.visit ("/")
  const num1 = 7
  const num2 = 2
  const expectedSum = 'VIIII'
  
 
  cy.findByRole('button',{name:"7"}).click()
  cy.findByRole('button',{name:"+"}).click()
  cy.findByRole('button',{name:"2"}).click()
  cy.findByRole('button',{name:"="}).click()
  cy.get("#text-display").should('have.text',expectedSum)

})

//Test #2
it ("convert old to modren Roman", function(){
  cy.visit ("/")

  const num1 = 7
  const num2 = 2
  const expectedSum = 'IX'
  
 
  cy.findByRole('button',{name:"7"}).click()
  cy.findByRole('button',{name:"+"}).click()
  cy.findByRole('button',{name:"2"}).click()
  cy.findByRole('button',{name:"="}).click()
  cy.findByRole('button', {name:"mdrn"}).click()
  cy.get("#text-display").should('have.text',expectedSum)



})

// Test #3 


it ("Register a user", function(){

  cy.visit ("/")
  const MyEmail = "Ahn@icloud.com"
  const MyPassword = "Abdulelah123@"

  cy.findByText("Register").click()

  cy.get("#email").type(MyEmail)
  cy.get("#password").type(MyPassword)
  cy.findByRole('button',{name:"Register"}).click()
  cy.url().should('not.include',"/login")
  cy.findByText("Login").should("exist")

})

// Test #4 
it ("Succefully Login to My account", function(){
  cy.visit ("/")
  cy.findByText("Register").click()
  const MyEmail = "Ahn@icloud.com"
  const MyPassword = "Abdulelah123@"

  cy.get("#email").type(MyEmail)
  cy.get("#password").type(MyPassword)
  cy.findByRole('button',{name:"Register"}).click()

  cy.findByText("Login").click()
  cy.get("#email").type(MyEmail)
  cy.get("#password").type(MyPassword)
  cy.findByRole('button',{name:"Login"}).click()
  
  //Navbar is updated 
  cy.findByText("Logout" ).should("exist")
  cy.findByText("History").should("exist")
  cy.findByText("Unegister" ).should("exist")

  // Redirect takes place 
  cy.url().should('not.include',"/login")

})

//Test #5 

it ("Calculation History", function(){
  cy.visit ("/")
  cy.findByText("Register").click()
  const MyEmail = "Ahn@icloud.com"
  const MyPassword = "Abdulelah123@"

  cy.get("#email").type(MyEmail)
  cy.get("#password").type(MyPassword)
  cy.findByRole('button',{name:"Register"}).click()

  cy.findByText("Login").click()
  cy.get("#email").type(MyEmail)
  cy.get("#password").type(MyPassword)
  cy.findByRole('button',{name:"Login"}).click()

// First Calculation 
  cy.findByRole('button',{name:"9"}).click()
  cy.findByRole('button',{name:"+"}).click()
  cy.findByRole('button',{name:"1"}).click()
  cy.findByRole('button',{name:"0"}).click()
  cy.findByRole('button',{name:"="}).click()

// Second Calculation 
cy.findByRole('button',{name:"6"}).click()
cy.findByRole('button',{name:"8"}).click()
cy.findByRole('button',{name:"÷"}).click()
cy.findByRole('button',{name:"7"}).click()
cy.findByRole('button',{name:"="}).click()

// Moving to the History Page 
cy.findByText("History").click()

//Assertions that calculation is correct and the link is updated
cy.findByText("VIIII + X = XVIIII").should("exist")
cy.findByText("LXVIII ÷ VII = VIIII").should("exist")
cy.findByRole("button", {name:'Clear'}).should("exist")
cy.url().should('include',"/history")


})

// Test #6 
it("Succesful Logout", function(){
  cy.visit ("/")
  cy.findByText("Register").click()
  const MyEmail = "Ahn@icloud.com"
  const MyPassword = "Abdulelah123@"

  cy.get("#email").type(MyEmail)
  cy.get("#password").type(MyPassword)
  cy.findByRole('button',{name:"Register"}).click()

  cy.findByText("Login").click()
  cy.get("#email").type(MyEmail)
  cy.get("#password").type(MyPassword)
  cy.findByRole('button',{name:"Login"}).click()
  
  //Loging out
  cy.findByText("Logout").click()

  //Assertion that Logging out was succesful 
  cy.findByText("Login").should('exist')




})





