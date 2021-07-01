const inputRef = document.querySelector('#validation-input');
console.log(inputRef)

inputRef.addEventListener('focus', focusInputRef)
inputRef.addEventListener('blur',focusInputRef)

function focusInputRef(e) {
    if (e.target.dataset.length === 6) {
        return inputRef.classList.add('valid')
    } else {
        return inputRef.classList.add('invalid')
    }
         
    
    
    console.log(e.target.dataset.length)
}


// const focusInput = () => {
    
//     return inputRef.classList.add('valid')
// }

// const blurInput = () => {
//     return inputRef.classList.add('invalid')
// }


