const {Idea} = require('../DB');
const {createResponse} = require('../helpers');

module.exports.default = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  if (!event.body) {
    callback(null, createResponse(501, 'Event must have a body'));
  }

  const data = JSON.parse(event.body);

  if (!data.description || !data.originator_id) {
    callback(null, createResponse(501, 'Missing description or originator_id'));
  }

  try {
    const newIdea = await Idea.create({
      description: data.description,
      originator_id: data.originator_id
    });

    callback(null, createResponse(200, newIdea));
  } catch (err) {
    callback(null, createResponse(500, err));
  }
};
