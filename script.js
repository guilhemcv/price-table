let image = document.querySelectorAll("img");
let bouton = document.querySelectorAll("bouton");

let changement = "Descriptif";

bouton.addEventListener("click", function(){
    for (let i = 0; i<image.length; i++){
        if (changement === "Descriptif"){
        image[i].innerHTML = "https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk=";
        image[i].removeAttribute("href");
        bouton[i].innerHTML = "Retour";
        changement = "Retour";
     }
        else {
        image[i].innerHTML ='<a id="imgun" href=https://picsum.photos/id/684/900 target="_blank"><img id="imgun" src="https://picsum.photos/id/250/300" alt=""></a>';
        bouton[i].innerHTML = "Descriptif";
        changement = "Descriptif"; 
        }
})