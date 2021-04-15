basic.forever(function () {
    basic.showIcon(IconNames.StickFigure)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        # # # # #
        # . # . #
        # # # # #
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        # . # . #
        . . # . .
        `)
    basic.pause(100)
})
