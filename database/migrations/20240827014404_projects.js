exports.up = function (knex) {
  return knex.schema.createTable("projects", (table) => {
    table.increments("id").primary().unsigned();
    table.string("title");
    table.boolean("is_completed").defaultTo(false); // delete
    table
      .integer("created_by")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("SET NULL");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("projects");
};
