const express = require("express");

const projData = require("./projects-model");

const router = express.Router();

router.get("/projects-list", (req, res) => {
  // get all species from the database
  projData
    .getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/projects-list/add", (req, res) => {
  const data = req.body;

  projData
    .addProject(data)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "error adding project" });
    });
});

router.get("/resources-list", (req, res) => {
  // get all species from the database
  projData
    .getResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/resources-list/add", (req, res) => {
  const data = req.body;

  projData
    .addResource(data)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "error adding resource" });
    });
});

router.get("/tasks-list", (req, res) => {
  // get all species from the database
  projData
    .getTasks()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/tasks-list/add", (req, res) => {
  const data = req.body;

  projData
    .addTask(data)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "error adding task" });
    });
});

module.exports = router;
