let icon = document.getElementById("icon");
let jsMenu = document.getElementById("myman");

icon.addEventListener("click", cntrol)
function cntrol(){
if(jsMenu.className === "topman"){
       jsMenu.className += " adaptive";
      }else{
        jsMenu.className = "topman";
    }
}
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors){
    anchor.addEventListener("click", function(event){
    event.preventDefault();
    const blockID = anchor.getAttribute("href")
        document.querySelector("" + blockID ).scrollIntoView({
        behavior: "smooth",
            block: "start"
        })
    
    })
   }