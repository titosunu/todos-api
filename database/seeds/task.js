exports.seed = async function (knex) {
  return await knex("tasks").insert([
    {
      project_id: 1,
      title: "Design homepage",
      is_completed: false,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      project_id: 1,
      title: "Develop backend API",
      is_completed: true,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      project_id: 2,
      title: "Write API documentation",
      is_completed: false,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      project_id: 3,
      title: "Set up CI/CD pipeline",
      is_completed: true,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      project_id: 3,
      title: "Design Login Page",
      is_completed: true,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
  ]);
};
