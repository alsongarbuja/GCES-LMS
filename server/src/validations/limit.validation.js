const Joi = require('joi');
const { objectId } = require('./custom.validation');

const limitObject = {
  quantity: Joi.number().required(),
  categories: Joi.array().required(),
  sub_quantity: Joi.array(),
}

const createLimit = {
  body: Joi.object().keys(limitObject),
};

const singleLimit = {
  params: Joi.object().keys({
    limitId: Joi.string().custom(objectId),
  }),
};

const updateLimit = {
  params: Joi.object().keys({
    limitId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      quantity: Joi.number().optional(),
      categories: Joi.array().optional(),
      sub_quantity: Joi.array().optional(),
    })
    .min(1),
};

module.exports = {
  createLimit,
  singleLimit,
  updateLimit,
};
