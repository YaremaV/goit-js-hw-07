const inputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

inputRef.addEventListener('input',updateValue)

function updateValue(e) {
    if (e.target.value === '') {
        return 'незнакомец'
    }
  nameOutputRef.textContent = e.target.value;
}