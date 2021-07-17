export default function formatCurrency(num) {
    let newNum = num.replace(/[^0-9.]/g, '');
    let str = newNum.toString().split('.');
    str.splice(2);
    if (str[0].length >= 4) {
        str[0] = Number(str[0]).toLocaleString('en-US');
    }
    if (str[1]) {
        str[1] = str[1].replace(/[^0-9]/g, '').substr(0, 2);
    }
    return str.join('.');
}
