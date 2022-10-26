var express = require('express');
var router = express.Router();
var Helpers=require('../Helpers/todoHelpers')
/* GET home page. */
router.get('/', (req, res, next) => {
  Helpers.GetTodo().then((TodoData) => {
    res.render('index',{TodoData});
  })
});
router.post('/add_todo', (req, res) => {
  Helpers.AddTodo(req.body).then((Response) => {
    if(Response){
      res.json({ Response: true })
    }
  })
})
router.post('/UpdateTodo', (req, res) => {
  Helpers.UpdateTodo(req.body).then((Response) => {
      res.redirect('/')
  })
})
router.post('/Inactive_Todo', (req, res) => {
  Helpers.InactiveTodos(req.body.TodoID).then(() => {
    res.json({ Status: true })
  })
})

router.post('/Active_Todo', (req, res) => {
  Helpers.ActiveTodos(req.body.TodoID).then(() => {
    res.json({ Status: true })
  })
})

router.post('/remove_todo', (req, res) => {
  Helpers.RemoveTodo(req.body).then(() => {
    res.json({Status:true})
  })
})
module.exports = router;
