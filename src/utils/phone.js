import onlyNumber from './onlyNumber';

const fetchInfoPhone = async (number) => {
    return (
        await fetch('https://api.makescents.com.au/mobile-quote.php?mobile-number=' + number)
    ).json();
};

export const validatePhone = async (number, reachable = false) => {
    const data = await fetchInfoPhone(number);
    if (reachable) {
        return data.reachable === 'reachable';
    }
    return data.valid_number === 'valid';
};

export const onKeyDownPhone = (e) => {
    if (e.target.value.length >= 10 && e.keyCode !== 8 && e.keyCode !== 9) {
        e.preventDefault();
    }
    onlyNumber(e);
};
