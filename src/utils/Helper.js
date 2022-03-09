import { CANADA_PROVINCES } from "./provinces";

export const formatGoogleDriveLink = (googleLink) => {
    const brokenDownLink = googleLink.split('/');
    const photoID = brokenDownLink[brokenDownLink.length - 2];

    return "https://drive.google.com/thumbnail?id=" + photoID;
}

export const showCartPopUpTimeOut = async () => {
    return new Promise((resolve) => setTimeout(resolve, 7500));
}

export const getTax = (subtotalAmount, provinceID) => {
    for (let province of CANADA_PROVINCES) {
        if (province.id == provinceID) {
            return subtotalAmount * province.tax;
        }
    }
    return undefined;
}

export const formatDateToClient = (date) => {
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date)?.toLocaleString('en-US', dateOptions);
}

export const formatAddress = (addressObject) => {
    return (addressObject?.line2 ? addressObject?.line2 + " " : "") + addressObject?.line1 + " " + addressObject?.city
        + " " + addressObject?.state + " " + addressObject?.postal_code + ", " + addressObject?.country;
}

export const doLinksMatch = (url, mainDes, subDes) => {
    const urlList = url.split("/");

    return  (urlList[1] === mainDes) && (urlList[2] === subDes);
}