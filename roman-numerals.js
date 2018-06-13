
function getThousands(nr){
    let rThousand = 'M';
    return rThousand.repeat(nr);
}

function getHundreds(nr){
    var rHundred = 'C';

    if(nr < 4){
        return rHundred.repeat(nr)
    }
    else if(nr === 4){
        return rHundred + 'D';
    }
    else if(nr < 9){
        return 'D' + rHundred.repeat(nr - 5);
    }
    else {
        return rHundred + 'M';
    }
}

function getTens(nr){
    var rTen = 'X';

    if(nr < 4){
        return rTen.repeat(nr)
    }
    else if(nr === 4){
        return rTen + 'L';
    }
    else if(nr < 9){
        return 'L' + rTen.repeat(nr - 5);
    }
    else {
        return rTen + 'C';
    }
}

function getOnes(nr){
    var rOne = 'I';

    if(nr < 4){
        return rOne.repeat(nr)
    }
    else if(nr === 4){
        return rOne + 'V';
    }
    else if(nr < 9){
        return 'V' + rOne.repeat(nr - 5);
    }
    else {
        return rOne + 'X';
    }
}

class RomanNumerals {

    constructor(decimalNo){
        if(decimalNo > 4999){
            decimalNo = 4999;
        }
        if(decimalNo < 1){
            decimalNo = 1;
        }

        this.decimalNo = decimalNo;
    }

    get getDecimalNo(){
        return this.decimalNo;
    }

    static getFive(){
        return 'V';
    }

    static getTen(){
        return 'X';
    }

    static getFifty(){
        return 'L';
    }

    static getHundred(){
        return 'C';
    }

    static getFiveHundred(){
        return 'D';
    }

    static getThousand(){
        return 'M';
    }

    convert(){
        var thousands = Math.trunc(this.decimalNo / 1000);
        var reminder = this.decimalNo % 1000;
        var hundreds = Math.trunc(reminder / 100);
        reminder = reminder % 100;
        var tens = Math.trunc(reminder / 10);
        reminder = reminder % 10;
        var ones = reminder;
    
        var str = getThousands(thousands);
        str += getHundreds(hundreds);
        str += getTens(tens);
        str += getOnes(ones);
    
        return str;
    }
}

module.exports = RomanNumerals;