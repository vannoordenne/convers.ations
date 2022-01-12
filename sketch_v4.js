var counter = 1;
var xPos;
var yPos;
let font;
var transcriptIsFinal =[" "];
let showTranscript = true;


function preload() {
    font = loadFont("Oswald-VariableFont_wght.ttf");
}

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
    textAlign(CENTER);
    textSize(32);
    fill(255);
    //else{
    fill(255);
    textSize(14);

    //}

    if (transcript[0].isFinal && (JSON.stringify(transcript[0].transcript) != JSON.stringify(transcriptIsFinal[0].transcript))){
        transcriptIsFinal.splice(0,0,transcript[0]);
    }

    for(let i = 0; i < transcript.length; i++){
        // if(transcript[0].isFinal == true){
        //     //background(0);
        //     //text(transcript[i].transcript, width/2, height-(50*i));
        // }
        //xPos = transcript[i].confidence;
        //let newX = mapX(xPos);
        // if (newX < (width/2)-100){
        //     textAlign(LEFT);
        //     console.log("test");
        // }
        // else if (newX > (width/2)+100){
        //     textAlign(RIGHT);
        // }
        // else {
        //     textAlign(CENTER);
        // }
        if(transcript[0].isFinal) {
            //for(let i = 0; i < transcript.length; i++){
                //if(transcript[i].isFinal) {
            let sel = int(random(transcriptIsFinal.length-1));

                        if (showTranscript == true) {
                            background(0);
                            text(transcriptIsFinal[sel].transcript, width / 2, height / 2);
                            console.log(sel);
                            showTranscript = false;
                            //break;
                        } else {
                            background(0);
                            text(transcriptIsFinal[sel].confidence, width / 2, height / 2);
                            console.log(sel);
                            showTranscript = true;
                           //break;
                        }
                        break;
            //         switch (mode) {
            //             case 1:
            //                 background(0);
            //                 text(transcriptIsFinal[sel].transcript, width / 2, height / 2);
            //
            //                 //console.log(i);
            //                 break;
            //             case -1:
            //                 background(0);
            //                 text(transcriptIsFinal[sel].confidence, width / 2, height / 2);
            //
            //                 //console.log(i);
            //                 sel ++;
            //                 break;
            //         }
            // mode = mode * -1;
               // }
            //}
        }
        else {
            text(transcript[i].transcript, random(50, width-50), height - (50 * i));
        }
    }
    //console.log(transcript);
    counter++;

//   for (int i = 0; i < SpeechRecognitionAlternative.size(); i++) {

//     JSONObject values = SpeechRecognitionAlternative.getJSONObject(i);

//     String transcript = values.getString("transcript");
//     text(transcript, random(0, width), height-(50*i));
//   }
}

function mapX(xPos){
    let mode = int(random(2));
    let newX;
    if(xPos > 0.8){
        xPos = 1;
    }
    switch(mode){
        case 0:
            newX = map(xPos, 0, 1, 50, width/2);
            console.log("case 0");
            break;
        case 1:
            newX = map(xPos, 0, 1, width-50, width/2);
            console.log("case 1");
            break;
    }

    return newX;
}