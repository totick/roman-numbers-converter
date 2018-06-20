
const bodyParser = require('body-parser');
const RomanNumerals = require('../roman-numerals');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

function convertInteger(integer){
    const rn = new RomanNumerals(integer);
    return rn.convert();
}

function convertFromTo(from, to){
    let result = {
        from: from,
        to: to,
        values: []
    };
    for(let i = from; i <= to; i++){
        const rn = new RomanNumerals(i);
        const roman = rn.convert(i);
        result.values.push({ integer: i, roman: roman });
    }

    return result;
}

module.exports = function(app) {

    app.get('/convert/:integer', (req, res) => {
        const roman = convertInteger(req.params.integer);
        res.render('conversion', { ROMAN: roman });
    });

    app.post('/convert', urlencodedParser, (req, res) => {
        const roman = convertInteger(req.body.integer);
        res.render('conversion', { ROMAN: roman });
    });

    app.get('/convert-from-to/:from/:to', (req, res) => {
        const from = Number.parseInt(req.params.from);
        const to = Number.parseInt(req.params.to);
        const result = convertFromTo(from, to);
    
        res.render('from-to', { RESULT: result });
    });

    app.post('/convert-from-to', urlencodedParser, (req, res) => {
        const from = Number.parseInt(req.body.from);
        const to = Number.parseInt(req.body.to);
        const result = convertFromTo(from, to);

        res.render('from-to', { RESULT: result });
    });

}