const Joi = require('@hapi/joi');
const { objectId } = require('./custom.validation');

const getCases = {
  query: Joi.object().keys({
    healthStatus: Joi.string(),
    removalType: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getCase = {
  params: Joi.object().keys({
    caseId: Joi.string().custom(objectId),
  }),
};

const getCasesStats = {
  query: Joi.object().keys({
    level: Joi.string(),
    healthStatus: Joi.string(),
    removalType: Joi.string(),
    regionResGeo: Joi.string(),
    provResGeo: Joi.string(),
    sex: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

module.exports = {
  getCases,
  getCase,
  getCasesStats,
};
