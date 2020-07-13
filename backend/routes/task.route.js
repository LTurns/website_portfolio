// In this section, we build REST APIs for our react app. These routes will help us to manager the data.
// Below are all the routes you will ever need for a CRUD website (create, read, update, delete).

let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

let taskSchema = require("../models/Task");

// CREATE TASK

router.route("/create-task").post((req, res, next) => {
  taskSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

//READ TASK

router.route("/").get((req, res) => {
  taskSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// GET SINGLE TASK

router.route("/edit-task/:id").get((req, res) => {
  taskSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// UPDATE TASK
router.route("/update-task/:id").put((req, res, next) => {
  taskSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Task updated successfully!");
      }
    }
  );
});

// DELETE TASK
router.route("/delete-task/:id").delete((req, res, next) => {
  taskSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
