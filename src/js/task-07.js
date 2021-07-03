const fzControl = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');


function onInput(event) {
   textRef.style.fontSize = event.currentTarget.value + "px";
 }

fzControl.addEventListener('input', onInput)
