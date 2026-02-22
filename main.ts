radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        bitbot.setPixelColor(3, 0xFFFF00)
        bitbot.setPixelColor(5, 0xFFFF00)
        bitbot.rotatems(BBRobotDirection.Left, 60, 200)
    } else if (receivedNumber == 2) {
        bitbot.setPixelColor(9, 0xFF0000)
        bitbot.setPixelColor(11, 0xFF0000)
        bitbot.rotatems(BBRobotDirection.Right, 60, 200)
    } else if (receivedNumber == 3) {
        bitbot.setPixelColor(9, 0x659900)
        bitbot.go(BBDirection.Forward, 20)
    } else if (receivedNumber == 4) {
        bitbot.setPixelColor(9, 0xFF0000)
        bitbot.go(BBDirection.Reverse, 20)
    } else {
        bitbot.stop(BBStopMode.Brake)
    }
    bitbot.ledClear()
})
radio.setGroup(1)
basic.showNumber(1)
