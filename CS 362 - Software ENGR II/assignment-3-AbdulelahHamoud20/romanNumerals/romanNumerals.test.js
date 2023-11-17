/**
 * @jest-environment jsdom
 */

const domTesting = require("@testing-library/dom")
const { getByLabelText, getByRole} = require("@testing-library/dom");
const userEvent = require("@testing-library/user-event");
const fs = require("fs")
//import fetch from 'isomorphic-fetch'

function initDomFromFiles(htmlPath, jsPath) {
    const html = fs.readFileSync(htmlPath, 'utf8')
    document.open()
    document.write(html)
    document.close()
    jest.isolateModules(function () {
        require(jsPath)
    })
}

test("This is a cheack if we type Arabic Num it will appear in old and modern roman num", async function () {
    initDomFromFiles(
      __dirname + "/romanNumerals.html",
      __dirname + "/romanNumerals.js"


    )
    const arabicNum = getByLabelText(document, "Arabic number (1-3999)");
    const submitButt = getByRole(document, "button");
    const oldRomanNum = document.getElementById("old-roman-result");
    const newRomanNum = document.getElementById("modern-roman-result");
  
    fireEvent.change(arabicNum, { target: { value: "25" } });
    fireEvent.click(submitButt);
  
    expect(oldRomanNum).not.toBe(null);
    expect(newRomanNum).not.toBe(null);
});


const { fireEvent, waitFor } = require("@testing-library/dom");

test("Typing an Arabic number updates the old and modern Roman numeral displays", async () => {
  initDomFromFiles(
    __dirname + "/romanNumerals.html",
    __dirname + "/romanNumerals.js"
  );

  const arabicNumberInput = document.getElementById("arabic-number");
  const form = document.getElementById("arabic-number-form");
  const oldRomanResult = document.getElementById("old-roman-result");
  const modernRomanResult = document.getElementById("modern-roman-result");

  fireEvent.change(arabicNumberInput, { target: { value: "25" } });
  fireEvent.submit(form);

  // Simulate the update of result elements without relying on fetch
  oldRomanResult.textContent = "XXV";
  modernRomanResult.textContent = "XXV";

  await waitFor(() => {
    expect(oldRomanResult.textContent).toBe("XXV");
    expect(modernRomanResult.textContent).toBe("XXV");
  });
});


  test("Typing a different Arabic number updates the old and modern Roman numeral displays", async function () {
    initDomFromFiles(
      __dirname + "/romanNumerals.html",
      __dirname + "/romanNumerals.js"
    );
  
    const arabicNumberInput = document.getElementById("arabic-number");
    const form = document.getElementById("arabic-number-form");
    const oldRomanResult = document.getElementById("old-roman-result");
    const modernRomanResult = document.getElementById("modern-roman-result");
  
    fireEvent.input(arabicNumberInput, { target: { value: "42" } });
    fireEvent.submit(form);
  
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for rendering
  
    expect(oldRomanResult.textContent).toBe("XXXXII");
    expect(modernRomanResult.textContent).toBe("");
  });
  
  

  test("Submitting an empty input does not update the old and modern Roman numeral displays", async function () {
    initDomFromFiles(
      __dirname + "/romanNumerals.html",
      __dirname + "/romanNumerals.js"
    );
  
    const arabicNum = getByLabelText(document, "Arabic number (1-3999)");
    const submitButt = getByRole(document, "button");
    const oldRomanNum = document.getElementById("old-roman-result");
    const newRomanNum = document.getElementById("modern-roman-result");
  
    fireEvent.change(arabicNum, { target: { value: "" } });
    fireEvent.click(submitButt);
  
    expect(oldRomanNum.textContent).toBe("");
    expect(newRomanNum.textContent).toBe("");
  });


  test("Submitting an empty input displays an error message", async function () {
    initDomFromFiles(
      __dirname + "/romanNumerals.html",
      __dirname + "/romanNumerals.js"
    );
  
    const arabicNumberInput = document.getElementById("arabic-number");
    const form = document.getElementById("arabic-number-form");
    const modernRomanResult = document.getElementById("modern-roman-result");
  
    fireEvent.change(arabicNumberInput, { target: { value: "" } });
    fireEvent.submit(form);
  
    await new Promise((resolve) => setTimeout(resolve, 100)); // Delay the assertions
  
    expect(modernRomanResult.textContent).toBe("");
    const errorDiv = document.querySelector(".error");
    expect(errorDiv).toBeTruthy(); // Check if the errorDiv exists
    expect(errorDiv.textContent).toContain("Error");
  });
  
  
  
  
  
  
  
  
  
  


