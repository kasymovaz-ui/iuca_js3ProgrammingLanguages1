const input = document.getElementById('gmail_input');
const button = document.getElementById('gmail_button');
const result = document.getElementById('gmail_result');

const gmailRegExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;


button.addEventListener('click', ()=>{
    const value = input.value.trim();
    if (gmailRegExp.test(value)){
        result.textContent = 'Почта верна';
        result.style.color = 'green';
    }else{
         result.textContent = 'Почта не верна';
         result.style.color = 'red';
    }
});

const inninput = document.getElementById('inn_input');
const innbutton = document.getElementById('inn_button');
const innresult = document.getElementById('inn_result');

const innRegExp = /^\d{10}(\d{2})?$/;


innbutton.addEventListener('click', ()=>{
    const value = inninput.value.trim();
    if (innRegExp.test(value)){
        innresult.textContent = 'INN верна';
        innresult.style.color = 'green';
    }else{
         innresult.textContent = 'INN не верна';
         innresult.style.color = 'red';
    }
});
