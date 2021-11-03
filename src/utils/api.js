/** @format */

// const BASE_URL = 'http://localhost/api.makescents/';
const BASE_URL = "https://api.makescents.com.au/";
export const getUID = (formID, options, callback) => {
  let url = `${BASE_URL}index.php?action=uid&form-id=${formID}`;
  for (const item in options) {
    url = `${url}&${item}=${options[item]}`;
  }
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => callback("unknown"));
};
export const getIPClient = (callback) => {
  fetch(`${BASE_URL}index.php?action=ipaddr`)
    .then((response) => response.text())
    .then((data) => callback(data))
    .catch((error) => callback("unknown"));
};

export const sendDataToDatabowl = (
  data,
  callback = () => {},
  error = () => {}
) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("Accept", "application/json");
  var urlencoded = new URLSearchParams();
  urlencoded.append("action", "databowl");
  urlencoded.append("data", JSON.stringify(data));

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };
  fetch(`${BASE_URL}index.php`, requestOptions)
    .then((response) => response.json())
    .then((result) => callback(result))
    .catch((err) => error(err));
};

export const getJWT = (data, callback = () => {}, error = () => {}) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("Accept", "application/json");
  var urlencoded = new URLSearchParams();
  urlencoded.append("action", "jwt");
  urlencoded.append("data", JSON.stringify(data));

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };
  fetch(`${BASE_URL}index.php`, requestOptions)
    .then((response) => response.text())
    .then((result) => callback(result))
    .catch((err) => error(err));
};

export const sendDataFormLiving = (
  data,
  callback = () => {},
  error = () => {}
) => {
  fetch(`${BASE_URL}pdf.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Success:", result);
      callback(result);
    })
    .catch((err) => {
      error(err);
    });
};
