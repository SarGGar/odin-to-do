import './styles.css';

import {todoItem, project} from './todo';
import {manageLocalStorage} from './storage';
import {loadProjectPanel, loadTodoBoard, createNewToDo} from './loadProject';


const LS = manageLocalStorage()

const projectDomParent = document.querySelector('#project-list')
const todoDomParent = document.querySelector('.main-content')

const projectList = LS.getKeys() //TODO: keys from LS
console.log(projectList)

if (projectList.length===0) {
    projectList.push("first-project")
}

let activeProject = projectList[0]

loadProjectPanel(projectDomParent, projectList)
loadTodoBoard(todoDomParent, projectList[projectList.length-1])
createNewToDo(document.querySelector('.new-to-do-div'))




const newProjectDiv = document.querySelector('#new-project')
const inputDiv = document.querySelector('#project-name-input')

newProjectDiv.addEventListener('click', showInput)
inputDiv.addEventListener('keydown', handleProjectInput)

const newToDoDiv = document.querySelector('#new-to-do')
const inputToDoDiv = document.querySelector('#todo-item-input')

newToDoDiv.addEventListener('click', showToDoInput)
inputToDoDiv.addEventListener('keydown', handleToDoInput)



function showInput() {
    newProjectDiv.style.display = 'none';
    inputDiv.style.display = 'inline-block';
    inputDiv.focus();

}

function handleProjectInput(event) {
    if (event.key === 'Enter') {
        const projectName = event.target.value.trim();
        if (projectName) {
            projectList.push(project(projectName).getProjectNameAlias())
            loadProjectPanel(projectDomParent, projectList)
            event.target.value = '';
        }
        inputDiv.style.display = 'none';
        newProjectDiv.style.display = 'inline-block';
    }
}

function showToDoInput() {
    newToDoDiv.style.display = 'none';
    inputToDoDiv.style.display = 'inline-block';
    inputToDoDiv.focus();

}


function handleToDoInput(event) {
    if (event.key === 'Enter') {
        const item = event.target.value.trim();
        if (todoItem) {
            // Get project
            let project = getProjectFromDOM()
            // Create new item 
            let newItemObj= todoItem(item)
            //Push to LS
            sendTodoToLS(project, newItemObj)
            // Update display
            event.target.value = '';
        }
        inputToDoDiv.style.display = 'none';
        newToDoDiv.style.display = 'inline-block';
    }

}

function getProjectFromDOM() {
    let project = document.querySelector('.title')
    let projectname = project.textContent
    return projectname
}

function sendTodoToLS(project, item) {
    if (LS.getKeys().includes(project)) {
        // Get data
        let data = LS.getKeyValueJSON(project)
        // Append data
        data[item.getData().title] = item.getData()
        console.log(data)
        // Commit data
        LS.storeDataAtKey(project, JSON.stringify(data))
    } else {
        let data = {}
        // Append data
        data[item.getData().title] = item.getData()
        console.log(data)
        // Commit data
        LS.storeDataAtKey(project, JSON.stringify(data))
    }

    loadTodoBoard(todoDomParent, project)
}