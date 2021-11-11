'use strict';
require('dynamoose');
const PeopleTable = require('./personSchema');
//it WORKS!!!!!!!
exports.handler = async (event) => {
  let data = null;
  try {
    let id = event.queryStringParameters && event.queryStringParameters.id;
    const { firstName, lastName, age, gender } = JSON.parse(event.body);
    data = await PeopleTable.update(
      { id: id },
      { firstName: firstName ,
       lastName: lastName ,
       age: age ,
       gender: gender }
    );
    const response = {
      statusCode: 200,
      status: 'Ewok updated!',
      body: JSON.stringify(data)
    };
    return response;
  } catch (err) {
    const response = {
      statusCode: 500,
      body: err.message,
    };
    return response;
  }
};
