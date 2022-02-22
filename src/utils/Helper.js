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
    // return subtotalAmount * 0.12;
}