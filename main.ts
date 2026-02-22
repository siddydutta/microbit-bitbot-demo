radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
        basic.showArrow(ArrowNames.West)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
        basic.showArrow(ArrowNames.East)
    } else if (input.acceleration(Dimension.Y) < -500) {
        radio.sendNumber(3)
        basic.showArrow(ArrowNames.North)
    } else if (input.acceleration(Dimension.Y) > 500) {
        radio.sendNumber(4)
        basic.showArrow(ArrowNames.South)
    } else {
        radio.sendNumber(0)
        basic.showNumber(1)
    }
})
