const {Idea} = require('../DB');
const {createResponse} = require('../helpers');

module.exports.default = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    const ideas = await Idea.all();

    callback(null, createResponse(200, ideas));
  } catch (err) {
    callback(null, createResponse(500, err));
  }
};


