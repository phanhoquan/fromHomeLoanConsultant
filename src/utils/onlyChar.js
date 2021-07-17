export default function onlyChar(e) {
    if (
        [8, 9, 39, 192, 222].includes(e.keyCode) ||
        (e.keyCode > 64 && e.keyCode < 91)
    ) {
        return;
    } else {
        e.preventDefault();
    }
}
