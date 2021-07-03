
const ref = {
    btnDecrement: document.querySelector('#counter button[data-action="decrement"]'),
    btnIncrement: document.querySelector('#counter button[data-action="increment"]'),
    counterValue: document.querySelector('#value')
}
let counterValue = 0;

ref.btnDecrement.addEventListener('click', decrement);
ref.btnIncrement.addEventListener('click', increment);

function increment(){
    counterValue += 1;
    getValue()
}

function decrement(){
    counterValue -= 1;
    getValue()
}

function getValue() {
    ref.counterValue.textContent = counterValue;
}