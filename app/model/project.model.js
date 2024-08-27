const db = require("../../config/database");
const { Model } = require("objection");
const Task = require("./task.model");

Model.knex(db);

class Project extends Model {
  static get tableName() {
    return "projects";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title"],
      properties: {
        id: { type: "integer" },
        title: { type: "string" },
        is_completed: { type: "boolean" },
        created_at: { type: "string", format: "date-time" },
        updated_at: { type: "string", format: "date-time" },
      },
    };
  }

  static get relationMappings() {
    return {
      tasks: {
        relation: Model.HasManyRelation,
        modelClass: Task,
        join: {
          from: "projects.id",
          to: "tasks.project_id",
        },
      },
    };
  }
}

module.exports = Project;
