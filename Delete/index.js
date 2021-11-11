'use strict';

require('dynamoose');
const PeopleTable = require('./personSchema');

exports.handler = async (event) => {
  try {
    let id = event.queryStringParameters && event.queryStringParameters.id;
    let deleted = await PeopleTable.delete({ id: id });
    const response = {
      statusCode: 200,
      status: 'You have killed an ewok!',
      body: JSON.stringify(deleted),
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
