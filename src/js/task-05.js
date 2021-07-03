const inputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

inputRef.addEventListener('input',updateValue)

function updateValue(e) {
  
    if (e.currentTarget.value === '') {
      nameOutputRef.textContent = 'незнакомец';
    } else nameOutputRef.textContent = e.currentTarget.value;
}
