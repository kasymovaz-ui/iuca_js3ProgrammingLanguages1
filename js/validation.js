// js/validation.js
function validateRussianPhoneNumber(phone) {
    const phoneRegex = /^(?:\+7|8)\s?(?:$$ \d{3} $$|\d{3})\s?\d{3}[- ]?\d{2}[- ]?\d{2}$/;
    return phoneRegex.test(phone);
}

function validateKazakhstanIIN(iin) {
    const iinRegex = /^\d{12}$/;
    return iinRegex.test(iin);
}