// defining variables for input forms

let inputBill = document.querySelector('.input')
let inputForm = document.querySelector('.inputbill')

let inputPeople = document.querySelector('.people-input')
let peopleForm = document.querySelector('.peopleBill')

// adding event listeners for border on click to forms
inputForm.addEventListener('click', function(){
    inputBill.classList.add('focus')
    inputPeople.classList.remove('focus')
})

peopleForm.addEventListener('click', function(){
    inputPeople.classList.add('focus')
    inputBill.classList.remove('focus')
})


//ASSIGNING TIP PERCENTAGE TO VARAIBLES
let five = document.querySelector('#five')
let ten = document.querySelector('#ten')
let fifteen = document.querySelector('#fifteen')
let twentyFive = document.querySelector('#twenty-five')
let fifty = document.querySelector('#fifty')
let custom = document.querySelector('#custom')


window.addEventListener('click',
    function(e){
        customPercentage = ''
        if(e.target === five){
            tipPercentage = 0.05,
            inputPeople.classList.remove('focus'),
            inputBill.classList.remove('focus')
        }
        
        else if(e.target === ten)(
            tipPercentage = 0.1,
            inputPeople.classList.remove('focus'),
            inputBill.classList.remove('focus')
        )
        else if(e.target === fifteen)(
            tipPercentage = 0.15,
            inputPeople.classList.remove('focus'),
            inputBill.classList.remove('focus')
        )
        else if(e.target === twentyFive)(
            tipPercentage = 0.25,
            inputPeople.classList.remove('focus'),
            inputBill.classList.remove('focus')
        )
        else if(e.target === fifty)(
            tipPercentage = 0.5,
            inputPeople.classList.remove('focus'),
            inputBill.classList.remove('focus')
            
        )
        else if ( e.target === custom){
            customPercentage =  custom.value * 0.01
            console.log(tipPercentage)
        }

    }
)

// assign variables for the output figure of total tip per person
let totalTipFigurePerPerson = document.querySelector('.per-person')
let totalTipFigure = document.querySelector('.total')
 

// a function to calculate the tip per person and total tip
function calculateTip(){  
    let totalBillInput = inputForm.value
    let totalPersonInput = peopleForm.value

    let totalTipPerPerson =  Math.round((totalBillInput * tipPercentage) / totalPersonInput)
    let totalBill = Math.round((totalBillInput / totalPersonInput) + totalTipPerPerson)

    // change the innertext of the figure from 0 to the new value
    totalTipFigurePerPerson.innerText = totalTipPerPerson
    totalTipFigure.innerText = totalBill 

    // making our result in 2 decimal places
    // totalTipFigurePerPerson = (Math.round(totalTipFigurePerPerson * 100) / 100);
}   

validateText = document.querySelector('.vvv')
function validate(){
    let totalPersonInput = peopleForm.value
   
    
    if(totalPersonInput == 0){
        validateText.classList.add('validate')
    }else{
        validateText.classList.remove('validate')
    }
}


let calculateBtn = document.querySelector('.btn')
let button = document.querySelector('#calculate')

let parameter = 'calculate'


calculateBtn.addEventListener('click', function (){
    if(parameter === 'calculate'){
        validate()
        parameter = 'validate'
    }
   else if(parameter === 'validate'){
        calculateTip()
        parameter = 'result'
        button.innerText = 'reset'
        validateText.classList.remove('validate')
    }
    else {
        window.location.reload()
    }
}) 














