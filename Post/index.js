'use strict';
require('dynamoose')
const uuid = require('uuid').v4
const PeopleTable = require('./personSchema')

exports.handler = async (event) => {
    let data = null;
    let status = 500
    try {
    const jsonBody = JSON.parse(event.body)
    let id = uuid();
    let person = new PeopleTable({ id, ...jsonBody})
    data = await person.save();
    status = 200;
    } catch(err) {
        status = 400;
        data = new Error(err);
    }
    const response = {
        statusCode: status,
        status: 'You have created an Ewok!',
        body: JSON.stringify(data)
    }
    return response;
}