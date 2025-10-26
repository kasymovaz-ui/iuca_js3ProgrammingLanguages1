// validation.js
function validateRussianPhoneNumber(phone) {
    const phoneRegex = /^(?:\+7|8)\s?(?:$$ \d{3} $$|\d{3})\s?\d{3}[- ]?\d{2}[- ]?\d{2}$/;
    return phoneRegex.test(phone);
}
function validateKazakhstanIIN(iin) {
    const iinRegex = /^\d{12}$/;
    return iinRegex.test(iin);
}
console.log("Testing Russian phone numbers:");
console.log(validateRussianPhoneNumber("+79261234567")); // true
console.log(validateRussianPhoneNumber("89261234567")); // true
console.log(validateRussianPhoneNumber("+7 (926) 123-45-67")); // true
console.log(validateRussianPhoneNumber("+7 926 123 45 67")); // true
console.log(validateRussianPhoneNumber("12345678901")); // false
console.log("\nTesting Kazakhstan IIN:");
console.log(validateKazakhstanIIN("990101123456")); // true
console.log(validateKazakhstanIIN("123456789012")); // true
console.log(validateKazakhstanIIN("12345678901")); // false
console.log(validateKazakhstanIIN("12345678901a")); // false