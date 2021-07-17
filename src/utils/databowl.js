const BASE_URL = 'https://api.makescents.com.au/';

export const dataExtras = () => {
    const dataMore = {};
    const uid = localStorage.getItem('uid');
    const f_64_clickid = localStorage.getItem('aff_click_id');
    const f_457_utm_source = localStorage.getItem('utm_source');
    const f_458_utm_medium = localStorage.getItem('utm_medium');
    const f_589_utm_campaign = localStorage.getItem('utm_campaign');

    if (uid !== null && uid !== '') {
        dataMore.uid = uid;
    } else {
        dataMore.sid = 17;
    }
    if (f_457_utm_source !== null && f_457_utm_source !== '') {
        dataMore.f_457_utm_source = f_457_utm_source;
    }
    if (f_64_clickid !== null && f_64_clickid !== '') {
        dataMore.f_64_clickid = f_64_clickid;
    }
    if (f_458_utm_medium !== null && f_458_utm_medium !== '') {
        dataMore.f_458_utm_medium = f_458_utm_medium;
    }
    if (f_589_utm_campaign !== null && f_589_utm_campaign !== '') {
        dataMore.f_589_utm_campaign = f_589_utm_campaign;
    }

    return dataMore;
};

export const passData = async (data) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    myHeaders.append('Accept', 'application/json');

    const urlencoded = new URLSearchParams();
    urlencoded.append('action', 'databowl');
    urlencoded.append('data', JSON.stringify(data));

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow',
    };
    return (await fetch(`${BASE_URL}index-quote.php`, requestOptions)).json();
};
