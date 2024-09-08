let textbox = document.getElementByID("input");
textbox.value = "";


function convert()
{
    let fah = textbox.value;
    textbox.value = "trettre";

    let cel = (fah - 32) * 5 / 9;

    document.getElementById("output").innerText = "test";
}
