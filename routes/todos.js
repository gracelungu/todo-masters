const express = require('express');
const Router = express.Router();
const TodoModel = require('../models/Todo');

Outer.get('/', async (req, res) => {
    try {
        const todos = await TodoModel.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json(err);
    }
});

Outer.post('/', async (req, res) => {
    try {
        const newTodo = new TodoModel(req.body);
        await newTodo.save();
        res.json(newTodo);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = Router;
