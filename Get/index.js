require('dynamoose');
const PeopleTable = require('./personSchema')

exports.handler = async (event) => {
  let status = 500;

  try {
    const { id, firstName, lastName, age, gender } = JSON.parse(event.body)
    let record = new PeopleTable({ id, firstName, lastName, age, gender })
    let data = await record.scan.exec();
    status = 200;
    const response = {
      statusCode: status,
      body: JSON.stringify(data),
    };
    return response;
  } catch (err) {
    data = new Error(err);
    status = 400;
    return { 
        statusCode: status,
        body: data
   }
  }

  
};
