let textArea;

function printText()
{
    textArea = document.getElementById("Write").value;
    document.getElementById("textarea").innerHTML += textArea + "\n\n";
    textArea = document.getElementById("Write").value = "";

    textArea = document.getElementById("textarea");
    textArea.scrollTop = textArea.scrollHeight;
}

document.addEventListener("keydown", function(e)
{
    if (e.keyCode === 13 && document.getElementById("Write").value !== "")
       printText();
})

button.onclick = function ()
{
    if (document.getElementById("Write").value !== "")
        printText();
}
