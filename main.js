var difference = 0;
var leftWristX = 0;
var rightWristX = 0;

function setup()
{
    video = createCapture(600, 750);
    video.position(200, 200)
    canvas = createCanvas(500, 500)
    canvas.position(1100, 200);

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function draw()
{
    background("#8ae6ff")
    textSize(difference)
    fill("#eb4034")
    text("Sean", 20, 400)
}

function modelLoaded()
{
    console.log("Model is loaded");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX)
    }
}