import {project} from './todo'
import { manageLocalStorage } from './storage';

// function loadProject(domParent, projectName, todosList) {
//     backButton = document.createElement("button")
//     backButton.classList.add("to-project-list")

//     addButton = document.createElement("button")
//     addButton.classList.add("add-new-todo")

//     domParent.appendChild(backButton)
//     domParent.appendChild(addButton)
// }
const LS = manageLocalStorage()
const todoDomParent = document.querySelector('.main-content')


function loadProjectPanel(domParent, projectList) {
    domParent.textContent = '';
    for (let i=0; i<projectList.length; i++) {
        const project = projectList[projectList.length-i-1];
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("selectable-project");
        // projectDiv.id = project.getProjectNameAlias();
        // projectDiv.textContent = project.projectName;
        projectDiv.id = project;
        projectDiv.textContent = project;
        projectDiv.addEventListener('click', handleProjectTasksLoad);
        domParent.appendChild(projectDiv);
    }
}

function loadTodoBoard(domParent, projectNameAlias) {
    let todoObject = LS.getKeyValueJSON(projectNameAlias);
    let todoList = []
    for (const key in todoObject) {
        todoList.push(todoObject[key])
    }
    if (todoObject == null) {
        todoList = []
    }
    createProjectTitleSection(domParent, projectNameAlias)

    createInfoDisplay(domParent, todoList.length)

    createTodoSection(domParent, todoList, projectNameAlias)

}

function createProjectTitleSection(domParent, projectNameAlias) {
    domParent.textContent = ''

    const projectTitleDiv = document.createElement("div")
    projectTitleDiv.id = 'project-title-section'

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title")
    titleDiv.textContent = projectNameAlias;


    const buttonDiv = document.createElement("div")
    const editButton = addButton('edit')
    const completedButton = addButton('completed')
    const deleteButton = addButton('delete')

    buttonDiv.appendChild(editButton)
    buttonDiv.appendChild(completedButton)
    buttonDiv.appendChild(deleteButton)


    projectTitleDiv.appendChild(titleDiv)
    projectTitleDiv.appendChild(buttonDiv)

    domParent.appendChild(projectTitleDiv)
}

function createInfoDisplay(domParent, numberTodos) {
    const taskCount = document.createElement("div")
    taskCount.classList.add("details")
    taskCount.textContent= "# To Do's: " + String(numberTodos)

    domParent.appendChild(taskCount)
}

function createNewToDo(domParent) {
    const newDiv = document.createElement("div")
    newDiv.id = "constant-new"

    const createTodoDiv = document.createElement("div")
    createTodoDiv.id = "new-to-do"
    createTodoDiv.textContent = "Create New To Do.."

    const hiddenInputDiv = document.createElement("input")
    hiddenInputDiv.type="text" 
    hiddenInputDiv.id="todo-item-input" 
    hiddenInputDiv.placeholder="Enter to do item" 
    hiddenInputDiv.style.display = 'none'

    newDiv.appendChild(createTodoDiv)
    newDiv.appendChild(hiddenInputDiv)

    domParent.append(newDiv)

}

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function createTodoSection(domParent, todoList, projectNameAlias) {
    const todoListDiv = document.createElement("div")
    todoListDiv.id = "todo-list"

    let itemDivs = []
    
    if (todoList.length !== 0) {
        for (let i=0; i<todoList.length; i++) {
            let uniqueID = makeid(3)
            // create new div with list item & buttons
            let itemDiv = document.createElement("div")
            itemDiv.classList.add("item")
            itemDiv.classList.add(projectNameAlias+'-'+uniqueID )

            let itemTitleDiv = document.createElement("div")
            itemTitleDiv.classList.add("item-title")
            itemTitleDiv.textContent = todoList[i].title

            let buttonDiv = document.createElement("div")
            const editButton = addButton('edit')
            const completedButton = addButton('completed')
            const deleteButton = addButton('delete')
            deleteButton.id = projectNameAlias+'-'+uniqueID 

            buttonDiv.appendChild(editButton)
            buttonDiv.appendChild(completedButton)
            buttonDiv.appendChild(deleteButton)

            itemDiv.appendChild(itemTitleDiv)
            itemDiv.appendChild(buttonDiv)

            itemDivs.push(itemDiv)
        }

    } 

    for (let i=0; i < itemDivs.length; i++) {
        todoListDiv.appendChild(itemDivs[i])
    }

    domParent.appendChild(todoListDiv)

}

function addButton(type) {
    const button = document.createElement("button")
    button.classList.add(type)
    button.textContent = type
    button.addEventListener('click', processButton)
    return button
}

function processButton(event) {
    const expr = event.target.classList[0];
    const id = event.target.id;
    console.log(id)
    const nodes = document.getElementsByClassName(id)
    console.log(nodes)
    switch (expr) {
        case 'delete':
            for (let i = 0; i< nodes.length; i++) {
                let node = nodes[i]
                if (node.parentNode) {
                    node.parentNode.removeChild(node)
                }
            }
            break;

    }

}

function handleProjectTasksLoad(e) {
    loadTodoBoard(todoDomParent, e.target.id)  
}


export {loadProjectPanel, loadTodoBoard, createNewToDo}