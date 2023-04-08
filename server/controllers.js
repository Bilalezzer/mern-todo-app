const Todo = require('./model');
const mongoose = require('mongoose');

async function getTodos(req, res) {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.json({ error: 'Could Not Fetch Todos' })
    }
}

async function addTodo(req, res) {
    try {
        const result = await Todo.create(req.body)
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ error: 'Could Not Add The Todo' })
        console.log(err);
    }
}

async function deleteTodo(req, res) {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        try {
            const result = await Todo.deleteOne({ _id: req.params.id })
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({ error: 'Could Not Delete The Todo' })
        }
    } else {
        res.status(500).json({ err: 'Document id is not valid' })
    }
}

module.exports = {
    deleteTodo,
    addTodo,
    getTodos
}