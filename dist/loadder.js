document.querySelector("#app").style.display = "none";
document.querySelector(".loader").style.display = "block";

function loaded(){
    document.querySelector(".loader").style.display = "none";
    document.querySelector("#app").style.display= "block"  
    console.log("loaded");

    
}

