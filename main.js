Webcam.set({
    width: 300,
    height: 300,
    image_format: 'png',
    png_quality: 100,
    constraints: {
        facingMode: "environment"
    }
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_image() {
    Webcam.snap(function (data_uri) {
        document.getElementById("picture").innerHTML = '<img id="captured_img" src="' + data_uri + '"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function identify_image() {
    img = document.getElementById("captured_img");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("result").innerHTML = results[0].label;
    }
}