var help = document.getElementById("help");
help.style.display="none"

var nojs=document.getElementById("nojs");
nojs.style.display="none"

function showHelp(e) {
    console.log(e.key)

if (help.style.display === "none" && e.keyCode==72){
    help.style.display = "block";
    nojs.style.display="block";
} 

else if(help.style.display === "none" && e.keyCode==191){
    help.style.display = "block";
    nojs.style.display="block"
}
else {
    help.style.display = "none";
    nojs.style.display="none"
}
}
document.onkeydown=showHelp;