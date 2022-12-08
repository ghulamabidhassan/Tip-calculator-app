const btns = document.querySelectorAll(".percentage");
const bill = document.querySelector(".bill-input");
const tips = document.querySelectorAll(".tip-array");
const custom = document.querySelector(".custom-input");
const people = document.querySelector(".num-people");
const perPerson = document.querySelector(".per-person");
const total = document.querySelector(".total-amt");
const reset = document.querySelector(".reset");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    btns.forEach((element) => {
      element.classList.remove("active-btn");
      this.classList.add("active-btn");
    });
  });
});

let billValue = 0; // default bill value is 0 //
let tipPercent = 0.15; // 15 % of the total value ( dafault ) //
let noOfPeople = 1; // dafault people is 1 //

bill.addEventListener("input", setBillValue);
people.addEventListener("input", setPeopleValue);

tips.forEach((tip) => {
  tip.addEventListener("click", setTipValue);
});

function setBillValue() {
  billValue = parseFloat(bill.value);
  executeTotal();
}

function setPeopleValue() {
  noOfPeople = parseFloat(people.value);
  executeTotal();
}

function setTipValue(event) {
  tips.forEach((tip) => {
    if (event.target.innerHTML == tip.innerHTML) {
      tipPercent = tip.innerHTML.slice(0, -1) / 100;
    }
    custom.addEventListener("input", () => {
      customPercent = parseFloat(custom.value) / 100;
      perPerson.textContent = (billValue / noOfPeople) * customPercent;
      total.textContent = billValue * customPercent;
    });
    tip.addEventListener("click", () => {
      tipAmt = parseFloat(billValue) * tipPercent;
      perPerson.textContent = tipAmt.toFixed(2) / noOfPeople.toFixed(2);
      total.textContent = tipAmt.toFixed(2);
    });
  });
}

function executeTotal() {
  if (billValue) {
    tipAmt = parseFloat(billValue) * tipPercent;
    perPerson.textContent = tipAmt.toFixed(2) / noOfPeople.toFixed(2);
    total.textContent = tipAmt.toFixed(2);
  }

  if (noOfPeople) {
    tipAmt = parseFloat(billValue) * tipPercent;
    perPerson.textContent = tipAmt.toFixed(2) / noOfPeople.toFixed(2);
    total.textContent = tipAmt.toFixed(2);
  }
}

reset.addEventListener("click", () => {
  location.reload();
});
