// defining variables for input forms
let inputBill = document.querySelector('.input');
let inputForm = document.querySelector('.inputbill');
let inputPeople = document.querySelector('.people-input');
let peopleForm = document.querySelector('.peopleBill');
const parent = document.querySelector('.input-task');
const formInput = document.querySelectorAll('.input');
const percentage = document.querySelector('.percentage');

function onClickBox(e) {
  formInput.forEach((item) => {
    item.classList.remove('focus');
  });
  e.target.parentElement.classList.add('focus');
}

parent.addEventListener('click', onClickBox);

//ASSIGNING TIP PERCENTAGE TO VARAIBLES
let five = document.querySelector('#five');
let ten = document.querySelector('#ten');
let fifteen = document.querySelector('#fifteen');
let twentyFive = document.querySelector('#twenty-five');
let fifty = document.querySelector('#fifty');
let custom = document.querySelector('#custom');
let tipPercentage;

// calculate percentage
const calculatePercentage = (e) => {
  if (e.target === five) {
    tipPercentage = 0.05;
  } else if (e.target === ten) tipPercentage = 0.1;
  else if (e.target === fifteen) tipPercentage = 0.15;
  else if (e.target === twentyFive) tipPercentage = 0.25;
  else if (e.target === fifty) tipPercentage = 0.5;
  else if (e.target === custom) {
    custom.addEventListener('input', () => {
      tipPercentage = custom.value * 0.01;
    });
  }
};

percentage.addEventListener('click', calculatePercentage);

// assign variables for the output figure of total tip per person
let totalTipFigurePerPerson = document.querySelector('.per-person');
let totalTipFigure = document.querySelector('.total');

// a function to calculate the tip per person and total tip
function calculateTip() {
  let totalBillInput = inputForm.value;
  let totalPersonInput = peopleForm.value;

  let totalTipPerPerson = Math.round(
    (totalBillInput * tipPercentage) / totalPersonInput
  );
  let totalBill = Math.round(
    totalBillInput / totalPersonInput + totalTipPerPerson
  );

  // change the innertext of the figure from 0 to the new value
  totalTipFigurePerPerson.innerText = totalTipPerPerson.toFixed(2);
  totalTipFigure.innerText = totalBill.toFixed(2);
}

const validateText = document.querySelector('.vvv');
function validate() {
  if (peopleForm.value == 0) {
    validateText.style.display = 'block';
  } else {
    validateText.style.display = 'hidden';
  }
}

const calculateBtn = document.querySelector('.btn');

let parameter = 'calculate';
// final calculation and result
const calculate = () => {
  if (parameter === 'calculate') {
    console.log('object');
    validate();
    parameter = 'validate';
  } else if (parameter === 'validate') {
    calculateTip();
    parameter = 'result';
    calculateBtn.innerHTML = `<button type="reset" id="calculate">reset</button>`;
    validateText.style.display = 'none';
  } else {
    window.location.reload();
  }
};
calculateBtn.addEventListener('click', calculate);
