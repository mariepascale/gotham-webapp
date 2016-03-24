var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
	it('respond with Not Available', function(done) {
		request(app).get('/').expect('Not Available', done);
	});
});