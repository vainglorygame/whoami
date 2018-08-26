const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/app');
const should = chai.should();

chai.use(chaiHttp);

describe('Server', function() {
  it('should respond to `/status`', async () => {
		const response = await chai.request(server).get('/status')
		response.should.have.status(200);
  });
});
