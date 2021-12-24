var prediction1 = '';
var prediction2 = '';
console.log("The reason it's not working is code that it automatically put in that I didn't do so I can't fix it :/");
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById('camera');
Webcam.attach('camera');
function capture_image(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='hand_picture' height='300' width='350' src='" + data_uri + "'>"
    });
}
console.log("ML5 Version: " + ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1Grsbvoty/model.json", modelLoaded);
function modelLoaded(){
    console.log("Model loaded!");
}
function speak(){
    var synth = window.speechSynthesis;
    var speakdata1 = "The first prediction is" + prediction1;
    var speakdata2 = 'The second prediction is' + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speakdata1, speakdata2);
    synth.speak(utterThis);
}
function check(){
    var img = document.getElementById("snapresult");
    classifier.classify(img, gotResults);
}
function gotResults(){
    if(error){
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("signname").innerHTML = results[0].label;
        document.getElementById("signname2").innerHTML = results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        if(results == "Hand"){
            document.getElementById("updatesign").innerHTML = "🖐";
        }
        if(results == "Thumbs Up"){
            document.getElementById("updatesign").innerHTML = "👍";
        }
        if(results == "OK Sign"){
            document.getElementById("updatesign").innerHTML = "👌";
        }
        if(results == "Peace Sign"){
            document.getElementById("updatesign").innerHTML = "✌";
        }
        if(results == "Fingers Crossed"){
            document.getElementById("udpatesign").innerHTML = "🤞";
        }
    }
}