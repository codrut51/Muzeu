var common = ["body", "form1", "container"];

var content = document.getElementById("content");

var innerContent = document.getElementById("innerContent");

for (var i = 0; i < common.length; i++) {
    var element = document.getElementById(common[i]);
    if (element != null || element != undefined) {
        element.style.width = window.innerWidth + "px";
        element.style.height = window.innerHeight + "px";
        element.style.minWidth = "600px";
    }
}

if (content != null || content != undefined) {
    content.style.width = window.innerWidth + "px";
    content.style.height = (window.innerHeight - 200) + "px";
    content.style.minWidth = "600px";
    innerContent.style.width = (window.innerWidth - 100) + "px";
    innerContent.style.height = (window.innerHeight - 300) + "px";
    innerContent.style.marginLeft = "50px";
    innerContent.style.marginTop = "50px";
}


window.onresize = function () {
    for (var i = 0; i < common.length; i++) {
        var element = document.getElementById(common[i]);
        if (element != null || element != undefined) {
            element.style.width = window.innerWidth;
            element.style.height = window.innerHeight;
        }
    }

    if (content != null || content != undefined) {
        content.style.width = window.innerWidth + "px";
        content.style.height = (window.innerHeight - 200) + "px";
        innerContent.style.width = (window.innerWidth - 100) + "px";
        innerContent.style.height = (window.innerHeight - 300) + "px";
        innerContent.style.marginLeft = "50px";
        innerContent.style.marginTop = "50px";
    }
}