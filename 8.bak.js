/**
 * Using a square to create a number
 *
 * Author: 一米
 * Date: 2013-6-19
 * Time: 9:33
 * Version: 0.1
 *
 * Using :
 *
 * var instance = new Square(id, number);
 * instace.sqare();
 *
 * or
 *
 * new Square(id, number).sqare();
 *
 */
;
function Square(element, number){
    var div = document.createElement("div");
        div.className = "squared";

    var html =
        '<div class="square a"></div><div class="square b"></div><div class="square c"></div><div class="square d"></div>' +
        '<div class="square e"></div><div class="square f"></div><div class="square g"></div><div class="square h"></div>' +
        '<div class="square i"></div><div class="square j"></div><div class="square k"></div><div class="square l"></div>' +
        '<div class="square m"></div><div class="square n"></div><div class="square o"></div><div class="square p"></div>' +
        '<div class="square q"></div><div class="square r"></div><div class="square s"></div><div class="square t"></div>';

    div.innerHTML = html;

    this.number   = number;
    this.element  = element;
    this.display  = [];

    document.getElementById(element).appendChild(div);


};

Square.prototype.numberMap = [
    ["f","g","j","k","k","n","o"], /* 0 */
    ["a","b","c","e","f","g","i","j","k","m","n","o","q","r","s"], /* 1 */
    ["e","f","g","n","o","p"], /* 2 */
    ["e","f","g","m","n","o"], /* 3 */
    ["b","c","f","g","m","n","o","q","r","s"], /* 4 */
    ["f","g","h","m","n","o"], /* 5 */
    ["f","g","h","n","o"], /* 6 */
    ["e","f","g","i","j","k","m","n","o","q","r","s"], /* 7 */
    ["f","g","n","o"], /* 8 */
    ["f","g","m","n","o","q","r","s"] /* 9 */
];

Square.prototype.sqare = function(){
    var that = this,
        t;

    function timeMinus(){

        var itemDisplayNone  = that.numberMap[that.number],
            itemDisplayBlock = that.display,
            len              = itemDisplayNone.length,
            leng             = itemDisplayBlock.length,
            i,
            j,
            k,
            l,
            nodeDisplayBlock,
            nodeDisplayNone,
            elementDisplayBlock,
            elementDisplayNone,
            lenBlock,
            lenNone;

        that.number --;

        // 待优化
        for(i = 0; i < leng; i++) {

            nodeDisplayBlock    = itemDisplayBlock[i];
            elementDisplayBlock = document.getElementById(that.element).getElementsByClassName(nodeDisplayBlock);
            lenBlock            = elementDisplayBlock.length;

            for(j = 0; j < lenBlock; j++) {
                elementDisplayBlock[j].style.display = "block";
            }

        }


        that.display = [];



        for(k = 0; k < len; k++) {

            that.display.push(itemDisplayNone[k]);

            nodeDisplayNone    = itemDisplayNone[k];
            elementDisplayNone = document.getElementById(that.element).getElementsByClassName(nodeDisplayNone);
            lenNone            = elementDisplayNone.length;

            for(l = 0; l < lenNone; l++) {
                elementDisplayNone[l].style.display = "none";
            }

        }


        if(that.number < 0) {
            clearTimeout(t);
            return
         }

        t = setTimeout(timeMinus, 1000);

    }

    timeMinus();


}
















































