import { format } from "date-fns";
import Icon1 from './images/body/icons-unticked-box.png'
import Icon2 from './images/body/icons-ticked-box.png'

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

    const selectProject = () => {
        projectList.addEventListener('click',(e)=>{
            for (let i=0;i<bodyContent.childElementCount;i++){
                bodyContent.children[i].style.display = 'none'
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
            const projectName = document.querySelector(`.${divSelect.className}`);
            console.log(titleInputBox.value);
            console.log(detailsInputBox.value);
            console.log(dateInputBox.value);
            console.log(projectName.children[1]);
            console.log(divSelect);

            const task = document.createElement('div');
            task.setAttribute('id',`task-${projectName.children[1].childElementCount+1}`);
            divSelect.children[1].appendChild(task);

            const taskDiv1 = document.createElement('div');
            taskDiv1.setAttribute('class','task-div-1');
            task.appendChild(taskDiv1);

            const taskCheckbox = new Image();
            taskCheckbox.src = Icon1;
            taskCheckbox.setAttribute('class','task-checkbox');
            taskCheckbox.setAttribute('id','unchecked-checkbox');            
            taskCheckbox.style.width = '50px'
            taskCheckbox.style.height = '50px'
            taskDiv1.appendChild(taskCheckbox);

            const taskCheckbox2 = new Image();
            taskCheckbox2.src = Icon2;
            taskCheckbox2.setAttribute('class','task-checkbox');
            taskCheckbox2.setAttribute('id','checked-checkbox');            
            taskCheckbox2.style.width = '50px'
            taskCheckbox2.style.height = '50px'
            taskCheckbox2.style.display = 'none'
            taskDiv1.appendChild(taskCheckbox2);


            const taskDiv2 = document.createElement('div');
            taskDiv2.setAttribute('class','task-div-2')
            task.appendChild(taskDiv2)

            const taskTitle2 = document.createElement('span');
            taskTitle2.setAttribute('class','task-title')
            taskTitle2.innerText = titleInputBox.value;
            taskDiv2.appendChild(taskTitle2);

            const taskDetails2 = document.createElement('span');
            taskDetails2.setAttribute('class','task-details')
            taskDetails2.innerText = detailsInputBox.value;
            taskDiv2.appendChild(taskDetails2);

            //ADD BUTTON OUTRO
            newTaskInput.style.height = '0px';
            newTaskInput.style.opacity = '0';
            newTaskInput.style.transition = '0.5s'
            labelInput.style.display = 'none';
            titleInputBox.value = '';
            detailsInputBox.value = '';
            dateInputBox.value = '';

            //FOR THE TICK BOX
            const tickBox = document.querySelector('.task-checkbox');

            tickBox.addEventListener('click',(e)=>{
                if(taskDiv1.children[0].id === 'unchecked-checkbox'){
                    console.log('tick');
                    taskCheckbox.style.display = 'none';
                    taskCheckbox2.style.display = 'flex';
                }else{
                    console.log('untick');
                    taskCheckbox2.style.display = 'none';
                    taskCheckbox.style.display = 'flex';
                }
            })
    
        })
    }

    selectProject();
    addTask();
}



export default body;
export {bodyLayout, newTaskInputFormat}