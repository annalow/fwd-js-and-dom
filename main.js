//manipulating CSS property (border-radius) using event listener (mouseenter)

const div = document.querySelector(".flex-item");

div.addEventListener('mouseenter', function() {
  div.style.borderRadius = "50%";
});

div.addEventListener('mouseleave', function() {
    div.style.borderRadius = "0%";
});

//manipulating non CSS DOM property (inner HTML of div) using event listener (click)

div.addEventListener('click', function(){
    if(div.innerHTML === "ON"){
        div.innerHTML = "OFF";
    } else{
        div.innerHTML = "ON";
    }
    
})



