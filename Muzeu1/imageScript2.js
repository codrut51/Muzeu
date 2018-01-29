class Image {
    constructor(url, desc) {
        this.URL = url;
        this.Description = desc;
    }
}

var images = [];
var imagesDiv = document.getElementById("images");
for (var i = 1; i <= 18; i++) {
    var element = document.createElement("div");
    element.style.width = ((imagesDiv.clientWidth / 4) - 20) + "px";
    element.style.height = ((imagesDiv.clientWidth / 4) - 20) + "px";
    element.style.cssFloat = "left";
    element.style.margin = "10px";
    element.style.backgroundImage = "url(images/2/" + i + ".jpg)";
    element.style.backgroundSize = "cover";
    element.setAttribute("id", "image" + i);
    element.style.opacity = "0.5";
    var img = new Image("images/2/" + i + ".jpg", "");
    images[i] = img;
    imagesDiv.appendChild(element);
}

images[1].Description = "Intrare";
images[5].Description = "Istoric";
var index = 1;
var displayImage = document.getElementById("displayImage");
var imageDescription = document.getElementById("imageDescription");
if (images[index].Description != null) {
    imageDescription.style.display = "block";
    imageDescription.innerHTML = images[index].Description;
} else {
    imageDescription.style.display = "none";
}
displayImage.style.backgroundImage = "url('images/2/" + index + ".jpg')";
document.getElementById("image" + index).style.opacity = "1";
function nextImage() {

    document.getElementById("image" + index).style.opacity = "0.5";
    index++;
    if (index > 18) {
        index = 1;
    }
    displayImage.style.backgroundImage = "url('images/2/" + index + ".jpg')";
    document.getElementById("image" + index).style.opacity = "1";
    if (images[index].Description != null) {
        imageDescription.style.display = "block";
        imageDescription.innerHTML = images[index].Description;
    } else {
        imageDescription.style.display = "none";
    }
    console.log(index);
}

function prevImage() {
    document.getElementById("image" + index).style.opacity = "0.5";
    index--;
    if (index < 1) {
        index = 18;
    }
    displayImage.style.backgroundImage = "url('images/2/" + index + ".jpg')";
    document.getElementById("image" + index).style.opacity = "1";
    if (images[index].Description != null) {
        imageDescription.style.display = "block";
        imageDescription.innerHTML = images[index].Description;
    } else {
        imageDescription.style.display = "none";
    }
    console.log(index);
}

$("#form1").submit(function (e) {
    e.preventDefault();
});