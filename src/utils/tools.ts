
import { Moment } from 'moment';

export const ipReg = /^((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))$/

export const jsonToQueryString = (jsonObject: object): string => {
    let queryString = "?";

    Object.entries(jsonObject).forEach(i => {
        let [key, value] = i,
            strValue = value

        try {
            if (value.constructor === [].constructor) {
                value = value.join(",")
            }
        } catch (e) {
            console.warn(`jsonToQueryString:${e.message}`);
        }

        queryString += `${key}=${strValue}&`
    })

    return queryString.substring(0, queryString.length - 1)
}

export const download = (url: string, fileName: string = url.substring(url.lastIndexOf("/"))) => {
    let link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
}

export const delay = (times: number): Promise<void> => new Promise(resolve => setTimeout(() => resolve(), times))

export const setTemp = (key: string, value: object) => window.sessionStorage.setItem(key, JSON.stringify(value))

export const getTemp = (key: string) => JSON.parse(window.sessionStorage.getItem(key))

export const setCache = (key: string, value: object) => window.localStorage.setItem(key, JSON.stringify(value))

export const getCache = (key: string) => JSON.parse(window.localStorage.getItem(key))

export const getKeyText = (key: number | string, textConfig: object = {}): (number | string) => (key in textConfig ? textConfig[key] : key);

type Timestamp = number;
export const momentToTimeStamp = (moment?: Moment): Timestamp => {
    if (!moment) {
        return 0;
    }
    return moment.unix();
};

export const momentToTimeStampRange = (momentList: (Moment | void)[] = []): Timestamp[] => momentList.map(momentToTimeStamp)

