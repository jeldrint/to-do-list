import Icon1 from './images/side-banner/icons-project.png';

const addProject = () =>{
    const projectList = document.querySelector('#project-list')
    const panelDiv = document.querySelector('#panel-div');
    const addProject = document.querySelector('#add-project');
    
    const panelAddButton = document.createElement('button');
    const panelCancelButton = document.createElement('button');
    const panelInputBox = document.createElement('input');

    let panelDivUpper = "";
    let panelLogo = "";
    let projectName = "";


    const addProjectPanel = () => {
        panelDivUpper = document.createElement('div');
        panelDivUpper.className = 'panel-div-upper';
        panelDiv.appendChild(panelDivUpper);

        panelLogo = new Image();
        panelLogo.src = Icon1;
        panelLogo.style.width = '50px';
        panelDivUpper.appendChild(panelLogo);

        panelInputBox.setAttribute('class','panel-input-box');
        panelInputBox.type = 'text';
        panelInputBox.placeholder = 'Enter Project Name';
        panelDivUpper.appendChild(panelInputBox);


        //BUTTONS
        panelAddButton.setAttribute('id','panel-add-button');
        panelCancelButton.setAttribute('id','panel-cancel-button');

        const panelButtons = document.createElement('div');
        panelButtons.setAttribute('class','panel-buttons')

        panelButtons.appendChild(panelAddButton);
        panelButtons.appendChild(panelCancelButton);
        panelDiv.appendChild(panelButtons);

        panelAddButton.innerText = 'Add';
        panelCancelButton.innerText = 'Cancel';

    }

    const deleteTempPanel = () => {
        while(panelDiv.hasChildNodes()){
            panelDiv.removeChild(panelDiv.firstChild);
        }
    }

    const createProject = () =>{
        const projectNameInput = panelInputBox.value;
        const projectItem = document.createElement('div');
        projectItem.className = 'home-item';
        projectList.appendChild(projectItem);

        panelLogo = new Image();
        panelLogo.src = Icon1;
        panelLogo.style.width = '50px';
        projectItem.appendChild(panelLogo);

        projectName = document.createElement('span');
        projectName.innerText = projectNameInput;
        projectItem.appendChild(projectName);
    }

    addProject.addEventListener('click', () =>{
        addProjectPanel();
    })

    panelAddButton.addEventListener('click', ()=>{
        deleteTempPanel();
        createProject();
    })

    panelCancelButton.addEventListener('click', ()=>{
        deleteTempPanel();
    })

}

export default addProject;