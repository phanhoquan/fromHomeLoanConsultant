const BASE_URL = 'https://api.makescents.com.au/';

export const getIPClient = async () => {
    return (await fetch(`${BASE_URL}index-quote.php?action=ipaddr`)).text();
};
