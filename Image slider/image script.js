let image = document.getElementById("image");
let i=1;
imagesArray = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg",];

setInterval(function(){
    image.src = imagesArray[i];
    i+=1;
    if(i==imagesArray.length){
        i=0;
    }
},1000);