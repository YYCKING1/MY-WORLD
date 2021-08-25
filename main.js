function setup()
{
video = createCapture(VIDEO);
video.size(550, 550);
canvas = createCanvas(600, 600);
canvas.position(590, 150);
poseNetVar = ml5.poseNet(video, ModelLoaded);
poseNetVar.on("pose", gotPose);  
}                   
function draw()
{
background("#00FF00");
}

function ModelLoaded()
{
    console.log("MODEL LOADED");
}

