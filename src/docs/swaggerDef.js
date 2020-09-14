const {
  version
} = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'PH COVID-19 API documentation',
    version,
    license: {
      name: 'MIT',
      url: 'https://github.com/emiliogozo/ph-covid19-api/blob/master/LICENSE',
    },
  },
  servers: [{
    url: `http://localhost:${config.port}/v1`,
  }, ],
};

module.exports = swaggerDef;
