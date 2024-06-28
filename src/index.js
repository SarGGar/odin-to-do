import './styles.css';

import {Task} from './Task';
import {StorageManager} from './Storage';
import {loadProjectPanel, loadTaskBoard, loadProjectHeader, createNewToDo} from './manageDOM';

const rootStyles = getComputedStyle(document.documentElement);
const greenColor = rootStyles.getPropertyValue('--green');
const yellowColor = rootStyles.getPropertyValue('--yellow');
const orangeColor = rootStyles.getPropertyValue('--orange');
const redColor = rootStyles.getPropertyValue('--red');


const projectPanelDomParent = document.querySelector("#project-list")
const taskBoardDomParent = document.querySelector('#task-list')
const dashboardHeaderDomParent = document.querySelector('#dashboard-header')

const SM = StorageManager();

let allProjects = SM.getProjects();

if (allProjects.length === 0) {
    allProjects = ['first-project']
}

let activeProject = allProjects[0];
let activeTasks = loadActiveTasks(activeProject);


function loadActiveTasks(project) {
    let activeTasks = {}
    let lsObject = SM.getTasks(project);
    if (lsObject !== null) {
        for (const [key, value] of Object.entries(lsObject)) {
            let task = Task(value.title);
            task.generateFromStorageObject(value);
            activeTasks[key] = task;
        }
    }
    return activeTasks
}

loadProjectPanel(projectPanelDomParent, allProjects)
createProjectEventHandlers(projectPanelDomParent)
loadProjectHeader(dashboardHeaderDomParent, activeProject, activeTasks)
createButtonEventHandlers(dashboardHeaderDomParent)
loadTaskBoard(taskBoardDomParent, activeProject, activeTasks)
createButtonEventHandlers(taskBoardDomParent)


const newProjectDiv = document.querySelector('#new-project')
const inputDiv = document.querySelector('#project-name-input')

newProjectDiv.addEventListener('click', showProjectInput)
inputDiv.addEventListener('keydown', handleProjectInput)

function showProjectInput() {
    newProjectDiv.style.display = 'none';
    inputDiv.style.display = 'inline-block';
    inputDiv.focus();
}

function handleProjectInput(event) {
    if (event.key === 'Enter') {
        const projectName = event.target.value.trim().toLowerCase().replace(/\s+/g, '-');
        if (projectName) {
            allProjects.push(projectName)
            loadProjectPanel(projectPanelDomParent, allProjects)
            createProjectEventHandlers(projectPanelDomParent)
            event.target.value = '';
        }
        inputDiv.style.display = 'none';
        newProjectDiv.style.display = 'inline-block';
    }
}

const newTaskDiv = document.querySelector('#new-task')
const inputTaskDiv = document.querySelector('#task-input')

newTaskDiv.addEventListener('click', showTaskInput)
inputTaskDiv.addEventListener('keydown', handleTaskInput)

function showTaskInput() {
    newTaskDiv.style.display = 'none';
    inputTaskDiv.style.display = 'inline-block';
    inputTaskDiv.focus();
}

function handleTaskInput(event) {
    if (event.key === 'Enter') {
        const title = event.target.value.trim();
        if (title) {
            let newTask = Task(title);
            const id = SM.addTask(activeProject, newTask.getData());
            newTask.updateId(String(id));
            activeTasks[String(id)] = newTask;
            event.target.value = '';
            taskBoardDomParent.textContent = '';
            updateTaskDashboard()
        }
        inputTaskDiv.style.display = 'none';
        newTaskDiv.style.display = 'inline-block';
    }
}

function createProjectEventHandlers(domParent) {
    const children = domParent.children;

    for (const child of children) {
        child.addEventListener('click', switchProject)
    }
}

function switchProject(e) {
    activeProject = e.target.id;
    activeTasks = loadActiveTasks(activeProject);
    updateTaskDashboard()
}

function createButtonEventHandlers(domParent) {
    const children = domParent.getElementsByTagName('BUTTON')
    for (const child of children) {
        switch (child.className) {
            case 'delete-project':
                child.addEventListener('click', deleteProject)
                break;
            case 'delete-item':
                child.addEventListener('click', deleteItem)
                break;
            case 'edit-project':
                child.addEventListener('click', editProject)
                break;
            case 'edit-item':
                child.addEventListener('click', editItem)
                break;
            case 'completed-project':
                child.addEventListener('click', completedProject)
                break;
            case 'completed-item':
                child.addEventListener('click', completedItem)
                break;
        }
    }
}

function updateEntirePage() {
    let activeTasks = loadActiveTasks(activeProject);
    loadProjectPanel(projectPanelDomParent, allProjects)
    createProjectEventHandlers(projectPanelDomParent)
    loadProjectHeader(dashboardHeaderDomParent, activeProject, activeTasks)
    createButtonEventHandlers(dashboardHeaderDomParent)
    loadTaskBoard(taskBoardDomParent, activeProject, activeTasks)
    createButtonEventHandlers(taskBoardDomParent)

}

function updateProjectPanel() {
    loadProjectPanel(projectPanelDomParent, allProjects)
    createProjectEventHandlers(projectPanelDomParent)

}

function updateTaskDashboard() {
    let activeTasks = loadActiveTasks(activeProject);
    loadProjectHeader(dashboardHeaderDomParent, activeProject, activeTasks)
    createButtonEventHandlers(dashboardHeaderDomParent)
    loadTaskBoard(taskBoardDomParent, activeProject, activeTasks)
    createButtonEventHandlers(taskBoardDomParent)

}

function deleteProject(e) {
    SM.removeProject(activeProject)
    const index = allProjects.indexOf(activeProject)
    allProjects.splice(index, 1)
    if (allProjects.length===0) {
        allProjects = ['first-project']
    }
    activeProject = allProjects[0]

    updateEntirePage()
}

function deleteItem(e) {
    SM.removeTask(activeProject, Array.from(e.target.parentElement.parentElement.classList)[1])
    updateTaskDashboard()
}

function editProject(e) {
    const parentElement = e.target.parentElement.parentElement;
    const textFirstChild = parentElement.firstChild
    const currentText = parentElement.firstChild.textContent;
    const input = document.createElement('input');
    const taskId = textFirstChild.id;
    input.type = 'text';
    input.value = currentText;
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const newProject = input.value.trim().toLowerCase().replace(/\s+/g, '-')
            textFirstChild.textContent = newProject
            SM.updateProjectName(activeProject, newProject)
            const index = allProjects.indexOf(activeProject)
            allProjects[index] = newProject
            activeProject = allProjects[index];
            updateEntirePage()
        }
    });

    parentElement.firstChild.textContent = ''
    parentElement.appendChild(input);
    parentElement.insertBefore(input, parentElement.firstChild)
    input.focus();
}

function editItem(e) {
    const parentElement = e.target.parentElement.parentElement;
    const textFirstChild = parentElement.firstChild
    const currentText = parentElement.firstChild.textContent;
    const input = document.createElement('input');
    const taskId = textFirstChild.id;
    input.type = 'text';
    input.value = currentText;
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            textFirstChild.textContent = input.value;
            activeTasks[taskId].updateTitle(input.value)
            SM.updateTask(activeProject, activeTasks[taskId].getData(), taskId)
            parentElement.removeChild(input);
        }
    });

    parentElement.firstChild.textContent = ''
    parentElement.appendChild(input);
    parentElement.insertBefore(input, parentElement.firstChild)
    input.focus();
}

function completedProject(e) {
    console.log(e.target.className)
    
}

function completedItem(e) {
    const taskId = Array.from(e.target.parentElement.parentElement.classList)[1]
    activeTasks[taskId].updateCompletionStatus()
    SM.updateTask(activeProject, activeTasks[taskId].getData(), taskId)
    e.target.textContent = e.target.textContent === 'not done'? 'done': 'not done'
    e.target.style.backgroundColor = e.target.textContent === 'not done'? orangeColor :greenColor
}