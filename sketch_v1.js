var counter = 1;

function setup(){
    createCanvas(1680, 920);
    loadData();
    setInterval(loadData, 100);
}

function loadData(){
    loadJSON('api_res.json', drawTranscript);
}

function drawTranscript(json){
    var transcript = json.SpeechRecognitionAlternative[0].transcript;
    background(0);
    textAlign(CENTER);
    textSize(32);
    fill(255);
    text(transcript, width/2, height/2);
    counter++;
}