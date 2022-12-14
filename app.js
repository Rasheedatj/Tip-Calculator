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

// calculate tip

// assign variables for the output figure of total tip per person
let totalTipFigurePerPerson = document.querySelector('.per-person')
let totalTipFigure = document.querySelector('.total')


// a function to calculate the tip per person and total tip
function calculateTip(){  
    let totalBillInput = inputForm.value
    let totalPersonInput = peopleForm.value

    let totalTipPerPerson =  (totalBillInput * tipPercentage) / totalPersonInput
    let totalTip = totalTipPerPerson * totalPersonInput

    // change the innertext of the figure from 0 to the new value
    totalTipFigurePerPerson.innerText = totalTipPerPerson
    totalTipFigure.innerText = totalTip
    // making our result in 2 decimal places
    totalTipFigurePerPerson = totalTipFigurePerPerson.toFixed(3)
    
}


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
            inputBill.classList.remove('focus'),
            calculateTip()
        )
        else if ( e.target === custom){
            customPercentage =  custom.value * 0.01
            tipPercentage = customPercentage
            console.log(tipPercentage)
        }

    }
)












