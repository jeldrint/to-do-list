import Icon1 from './images/side-banner/icons-project.png';


const addProject = () =>{
    const projectList = document.querySelector('#project-list');
    const panelDiv = document.querySelector('#panel-div');
    const addProject = document.querySelector('#add-project');
    const bodyBanner = document.querySelector('.body-banner');
    const bodyContent = document.querySelector('.body-content')
    
    const panelAddButton = document.createElement('button');
    const panelCancelButton = document.createElement('button');
    let panelInputBox = "";

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

        panelInputBox = document.createElement('input')
        panelInputBox.setAttribute('class','panel-input-box');
        panelInputBox.type = 'text';
        panelInputBox.placeholder = 'Enter Project Name';
        panelDivUpper.appendChild(panelInputBox);

        //BUTTONS
        panelAddButton.setAttribute('class','panel-add-button');
        panelCancelButton.setAttribute('class','panel-cancel-button');

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
        const newStr = projectNameInput.replace(/\s/g,'-')

        projectItem.className = 'home-item';
        projectItem.setAttribute('id',`${newStr}-${projectList.childElementCount+1}`)
        projectList.appendChild(projectItem);

        panelLogo = new Image();
        panelLogo.src = Icon1;
        panelLogo.style.width = '50px';
        projectItem.appendChild(panelLogo);

        projectName = document.createElement('span');
        projectName.innerText = projectNameInput;
        projectItem.appendChild(projectName);

        //CREATION OF INITIAL BODY DIV
        const bodyDiv = document.createElement('div');
        bodyDiv.setAttribute('class',`${newStr}-${projectList.childElementCount}`);
        bodyContent.appendChild(bodyDiv);
        bodyDiv.style.display = 'flex';
        bodyDiv.style.flexDirection = 'column';
        bodyDiv.style.rowGap = '10px';

        const bodyProjectName = document.createElement('div');
        bodyProjectName.className = 'body-project-name';
        bodyProjectName.innerText = projectNameInput;
        bodyDiv.appendChild(bodyProjectName)

        const tasks = document.createElement('div');
        tasks.setAttribute('class','tasks');
        bodyDiv.appendChild(tasks);

        //HIDING THE INITIAL DISPLAY OF DIVS IN THE BODY SECTION
        bodyDiv.style.display = 'none';


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