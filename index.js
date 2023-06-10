currentIndex=0
images=["first.jpg","second.jpg","third.jpg","fourth.jpg","fifth.jpg","sixth.jpg"]


setInterval(
    function() {
        currentIndex=Math.round(Math.random()*5)
        document.getElementById("img1").src = 
        images[ currentIndex ]
       },10000
)

function changeImage(arrowtype){
    
    if(arrowtype=="right"){
       currentIndex = currentIndex==5?0:++currentIndex
    }
    else if(arrowtype=="left"){
        currentIndex = currentIndex==0?5:--currentIndex
    }
    document.getElementById("img1").src=images[currentIndex]
}
function icon(arrowtype) {
    if (arrowtype=="uparrow") {
        document.getElementById("slide-show").style.display="none";
        document.getElementById("uparrow").style.display="none";
        document.getElementById("downarrow").style.display="block";
        
    }
    if(arrowtype=="downarrow")  {
        document.getElementById("slide-show").style.display="block";
        document.getElementById("uparrow").style.display="block";
        document.getElementById("downarrow").style.display="none";
        
    }
}
