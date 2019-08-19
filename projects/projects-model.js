const db = require('../data/db-config');


const getProjects = () => {
    return db('projects');
}

const addProject = (project) => {
    return db('projects').insert({projectName:project.name, projectDescription:project.description, projectCompleted:project.completed});
}

const getResources = () => {
    return db('resources');
}

const addResources = (resource) => {
    return db('resources').insert({resourceName:resource.name, recourceDescription:resource.description});
}

const getTasks = () => {
    return db('task')
            .join('projects', 'projects.id', '=', 'task.projectID')
            .select('taskDescription','taskNotes', 'taskCompleted', 'projectName', 'projectDescription', 'projectCompleted');
}

const addTask = (task) => {
    return db('task').insert({taskDescription:task.description ,taskNotes:task.notes ,taskCompleted:task.completed, projectID:task.projectID});
}

module.exports = {
    getProjects,
    addProject,
    getResources,
    addResources,
    getTasks,
    addTask
}