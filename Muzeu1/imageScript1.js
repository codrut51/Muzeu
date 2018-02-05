class Image {
    constructor(url, desc) {
        this.URL = url;
        this.Description = desc;
    }
}

//$("#form1").submit(function (e) {
//    $("#form1").load(window.location.href + " #displayImage");
//});

var form1 = document.getElementById("form1");
/*form1.onsubmit = function (e) {
    $("#displayImage").load(document.URL + " #displayImage")
    return false;
}*/

var images = [];
var imagesDiv = document.getElementById("images");
for (var i = 1; i <= 6; i++) {
    var element = document.createElement("div");
    element.style.width = ((imagesDiv.clientWidth / 4) - 20) + "px";
    element.style.height = ((imagesDiv.clientWidth / 4) - 20) + "px";
    element.style.cssFloat = "left";
    element.style.margin = "10px";
    element.style.backgroundImage = "url(images/1/" + i + ".jpg)";
    element.style.backgroundSize = "cover";
    element.setAttribute("id", "image" + i);
    element.style.opacity = "0.5";
    var img = new Image("images/1/" + i + ".jpg", null);
    images[i] = img;
    imagesDiv.appendChild(element);
}

images[1].Description = "Casa Temnicerului";
images[4].Description = "Sala de tortură";
images[6].Description = "Turnul Temniță";

var index = 1;
var displayImage = document.getElementById("displayImage");
var imageDescription = document.getElementById("imageDescription");
if (images[index].Description != null) {
    imageDescription.style.display = "block";
    imageDescription.innerHTML = images[index].Description;
} else {
    imageDescription.style.display = "none";
}

var listMenu = document.getElementById("listMenu");

for (var i = 1; i < images.length; i++) {
    if (images[i].Description != null) {
        var itemList = document.createElement("li");
        itemList.innerHTML = images[i].Description;
        listMenu.appendChild(itemList);
    }
}
displayImage.style.backgroundImage = "url('images/1/" + index + ".jpg')";
document.getElementById("image" + index).style.opacity = "1";
function nextImage() {
    document.getElementById("image" + index).style.opacity = "0.5";
    index++;
    if (index > 6) {
        index = 1;
    }
    displayImage.style.backgroundImage = "url('images/1/" + index + ".jpg')";
    document.getElementById("image" + index).style.opacity = "1";
    console.log(images[index].Description);
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
    displayImage.style.backgroundImage = "url('images/1/" + index + ".jpg')";
    document.getElementById("image" + index).style.opacity = "1";
    if (images[index].Description != null) {
        imageDescription.style.display = "block";
        imageDescription.innerHTML = images[index].Description;
    } else {
        imageDescription.style.display = "none";
    }
    console.log(index);
}