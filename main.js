nosex = 0;
nosey = 0;

function preload(){
    mustacheimage=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet=ml5.poseNet(video, modelloaded);
    poseNet.on("pose", gotposes);
}

function modelloaded(){
    console.log("posenet is initialized");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        nosex = results[0].pose.nose.x-20;
        nosey = results[0].pose.nose.y+5;
        console.log("nosex = " + nosex);
        console.log("nosey = " + nosey);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(mustacheimage, nosex, nosey, 40, 20);
}

function takesnapshot(){
    save("happiness.png");
}
