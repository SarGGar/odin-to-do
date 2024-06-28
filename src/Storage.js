function StorageManager() {

    const getProjects = () => Object.keys(localStorage);
    const getTasks = (project) => getTasksJSON(project);
    const getTasksJSON = (project) => JSON.parse(localStorage.getItem(project));
    const getTasksString = (project) => localStorage.getItem(project)
    const getTask = (project, taskId) => {
        allTasks = getTasksJSON(project);
        task = allTasks[taskId];
        return task;
    }

    const addTask = (project, task) => {
        let id = -1;
        let data = {}
        if (getProjects().includes(project)) {
            data = getTasksJSON(project);
            id = Object.keys(data).length+1;
            
        } else {
            id = 1;
        }
        task['id'] = String(id);
        data[String(id)] = task;
        localStorage.setItem(project, JSON.stringify(data));
        return id;
    }

    const removeProject = (project) => localStorage.removeItem(project);
    const removeTask = (project, taskId) => {
        let data = getTasksJSON(project);
        delete data[taskId];

        localStorage.setItem(project, JSON.stringify(data));
    }

    const updateTask = (project, task, taskId) => {
        let data = getTasksJSON(project);
        data[taskId] = task;

        localStorage.setItem(project, JSON.stringify(data))
    }

    const updateProjectName = (project, newProject) => {
        let data = getTasksString(project);
        removeProject(project)

        if (data !== null) {
            localStorage.setItem(newProject, data)
        }
    }

    return {getProjects, getTasks, getTask, addTask, removeProject, removeTask, updateTask, updateProjectName}

}

export {StorageManager}