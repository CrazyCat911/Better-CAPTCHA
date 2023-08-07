const captcha = document.getElementById("captcha");
const image = document.getElementById("image");
const inputArea = document.getElementById("inputArea");
const DOCreturn = document.getElementById("return");
const trueHTML = document.getElementById("true");


/* dict structure:
{
    "imagename":
        `HTML input code`
} */

const imageDict = {
    "photo-1578885136359-16c8bd4d3a8e.png":
        ``
}

function check() {
    alert(trueHTML.checked);
}