
const taskGrouping = () => {
    const allTasks = document.querySelector('#all-tasks');
    const today = document.querySelector('#today');
    const ongoing = document.querySelector('#ongoing');
    const important = document.querySelector('#important');

    const bodyContent = document.querySelector('.body-content');
    const newTask = document.querySelector('.body-new-task');
    const homeFolderContent = document.querySelector('.folder-content');

    let divSelect = '';

    const taskCheckbox = document.getElementsByClassName('unchecked-checkbox');
    
    allTasks.addEventListener('click',()=>{
        for (let i = 0; i<bodyContent.childElementCount; i++){
            bodyContent.children[i].style.display = 'flex';
            bodyContent.children[i].children[0].style.fontSize = '30px';
        }
        newTask.style.display = 'none';
    })

    //THIS ONE IS TO BE CONTINUED
/*     ongoing.addEventListener('click',(e)=>{
        for (let i = 0; i<bodyContent.childElementCount; i++){
            bodyContent.children[i].style.display = 'flex';
            bodyContent.children[i].children[0].style.fontSize = '30px';
        }

        for(let i =0; i< taskCheckbox.length; i++){
            if(taskCheckbox[i].style.display === 'none'){
                taskCheckbox[i].parentElement.parentElement.parentElement.style.display = 'none';
            }
        }

        newTask.style.display = 'none';
        

    }) */
}

export default taskGrouping;