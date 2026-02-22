def on_received_number(receivedNumber):
    if receivedNumber == 1:
        bitbot.set_pixel_color(3, 0xFFFF00)
        bitbot.set_pixel_color(5, 0xFFFF00)
        bitbot.rotatems(BBRobotDirection.LEFT, 60, 200)
    elif receivedNumber == 2:
        bitbot.set_pixel_color(9, 0xFF0000)
        bitbot.set_pixel_color(11, 0xFF0000)
        bitbot.rotatems(BBRobotDirection.RIGHT, 60, 200)
    elif receivedNumber == 3:
        bitbot.set_pixel_color(9, 0x659900)
        bitbot.go(BBDirection.FORWARD, 20)
    elif receivedNumber == 4:
        bitbot.set_pixel_color(9, 0xFF0000)
        bitbot.go(BBDirection.REVERSE, 20)
    else:
        bitbot.stop(BBStopMode.BRAKE)
    bitbot.led_clear()
radio.on_received_number(on_received_number)

radio.set_group(1)
basic.show_number(1)
