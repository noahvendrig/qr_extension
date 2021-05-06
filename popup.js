

document.addEventListener('DOMContentLoaded', async () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        let url = tabs[0].url;
        // alert(url)
        document.getElementById("qr-img").innerHTML = url;
        generate_qr(url);
        // return url;
        // use `url` here inside the callback because it's asynchronous!
    });

});


function generate_qr(url) {
    // let input = url;

    let qrColour = document.getElementById("qrColour");
    let bgColour = document.getElementById("bgColour");

    var parametersJson = {
        "size": 250, // Size of Qr Code
        "backgroundColor": "79-79-79", // Background Color Of Qr Code (In RGB) 
        "qrColor": "255-255-255", // Color of Qr Code (In RGB)
        "padding": 1, // Padding 
        "data": url
    };

    let parameters = `size=${parametersJson.size}&bgcolor=${parametersJson.backgroundColor}&color=${parametersJson.qrColor}&qzone=${parametersJson.padding}&data=${parametersJson.data}`;
    // let qrImg = document.querySelector("#qr-img img");
    let imgSrc = "https://api.qrserver.com/v1/create-qr-code/?" + parameters;
    // qrImg.src = imgSrc;
    document.getElementById("qr-img").src = imgSrc;
}



