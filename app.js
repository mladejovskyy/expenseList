const form = document.getElementById('expenses-form');
const expenseList = document.getElementById('name');
const expensePrice = document.getElementById('price');
const expensesList = document.getElementById('expenses-list');

let total = 0;




function addTotal() {
    if (expensePrice.value === '') {
        return; // stop if price is not filled
    }
    const plusPrice = parseFloat(expensePrice.value);
    total += plusPrice;

    const counter = document.querySelector('#counter')
    counter.textContent = '$' + total;

    expensePrice.value = '';
}

function addExpenseName() {
    //create 'li' element
    const li = document.createElement('li')
    li.innerText = expenseList.value;
    expensesList.appendChild(li);

    expenseList.value = '';
}

console.log(total)

// Add event listener to form submit event
form.addEventListener('submit', function (event) {
    // Prevent default form submission behavior
    event.preventDefault();
    // Call the addTotal function
    addTotal();
    addExpenseName();
});