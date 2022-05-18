const esp = require("espruino");

$("#on-led").click(onLED());

function onLED() {
    esp.init(function() {
        esp.sendCode("COM7", "LED1.write(true);\n", function() {
            console.log('Done!');
        });
    });
};