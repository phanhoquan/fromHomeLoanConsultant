import qs from 'qs';

//clear item
export const beginPage = (history, pathname) => {
    if (history.action === 'POP') {
        removeAllItem();
        setTimeout(() => {
            // clear stores
            const paramOuters = qs.parse(history.location.search, {
                ignoreQueryPrefix: true,
            });
            for (let item in paramOuters) {
                localStorage.setItem(item, paramOuters[item]);
            }
            history.replace({
                pathname: pathname,
                search: history.location.search,
                hash: history.location.hash,
            });
        }, 0);
    }
};

export const redirectTo = (url) => {
    removeAllItem();
    return window.location.assign(url);
};

const removeAllItem = () => {
    const except = ['firstname', 'lastname', 'email'];
    const allItems = Object.keys(localStorage);
    for (const item of allItems) {
        if (except.includes(item)) continue;
        localStorage.removeItem(item);
    }
};
