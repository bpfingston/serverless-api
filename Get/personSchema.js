'use strict';

const dynamoose = require('dynamoose');
const personSchema = new dynamoose.Schema({
    id: Number,
    firstName: String,
    lastName: String,
    age: Number,
    gender: String,
  });

  module.exports = dynamoose.model('people', personSchema)