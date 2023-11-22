input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        # . # . .
        # # # . .
        `)
})
basic.forever(function () {
	
})
