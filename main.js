noseX = 0;
noseY = 0;
function preload() {
    clown_nose = loadImage('https://i.postimg.cc/XqpfX7F2/png-clipart-red-balloon-red-nose-clown-clothes-accessories-thumbnail.png');
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotposes);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot() {
    save('myFilter.png');
}

function modelLoded() {
    console.log('PoseNet Is Initialized');
}

function gotposes(results) {
      if(results.length > 0) {
          console.log(results);
          noseX = results[0].pose.nose.x -10;
          noseY = results[0].pose.nose.y -10;
          console.log("nose x =" + results[0].pose.nose.x);
          console.log("nose y =" + results[0].pose.nose.y);
      }
}