let buttons = document.getElementsByTagName("button");
let result = document.getElementById("result");

for(i=0;i<buttons.length;i++)
    buttons[i].onclick  = function(){
        let input = this.innerText;
        updateResult(input);
}

function updateResult(input){
    let currentResult = result.innerText;
    if(currentResult=="0"){
        if(input !="AC" && input !="=" && input !="DEL"){
            result.innerText = "";
            result.innerText+=input;
        }
    }
    else{
        if(input == "DEL")
        {
            result.innerText = currentResult.substring(0,currentResult.length-1);
        }
        if(input == "AC")
        {
            result.innerText=0;
        }
        if(input !="AC" && input !="DEL" && input !="=")
        {
            result.innerText+=input;
        }
        if(input =="=")
        {
            let resultCal = result.innerText;
            result.innerText = eval(resultCal);

        }

    }
}
