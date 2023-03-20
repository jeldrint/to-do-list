import { add } from 'date-fns';
import Icon1 from './images/side-banner/icons-project.png';

const addProject = () =>{
    const projectList = document.querySelector('#project-list');
    const projectListContainer = document.querySelector('#project-folder-content');
    const addProject = document.querySelector('#add-project');
    
    const addProjectPanel = () => {
        const panelLogo = new Image();
        panelLogo.src = Icon1;
        panelLogo.style.width = '50px'
        projectList.appendChild(panelLogo);

        const panelDiv = document.createElement('div');
        projectList.appendChild(panelDiv);

        const panelInputBox = document.createElement('input');
        panelInputBox.type = 'text';
        panelInputBox.placeholder = 'Enter Project Name';
        panelInputBox.style.padding = '5px';
        panelDiv.className = 'panel-div'
        panelDiv.appendChild(panelInputBox);


        //BUTTONS
        const panelAddButton = document.createElement('button');
        panelAddButton.setAttribute('id','panel-add-button');
        panelAddButton.className = 'panel-buttons'

        const panelCancelButton = document.createElement('button');
        panelCancelButton.setAttribute('id','panel-cancel-button');
        panelAddButton.className = 'panel-buttons'

        const panelButtons = document.createElement('div');

        panelButtons.appendChild(panelAddButton);
        panelButtons.appendChild(panelCancelButton);
        panelDiv.appendChild(panelButtons);

        panelAddButton.innerText = 'Add';
        panelCancelButton.innerText = 'Cancel';

    }

    addProject.addEventListener('click', () =>{
        addProjectPanel();
    })
}

export default addProject;