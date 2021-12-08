var counter = 1;

function setup(){
    frameRate(1);
    createCanvas(1680, 920);
    background(0);
    loadData();
    setInterval(loadData, 100);
}

function loadData(){
    loadJSON('api_res.json', drawTranscript);
}

function drawTranscript(json){
    var transcript = json.SpeechRecognitionAlternative;
    //background(0);
    textAlign(CENTER);
    textSize(32);
    fill(255);
    if(transcript[0].isFinal == true){
        background(255);
        fill(0);
        textSize(64);
        text(transcript[0].transcript, width/2, height/2 - 32);
        background(0);
    }
    else{
        fill(255);
        textSize(32);
        text(transcript[0].transcript, random(0, width), random(0, height));
    }
    //for(let i = 0; i < transcript.length; )
    console.log(transcript);
    counter++;
}