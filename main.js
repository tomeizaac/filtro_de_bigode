noseX= 0
noseY= 0
earRX= 0
earLX= 0
d= 0

function preload(){
    bigode= loadImage("bigodePNG.png")
}

function setup(){
    canvas= createCanvas(780,480);
    canvas.center()
    video= createCapture(VIDEO)
    video.size(780,480)
    video.hide()

    poseNet= ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function draw(){
    image(video, 0, 0, 780, 480);
//     fill("red");
//     stroke("black")
//     circle(noseX, noseY, d * 0.35);
    image(bigode, noseX - 50, noseY, d * 0.65, d * 0.2)
}

function modelLoaded(){
    console.log("poseNet carregou!")
}

function gotPoses(results){
    console.log(results)
    noseX = results[0].pose.nose.x 
    noseY= results[0].pose.nose.y 
    earRX= results[0].pose.rightEar.x
    earLX= results[0].pose.leftEar.x
    d= earLX - earRX
}

function takeSnapshot() {
    save("foto.png")
}
