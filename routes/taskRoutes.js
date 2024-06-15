const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.get('/edit/:id', TaskController.viewTaskToUpdate)
router.post('/edit', TaskController.updateTask)
router.post('/updatestatus', TaskController.toggleTaskStatus)
router.post('/remove', TaskController.removeTask )
router.get('/', TaskController.showTasks)

module.exports = router