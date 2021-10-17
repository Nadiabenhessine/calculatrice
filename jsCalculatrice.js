document.onkeydown = function (evt) {

    if ((evt.keycode > 95) && (evt.keycode < 106)) {

        var nbr = evt.keycode - 96;
        document.calc.display.value += nbr;
    } else if (evt.keycode == 107) {
        document.calc.display.value += '+';
    } else if (evt.keycode == 109) {
        document.calc.display.value += '-';
    } else if (evt.keycode == 106) {
        document.calc.display.value += '*';
    } else if (evt.keycode == 110 || evt.keycode == 188 || evt.keycode == 190) {
        document.calc.display.value += '.';
    } else if (evt.keycode == 13) {
        document.calc.display.value = eval(document.calc.display.value);
    } else if (evt.keycode == 111) {
        document.calc.display.value = '';
    }
}