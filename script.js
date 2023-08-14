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
    "photo-1578885136359-16c8bd4d3a8e.png":
        `<p>The fire contains the colour white</p>
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
image.src = "./Images/" + "photo-1578885136359-16c8bd4d3a8e.png"
inputArea.innerHTML = imageDict["photo-1578885136359-16c8bd4d3a8e.png"];

const trueHTML = document.getElementById("true");


function check() {
    alert(trueHTML.checked);
}