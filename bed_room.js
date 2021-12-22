status = "";

function preload() {
    img = loadImage("bed_room.jpg");
}

function setup() {
    canvas = createCanvas(600,450);
    canvas.position(350,200);

    object_detector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!!");
    status = true;
    object_detector.detect(img , gotResult);
}

function gotResult(error,results) {
    if(error) {
        console.error(error);
    }

    else{
        console.log(results);
        objects = results;
    }
}

function draw() {
    image(img,0,0,600,500);
}