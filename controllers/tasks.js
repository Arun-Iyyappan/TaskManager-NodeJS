const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(201).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// Create a Task
const PostTasks = async (req, res) => {
  try {
    const { name, completed } = req.body;
    const task = await Task.create({ name: name, completed: completed });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// get single Task
const createTasks = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    if (!task) {
      return res.status(404).json({ msg: "No Matching Results" });
    }
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTasks = async(req, res) => {
    try {
        const task = await Task.findOneAndUpdate({ _id: req.params.id } , req.body , {
           new : true,   // These checks will produce a updated json as result
           runValidators : true  //To use Put task use overwrite:true 
        });
        if (!task) {
          return res.status(404).json({ msg: "No Matching Results" });
        }
        res.status(201).json({ task});
      } catch (error) {
        res.status(500).json({ msg: error });
      }
     



};

const deleteTasks = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id });
    if (!task) {
      return res.status(404).json({ msg: "No Matching Results" });
    }
    res.status(201).json({ task: null, status: "success" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  PostTasks,
  updateTasks,
  deleteTasks,
  createTasks,
};
