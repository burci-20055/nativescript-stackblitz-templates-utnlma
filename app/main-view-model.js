var accelerometer = require("nativescript-accelerometer");

accelerometer.startAccelerometerUpdates(function(data) {
    console.log("x: " + data.x + "y: " + data.y + "z: " + data.z);
}, { sensorDelay: "ui" });