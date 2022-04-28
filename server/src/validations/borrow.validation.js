const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createBorrow = {
    params: Joi.object().keys({
      userId: Joi.string().custom(objectId),
    }),
    body: Joi.object().keys({
        bookId: Joi.string().required(),
        bookName: Joi.string().required(),
    }),
};

const singleBorrow = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
    borrowId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createBorrow,
  singleBorrow,
};
