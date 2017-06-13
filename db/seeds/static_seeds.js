const models = require('../models');

exports.seed = function (knex, Promise) {
  return models.Tag.forge({
    name: 'React'
  }).save()
  .error(err => {
    console.error('ERROR: failed to create tag');
    throw err;
  })
  .then((tag) => {
    return models.Tag.forge({
      name: 'Express'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create tag');
    throw err;
  })
  .then((tag) => {
    return models.Tag.forge({
      name: 'MongoDB'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create tag');
    throw err;
  })
  .then((tag) => {
    return models.Tag.forge({
      name: 'Node'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create tag');
    throw err;
  })
  .then((tag) => {
    return models.Tag.forge({
      name: 'AngularJS'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create tag');
    throw err;
  })
  .then((tag) => {
    return models.Tag.forge({
      name: 'Python'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create tag');
    throw err;
  })
  .then((tag) => {
    return models.Tag.forge({
      name: 'CSS'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create tag');
    throw err;
  })
  .then((tag) => {
    return models.Tag.forge({
      name: 'SQL'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create tag');
    throw err;
  })
  .then((tag) => {
    return models.Tag.forge({
      name: 'Matlab'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create tag');
    throw err;
  })
  .then((tag) => {
    return models.Tag.forge({
      name: 'AWS'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create tag');
    throw err;
  })
  .then((tag) => {
    return models.Tag.forge({
      name: 'Heroku'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create tag');
    throw err;
  })
  .then((tag) => {
    return models.Tag.forge({
      name: 'Java'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create tag');
    throw err;
  })
  .then((tag) => {
    return models.Tag.forge({
      name: 'jQuery'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create tag');
    throw err;
  })
  .then((tag) => {
    return models.Tag.forge({
      name: 'C++'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create tag');
    throw err;
  })
  .then((tag) => {
    return models.Tag.forge({
      name: 'Docker'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create tag');
    throw err;
  })
  .then((tag) => {
    return models.Tag.forge({
      name: 'Linux'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create tag');
    throw err;
  })
  .then((tag) => {
    return models.Tag.forge({
      name: 'Ruby'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create tag');
    throw err;
  })
  .then((tag) => {
    return models.Tag.forge({
      name: 'Material UI'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create tag');
    throw err;
  })
  .then((tag) => {
    return models.Tag.forge({
      name: 'HTML'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create tag');
    throw err;
  })


};
