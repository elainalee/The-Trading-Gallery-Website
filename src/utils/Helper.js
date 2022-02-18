export const formatGoogleDriveLink = (googleLink) => {
    const brokenDownLink = googleLink.split('/');
    const photoID = brokenDownLink[brokenDownLink.length - 2];

    return "https://drive.google.com/thumbnail?id=" + photoID;
}

export const showCartPopUpTimeOut = async () => {
    return new Promise((resolve) => setTimeout(resolve, 7500));
  }