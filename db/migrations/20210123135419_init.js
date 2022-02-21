// npx knex migrate:make init --migrations-directory db/migrations
exports.up = function (knex) {
  return knex.schema
    .createTable("student", (table) => {
      table.increments("id");
      table.string("email").notNullable().unique();
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.timestamps(true, true);
    })
    .createTable("book", (table) => {
      table.increments("id");
      table.string("name").notNullable();
      table.string("author").notNullable();
      table.string("borrowedBy");
      table.timestamp("borrowedDate");
      table.timestamp("expectedReturnDate");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("student").dropTable("book");
};
