
exports.up = function(knex) {
  return knex.schema
    .createTable('usuarios', async function (table) {
      table.increments('id');
      table.string('nome');
      table.string('telefone');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('usuarios')
};
