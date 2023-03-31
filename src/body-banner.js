import { format } from "date-fns";
import Icon1 from './images/body/icons-unticked-box.png'
import Icon2 from './images/body/icons-ticked-box.png'
import Icon3 from './images/body/icons-star-notfilled.png'
import Icon4 from './images/body/icons-star-filled.png'

const bodyLayout = () => {
    const body = document.createElement('section');
    const container = document.querySelector('.container');
    
    body.className = 'body-banner';
    container.appendChild(body);    
}

const newTaskInputFormat = () =>{
    const body = document.querySelector('.body-banner');
    const newTaskInput = document.createElement('div');
    newTaskInput.setAttribute('class','new-task-input')
    body.appendChild(newTaskInput);

    const labelInput = document.createElement('div');
    labelInput.setAttribute('class','label-input');
    newTaskInput.appendChild(labelInput);

    const taskTitle = document.createElement('label');
    taskTitle.for = 'Task Title';
    taskTitle.innerText = 'Task Title: '
    labelInput.appendChild(taskTitle);

    const taskTitleInput = document.createElement('input')
    taskTitleInput.setAttribute('class','panel-input-box');
    taskTitleInput.setAttribute('id','title-input-box');
    taskTitleInput.placeholder = 'Enter Task Title...';
    taskTitleInput.type = 'text';
    labelInput.appendChild(taskTitleInput);

    const taskDetails = document.createElement('label');
    taskDetails.for = 'Task Details';
    taskDetails.innerText = 'Task Details (optional): '
    labelInput.appendChild(taskDetails);

    const taskDetailsInput = document.createElement('textarea')
    taskDetailsInput.setAttribute('class','panel-input-box');
    taskDetailsInput.setAttribute('id','details-input-box');
    taskDetailsInput.placeholder = 'Enter Task Details...';
    taskDetailsInput.name = 'text';
    taskDetailsInput.rows = '5';
    taskDetailsInput.cols = '5';
    taskDetailsInput.wrap = 'soft';
    taskDetailsInput.style.resize = 'none';
    labelInput.appendChild(taskDetailsInput);

    const taskDate = document.createElement('label');
    taskDate.for = 'Task Date';
    taskDate.innerText = 'Date: '
    labelInput.appendChild(taskDate);

    const taskDateInput = document.createElement('input')
    taskDateInput.setAttribute('class','panel-input-box');
    taskDateInput.setAttribute('id','date-input-box');
    taskDateInput.placeholder = 'MM/DD/YYYY';
    taskDateInput.type = 'date';
    taskDateInput.required;
    labelInput.appendChild(taskDateInput);

    //BUTTONS
    const addButton = document.createElement('button');
    const cancelButton = document.createElement('button');

    addButton.setAttribute('class','panel-add-button');
    cancelButton.setAttribute('class','panel-cancel-button');

    addButton.setAttribute('id','input-add-button');
    cancelButton.setAttribute('id','input-cancel-button');

    const panelButtons = document.createElement('div');
    panelButtons.setAttribute('class','panel-buttons')

    panelButtons.appendChild(addButton);
    panelButtons.appendChild(cancelButton);
    labelInput.appendChild(panelButtons);

    addButton.innerText = 'Add';
    cancelButton.innerText = 'Cancel';
    addButton.style.fontSize = '16px'
    cancelButton.style.fontSize = '16px'

    panelButtons.style.marginTop = '10px'
}

const body = () => {
    const bodyContent = document.querySelector('.body-content');
    const projectList = document.querySelector('#project-list');
    const newTask = document.querySelector('.body-new-task');
    const newTaskInput = document.querySelector('.new-task-input');
    const labelInput = document.querySelector('.label-input');

    const inputAddButton = document.querySelector('#input-add-button');
    const inputCancelButton = document.querySelector('#input-cancel-button');

    const titleInputBox = document.querySelector('#title-input-box');
    const detailsInputBox = document.querySelector('#details-input-box');
    const dateInputBox = document.querySelector('#date-input-box');

    let divSelect = '';

    let taskCounter = 0;

    const selectProject = () => {
        projectList.addEventListener('click',(e)=>{
            for (let i=0;i<bodyContent.childElementCount;i++){
                bodyContent.children[i].style.display = 'none'
                bodyContent.children[i].children[0].style.fontSize = '36px';
            }
            if (e.target.tagName.toLowerCase() != 'div'){
                divSelect = document.querySelector(`.${e.target.parentNode.id}`);
            }else{
                divSelect = document.querySelector(`.${e.target.id}`);
            }
            divSelect.style.display = 'flex';
            newTask.style.display = 'flex';
        })
    }

    const addTask = () => {
        newTask.addEventListener('click',(e)=>{
            newTaskInput.style.height = '275px';
            newTaskInput.style.opacity = '1';
            newTaskInput.style.transition = '0.5s';
            labelInput.style.display = 'flex';
        })

        inputCancelButton.addEventListener('click', ()=>{
            newTaskInput.style.height = '0px';
            newTaskInput.style.opacity = '0';
            newTaskInput.style.transition = '0.5s'
            labelInput.style.display = 'none';
        })

        inputAddButton.addEventListener('click', () =>{
            taskCounter++;

            const task = document.createElement('div');
            task.setAttribute('class',`task-${taskCounter}`);
            divSelect.children[1].appendChild(task);

            const taskDivLeft = document.createElement('div');
            taskDivLeft.setAttribute('class','task-div-left');
            task.appendChild(taskDivLeft);

            const taskDivRight = document.createElement('div');
            taskDivRight.setAttribute('class','task-div-right');
            task.appendChild(taskDivRight);


            //FOR CHECKBOX
            const taskDiv1 = document.createElement('div');
            taskDiv1.setAttribute('class','task-div-1');
            taskDivLeft.appendChild(taskDiv1);

            const taskCheckbox = new Image();
            taskCheckbox.src = Icon1;
            taskCheckbox.setAttribute('class','unchecked-checkbox');
            taskCheckbox.style.width = '50px'
            taskCheckbox.style.height = '50px'
            taskDiv1.appendChild(taskCheckbox);

            const taskCheckbox2 = new Image();
            taskCheckbox2.src = Icon2;
            taskCheckbox2.setAttribute('class','checked-checkbox');
            taskCheckbox2.style.width = '50px'
            taskCheckbox2.style.height = '50px'
            taskCheckbox2.style.display = 'none'
            taskDiv1.appendChild(taskCheckbox2);

            //FOR TASK DETAILS
            const taskDiv2 = document.createElement('div');
            taskDiv2.setAttribute('class','task-div-2')
            taskDivLeft.appendChild(taskDiv2);

            const taskTitle2 = document.createElement('span');
            taskTitle2.setAttribute('class','task-title')
            taskTitle2.innerText = titleInputBox.value;
            taskDiv2.appendChild(taskTitle2);

            const taskDetails2 = document.createElement('span');
            taskDetails2.setAttribute('class','task-details')
            taskDetails2.innerText = detailsInputBox.value;
            taskDiv2.appendChild(taskDetails2);


            //FOR IMPORTANT - STAR and DATE
            const date = document.createElement('span')
            date.setAttribute('id','date')
            if(dateInputBox.value){
                date.innerText = `(${dateInputBox.value})`;
            }else{
                date.innerText = 'no date'
            }
            taskDivRight.appendChild(date);

            const taskDiv3 = document.createElement('div');
            taskDiv3.setAttribute('class','task-div-3')
            taskDivRight.appendChild(taskDiv3);

            const taskImportant = new Image();
            taskImportant.src = Icon3;
            taskImportant.setAttribute('class','star-not-filled');
            taskImportant.style.width = '50px'
            taskImportant.style.height = '50px'
            taskDiv3.appendChild(taskImportant);

            const taskImportant2 = new Image();
            taskImportant2.src = Icon4;
            taskImportant2.setAttribute('class','star-filled');
            taskImportant2.style.width = '50px'
            taskImportant2.style.height = '50px'
            taskImportant2.style.display = 'none'
            taskDiv3.appendChild(taskImportant2);


            //ADD BUTTON OUTRO
            newTaskInput.style.height = '0px';
            newTaskInput.style.opacity = '0';
            newTaskInput.style.transition = '0.5s'
            labelInput.style.display = 'none';
            titleInputBox.value = '';
            detailsInputBox.value = '';
            dateInputBox.value = '';   
            
            //CLONE TASK FOR COMPLETED FOLDER
            let cloneTask = task.cloneNode(true);
            cloneTask.style.display = 'none';

            //hard coded the check mark so i wont repeat check mark from the start
            cloneTask.children[0].children[0].children[0].style.display = 'none';
            cloneTask.children[0].children[0].children[1].style.display = 'flex';

            divSelect.children[2].appendChild(cloneTask);
        })

    }

    const tickTheLogos = () => {
        bodyContent.addEventListener('click',(e)=>{
            const taskClassName = document.getElementsByClassName(e.target.parentNode.parentNode.parentNode.className)

            console.log(taskClassName);

            //FOR CHECKBOX
            if(e.target.className === 'unchecked-checkbox'){
                taskClassName[0].style.display = 'none';
                taskClassName[1].style.display = 'flex';

            }
            if(e.target.className === 'checked-checkbox'){
                taskClassName[1].style.display = 'none';
                taskClassName[0].style.display = 'flex';
            }

            //FOR STAR
            if(e.target.className === 'star-not-filled'){
                taskClassName[0].children[1].children[1].children[0].style.display = 'none'
                taskClassName[0].children[1].children[1].children[1].style.display = 'flex'

                taskClassName[1].children[1].children[1].children[0].style.display = 'none'
                taskClassName[1].children[1].children[1].children[1].style.display = 'flex'
            }
            if(e.target.className === 'star-filled'){
                taskClassName[0].children[1].children[1].children[1].style.display = 'none'
                taskClassName[0].children[1].children[1].children[0].style.display = 'flex'

                taskClassName[1].children[1].children[1].children[1].style.display = 'none'
                taskClassName[1].children[1].children[1].children[0].style.display = 'flex'
            }

        })    
    }

    selectProject();
    addTask();
    tickTheLogos();
}



export default body;
export {bodyLayout, newTaskInputFormat}