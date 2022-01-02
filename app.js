const form = document.querySelector("form");
const loanAmount = document.querySelector("#loanAmount");
const annualInterest = document.querySelector("#annualInterest");
const repaymentYears = document.querySelector("#repaymentYears");
const submit = document.querySelector(".submit");
const resultShown = document.querySelector(".resultShown");
const loading = document.querySelector(".loading");

form.addEventListener("submit", calculateLoan);

function calculateLoan(e) {
  // to prevent from redirecting
  e.preventDefault();

  // wrote a if statement to check if the inpuut is not fiiled completetly
  if (
    loanAmount.value === "" ||
    annualInterest.value === "" ||
    repaymentYears.value === ""
  ) {
    const error = document.querySelector(".error");
    resultShown.style.display = "none";
    
    loading.style.display = "flex";

    setTimeout(function () {
      loading.style.display = "none";
      error.style.display = "block";
    //   resultShown.style.display = "none";
      
    }, 2000);

    setTimeout(function () {
      error.style.display = "none";
    }, 5000);
  } else {
    // THIS IS WHERE THE MAIN ACTION OCCURS

    const loanAmountToDecimal = parseFloat(loanAmount.value);
    const annualInterestToDecimal = parseFloat(annualInterest.value);
    const repaymentYearsToDecimal = parseFloat(repaymentYears.value);

    let simpleInterest =
      loanAmountToDecimal *
      (annualInterestToDecimal / 100) *
      repaymentYearsToDecimal;

    // select all the result items like monthlyPayment e.t.c
    const monthlyPayment = document.querySelector(".monthlyPayment");
    const totalPayment = document.querySelector(".totalPayment");
    const totalInterest = document.querySelector(".totalInterest");

    // append it to result
    monthlyPayment.children[1].textContent = `${
      (simpleInterest + loanAmountToDecimal) / (repaymentYearsToDecimal * 12)
    }`;
    // approximating it to 2 decimal values
    monthlyPayment.children[1].textContent = `$${parseFloat(
      monthlyPayment.children[1].textContent
    ).toFixed(2)}`;

    totalPayment.children[1].textContent = `${
      simpleInterest + loanAmountToDecimal
    }`;
    // approximating it to 2 decimal values
    totalPayment.children[1].textContent = `$${parseFloat(
      totalPayment.children[1].textContent
    ).toFixed(2)}`;

    totalInterest.children[1].textContent = `${simpleInterest}`;
    // approximating it to 2 decimal values
    totalInterest.children[1].textContent = `$${parseFloat(
      totalInterest.children[1].textContent
    ).toFixed(2)}`;


    loading.style.display = "flex";
    resultShown.style.display = "none";

    setTimeout(function () {
        loading.style.display = "none";
    }, 2000)

    setTimeout(function () {
        resultShown.style.display = "block";
    }, 2000)

    // set the result to be shown
  }
}

// function remove(){
//     alert('put something')
// }
