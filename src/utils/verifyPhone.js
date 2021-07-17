// const baseURL = "http://localhost/api.makescents/phone-quotes.php";
const baseURL = 'https://api.makescents.com.au/phone-quotes.php';

export const makeIDVerify = async (phoneNumber) => {
    const response = await fetch(
        baseURL + '?action=make&number=' + phoneNumber,
    );
    return await response.json();
};

export const cancelIDVerify = async (id) => {
    const response = await fetch(baseURL + '?action=cancel&id=' + id);
    return await response.json();
};

export const makePhoneVerify = (phoneNumber, callback, error) => {
    fetch(baseURL + '?action=make&number=' + phoneNumber)
        .then((response) => response.json())
        .then(callback)
        .catch(error);
};

export const checkPhoneVerify = (id, code, callback, error) => {
    fetch(baseURL + '?action=check&id=' + id + '&code=' + code)
        .then((response) => response.json())
        .then(callback)
        .catch(error);
};

export const cancelVerify = (id, callback, error) => {
    fetch(baseURL + '?action=cancel&id=' + id)
        .then((response) => response.json())
        .then(callback)
        .catch(error);
};
