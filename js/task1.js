/*function task1() {
   // const sNum = +prompt('enter 2-digit number : ', ' ');
   // let dg = [ 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    //let tn = [ dg[8].replace('в', 'c'), dg[0]+'надцать', dg[1]+'надцать', dg[2]+'надцать', dg[3].slice(0,5)+'надцать',dg[4].slice(0,3)+'надцать', dg[5].slice(0,4)+'надцать', dg[6].slice(0,3)+'надцать', dg[7].slice(0,6)+'надцать', dg[8].slice(0,5)+'надцать' ];
    //let tw = [ dg[1]+'дцать', dg[2]+'дцать', 'сорок', dg[4]+'десят', dg[5]+'десят', dg[6]+'десят', dg[7]+'десят', dg[8].slice(0,4)+'носто' ];
    const str = prompt('enter something : ', ' ');

    alert( myFunction(str));


}*/
function task1() {
    const arrWords = (prompt('enter some words through space & with numbers  : ', ' ')).split(' ');
    alert(amountChars(arrWords));
    alert(replaceNum(arrWords));
}
function replaceNum(arr) {

    return arr.map( (el, i) => arr.find(item => item.match(/\d/g)).replace(/\d/g, '_')).join(' ');

}
function amountChars(arr) {
   for(let item of arr){
       return 'amount of numbers : ' + item.match(/\d/g).length + ' , amount of letters : ' + item.match(/[a-zA-Z]/g).length +
           ', amount of non-letters : ' + item.match(/\W/g).length;
    }
}