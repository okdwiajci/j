input.onButtonPressed(Button.A, function () {
    password.push(char.removeAt(39))
})
input.onButtonPressed(Button.B, function () {
    for (let value of password) {
        basic.showString("" + (value))
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    password = []
})
let password: string[] = []
let char: string[] = []
char = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"0",
"!",
"@",
"#",
"$",
"&"
]
password = []
