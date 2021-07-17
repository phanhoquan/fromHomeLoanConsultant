const checkPhone = (phoneNumber, callback, error) => {
    fetch('https://api.makescents.com.au/mobile2.php?mobile-number=' + phoneNumber)
        .then((response) => response.json())
        .then(callback)
        .catch(error);
};

export default checkPhone;
