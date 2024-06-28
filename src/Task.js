function Task(title) {
    let description = '';
    let dueDate = '';
    let priority = 0;
    let isCompleted = false;
    let id = '';

    const updateTitle = (newTitle) => {
        title = newTitle;
    }
    const updateDescription = (text) => {
        description = text;
    }
    const updateDueDate = (dateString) => {
        dueDate = dateString;
    }
    const updateId = (idString) => {
        id = idString;
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
        let obj = {title, description, dueDate, priority, isCompleted, id};
        return obj
    }
    const getTitle = () => title;
    const getId = () => id;
    const generateFromStorageObject = (object) => {
        title = object.title
        description = object.description;
        dueDate = object.dueDate;
        priority = object.priority;
        isCompleted = object.isCompleted;
        id = object.id;
    }
    
    return {getData, getTitle, getId, updateTitle, updateDescription, updateDueDate, updateId, incrPriority, decrPriority, updateCompletionStatus, generateFromStorageObject}
}


export {Task}