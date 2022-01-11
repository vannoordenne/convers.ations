var counter = 1;
var xPos;
var yPos;

function setup(){
    frameRate(1);
    createCanvas(1680, 920);
    background(0);
    loadData();
    setInterval(loadData, 1000);
    textFont('Helvetica');
}

function loadData(){
    loadJSON('api_res.json', drawTranscript);
}

function drawTranscript(json){
    var transcript = json.SpeechRecognitionAlternative;
    background(0);
    textAlign(LEFT);
    textSize(32);
    fill(255);
    //else{
    fill(255);
    textSize(14);

    //}
    for(let i = 0; i < transcript.length; i++){
        // if(transcript[0].isFinal == true){
        //     //background(0);
        //     //text(transcript[i].transcript, width/2, height-(50*i));
        // }
        text(transcript[i].transcript, width/5, height-(50*i));
    }
    console.log(transcript);
    counter++;

//   for (int i = 0; i < SpeechRecognitionAlternative.size(); i++) {

//     JSONObject values = SpeechRecognitionAlternative.getJSONObject(i);

//     String transcript = values.getString("transcript");
//     text(transcript, random(0, width), height-(50*i));
//   }
}