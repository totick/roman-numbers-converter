
const RomanNumerals = require('../roman-numerals');

module.exports = function(app){

    app.get('/api/convert/:integer', (req, res) => {
        const integer = req.params.integer;
        const rn = new RomanNumerals(integer);
        const roman = rn.convert();
        
        let result = {
            integer: integer,
            roman: roman
        };

        res.json(result);
    });

    app.get('/api/convert/:from/:to', (req, res) => {
        const from = Number.parseInt(req.params.from);
        const to = Number.parseInt(req.params.to);
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
        res.json(result);
    });

}