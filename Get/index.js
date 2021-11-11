require('dynamoose');
const PeopleTable = require('./personSchema');

exports.handler = async (event) => {
  let data = null;
  let id = event.queryStringParameters && event.queryStringParameters.id;
  try {
    if (id) {
      const newData = await PeopleTable.query('id').eq(id).exec();
      data = newData[0];
    } else {
      data = await PeopleTable.scan().exec();
    }
    const response = {
      statusCode: 200,
      status: 'You have found an Ewok',
      body: JSON.stringify(data),
    };
    return response;
  } catch (err) {
    const response = {
      statusCode: 400,
      body: err.message,
    };
    return response;
  }
};
