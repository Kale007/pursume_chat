
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('chat', function (table) {
      table.increments('id').unsigned().primary();
      table.integer('from_id').unsigned().references('id').inTable('users');
      table.integer('to_id').unsigned().references('id').inTable('users');
      table.string('message').notNullable();
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('chat')
  ]);
};
