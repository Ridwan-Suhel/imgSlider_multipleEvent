let photos = ["images/slider-1.jpg","images/slider-2.jpg","images/slider-3.jpg"];
let imagePlaceAt = document.querySelector("#slider_image");



let count = 0;
function next(){
    count++;
    if(count >= photos.length){
        count = 0;
        imagePlaceAt.src = photos[count];
    }else{
        imagePlaceAt.src = photos[count];
    }
};

function prev(){
    count--;
    if(count < 0){
        count = photos.length - 1;
        imagePlaceAt.src = photos[count];
    }else{
        imagePlaceAt.src = photos[count];
    }
};


// multiple event listener

// let button =  ;
let len = document.querySelectorAll(".myButton").length;
for(i=0; i<len; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
        let text = this.innerHTML;
        document.querySelector("h1").innerHTML = text + " is Clicked"
    });
};

let heading = document.querySelector(".heading").innerHTML;
let refresh = document.querySelector(".refresh");

refresh.addEventListener("click", function(){
    document.querySelector(".heading").innerHTML = heading;
});













