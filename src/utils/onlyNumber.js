export default function onlyNumber(e) {
    if (
        //  [46, 8, 9, 27, 13].includes(e.keyCode) ||
        [46, 8, 9, 27].includes(e.keyCode) ||
        (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
        (e.keyCode >= 35 && e.keyCode <= 40)
    ) {
        return;
    }
    if (
        (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
        (e.keyCode < 96 || e.keyCode > 105)
    ) {
        e.preventDefault();
    }
}
