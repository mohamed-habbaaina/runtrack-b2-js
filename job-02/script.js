function myCountChar(haystack, needel){
    
    let count = 0;

    for(let char of haystack){
        if(char === needel){
            count++;
        }
    }
    return count;
}

const test = 'Hello la Plateform!';
const charTest = myCountChar(test, 'l');
console.log(charTest);

const html = document.getElementById('root');
html.innerText = test + ' contient : ' + charTest + ' ' + ' "l"';