const htmlDisplayer = document.getElementById('text-displayer');
const input = document.getElementById('input-text');

const btnBold = document.getElementById('turn-text-bold');
const btnItalic = document.getElementById('turn-text-italic');
const btnClear = document.getElementById('clear-text');

function myDisplayText(){
    let html = input.value;
    htmlDisplayer.innerText = html;
}

function myTurnBold(){
    htmlDisplayer.style.fontWeight = 'bold'
}

function myTurnItalic(){
    htmlDisplayer.style.fontStyle = 'italic'
}

function myClearText(){
    htmlDisplayer.innerText = '';
}
input.addEventListener('input', myDisplayText);
btnBold.addEventListener('click', myTurnBold);
btnItalic.addEventListener('click', myTurnItalic);
btnClear.addEventListener('click', myClearText);


