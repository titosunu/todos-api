const Project = require("../model/project.model");
const knex = require("../../config/database");

const index = async (req, res) => {
  try {
    const projects = await Project.query().withGraphFetched("tasks");

    res.status(200).json({
      status: 200,
      message: "OK!",
      data: projects,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};

const store = async (req, res) => {
  try {
    const project = await Project.query().insertGraph({
      title: req.body.title,
      is_completed: req.body.is_completed || false,
      tasks: req.body.tasks || [],
    });

    res.status(201).json({
      status: 201,
      message: "Project created successfully!",
      data: project,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};

const show = async (req, res) => {
  try {
    const project = await Project.query()
      .findById(req.params.id)
      .withGraphFetched("tasks");

    if (!project) {
      return res.status(404).json({
        message: "Project not found!",
      });
    }

    res.status(200).json({
      status: 200,
      message: "OK!",
      data: project,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};

const update = async (req, res) => {};

const destroy = async (req, res) => {
  try {
    const rowsDeleted = await Project.query().deleteById(req.params.id);

    if (!rowsDeleted) {
      return res.status(404).json({
        message: "Project not found!",
      });
    }

    res.status(200).json({
      status: 200,
      message: "Project deleted successfully!",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};

const detailProject = async (req, res) => {
  try {
    const project = await Project.query()
      .findById(req.params.id)
      .select("title", "created_by", "created_at", "updated_at")
      .withGraphFetched("tasks")
      .modifyGraph("tasks", (builder) => {
        builder.select("title", "created_by", "created_at", "updated_at");
      });

    if (!project) {
      return res.status(404).json({
        message: "Project not found!",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};

module.exports = {
  index,
  store,
  show,
  update,
  destroy,
  detailProject,
};
