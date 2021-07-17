import { badWords } from './badWords';

export const checkName = (name) =>
    /^([A-Za-z'’＇`]{2,})$/.test(name) && !Object.values(badWords).includes(name);

export const checkEmail = (email) =>
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
