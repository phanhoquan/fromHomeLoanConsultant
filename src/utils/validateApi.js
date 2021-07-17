export const validateApiType = {
    VALID: 1,
    INVALID: 0,
    ERROR: -1,
};
export const validatePhone = (number, calback, error) => {
    fetch('https://api.makescents.com.au/mobile2.php?mobile-number=' + number)
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
                calback(validateApiType.ERROR);
            } else if (
                data.valid_number === 'valid' &&
                data.reachable === 'reachable'
            ) {
                calback(validateApiType.VALID);
            } else {
                calback(validateApiType.INVALID);
            }
        })
        .catch((err) => {
            console.log(err.toString());
            calback(validateApiType.ERROR);
        });
};

// setEmailChecking(checkingStatus.PENDDING);
// if (localStorage.getItem('email') !== value) {
//     localStorage.setItem('email', value);
//     fetch(`https://api.debounce.io/v1/?api=5f2b7f4b0233a&email=${email}`)
//         .then((response) => response.json())
//         .then((result) => {
//             setEmailChecking(checkingStatus.DONE);
//             if (parseInt(result.success) === 1) {
//                 if (result.debounce.result === 'Safe to Send') {
//                     setEmailValid(valid.VALID);
//                 } else {
//                     setEmailValid(valid.INVALID);
//                 }
//             } else {
//                 setEmailValid(valid.INVALID);
//                 localStorage.setItem('apiCheckMail', 'Failed Result');
//             }
//         })
//         .catch((error) => {
//             setEmailChecking(checkingStatus.DONE);
//             setEmailValid(valid.VALID);
//             localStorage.setItem('apiCheckMail', 'Failed Handle');
//         });
// } else {
//     setEmailChecking(checkingStatus.DONE);
// }
