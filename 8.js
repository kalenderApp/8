/**
 * Using a square to create a number
 *
 * Author: 一米
 * Date: 2013-7-23
 * Time: 9:33
 * Version: 0.2
 *
 * Using :
 *
 * var instance = new Square(id, width, height);
 * instace.sqare(9);
 *
 * or
 *
 * new Square(id, width, height).sqare(9);
 *
 */
;

function Square(element, width, height){
    var div  = document.createElement("div"),
        html = "",
        i    = 0,
        top,
        left;

    div.className = "squared";

    for(; i < 20; i++) {
        pTop(i);
        pLeft(i)
        html += '<div class="square sq' + i + '" style="width:' + width + 'px;height:' + height + 'px;top:' + top + 'px;left:' + left + 'px;"></div>';
    }

    function pTop(j){
        if(j < 4){
            top = 0;
            return
        }
        if(j < 8){
            top = height;
            return
        }
        if(j < 12){
            top = height * 2;
            return
        }
        if(j < 16){
            top = height * 3;
            return
        }
        if(j <= 19){
            top = height * 4;
            return
        }
    }
    function pLeft(j){
        if(j % 4 === 0){
            left = 0;
            return
        }
        if((j+3) % 4 === 0){
            left = width;
            return
        }
        if(j % 2 === 0){
            left = width * 2;
            return
        }
        if((j-1) % 2 === 0){
            left = width * 3;
            return
        }
    }


    div.innerHTML = html;
    this.element  = element;
    this.display  = [];

    document.getElementById(element).appendChild(div);


};



Square.prototype.numberMap = [
    ["5","6","9","10","13","14"], /* 0 */
    ["0","1","2","4","5","6","8","9","10","12","13","14","16","17","18"], /* 1 */
    ["4","5","6","13","14","15"], /* 2 */
    ["4","5","6","12","13","14"], /* 3 */
    ["1","2","5","6","12","13","14","16","17","18"], /* 4 */
    ["5","6","7","12","13","14"], /* 5 */
    ["5","6","7","13","14"], /* 6 */
    ["4","5","6","8","9","10","12","13","14","16","17","18"], /* 7 */
    ["5","6","13","14"], /* 8 */
    ["5","6","12","13","14","16","17","18"] /* 9 */
];

Square.prototype.sqare = function(number){
    var that = this,
        itemDisplayNone  = that.numberMap[number],
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

        that.display.push("sq"+itemDisplayNone[k]);

        nodeDisplayNone    = itemDisplayNone[k];

        elementDisplayNone = document.getElementById(that.element).getElementsByClassName("sq"+nodeDisplayNone);
        lenNone            = elementDisplayNone.length;

        for(l = 0; l < lenNone; l++) {
            elementDisplayNone[l].style.display = "none";
        }

    }


}
