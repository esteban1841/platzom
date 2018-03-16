const expect = require('chai').expect,
    platzom = require('../dist/platzom.js').default;

describe('Platzom', function() {
    it('Should return the concatenated string between the prefixer and the string', function () {
        const concatenation = platzom('re', 'rico');
        expect(concatenation).to.equal('rerico');
    });

});