const router = require('express').Router();
const Todo = require('../models/todo');

router.get('/', (req, res) => {
    Todo.findAll()
	.then((todos) => {
	    if (!todos.length) {
		return res.status(404).send({ err: 'Todo not found' });
	    }
	    res.send(`find successfully: ${todos}`);
	})
	.catch(err => res.status(500).send(err));
});

router.get('/todoid/:todoid', (req, res) => {
    Todo.findOneByTodoid(req.params.todoid)
	.then((todo) => {
	    if (!todo) {
		return res.status(404).send({ err: 'Todo not found' });
	    }
	    res.send(`findOne successfully: ${todo}`);
	})
	.catch(err => res.status(500).send(err));
});

router.post('/', (req, res) => {
    Todo.create(req.body)
	.then(todo => res.send(todo))
	.catch(err => res.status(500).send(err));
});

router.put('/todoid/:todoid', (req, res) => {
    Todo.updateByTodoid(req.params.todoid, req.body)
	.then(todo => res.send(todo))
	.catch(err => res.status(500).send(err));
});

router.delete('/todoid/:todoid', (req, res) => {
    Todo.deleteByTodoid(req.params.todoid)
	.then(() => res.sendStatus(200))
	.catch(err => res.status(500).send(err));
});

module.exports = router;
