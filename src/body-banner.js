

const bodyLayout = () => {
    const body = document.createElement('section');
    const container = document.querySelector('.container');
    
    body.className = 'body-banner';
    container.appendChild(body);    
}

const body = () => {
    const body = document.querySelector('.body-banner');
    const projectList = document.querySelector('#project-list');

    const createBodyLayout = () => {



    
    
    
    
    
    
    
    
    
    
    
    
        projectList.addEventListener('click',(e)=>{
            if (e.target.tagName.toLowerCase() != 'div'){
                console.log(e.target.parentNode.id)
            }else{
                console.log(e.target.id)
            }
            console.log(projectList.childElementCount);
        
        })    
    }

    createBodyLayout();
}



export default body;
export {bodyLayout};