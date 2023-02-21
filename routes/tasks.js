const express  = require('express')

const router  = express.Router()

const { getAllTasks,createTasks,updateTasks,deleteTasks,PostTasks } = require('../controllers/tasks')

router.route('/' ).get(getAllTasks).post(PostTasks)

router.route('/:id').get(createTasks).patch(updateTasks).delete(deleteTasks)


module.exports = router