const db = require("../data/db-config");

module.exports = {
  getProjects,
  getResources,
  getTasks,
  addResource,
  addProject,
  addTask
  // taskReturn
};

function getProjects() {
  return db("projects").then(projectsList => {
    return projectsList.map(project => {
      if (project.completed === 0) {
        return { ...project, completed: false };
      } else {
        return { ...project, completed: true };
      }
    });
  });
}

function getResources() {
  return db("resources");
}

function getTasks() {
  return db("tasks")
    .join("projects", "project_id", "projects.id")
    .select(
      "name as project_name",
      "projects.description",
      "tasks.description as task description",
      "tasks.notes"
    );
}

function addResource(data) {
  return db("resources").insert(data);
}

function addProject(data) {
  return db("projects").insert(data);
}

function addTask(data) {
  return db("tasks").insert(data);
}

// function taskReturn() {
//   return db("projects")
//     .join("tasks", "project_id", "projects.id")
//     .select("name", "projects.description", "tasks.description", "tasks.notes")
//     .where({ project_id: id });
// }
