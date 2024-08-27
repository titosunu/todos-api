exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary().unsigned();
    table.string("username");
    table.string("email").unique();
    table.bigInteger("mobile_number");
    table.string("password");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
