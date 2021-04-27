
var bg_ref = document.getElementById("color")
var bouton = document.getElementsByClassName("clickbtn")

function setBg(){
    const randomColor = 
    Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor; 
    bg_ref.innerHTML = "#" + randomColor; 
}

//The getelementbyClassName returns an html collection, so if we need to add an 
// event listener to an element , we will need to do smtg 
for (var i=0 ; i<bouton.length; i++){
    bouton[i].addEventListener("click",setBg,false); 

}
setBg();
