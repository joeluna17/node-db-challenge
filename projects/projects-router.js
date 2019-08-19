const express = require('express');
const router = express.Router();
const projectmodel = require('./projects-model');

router.get('/', async (req,res) => {
    
    try{
        const projects = await projectmodel.getProjects();
        console.log(projects);
        projects.projectCompleted === 0 ? projects.projectCompleted = false : projects.projectCompleted = true;
        res.status(200).json(projects);
    }
    catch({message}){
        res.status(500).json(message);
    }
});

router.post('/', async (req, res) => {

    try{
        const addedProject = await projectmodel.addProject(req.body);
        res.status(201).json(addedProject);
    }
    catch({message}){
        res.status(500).json(message);
    }
});



router.get('/resources', async (req,res) => {
    
    try{
        const resources = await projectmodel.getResources();
        res.status(200).json(resources);
    }
    catch({message}){
        res.status(500).json(message);
    }
});


router.post('/resources', async (req, res) => {

    try{
        const addedResources = await projectmodel.addResources(req.body);
        res.status(201).json(addedResources);
    }
    catch({message}){
        res.status(500).json(message);
    }
});


router.get('/tasks', async (req,res) => {
    
    try{
        const tasks = await projectmodel.getTasks();
        res.status(200).json(tasks);
    }
    catch({message}){
        res.status(500).json(message);
    }
});


router.post('/tasks', async (req, res) => {

    try{
        const addedTasks = await projectmodel.addTask(req.body);
        res.status(201).json(addedTasks);
    }
    catch({message}){
        res.status(500).json(message);
    }
});



module.exports = router;