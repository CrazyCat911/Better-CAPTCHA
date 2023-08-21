const captcha = document.getElementById("captcha");
const image = document.getElementById("image");
const inputArea = document.getElementById("inputArea");
const DOCreturn = document.getElementById("return");


/* dict structure:
{
    "imagename" :
        `HTML input code`
} */

const imageDict = {
    "pexels-nastyasensei-3318215.jpg":
        `<p>This image contains a human</p>
<label>
    <input type="radio" name="CAPTCHA" id="true" value="true">
    True
</label>
<br>
<label>
    <input type="radio" name="CAPTCHA" id="false" value="false">
    False
</label>`
}
image.src = "./Images/" + Object.keys(imageDict)[0]
inputArea.innerHTML = imageDict[Object.keys(imageDict)[0]];

const trueHTML = document.getElementById("true");


function check() {
    alert(trueHTML.checked);
}