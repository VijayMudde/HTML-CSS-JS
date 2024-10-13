let imagesArray = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg",]

let leftArrow = document.querySelector(".left");
let rightArrow = document.querySelector(".right");
let image = document.querySelector(".image");
let imageIndex = 7;

leftArrow.onclick = function(){
    imageIndex-=1;
    if(imageIndex == 0){
        leftArrow.style.display = "none";
    }
    else{
        leftArrow.style.display = "block";
    }
    image.setAttribute("src",imagesArray[imageIndex]);
    if(imageIndex< imagesArray.length-1){
        rightArrow.style.display = "block";
    }
}

rightArrow.onclick = function(){
    imageIndex+=1;
    if(imageIndex == imagesArray.length-1){
        rightArrow.style.display = "none";
    }
    else{
        rightArrow.style.display = "block";
    }
    image.setAttribute("src",imagesArray[imageIndex]);
    if(imageIndex>0){
        leftArrow.style.display = "block";

    }
}
