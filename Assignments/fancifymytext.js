function big(){
    document.getElementById("textarea").style.fontSize = "24pt";
}

function fancy(radio){
    var textarea = document.getElementById("textarea");
    textarea.style.fontWeight = "bold";
    textarea.style.color = "blue";
    textarea.style.textDecoration = "underline";
}

function boring(radio){
    var textarea = document.getElementById("textarea");
    textarea.style.fontWeight = "normal";
    textarea.style.color = "black";
    textarea.style.textDecoration = "none";
}

function moo(){
    var textarea = document.getElementById("textarea").value;
    var text = textarea.toUpperCase();
    var split = text.split(".");
    var str = split.join("-Moo.");
    document.getElementById("textarea").value = str;
}



