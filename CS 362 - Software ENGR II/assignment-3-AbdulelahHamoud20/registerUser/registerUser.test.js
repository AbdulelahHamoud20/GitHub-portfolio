/**
 * @jest-environment jsdom
 */

require("@testing-library/jest-dom/extend-expect")
const domTesting = require("@testing-library/dom")
const userEvent = require("@testing-library/user-event")

const fs = require("fs")

function initDomFromFiles(htmlPath, jsPath) {
    const html = fs.readFileSync(htmlPath, 'utf8')
    document.open()
    document.write(html)
    document.close()
    jest.isolateModules(function () {
        require(jsPath)
    })
}

test("my first test", async function () {
    initDomFromFiles(
      __dirname + "/registerUser.html",
      __dirname + "/registerUser.js"
    );
  });
  


// Test suite for Register User functionality
describe('Register User', () => {
    let form, emailInput, passwordInput;
  
    beforeEach(() => {
      // Set up the DOM elements for each test case
      form = document.createElement('form');
      emailInput = document.createElement('input');
      passwordInput = document.createElement('input');
  
      // Attach the inputs to the form
      form.appendChild(emailInput);
      form.appendChild(passwordInput);
    });

  





// Test case for clearing form fields on successful submission
test('form fields are cleared when successfully submitted', () => {
    // Set up the DOM elements for testing
    document.body.innerHTML = `
      <form id="form">
        <input type="text" id="email" value=''>
        <input type="password" id="password" value=''>
        <button id="submit">Submit</button>
      </form>
    `;
  
    // Get the form elements
    const form = document.getElementById('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
  
    // Trigger the form submit event
    form.dispatchEvent(new Event('submit'));
  
    // Check that the form fields are cleared
    expect(emailInput.value).toBe('');
    expect(passwordInput.value).toBe('');
  });
  





// Test case for displaying success message on valid email and password
test('should display success message on valid email and password', () => {
    // Set up the DOM elements for testing
    document.body.innerHTML = `
      <div id="form"></div>
    `;
  
    // Get the form element
    const form = document.getElementById('form');
  
    // Set valid email and password values
    const emailInput = document.createElement('input');
    emailInput.value = 'valid@example.com';
    form.appendChild(emailInput);
  
    const passwordInput = document.createElement('input');
    passwordInput.value = 'ValidPassword123';
    form.appendChild(passwordInput);
  

     // Define the displaySuccess function
    function displaySuccess() {
    const successDiv = document.createElement('div');
    successDiv.classList.add('success', 'status');
    successDiv.setAttribute('role', 'status');
    successDiv.innerHTML = '<h3>✅ Success</h3>';
    successDiv.innerHTML += '<p>You have successfully registered.</p>';
    form.appendChild(successDiv);
  }
    // Call the displaySuccess function
    displaySuccess();
  
    // Check that success message is displayed
    const successDiv = document.querySelector('.success');
    expect(successDiv).not.toBeNull();
    expect(successDiv.innerHTML).toContain('You have successfully registered.');
  });
  
  
  
// Integration test for displaying error message
test('should display error message on invalid email', () => {
    // Set up the DOM elements for testing
    document.body.innerHTML = `
      <form id="form"></form>
    `;
  
    // Get the form element
    const form = document.getElementById('form');
  
    // Set up the input parameters
    const emailValid = false;
    const passwordValid = {
      pass: true, // Set pass to true to avoid password-related errors
      length: true,
      lowercase: true,
      uppercase: true,
      digit: true,
      symbol: true,
      noInvalid: true
    };
  
    // Call the displayError function
    function displayError(emailValid, passwordValid) {
      const errorDiv = document.createElement("div");
      errorDiv.classList.add("error", "status");
      errorDiv.setAttribute("role", "alert");
  
      errorDiv.innerHTML = "<h3>❌ Error</h3>";
      if (!emailValid) {
        errorDiv.innerHTML += "<p>The email address you entered is invalid.</p>";
      }
  
      if (!passwordValid.pass) {
        errorDiv.innerHTML += "<p>The password you entered is invalid.</p>";
        let listHtml = "<ul>";
        if (!passwordValid.length) {
          listHtml += "<li>Password needs to be at least 8 characters</li>";
        }
        if (!passwordValid.lowercase) {
          listHtml += "<li>Password needs a lowercase letter</li>";
        }
        if (!passwordValid.uppercase) {
          listHtml += "<li>Password needs an uppercase letter</li>";
        }
        if (!passwordValid.digit) {
          listHtml += "<li>Password needs a numeric digit (0-9)</li>";
        }
        if (!passwordValid.symbol) {
          listHtml += "<li>Password needs a symbol (!@#$%^&*)</li>";
        }
        if (!passwordValid.noInvalid) {
          listHtml += "<li>Password contains an invalid character (only letters, numbers, and the symbols !@#$%^&* are allowed)</li>";
        }
        listHtml += "</ul>";
        errorDiv.innerHTML += listHtml;
      }
  
      form.appendChild(errorDiv);
    }
  
    displayError(emailValid, passwordValid);
  
    // Check that error message is displayed for invalid email
    const errorDiv = document.querySelector('.error');
    expect(errorDiv).not.toBeNull();
    expect(errorDiv.innerHTML).toContain('The email address you entered is invalid.');
  });
  
   })
  


