let textInput = document.getElementById("textInput");
let speechType = document.getElementById("voiceType");
let speechButton = document.getElementById("voicebtn");


window.speechSynthesis.addEventListener("voiceschanged",loadVoices);

function loadVoices(){
    let voices = window.speechSynthesis.getVoices();
    for(let voice of voices){
        let option = document.createElement("option");
        option.value = voice.name;
        option.innerText = `${voice.name} ${voice.lang}`;
        speechType.appendChild(option);
        console.log(option);
    }
}

speechButton.addEventListener("click",function(){
    if(textInput.value == ""){
        alert("Enter some text");
    }
    else{
        if(!window.speechSynthesis.speaking){
            textToSpeech(textInput.value);
        }
    }
})

function textToSpeech(text){
    let speechResult = new SpeechSynthesisUtterance(text);
    for(let voice of window.speechSynthesis.getVoices()){
        if(voice.name == speechType.value){
            speechResult.voice = voice;
        }
    }
    window.speechSynthesis.speak(speechResult);
}