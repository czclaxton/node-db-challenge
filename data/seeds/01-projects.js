exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          name: "portfolio site",
          description: "a website with my projects",
          completed: false
        },
        {
          id: 2,
          name: "calculator app",
          description: "a working calculator",
          completed: false
        },
        {
          id: 3,
          name: "vacation planner",
          description: "an app to organize a vacation",
          completed: false
        }
      ]);
    });
};
