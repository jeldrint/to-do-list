

const bodyLayout = () => {
    const body = document.createElement('section');
    const container = document.querySelector('.container');
    
    body.className = 'body-banner';
    container.appendChild(body);    
}

const body = () => {
    const body = document.querySelector('.body-banner');
    const projectList = document.querySelector('#project-list');

    const selectProject = () => {
        let divSelect = '';

        projectList.addEventListener('click',(e)=>{
            for (let i=0;i<body.childElementCount;i++){
                body.children[i].style.display = 'none'
            }

            if (e.target.tagName.toLowerCase() != 'div'){
                divSelect = document.querySelector(`.${e.target.parentNode.id}`);
            }else{
                divSelect = document.querySelector(`.${e.target.id}`);
            }


            divSelect.style.display = 'flex';
            //console.log(projectList.childElementCount);
        
        })    
    }

    selectProject();
}



export default body;
export {bodyLayout};