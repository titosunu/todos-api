const db = require("../../config/database");

const { Model } = require("objection");

Model.knex(db);

class User extends Model {
  static get tableName() {
    return "users";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["username", "email", "password"], // Required fields
      properties: {
        id: { type: "integer" },
        username: { type: "string" },
        email: { type: "string", format: "email" },
        mobile_number: { type: "integer" },
        password: { type: "string" },
        created_at: { type: "string", format: "date-time" },
        updated_at: { type: "string", format: "date-time" },
      },
    };
  }
}

module.exports = User;
