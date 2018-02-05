var common = ["body", "innerBody", "container"];

var header = document.getElementById("header");
var content = document.getElementById("content");
var content1 = document.getElementById("content1");
var innerContent = document.getElementById("innerContent");

var innerContent1 = document.getElementById("innerContent1");

var nivele = document.getElementById("nivele");
var menu = document.getElementById("menu");
var menu1 = document.getElementById("menu1");
var footer = document.getElementById("footer");

var leftContent = document.getElementById("leftContent");

for (var i = 0; i < common.length; i++) {
    var element = document.getElementById(common[i]);
    if (element != null || element != undefined) {
        element.style.width = window.innerWidth + "px";
        element.style.height = window.innerHeight + "px";
    }
}

if (header != null || header != undefined) {
    header.style.width = window.innerWidth + "px";
}

if (content != null || content != undefined) {
    content.style.width = window.innerWidth + "px";
    content.style.height = (window.innerHeight - 200) + "px";
    innerContent.style.width = (window.innerWidth - 100) + "px";
    innerContent.style.height = (window.innerHeight - 300) + "px";
    innerContent.style.marginLeft = "50px";
    innerContent.style.marginTop = "50px";
}

if (content1 != null || content1 != undefined) {
    content1.style.width = window.innerWidth + "px";
    content1.style.height = (window.innerHeight - 200) + "px";
    content1.style.minWidth = "600px";
}

if (nivele != null || nivele != undefined) {
    diff = ((window.innerWidth - nivele.clientWidth) / 2) + "px";
    nivele.style.marginLeft = diff;
}

if (menu != null || menu != undefined) {
    menu.style.width = window.innerWidth;
}

if (menu1 != null || menu1 != undefined) {
    menu1.style.width = window.innerWidth;
}

if (innerContent1 != null || innerContent1 != undefined) {
    innerContent1.style.width = window.innerWidth;
}

if (footer != null || footer != undefined) {
    footer.style.width = window.innerWidth + "px";
}

if (leftContent != null || leftContent != undefined) {
    leftContent.style.height = window.innerHeight + "px";
}

window.onresize = function () {


    if (header != null || header != undefined) {
        header.style.width = window.innerWidth + "px";
    }

    for (var i = 0; i < common.length; i++) {
        var element = document.getElementById(common[i]);
        if (element != null || element != undefined) {
            element.style.width = window.innerWidth + "px";
            element.style.height = window.innerHeight + "px";
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

    if (nivele != null || nivele != undefined) {
        diff = ((window.innerWidth - nivele.clientWidth) / 2) + "px";
        nivele.style.marginLeft = diff;
    }

    if (menu != null || menu != undefined) {
        menu.style.width = window.innerWidth;
    }

    if (menu1 != null || menu1 != undefined) {
        menu1.style.width = window.innerWidth;
    }
    if (innerContent1 != null || innerContent1 != undefined) {
        innerContent1.style.width = window.innerWidth;
    }

    if (content1 != null || content1 != undefined) {
        content1.style.width = window.innerWidth + "px";
        content1.style.height = (window.innerHeight - 200) + "px";
        content1.style.minWidth = "600px";
    }

    if (footer != null || footer != undefined) {
        footer.style.width = window.innerWidth + "px";
    }

    if (leftContent != null || leftContent != undefined) {
        leftContent.style.height = window.innerHeight + "px";
    }

}