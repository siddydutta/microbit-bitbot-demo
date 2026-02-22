radio.set_group(1)

def on_forever():
    if input.button_is_pressed(Button.A):
        radio.send_number(1)
        basic.show_arrow(ArrowNames.WEST)
    elif input.button_is_pressed(Button.B):
        radio.send_number(2)
        basic.show_arrow(ArrowNames.EAST)
    elif input.acceleration(Dimension.Y) < -500:
        radio.send_number(3)
        basic.show_arrow(ArrowNames.NORTH)
    elif input.acceleration(Dimension.Y) > 500:
        radio.send_number(4)
        basic.show_arrow(ArrowNames.SOUTH)
    else:
        radio.send_number(0)
        basic.show_number(1)
basic.forever(on_forever)
