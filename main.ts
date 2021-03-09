// press button A to start game
input.onButtonPressed(Button.A, function () {
    // game is starting
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Target)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(500)
    basic.clearScreen()
    // decides whether true or false/heads or tails
    if (Math.randomBoolean()) {
        basic.showString("Heads")
        // represents heads
        basic.showIcon(IconNames.Ghost)
        basic.pause(200)
        basic.clearScreen()
    } else {
        basic.showString("Tails")
        // represents tails
        basic.showIcon(IconNames.Sword)
        basic.pause(200)
        basic.clearScreen()
    }
})
// shows the name of the game
basic.showString("Coin Toss")
