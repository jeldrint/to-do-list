import Icon1 from './images/side-banner/icons-tasks.png'
import Icon2 from './images/side-banner/icons-today.png'
import Icon3 from './images/side-banner/icons-important.png'
import Icon4 from './images/body/icons-star-filled.png'
import Icon5 from './images/side-banner/icons-add-3.png'
import Icon6 from './images/body/icons-new-task.png'


import addProject from './add-project.js'

import {bodyLayout, newTaskInputFormat} from './body-banner.js'

const sideBanner = () => {
    bodyLayout();
    layout();
    addProject();
}

const layout = () => {
    const side = document.createElement('section');
    const container = document.querySelector('.container');
    const body = document.querySelector('.body-banner');
    
    side.className = 'side-banner';
    container.appendChild(side);
    
    const homeFolder = document.createElement('div');
    const projectFolder = document.createElement('div');
    homeFolder.setAttribute('class','home-folder');
    projectFolder.setAttribute('class','project-folder');
    side.appendChild(homeFolder);
    side.appendChild(projectFolder);

    //THIS IS THE HOME FOLDER
    const homeFolderHeader = document.createElement('div');
    homeFolderHeader.setAttribute('class', 'folder-header')
    homeFolderHeader.innerText = 'Home'
    homeFolder.appendChild(homeFolderHeader);

    const homeFolderContent = document.createElement('div');
    homeFolderContent.setAttribute('class','folder-content')
    homeFolder.appendChild(homeFolderContent)

    const homeFolderAllTasks = document.createElement('div');
    const homeFolderToday = document.createElement('div');
    const homeFolderOngoing = document.createElement('div');
    const homeFolderImportant = document.createElement('div');

    homeFolderAllTasks.setAttribute('class','home-item')
    homeFolderAllTasks.setAttribute('id','all-tasks')
    homeFolderToday.setAttribute('class','home-item')
    homeFolderToday.setAttribute('id','today')
    homeFolderOngoing.setAttribute('class','home-item')
    homeFolderOngoing.setAttribute('id','ongoing')
    homeFolderImportant.setAttribute('class','home-item')
    homeFolderImportant.setAttribute('id','important')

    homeFolderContent.appendChild(homeFolderAllTasks);
    homeFolderContent.appendChild(homeFolderToday);
    homeFolderContent.appendChild(homeFolderOngoing);
    homeFolderContent.appendChild(homeFolderImportant);

    const allTasksImg = new Image();
    allTasksImg.src = Icon1;
    homeFolderAllTasks.appendChild(allTasksImg);
    allTasksImg.style.width = '50px'

    const allTasksText = document.createElement('span');
    allTasksText.innerText = 'All Tasks'
    homeFolderAllTasks.appendChild(allTasksText);

    const todayImg = new Image();
    todayImg.src = Icon2;
    homeFolderToday.appendChild(todayImg);
    todayImg.style.width = '50px'

    const todayText = document.createElement('span');
    todayText.innerText = 'Today'
    homeFolderToday.appendChild(todayText);
    
    const sevenDaysImg = new Image();
    sevenDaysImg.src = Icon3;
    homeFolderOngoing.appendChild(sevenDaysImg);
    sevenDaysImg.style.width = '50px'

    const sevenDaysText = document.createElement('span');
    sevenDaysText.innerText = 'Ongoing'
    homeFolderOngoing.appendChild(sevenDaysText);

    const importantImg = new Image();
    importantImg.src = Icon4;
    homeFolderImportant.appendChild(importantImg);
    importantImg.style.width = '50px'

    const importantText = document.createElement('span');
    importantText.innerText = 'Important'
    homeFolderImportant.appendChild(importantText);
    
    //THIS IS THE PROJECT FOLDER
    const projFolderHeader = document.createElement('div');
    projFolderHeader.setAttribute('class', 'folder-header')
    projFolderHeader.innerText = 'Projects'
    projectFolder.appendChild(projFolderHeader);

    const projFolderContent = document.createElement('div');
    projFolderContent.setAttribute('id','project-folder-content');
    projFolderContent.className = 'folder-content';
    projectFolder.appendChild(projFolderContent)

    const projectList = document.createElement('div');
    projectList.setAttribute('id','project-list');
    projFolderContent.appendChild(projectList);

    const panelDiv = document.createElement('div');
    panelDiv.setAttribute('id','panel-div');
    projFolderContent.appendChild(panelDiv);

    const addProject = document.createElement('div');
    projFolderContent.appendChild(addProject);
    addProject.setAttribute('id','add-project');
    addProject.className = 'home-item'

    const addProjImg = new Image();
    addProjImg.src = Icon5;
    addProject.appendChild(addProjImg);
    addProjImg.style.width = '30px';
    addProjImg.style.filter = 'brightness(0) invert(1)';
    addProjImg.style.opacity = '0.85'
    addProjImg.style.paddingLeft = '10px'

    const addProjText = document.createElement('span');
    addProjText.innerText = "Add Project";
    addProject.appendChild(addProjText);

    //INITAL BODY CONTENTS
    const bodyContent = document.createElement('div');
    bodyContent.setAttribute('class','body-content');
    body.appendChild(bodyContent);

    newTaskInputFormat();

    const newTask = document.createElement('div');
    newTask.setAttribute('class','body-new-task');
    body.appendChild(newTask);

    const newTaskLogo = new Image();
    newTaskLogo.src = Icon6;
    newTaskLogo.style.width = '30px';
    newTaskLogo.style.filter = 'brightness(0) invert(1)';
    newTask.appendChild(newTaskLogo);

    const newTaskText = document.createElement('span');
    newTaskText.innerText = 'new task';
    newTask.appendChild(newTaskText);

    newTask.style.display = 'none';


}

export default sideBanner;