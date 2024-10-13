let locInp = document.getElementById("loc-div-i");
let locSearch = document.getElementById("loc-search");
let cloudImg = document.getElementById("cloud-img");
let tempValue = document.getElementById("temp-h4");
let tempDes = document.getElementById("temp-des");
let tempArea = document.getElementById("temp-area");

const apiKey = `24f9819955da39932ab6d03cfd5d70e9`;

locSearch.onclick = function(){
    if(locInp.value == ""){
        alert("Please enter any location");
    }
    else{
        loc = locInp.value;
        url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`
        fetch(url).then(res => res.json())
        .then(data => {
            console.log(data);
            const{name} = data
            const{feels_like} = data.main
            const{description} = data.weather[0]
            console.log(description);
            tempValue.innerText = Math.floor(feels_like-273);
            tempArea.innerText = name;
            tempDes.innerText = description
            switch(description)
            {
                case "cloudy":
                    cloudImg.src="clouds.png";
                    break;
                case "few clouds":
                    cloudImg.src="cloudy day.png";
                    break;
                case "scattered clouds":
                    cloudImg.src="cloudy day.png";
                    break;
                case "broken clouds":
                    cloudImg.src="cloudy day.png";
                    break;
                case "rainy day":
                    cloudImg.src="raining.png";
                    break;
                case "raining":
                    cloudImg.src="raining.png";
                    break;
                case "storm":
                    cloudImg.src="storm.png";
                    break;
                case "sunny":
                    cloudImg.src="sunny.png";
                    break;
                case "clear sky":
                    cloudImg.src="clear sky.png";
                    break;
                case "mist":
                    cloudImg.src="mist.png";
                    break;
                case "haze":
                    cloudImg.src="mist.png";
                    break;
                default:
                    cloudImg.src="cloud.png";

            }
        })
        .catch(() => {
            alert("Enter a valid location")
        })
        locInp.value=""
    }
}
