exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          description: "set up boilerplate",
          notes:
            "reference various old projects or documentation if you dont remember how",
          completed: false,
          project_id: 3
        },
        {
          id: 2,
          description: "install dependencies",
          notes: "ask for help if stuck",
          completed: false,
          project_id: 3
        },
        {
          id: 3,
          description: "review training kit",
          notes: "watch the lectures of previous cohorts for extra practice",
          completed: false,
          project_id: 1
        }
      ]);
    });
};
