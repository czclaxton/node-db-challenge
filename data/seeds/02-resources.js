exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { id: 1, name: "vscode", description: "a code editor" },
        {
          id: 2,
          name: "computers",
          description: "a tool we can use for coding and youtube"
        },
        { id: 3, name: "insomnia", description: "a way to test our endpoints" }
      ]);
    });
};
