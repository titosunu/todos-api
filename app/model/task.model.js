const db = require("../../config/database");
const { Model } = require("objection");

Model.knex(db);

class Task extends Model {
  static get tableName() {
    return "tasks";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title", "project_id"],
      properties: {
        id: { type: "integer" },
        project_id: { type: "integer" },
        title: { type: "string" },
        is_completed: { type: "boolean" },
        created_at: { type: "string", format: "date-time" },
        updated_at: { type: "string", format: "date-time" },
      },
    };
  }

  static get relationMappings() {
    const Project = require("./project.model");

    return {
      project: {
        relation: Model.BelongsToOneRelation,
        modelClass: Project,
        join: {
          from: "tasks.project_id",
          to: "projects.id",
        },
      },
    };
  }
}

module.exports = Task;
