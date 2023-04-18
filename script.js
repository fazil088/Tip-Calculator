let billAmount=document.getElementById('input1')
let tipAmount=document.getElementById('input2')
let peopleAmount=document.getElementById('numberOfpeople')
let totalAmount=document.getElementById('totalPerson')

let numberOfpeople=Number(peopleAmount.innerText)

const calculateBill=()=>{
    let bill=Number(billAmount.value)
    let tipPercentage=Number(tipAmount.value)/100
    let tipTotal=bill*tipPercentage
    let TotalAmount=tipTotal+bill
    let perPerson=TotalAmount/numberOfpeople
    totalAmount.innerText=`$${perPerson.toFixed(2).toLocaleString('en-US')}`
}

const increasePeople=( )=>{
    numberOfpeople+=1
    peopleAmount.innerText=numberOfpeople
    calculateBill()
}
const decreasePeople=()=>{
    if(numberOfpeople<=1){
        alert("Sorry! You Don't Have Access To LessThan 1")
        return
    }
    numberOfpeople-=1
    peopleAmount.innerText=numberOfpeople
    calculateBill()
}