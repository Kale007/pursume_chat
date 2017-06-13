const models = require('../models');

exports.seed = function (knex, Promise) {
  return models.Connection.forge({
    users_a_id: 1,
    users_b_id: 2,
    status: 'accept',
    reason: 'projects'
  }).save()
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 1,
      users_b_id: 3,
      status: 'accept',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 1,
      users_b_id: 4,
      status: 'reject',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 1,
      users_b_id: 6,
      status: 'reject',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 1,
      users_b_id: 8,
      status: 'reject',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 1,
      users_b_id: 9,
      status: 'accept',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 1,
      users_b_id: 10,
      status: 'accept',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 1,
      users_b_id: 15,
      status: 'reject',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 1,
      users_b_id: 16,
      status: 'accept',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 1,
      users_b_id: 20,
      status: 'accept',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 2,
      users_b_id: 1,
      status: 'accept',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 2,
      users_b_id: 3,
      status: 'accept',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 2,
      users_b_id: 4,
      status: 'accept',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 2,
      users_b_id: 8,
      status: 'reject',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 2,
      users_b_id: 9,
      status: 'reject',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 2,
      users_b_id: 11,
      status: 'accept',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 2,
      users_b_id: 16,
      status: 'accept',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 2,
      users_b_id: 21,
      status: 'accept',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 3,
      users_b_id: 1,
      status: 'accept',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 3,
      users_b_id: 2,
      status: 'accept',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 3,
      users_b_id: 5,
      status: 'accept',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 3,
      users_b_id: 8,
      status: 'reject',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 3,
      users_b_id: 10,
      status: 'reject',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 3,
      users_b_id: 11,
      status: 'accept',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 3,
      users_b_id: 15,
      status: 'reject',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 3,
      users_b_id: 18,
      status: 'reject',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 4,
      users_b_id: 1,
      status: 'reject',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 4,
      users_b_id: 3,
      status: 'accept',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 4,
      users_b_id: 8,
      status: 'accept',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 4,
      users_b_id: 10,
      status: 'reject',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 4,
      users_b_id: 11,
      status: 'reject',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 4,
      users_b_id: 19,
      status: 'reject',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 4,
      users_b_id: 20,
      status: 'accept',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })  
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 4,
      users_b_id: 21,
      status: 'accept',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 5,
      users_b_id: 1,
      status: 'reject',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 5,
      users_b_id: 4,
      status: 'accept',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 5,
      users_b_id: 6,
      status: 'accept',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 5,
      users_b_id: 8,
      status: 'reject',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 5,
      users_b_id: 10,
      status: 'reject',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 5,
      users_b_id: 11,
      status: 'reject',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 5,
      users_b_id: 15,
      status: 'reject',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 5,
      users_b_id: 19,
      status: 'accept',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 6,
      users_b_id: 2,
      status: 'accept',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 6,
      users_b_id: 3,
      status: 'reject',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 6,
      users_b_id: 4,
      status: 'accept',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 6,
      users_b_id: 8,
      status: 'accept',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 6,
      users_b_id: 10,
      status: 'accept',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 6,
      users_b_id: 11,
      status: 'reject',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 6,
      users_b_id: 16,
      status: 'reject',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 6,
      users_b_id: 19,
      status: 'accept',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 7,
      users_b_id: 1,
      status: 'reject',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 7,
      users_b_id: 2,
      status: 'accept',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 7,
      users_b_id: 3,
      status: 'reject',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 7,
      users_b_id: 4,
      status: 'accept',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 7,
      users_b_id: 10,
      status: 'accept',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 7,
      users_b_id: 11,
      status: 'accept',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 7,
      users_b_id: 16,
      status: 'accept',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 7,
      users_b_id: 21,
      status: 'accept',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 8,
      users_b_id: 2,
      status: 'accept',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 8,
      users_b_id: 3,
      status: 'reject',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 8,
      users_b_id: 5,
      status: 'reject',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 8,
      users_b_id: 6,
      status: 'accept',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 8,
      users_b_id: 7,
      status: 'accept',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 8,
      users_b_id: 10,
      status: 'reject',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 8,
      users_b_id: 11,
      status: 'accept',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 8,
      users_b_id: 14,
      status: 'accept',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 8,
      users_b_id: 17,
      status: 'accept',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 9,
      users_b_id: 2,
      status: 'accept',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 9,
      users_b_id: 3,
      status: 'reject',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 9,
      users_b_id: 6,
      status: 'accept',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 9,
      users_b_id: 10,
      status: 'reject',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 9,
      users_b_id: 11,
      status: 'reject',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 9,
      users_b_id: 17,
      status: 'accept',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 9,
      users_b_id: 19,
      status: 'reject',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 10,
      users_b_id: 1,
      status: 'reject',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 10,
      users_b_id: 3,
      status: 'reject',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 10,
      users_b_id: 6,
      status: 'accept',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 10,
      users_b_id: 8,
      status: 'accept',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 10,
      users_b_id: 11,
      status: 'reject',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 10,
      users_b_id: 16,
      status: 'reject',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 10,
      users_b_id: 19,
      status: 'accept',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 11,
      users_b_id: 1,
      status: 'accept',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 11,
      users_b_id: 2,
      status: 'reject',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 11,
      users_b_id: 5,
      status: 'accept',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 11,
      users_b_id: 6,
      status: 'accept',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 11,
      users_b_id: 10,
      status: 'reject',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 11,
      users_b_id: 15,
      status: 'reject',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 11,
      users_b_id: 17,
      status: 'accept',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 12,
      users_b_id: 3,
      status: 'reject',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 12,
      users_b_id: 5,
      status: 'accept',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 12,
      users_b_id: 8,
      status: 'accept',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 12,
      users_b_id: 10,
      status: 'reject',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 12,
      users_b_id: 11,
      status: 'reject',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 12,
      users_b_id: 18,
      status: 'accept',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 13,
      users_b_id: 1,
      status: 'accept',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 13,
      users_b_id: 2,
      status: 'accept',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 13,
      users_b_id: 6,
      status: 'reject',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 13,
      users_b_id: 10,
      status: 'accept',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 13,
      users_b_id: 12,
      status: 'reject',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 13,
      users_b_id: 14,
      status: 'accept',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 13,
      users_b_id: 15,
      status: 'reject',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 13,
      users_b_id: 21,
      status: 'reject',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 14,
      users_b_id: 2,
      status: 'reject',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 14,
      users_b_id: 8,
      status: 'accept',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 14,
      users_b_id: 11,
      status: 'accept',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 14,
      users_b_id: 17,
      status: 'accept',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 14,
      users_b_id: 20,
      status: 'accept',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 15,
      users_b_id: 6,
      status: 'accept',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 15,
      users_b_id: 8,
      status: 'reject',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 15,
      users_b_id: 13,
      status: 'accept',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 15,
      users_b_id: 19,
      status: 'reject',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 16,
      users_b_id: 1,
      status: 'accept',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 16,
      users_b_id: 5,
      status: 'accept',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 16,
      users_b_id: 10,
      status: 'reject',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 16,
      users_b_id: 13,
      status: 'accept',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 16,
      users_b_id: 20,
      status: 'reject',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 17,
      users_b_id: 2,
      status: 'reject',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 17,
      users_b_id: 7,
      status: 'reject',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 17,
      users_b_id: 10,
      status: 'accept',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 17,
      users_b_id: 15,
      status: 'reject',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 17,
      users_b_id: 16,
      status: 'accept',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 17,
      users_b_id: 21,
      status: 'accept',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 18,
      users_b_id: 1,
      status: 'reject',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 18,
      users_b_id: 4,
      status: 'accept',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 18,
      users_b_id: 9,
      status: 'reject',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 18,
      users_b_id: 11,
      status: 'reject',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 18,
      users_b_id: 15,
      status: 'accept',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 18,
      users_b_id: 17,
      status: 'accept',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 18,
      users_b_id: 19,
      status: 'reject',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 19,
      users_b_id: 3,
      status: 'reject',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 19,
      users_b_id: 5,
      status: 'accept',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 19,
      users_b_id: 9,
      status: 'reject',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 19,
      users_b_id: 11,
      status: 'accept',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 19,
      users_b_id: 15,
      status: 'reject',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 19,
      users_b_id: 17,
      status: 'reject',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 20,
      users_b_id: 2,
      status: 'reject',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 20,
      users_b_id: 4,
      status: 'accept',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 20,
      users_b_id: 7,
      status: 'accept',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 20,
      users_b_id: 12,
      status: 'reject',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 20,
      users_b_id: 16,
      status: 'accept',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 20,
      users_b_id: 18,
      status: 'accept',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 21,
      users_b_id: 1,
      status: 'accept',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 21,
      users_b_id: 3,
      status: 'accept',
      reason: 'personal'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 21,
      users_b_id: 8,
      status: 'reject',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 21,
      users_b_id: 15,
      status: 'accept',
      reason: 'projects'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 21,
      users_b_id: 18,
      status: 'reject',
      reason: 'education'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
  .then((connection) => {
    return models.Connection.forge({
      users_a_id: 21,
      users_b_id: 19,
      status: 'accept',
      reason: 'professional'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create connection');
    throw err;
  })
}
