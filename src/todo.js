function todoItem(title) {
    let description = '';
    let dueDate = '';
    let priority = 0;
    let isCompleted = false;

    const updateTitle = (newTitle) => {
        title = newTitle;
    }
    const updateDescription = (text) => {
        description = text;
    }
    const updateDueDate = (dateString) => {
        dueDate = dateString;
    }
    const incrPriority = () => {
        priority = (priority < 3) ? priority+1: priority;
    }
    const decrPriority = () => {
        priority = (priority > 0) ? priority-1: priority;
    }
    const updateCompletionStatus = () => {
        isCompleted = !isCompleted;
    }
    const getData = () => {
        let obj = {title, description, dueDate, priority, isCompleted};
        return obj
    }
    // const getData = () => JSON.stringify({title, description, dueDate, priority, isCompleted});

    
    return {getData, updateTitle, updateDescription, updateDueDate, incrPriority, decrPriority, updateCompletionStatus}
}

function project(projectName) {
    let todoList = [];

    const updateProjectName = (newProjectName) => {
        projectName = newProjectName;
    }
    const addTodoItem = (todoItem) => {
        todoList.push(todoItem);
    }
    const removeTodoItem = (todoItem) => {
        const index = todoList.indexOf(todoItem);
        if (index > -1) {
            todoList.splice(index, 1);
        }
    }
    const getTodoList = () => todoList;
    const getProjectCount = () => todoList.length;
    const getProjectNameAlias = () => projectName.trim().toLowerCase().replace(/\s+/g, '-');

    return {projectName, updateProjectName, addTodoItem, removeTodoItem, getTodoList, getProjectCount, getProjectNameAlias}
}


export {todoItem, project}