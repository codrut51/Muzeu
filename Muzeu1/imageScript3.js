class Image {
    constructor(url, desc) {
        this.URL = url;
        this.Description = desc;
    }
}

var images = [];
var imagesDiv = document.getElementById("images");
for (var i = 1; i <= 6; i++) {
    var element = document.createElement("div");
    element.style.width = ((imagesDiv.clientWidth / 4) - 20) + "px";
    element.style.height = ((imagesDiv.clientWidth / 4) - 20) + "px";
    element.style.cssFloat = "left";
    element.style.margin = "10px";
    element.style.backgroundImage = "url(images/3/" + i + ".jpg)";
    element.style.backgroundSize = "cover";
    element.setAttribute("id", "image" + i);
    element.style.opacity = "0.5";
    var img = new Image("images/3/" + i + ".jpg", null);
    images[i] = img;
    imagesDiv.appendChild(element);
}

images[1].Description = "Turnul Thomory";
images[4].Description = "Antecamera Sala Tronului - \"Casa Dărăbanților\"";
images[6].Description = "Sala Tronului - Marele Palat";

var index = 1;
var displayImage = document.getElementById("displayImage");
var listMenu = document.getElementById("listMenu");

for (var i = 1; i < images.length; i++) {
    if (images[i].Description != null) {
        var itemList = document.createElement("li");
        itemList.innerHTML = images[i].Description;
        listMenu.appendChild(itemList);
    }
}
var imageDescription = document.getElementById("imageDescription");
if (images[index].Description != null) {
    imageDescription.style.display = "block";
    imageDescription.innerHTML = images[index].Description;
} else {
    imageDescription.style.display = "none";
}
displayImage.style.backgroundImage = "url('images/3/" + index + ".jpg')";
document.getElementById("image" + index).style.opacity = "1";

function nextImage() {
    document.getElementById("image" + index).style.opacity = "0.5";
    index++;
    if (index > 6) {
        index = 1;
    }
    displayImage.style.backgroundImage = "url('images/3/" + index + ".jpg')";
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
        index = 6;
    }
    displayImage.style.backgroundImage = "url('images/3/" + index + ".jpg')";
    document.getElementById("image" + index).style.opacity = "1";
    if (images[index].Description != null) {
        imageDescription.style.display = "block";
        imageDescription.innerHTML = images[index].Description;
    } else {
        imageDescription.style.display = "none";
    }
    console.log(index);
}