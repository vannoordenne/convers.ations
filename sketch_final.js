var counter = 1;
var xPos;
var yPos;
let font;
var transcriptIsFinal = [{"transcript": "test", "confidence": 0.1}, " "];
let showTranscript = true;
let sel = 0;
let fade = 30;

function preload() {
    font = loadFont("Oswald-VariableFont_wght.ttf");
}

function setup() {
    frameRate(1);
    createCanvas(1680, 920); // 1275x3, 710x4 voor BigEye
    background(0);
    loadData();
    setInterval(loadData, 1000);
    textFont(font);
}

function loadData() {
    loadJSON('api_res.json', drawTranscript);
}

function drawTranscript(json) {
    var transcript = json.SpeechRecognitionAlternative;

    background(0);
    textAlign(CENTER);
    textSize(42);
    fill(255);

    //length of array is dependent on the gradient of fade. If fill is black, element is popped out of array
    if (transcriptIsFinal.length >= (255 / fade)) transcriptIsFinal.length = (floor(255 / fade) - 1);
    if (transcript[0].isFinal && (JSON.stringify(transcript[0].transcript) != JSON.stringify(transcriptIsFinal[0].transcript))) {
        transcriptIsFinal.splice(0, 0, transcript[0]);
    }

    for (let i = 0; i < transcript.length; i++) {

        if (transcript[0].isFinal) {
            if (showTranscript == true) {
                background(0);
                push();
                textSize(50);
                fill(255 - (fade * sel));
                rectMode(CENTER);
                textAlign(CENTER, CENTER)
                //the last width / 3 set an enter if sentence becomes longer than the width / 3
                text(transcriptIsFinal[sel].transcript, width / 2, height / 2, width /3);
                pop();
                showTranscript = false;
                //break;
            } else {
                background(0);
                push();
                textSize(50);
                fill(255 - (fade * sel));
                rectMode(CENTER);
                textAlign(CENTER, CENTER)
                text(transcriptIsFinal[sel].confidence, width / 2, height / 2, width /3);
                pop();

                if (sel < transcriptIsFinal.length - 1) {
                    sel++;
                } else {
                    sel = 0;
                }
                showTranscript = true;
            }
            break;
        } else {
            text(transcript[i].transcript, random(50, width - 50), height - (100 * i));
            sel = 0;
            showTranscript = true;
        }
    }
    counter++;
}