const express = require('express');
const { getTodos, addTodo, deleteTodo } = require('./controllers');

const router = express.Router();

router.get('/api/todos', getTodos);

router.post('/api/todos', addTodo);

router.delete('/api/todos/:id', deleteTodo);

module.exports = router;