exports.seed = async function (knex) {
  return await knex("projects").insert([
    {
      title: "Jenjang.id",
      is_completed: false,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      title: "Deconvers",
      is_completed: false,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      title: "Presensiku",
      is_completed: false,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
  ]);
};
