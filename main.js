function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(200, 140)

    canvas = createCanvas(550, 550);
    canvas.position(850, 100);
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }
  
  function modelLoaded() {
    console.log('PoseNet Is Initialized!');
  }

  function draw() {
    background('#6C91C2');
  }
  
  function gotPoses(results)
  {
    if(results.length > 0)
    {
      console.log(results);
    }
}