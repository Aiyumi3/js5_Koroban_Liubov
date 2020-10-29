function task2(){

    setTimeout(red, 1000);

    setTimeout(yellow, 5000);

    setTimeout(green, 9000);

    setTimeout(off, 11000);

}
function red() {
    document.getElementById('circ1').style.fill = '#DC143C';
    document.getElementById('circ2').style.fill = '#778899';
    document.getElementById('circ3').style.fill = '#778899';
}
function yellow() {
    document.getElementById('circ2').style.fill = '#FFD700';
    document.getElementById('circ1').style.fill = '#778899';
    document.getElementById('circ3').style.fill = '#778899';
}
function green() {
    document.getElementById('circ3').style.fill = '#ADFF2F';
    document.getElementById('circ2').style.fill = '#778899';
    document.getElementById('circ1').style.fill = '#778899';
}
function off() {
    document.getElementById('circ1').style.fill = '#778899';
    document.getElementById('circ2').style.fill = '#778899';
    document.getElementById('circ3').style.fill = '#778899';
}