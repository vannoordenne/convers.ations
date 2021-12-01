let json;
let SRA = [];
let transcript = "Hello World!";

function setup(){
    createCanvas(1680, 920);
    background(0);
}

function draw(){
    //json = loadJSON(api_res.json);
   // transcript = json.SpeechRecognitionAlternative[0].transcript;
    textAlign(CENTER);
    fill(255);
    text(transcript, width/2, height/2);
}