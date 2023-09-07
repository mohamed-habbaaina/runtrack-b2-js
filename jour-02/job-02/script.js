
const btn = document.getElementById('add-count-btn');
const pDisplayer = document.getElementById('count-displayer')
let count = 0;
function myAddCount(){

    count++;
    pDisplayer.innerText = count;

}
btn.addEventListener('click', myAddCount)