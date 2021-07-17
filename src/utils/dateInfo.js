export const getAge = (year, month, day) => {
    const dobAsDate = new Date(year, month, day);
    const today = new Date();
    const miliDif = Math.abs(today.getTime() - dobAsDate.getTime());
    return miliDif / (1000 * 3600 * 24 * 365.25);
};
