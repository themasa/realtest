var assert = require('assert')
var kakka = require('./index')

describe('basic test',function() {
    it('should return the correct name',function(){
        var nimi = 'pekka'
        assert.equal(kakka.test(nimi),nimi)
    })

    it('should fail',function(){
        var nimi = 'pekka'
        assert.notEqual(kakka.test(nimi),'liisa')
    })
})    