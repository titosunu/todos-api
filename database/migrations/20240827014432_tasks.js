exports.up = function (knex) {
  return knex.schema.createTable("tasks", (table) => {
    table.increments("id").primary().unsigned();
    table
      .integer("project_id")
      .unsigned()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE");
    table.string("title");
    table.boolean("is_completed").defaultTo(false);
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
  return knex.schema.dropTable("tasks");
};
