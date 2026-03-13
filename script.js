let expenses = JSON.parse(localStorage.getItem("expenses")) || []

function addExpense(){

let desc = document.getElementById("desc").value
let amount = document.getElementById("amount").value

if(desc === "" || amount === ""){
alert("Enter all fields")
return
}

let expense = {
desc: desc,
amount: parseFloat(amount)
}

expenses.push(expense)

localStorage.setItem("expenses",JSON.stringify(expenses))

document.getElementById("desc").value=""
document.getElementById("amount").value=""

displayExpenses()

}

function displayExpenses(){

let list = document.getElementById("expenseList")
list.innerHTML=""

let total = 0

expenses.forEach((exp,index)=>{

total += exp.amount

let li = document.createElement("li")

li.innerHTML = `
${exp.desc} - ₹${exp.amount}
<button class="delete" onclick="deleteExpense(${index})">Delete</button>
`

list.appendChild(li)

})

document.getElementById("total").innerText = total

}

function deleteExpense(index){

expenses.splice(index,1)

localStorage.setItem("expenses",JSON.stringify(expenses))

displayExpenses()

}

displayExpenses()