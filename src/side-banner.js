import Icon1 from './images/side-banner/icons-tasks.png'
import Icon2 from './images/side-banner/icons-today.png'
import Icon3 from './images/side-banner/icons-7days.png'
import Icon4 from './images/side-banner/icons-important.png'
import Icon5 from './images/side-banner/icons-add.png'


const layout = () => {
    const side = document.createElement('section');
    const container = document.querySelector('.container');
    
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
    const homeFolderSevenDays = document.createElement('div');
    const homeFolderImportant = document.createElement('div');

    homeFolderAllTasks.setAttribute('class','home-item')
    homeFolderToday.setAttribute('class','home-item')
    homeFolderSevenDays.setAttribute('class','home-item')
    homeFolderImportant.setAttribute('class','home-item')

    homeFolderContent.appendChild(homeFolderAllTasks);
    homeFolderContent.appendChild(homeFolderToday);
    homeFolderContent.appendChild(homeFolderSevenDays);
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
    homeFolderSevenDays.appendChild(sevenDaysImg);
    sevenDaysImg.style.width = '50px'

    const sevenDaysText = document.createElement('span');
    sevenDaysText.innerText = 'Next 7 Days'
    homeFolderSevenDays.appendChild(sevenDaysText);

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
    projFolderContent.setAttribute('class','folder-content')
    projectFolder.appendChild(projFolderContent)

    const addProject = document.createElement('div');


}

layout();