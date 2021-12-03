// let json;
// let SRA = [];
// let transcript;
var counter = 1;

function setup(){
    createCanvas(1680, 920);
    loadData();
    setInterval(loadData, 100);
}

// function draw(){
//     setInterval(loadData, 1000);
//     //drawTranscript(transcript);
//     //json = loadJSON(api_res.json);
//    // transcript = json.SpeechRecognitionAlternative[0].transcript;
// }

function loadData(){
    loadJSON('api_res.json', drawTranscript);
    // transcript = json.SpeechRecognitionAlternative[0].transcript;
    // drawTranscript(transcript);
    // console.log(transcript);
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