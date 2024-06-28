import Checkmarks from './checkmarks.png'


const todoDomParent = document.querySelector('.main-content')

const rootStyles = getComputedStyle(document.documentElement);
const greenColor = rootStyles.getPropertyValue('--green');


function loadProjectPanel(domParent, projectList) {
    domParent.textContent = '';
    for (let i=0; i<projectList.length; i++) {
        const project = projectList[projectList.length-i-1];
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("selectable-project");
        projectDiv.id = project;
        const textDiv = document.createElement("div");
        textDiv.textContent = project;
        const completedImage = document.createElement("img");
        completedImage.src = Checkmarks;
        completedImage.style.width = '30px'
        completedImage.style.display = 'none'
        completedImage.classList.add("completed-icon")
        projectDiv.appendChild(textDiv)
        projectDiv.appendChild(completedImage)
        domParent.appendChild(projectDiv);
    }
}

function loadTaskBoard(domParent, project, tasks) {
    domParent.textContent = '';

    let taskList = []
    for (const key in tasks) {
        taskList.push(tasks[key])
    }
    if (tasks == null) {
        taskList = []
    }

    createTaskSection(domParent, taskList, project)

}

function loadProjectHeader(domParent, project, tasks) {
    createProjectTitleSection(domParent, project)
    createInfoDisplay(domParent, Object.keys(tasks).length)
}

function createProjectTitleSection(domParent, project) {
    domParent.textContent = ''

    const projectTitleDiv = document.createElement("div")
    projectTitleDiv.id = 'project-title-section'

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title")
    const nameDiv = document.createElement("div");
    nameDiv.classList.add("name")
    nameDiv.textContent = project;
    const completedImage = document.createElement("img");
    completedImage.src = Checkmarks;
    completedImage.style.width = '40px'
    completedImage.style.display = 'none'
    completedImage.classList.add("completed-icon")
    titleDiv.appendChild(nameDiv)
    titleDiv.appendChild(completedImage)


    const buttonDiv = document.createElement("div")
    buttonDiv.classList.add("button-panel")
    const editButton = addButton('edit', 'edit-project')
    // const completedButton = addButton('completed', 'completed-project')
    const deleteButton = addButton('delete', 'delete-project')

    buttonDiv.appendChild(editButton)
    // buttonDiv.appendChild(completedButton)
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

function createTaskSection(domParent, taskList, project) {

    let itemDivs = []
    
    if (taskList.length !== 0) {
        for (let i=0; i<taskList.length; i++) {
            const task = taskList[i];
            let itemDiv = document.createElement("div")
            itemDiv.classList.add("item")
            itemDiv.classList.add(task.getId())

            let itemTitleDiv = document.createElement("div")
            itemTitleDiv.classList.add("item-title")
            itemTitleDiv.textContent = task.getTitle();
            itemTitleDiv.id = task.getId()

            let buttonDiv = document.createElement("div")
            buttonDiv.classList.add("button-panel")
            const editButton = addButton('edit', 'edit-item')
            let completedButton = addButton('not done', 'completed-item')
            if (task.getData().isCompleted == true) {
                completedButton = addButton('done', 'completed-item')
                completedButton.style.backgroundColor = greenColor
            }
            const deleteButton = addButton('delete', 'delete-item')

            buttonDiv.appendChild(editButton)
            buttonDiv.appendChild(completedButton)
            buttonDiv.appendChild(deleteButton)

            itemDiv.appendChild(itemTitleDiv)
            itemDiv.appendChild(buttonDiv)

            itemDivs.push(itemDiv)
        }
    } 

    for (let i=0; i < itemDivs.length; i++) {
        domParent.appendChild(itemDivs[i])
    }
}

function addButton(type, className) {
    const button = document.createElement("button");
    button.classList.add(className);
    button.textContent = type;
    return button
}


export {loadProjectPanel, loadTaskBoard, loadProjectHeader, createNewToDo}