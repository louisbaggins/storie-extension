document.addEventListener('keydown', function (e) {

    if (e.shiftKey && (e.key == 't' || e.key == 'T')) {
        let rawDataUrl;
        try {
            rawDataUrl = document.getElementsByClassName('qbCDp')[0].children[2].children[0]['src'];
        }
        catch (e) {
            rawDataUrl = document.getElementsByClassName('qbCDp')[0].children[0]['srcset'];
        }
        const cleanedUrl = rawDataUrl.match("([^ ]+)");
        window.open(cleanedUrl);
    }
}, true);