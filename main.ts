basic.showString("Welcome in my car!")
basic.setLedColor(0x00ff00)
basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() < 45) {
        basic.setLedColor(0x00ff00)
    } else if (input.temperature() > 45) {
        basic.setLedColor(0xff0000)
    }
})
basic.forever(function () {
    if (input.temperature() < 45) {
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else if (input.temperature() > 45) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
})
