input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        . # . # .
        `)
    basic.showIcon(IconNames.Happy)
    basic.showString("Thanks")
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showIcon(IconNames.Confused)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Skull)
    basic.showString("BOO!!!")
    basic.showIcon(IconNames.Surprised)
    basic.showString("AHHH")
    basic.showIcon(IconNames.Surprised)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Angry)
    basic.showString("Stop")
    basic.showIcon(IconNames.Angry)
})
basic.showIcon(IconNames.Asleep)
basic.showString("Hello!")
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
	
})
