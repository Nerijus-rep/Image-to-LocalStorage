/* Function to Convert image into Base64 */
function ConvertImageToBase64(imageToConvertBase64) {
    /* Creating a Canvas in HTML5 */
    var drawCanvas = document.createElement("canvas");
    /* Setting the Canvas width & height as refer to the Image */
    drawCanvas.width = imageToConvertBase64.width;
    drawCanvas.height = imageToConvertBase64.height;
    /* Copy the image to Canvas */
    var copyImageToCanvas = drawCanvas.getContext("2d");
    copyImageToCanvas.drawImage(imageToConvertBase64, 0, 0);
    /* Converting Image to Data URL */
    var dataUrlOfImage = drawCanvas.toDataURL("image/png");
    /* Returning Data URL of the Image */
    return dataUrlOfImage.replace(/^data:image\/(png|jpg);base64,/, "");
}

$(document).ready(function () {
    /* Fetching the image using JavaScript getElementById */
    var imageToLoadInLocalStorage = document.getElementById('imageToLoadInLocalStorage');
    /* Calling the function ConvertImageToBase64 to convert the Image to Base 64 */
    var imageDataUrl = ConvertImageToBase64(imageToLoadInLocalStorage);
    /* Storing the image in Local Storage using setItem() method */
    localStorage.setItem("imageData", imageDataUrl);
    /* Using getItem() fetching the image from Local Storage */
    var dataImageUrl = localStorage.getItem('imageData');
    /* Using getElementById to detect the image control for loading local storage image */
    var imageToShow = document.getElementById('imageToShowFromLocalStorage');
    /* Assigning source to a blank image with id imageToShowFromLocalStorage */
    imageToShow.src = "data:image/png;base64," + dataImageUrl;
});

