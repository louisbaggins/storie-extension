document.addEventListener('keydown', function (e) {

    if (e.shiftKey && (e.key == 't' || e.key == 'T')) {
        const collection = document.getElementsByClassName('qbCDp');
        const imageEl = getImageFromCollection(collection);
        const url = getSourceUrlFromImageEl(imageEl);

        window.open(url);
    }
}, true);


function getImageFromCollection(collection) {
    let image;
    Array.from(collection).forEach(function (element) {
        image = element.getElementsByTagName('img').length > 0 ? element.getElementsByTagName('img')[0] : undefined;
    });
    return image;
}

function getSourceUrlFromImageEl(imageElement) {
    if (imageElement) {
        return imageElement.src ? imageElement.src : imageElement.srcset;
    }
}