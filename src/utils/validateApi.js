/** @format */

export const validateApiType = {
  VALID: 1,
  INVALID: 0,
  ERROR: -1,
};
export const validatePhone = (number, calback, error) => {
  fetch("https://api.makescents.com.au/mobile2.php?mobile-number=" + number)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        calback(validateApiType.ERROR);
      } else if (
        data.valid_number === "valid" &&
        data.reachable === "reachable"
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
