const Promise = require('bluebird');
const request = require('supertest');
const localmongoose = require('mongoose');
const config = require('../app/config');

localmongoose.Promise = Promise;

const app = require('../app');





describe('Testataan MongoDB-yhteys', () => {    //testataan mongoose-yhteys
    test('Testataan yhteys', (done) => {
      localmongoose.connect(config.DB).then(() => {
        expect(localmongoose.connection.readyState).toBe(1);
      });
      localmongoose.disconnect();
      done(); // eslint-disable-line no-undef
    });
  });


describe('Testataan serverin root', () => {   
    test('Get-request rootiin', (done) => {
      request(app).get('/').set('Accept', 'text/html')
      .expect(200)
      .then(response => {
        
        done();
      });
    });
    
  });

  describe('Testataan api/all', () => {   
    test('Get-request rootiin', (done) => {
      request(app).get('/').set('Accept', 'application/json')
      .expect(200)
      .then(response => {
        
        done();
      });
    });
    
  });

  

  

