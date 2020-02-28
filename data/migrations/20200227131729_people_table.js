
exports.up = function(knex) {
  return knex.schema.createTable("people", tbl => {
      tbl.increments();
      tbl.string('name')
      .notNullable()
      .index()
      tbl.string('birthday')

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("people")
};
