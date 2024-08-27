const bcrypt = require("bcryptjs/dist/bcrypt");

exports.seed = async function (knex) {
  return await knex("users").insert([
    {
      username: "pratito sunu",
      email: "titosunu2001@gmail.com",
      mobile_number: 12223425,
      password: await bcrypt.hash("2001titoo", 10),
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      username: "alex",
      email: "alex.majalengka@gmail.com",
      mobile_number: 9876543210,
      password: await bcrypt.hash("2001titoo", 10),
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
  ]);
};
